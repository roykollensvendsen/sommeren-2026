# Sommerferie 2026 — Familie Svendsen

Tre alternative reiseplaner for 2-ukers bilferie i Norge (og evt. Sverige) i uke 31–32.

## Slik åpner du presentasjonene

**Dobbeltklikk på `index.html`** — den åpner seg i nettleseren og lenker videre til de tre alternativene.

Eller åpne direkte:
- `alternativ-a-hardangerfjord-base.html` — avslappet, ~29 000 kr
- `alternativ-b-vestlandsrundtur.html` — klassisk, ~37 000 kr
- `alternativ-c-sverige-norge-miks.html` — Liseberg + ALW + Norge, ~38 500 kr

## Navigering i slidene

| Tast | Handling |
|------|----------|
| ← → eller mellomrom | Bla mellom slides |
| O | Oversikts-grid (alle slides) |
| F | Fullskjerm |
| S | Taler-modus (med notater) |
| Esc | Lukk overlay |

På mobil/nettbrett: sveip venstre/høyre.

## Interaktivt kart

Andre slide i hvert deck er et interaktivt Leaflet-kart over hele ruten:
- **Klikk på markørene** → popup med dag-info (kjøretid, aktivitet, overnatting)
- **Klikk i kartet** → aktiverer scroll-zoom (sikkerhet mot tilfeldig zoom)
- **Markørene er nummerert** etter dag

## Skriv ut til PDF

For å lage PDF for utskrift eller deling:
1. Åpne presentasjonen i Chrome/Edge
2. Legg `?print-pdf` til URL-en, f.eks. `alternativ-a-hardangerfjord-base.html?print-pdf`
3. Trykk Ctrl+P → lagre som PDF
4. (Mer info: https://revealjs.com/pdf-export/)

## Filstruktur

```
sommeren-2026/
├── index.html                              # Landingsside med sammenligning
├── alternativ-a-hardangerfjord-base.html   # Plan A
├── alternativ-b-vestlandsrundtur.html      # Plan B
├── alternativ-c-sverige-norge-miks.html    # Plan C
├── README.md                               # Denne filen
└── assets/
    ├── style.css                           # Felles styling
    ├── routes.js                           # Dag-for-dag rute-data
    └── map.js                              # Leaflet kart-helper
```

## Endringer / videreutvikling

- **Endre rute-data:** Rediger `assets/routes.js` — alle kart oppdaterer seg automatisk.
- **Bytte bilder:** Søk på `DAY_IMAGES_X` i hver HTML — rediger URL-ene.
- **Tilpasse styling:** `assets/style.css`.

## Avhengigheter (alle CDN-hostet, ingen lokal installasjon nødvendig)

- [Reveal.js 5.1.0](https://revealjs.com/) — slide-rammeverk
- [Leaflet 1.9.4](https://leafletjs.com/) — interaktive kart
- [OpenStreetMap](https://openstreetmap.org) — karttiler

Bilder hentes fra Wikipedia Commons (åpne lisenser).
