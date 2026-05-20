// Rute-data for de tre alternativene
// Hver dag: navn, lat/lng, beskrivelse, overnatting

const ROUTES = {
  A: {
    name: "Alternativ A: Hardangerfjord-base",
    color: "#2d6a4f",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Evje", lat: 58.5872, lng: 7.8214, drive: "1t 30m", activity: "Mineralparken Evje — geode-knusing, vannlek", lodging: "Evje camping" },
      { day: 2, date: "tir 28/7", place: "Evje → Kristiansand", lat: 58.1399, lng: 8.0034, drive: "1t", activity: "Dyreparken heldag", lodging: "Kristiansand camping" },
      { day: 3, date: "ons 29/7", place: "Kristiansand → Sandnes", lat: 58.8521, lng: 5.7370, drive: "3t 30m", activity: "Vitenfabrikken Sandnes (tech!) + strand", lodging: "Sandnes camping" },
      { day: 4, date: "tor 30/7", place: "Sandnes → Røldal", lat: 59.8285, lng: 6.8202, drive: "3t", activity: "Kjøretur via Suldal, lett tur ved fjellvann", lodging: "Røldal camping/hytte" },
      { day: 5, date: "fre 31/7", place: "Røldal → Lofthus", lat: 60.3289, lng: 6.6603, drive: "1t 30m", activity: "Base-camp Hardangerfjord — frukthager + bading", lodging: "Lofthus Camping (3 netter)" },
      { day: 6, date: "lør 1/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Steinsdalsfossen + Trolltunga utsiktspunkt fra bil", lodging: "Lofthus" },
      { day: 7, date: "søn 2/8", place: "Hardanger", lat: 60.0700, lng: 6.5460, drive: "0-1t", activity: "Buarbreen kort tur + bading + frukthager", lodging: "Lofthus" },
      { day: 8, date: "man 3/8", place: "Lofthus → Flåm", lat: 60.8628, lng: 7.1136, drive: "3t", activity: "Flåmsbana — verdens vakreste togreise", lodging: "Flåm Camping" },
      { day: 9, date: "tir 4/8", place: "Flåm → Geilo", lat: 60.5358, lng: 8.2069, drive: "2t 30m", activity: "Stegastein utsikt + Hardangervidda kjøretur", lodging: "Geilo camping/hytte" },
      { day: 10, date: "ons 5/8", place: "Geilo → Rjukan", lat: 59.8769, lng: 8.5933, drive: "2t 30m", activity: "Krossobanen + Gaustabanen (verdens lengste innendørs)", lodging: "Rjukan camping" },
      { day: 11, date: "tor 6/8", place: "Rjukan → Bø", lat: 59.4128, lng: 9.0653, drive: "2t", activity: "Bø Sommarland heldag — vannpark", lodging: "Bø camping" },
      { day: 12, date: "fre 7/8", place: "Bø → Telemark", lat: 59.4128, lng: 9.0653, drive: "1t", activity: "Telemarkskanalen kort båttur", lodging: "Lokalt" },
      { day: 13, date: "lør 8/8", place: "Telemark → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "2t", activity: "Hjem — restdag", lodging: "Hjem" },
      { day: 14, date: "søn 9/8", place: "Hjem", lat: 58.6225, lng: 8.9319, drive: "0", activity: "Hvile og ompakking", lodging: "Hjem" }
    ]
  },

  B: {
    name: "Alternativ B: Klassisk Vestlandsrundtur",
    color: "#1e3a5f",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Kristiansand", lat: 58.1399, lng: 8.0034, drive: "1t", activity: "Dyreparken + kveldsbading", lodging: "Kristiansand camping" },
      { day: 2, date: "tir 28/7", place: "Kristiansand → Flekkefjord", lat: 58.2960, lng: 6.6603, drive: "1t 30m", activity: "Brufjellhulene (lett tur) + strender", lodging: "Flekkefjord camping" },
      { day: 3, date: "ons 29/7", place: "Flekkefjord → Stavanger", lat: 58.9700, lng: 5.7331, drive: "2t 30m", activity: "Gamle Stavanger + Norsk Oljemuseum", lodging: "Stavanger camping" },
      { day: 4, date: "tor 30/7", place: "Stavanger / Lysefjord", lat: 58.9863, lng: 6.1873, drive: "2t totalt", activity: "Preikestolen (m/8-åring) ELLER Lysefjord-cruise (m/5-åring)", lodging: "Stavanger" },
      { day: 5, date: "fre 31/7", place: "Stavanger → Bergen", lat: 60.3913, lng: 5.3221, drive: "5-6t (deler)", activity: "Lang dag — pause i Røldal", lodging: "Bergen camping (Lone)" },
      { day: 6, date: "lør 1/8", place: "Bergen", lat: 60.3913, lng: 5.3221, drive: "0", activity: "Fløibanen + Akvariet + Bryggen + VilVite (tech!)", lodging: "Bergen" },
      { day: 7, date: "søn 2/8", place: "Bergen → Flåm", lat: 60.8628, lng: 7.1136, drive: "2t 30m", activity: "Via Voss, kort dag", lodging: "Flåm Camping" },
      { day: 8, date: "man 3/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Flåmsbana + Nærøyfjord-cruise", lodging: "Flåm" },
      { day: 9, date: "tir 4/8", place: "Flåm → Geiranger", lat: 62.1018, lng: 7.2059, drive: "3t + ferge", activity: "Via Lærdalstunnelen + ferge — kort dag", lodging: "Geiranger camping" },
      { day: 10, date: "ons 5/8", place: "Geiranger", lat: 62.1018, lng: 7.2059, drive: "0", activity: "Geirangerfjord-cruise + Dalsnibba", lodging: "Geiranger" },
      { day: 11, date: "tor 6/8", place: "Geiranger → Lillehammer", lat: 61.1153, lng: 10.4663, drive: "5t (deler)", activity: "Via Trollstigen + Romsdalen — magisk natur", lodging: "Lillehammer camping" },
      { day: 12, date: "fre 7/8", place: "Lillehammer", lat: 61.2580, lng: 10.4118, drive: "0", activity: "Hunderfossen Familiepark heldag", lodging: "Lillehammer" },
      { day: 13, date: "lør 8/8", place: "Lillehammer → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "4t", activity: "Hjemtur via Oslo-omkjøring", lodging: "Hjem" },
      { day: 14, date: "søn 9/8", place: "Hjem", lat: 58.6225, lng: 8.9319, drive: "0", activity: "Hvile og ompakking", lodging: "Hjem" }
    ]
  },

  C: {
    name: "Alternativ C: Sverige-twist",
    color: "#003d99",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Gøteborg", lat: 57.7089, lng: 11.9746, drive: "4t (deler)", activity: "Via Svinesund (gratis!) — kveldsstrand", lodging: "Gøteborg camping" },
      { day: 2, date: "tir 28/7", place: "Gøteborg / Liseberg", lat: 57.6957, lng: 11.9928, drive: "0", activity: "Liseberg heldag — Kaninlandet for 5-åringen", lodging: "Gøteborg" },
      { day: 3, date: "ons 29/7", place: "Gøteborg → Vimmerby", lat: 57.6685, lng: 15.8552, drive: "3t 30m", activity: "Lang kjøretur til Astrid-land", lodging: "Vimmerby Camping" },
      { day: 4, date: "tor 30/7", place: "Astrid Lindgrens Värld", lat: 57.6685, lng: 15.8552, drive: "0", activity: "Pippi, Emil og Brødrene Løvehjerte — magisk for 5-8 år", lodging: "Vimmerby" },
      { day: 5, date: "fre 31/7", place: "Vimmerby → Jönköping", lat: 57.7826, lng: 14.1618, drive: "2t 30m", activity: "Vättern-sjøen — bading + naturlek", lodging: "Jönköping camping" },
      { day: 6, date: "lør 1/8", place: "Jönköping → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "4t", activity: "Hjem-stopp — ompakking + hvile", lodging: "Hjem" },
      { day: 7, date: "søn 2/8", place: "Tvedestrand → Kristiansand", lat: 58.1399, lng: 8.0034, drive: "1t", activity: "Dyreparken", lodging: "Kristiansand camping" },
      { day: 8, date: "man 3/8", place: "Kristiansand → Sandnes", lat: 58.8521, lng: 5.7370, drive: "3t 30m", activity: "Vitenfabrikken (tech!) + strand", lodging: "Sandnes camping" },
      { day: 9, date: "tir 4/8", place: "Sandnes → Røldal", lat: 59.8285, lng: 6.8202, drive: "3t", activity: "Kjøretur via Suldal, fjellvann", lodging: "Røldal camping" },
      { day: 10, date: "ons 5/8", place: "Røldal → Lofthus", lat: 60.3289, lng: 6.6603, drive: "1t 30m", activity: "Hardangerfjord-base", lodging: "Lofthus (2 netter)" },
      { day: 11, date: "tor 6/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Steinsdalsfossen + Buarbreen + frukthager", lodging: "Lofthus" },
      { day: 12, date: "fre 7/8", place: "Hardanger → Flåm", lat: 60.8628, lng: 7.1136, drive: "2t", activity: "Flåmsbana — verdens vakreste togreise", lodging: "Flåm Camping" },
      { day: 13, date: "lør 8/8", place: "Flåm → Bø", lat: 59.4128, lng: 9.0653, drive: "4t (deler)", activity: "Lang dag — kveld Bø", lodging: "Bø camping" },
      { day: 14, date: "søn 9/8", place: "Bø → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "1t 30m", activity: "Hjemtur", lodging: "Hjem" }
    ]
  }
};
