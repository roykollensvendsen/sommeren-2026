// Leaflet kart-helper. Krever at routes.js og Leaflet er lastet.

function renderRouteMap(elementId, routeKey) {
  const route = ROUTES[routeKey];
  if (!route) {
    console.error("Ukjent rute:", routeKey);
    return;
  }

  const map = L.map(elementId, {
    scrollWheelZoom: false,
    zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap-bidragsytere'
  }).addTo(map);

  const latLngs = [];
  const seen = new Set();

  route.days.forEach((d, i) => {
    const key = `${d.lat.toFixed(3)},${d.lng.toFixed(3)}`;
    if (seen.has(key)) {
      // Hopper over markør for samme sted, men holder polylinjen
    } else {
      seen.add(key);
      const icon = L.divIcon({
        className: 'day-marker',
        html: `<div style="background:${route.color};color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:bold;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.4);font-size:13px">${d.day}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      L.marker([d.lat, d.lng], { icon }).addTo(map)
        .bindPopup(`<strong>Dag ${d.day} — ${d.date}</strong><br>${d.place}<br><em>${d.activity}</em><br>🛏️ ${d.lodging}`);
    }
    latLngs.push([d.lat, d.lng]);
  });

  // Tegn polylinje gjennom alle dagene
  L.polyline(latLngs, {
    color: route.color,
    weight: 3,
    opacity: 0.7,
    dashArray: '8, 6'
  }).addTo(map);

  // Tilpass kart til alle punkter
  map.fitBounds(L.latLngBounds(latLngs).pad(0.1));

  // Aktiver scroll-wheel ved klikk
  map.on('click', () => map.scrollWheelZoom.enable());
  map.on('mouseout', () => map.scrollWheelZoom.disable());
}
