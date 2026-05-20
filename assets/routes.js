// Rute-data for de tre alternativene
// Roligere tempo: hvile-dag på samme overnatting etter hver store aktivitet

const ROUTES = {
  A: {
    name: "Alternativ A: Hardangerfjord-base",
    color: "#2d6a4f",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Kristiansand", lat: 58.1399, lng: 8.0034, drive: "1t", activity: "Lett ankomst, strand og bading", lodging: "Kristiansand camping (3 netter)" },
      { day: 2, date: "tir 28/7", place: "Kristiansand", lat: 58.1399, lng: 8.0034, drive: "0", activity: "Dyreparken heldag — pingviner, sjørøverhuset, kjempeløvene", lodging: "Kristiansand" },
      { day: 3, date: "ons 29/7", place: "Kristiansand", lat: 58.1399, lng: 8.0034, drive: "0", activity: "Hviledag: strand, leketur i Ravnedalen, evt halv-dag Dyreparken igjen", lodging: "Kristiansand" },
      { day: 4, date: "tor 30/7", place: "Kristiansand → Sandnes", lat: 58.8521, lng: 5.7370, drive: "3t 30m", activity: "Kjøredag med pauser, ankomst sen ettermiddag", lodging: "Sandnes camping (2 netter)" },
      { day: 5, date: "fre 31/7", place: "Sandnes", lat: 58.8521, lng: 5.7370, drive: "0", activity: "Vitenfabrikken (tech!) + strand og lekeplass i Sandnes", lodging: "Sandnes" },
      { day: 6, date: "lør 1/8", place: "Sandnes → Lofthus", lat: 60.3289, lng: 6.6603, drive: "4t (m/pause)", activity: "Kjøredag via Suldal og Røldal Stavkirke (kort stopp). Lang men vakker rute.", lodging: "Lofthus Camping (4 netter)" },
      { day: 7, date: "søn 2/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Steinsdalsfossen (gå BAK fossen!) + frukthager", lodging: "Lofthus" },
      { day: 8, date: "man 3/8", place: "Hardanger", lat: 60.0700, lng: 6.5460, drive: "0", activity: "Buarbreen kort familietur (~1t hver vei)", lodging: "Lofthus" },
      { day: 9, date: "tir 4/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Hviledag: bading, sykkel, fjordbåt-tur, eple-cider-smaking for de voksne", lodging: "Lofthus" },
      { day: 10, date: "ons 5/8", place: "Lofthus → Flåm", lat: 60.8628, lng: 7.1136, drive: "3t", activity: "Kjøredag via Stegastein utsiktspunkt — ankomst Flåm", lodging: "Flåm Camping (3 netter)" },
      { day: 11, date: "tor 6/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Flåmsbana heldag — verdens vakreste togreise (Myrdal og tilbake)", lodging: "Flåm" },
      { day: 12, date: "fre 7/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Hviledag: lett tur til Otternes, kort RIB-tur på Nærøyfjord, vikingmuseum", lodging: "Flåm" },
      { day: 13, date: "lør 8/8", place: "Flåm → Telemark (Bø)", lat: 59.4128, lng: 9.0653, drive: "5t (m/pauser)", activity: "Lang kjøredag — splitt med stopp og lunsj. Innkomst Bø sen ettermiddag.", lodging: "Bø camping" },
      { day: 14, date: "søn 9/8", place: "Bø → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "2t", activity: "Hjem — kort kjøretur. Hvile.", lodging: "Hjem" }
    ]
  },

  B: {
    name: "Alternativ B: Klassisk Vestlandsrundtur",
    color: "#1e3a5f",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Kristiansand", lat: 58.1399, lng: 8.0034, drive: "1t", activity: "Innkomst + strand og bading", lodging: "Kristiansand camping (3 netter)" },
      { day: 2, date: "tir 28/7", place: "Kristiansand", lat: 58.1399, lng: 8.0034, drive: "0", activity: "Dyreparken heldag", lodging: "Kristiansand" },
      { day: 3, date: "ons 29/7", place: "Kristiansand", lat: 58.1399, lng: 8.0034, drive: "0", activity: "Hviledag: strand, Ravnedalen, evt halv-dag i parken", lodging: "Kristiansand" },
      { day: 4, date: "tor 30/7", place: "Kristiansand → Stavanger", lat: 58.9700, lng: 5.7331, drive: "3t 30m", activity: "Kjøredag via Flekkefjord — Gamle Stavanger kveld", lodging: "Stavanger area camping (3 netter)" },
      { day: 5, date: "fre 31/7", place: "Stavanger / Lysefjord", lat: 58.9863, lng: 6.1873, drive: "2t totalt", activity: "Lysefjord-cruise (familievennlig — ser Preikestolen nedenfra) ELLER for 8-åringen: Preikestolen-tur m/én forelder", lodging: "Stavanger" },
      { day: 6, date: "lør 1/8", place: "Stavanger", lat: 58.9700, lng: 5.7331, drive: "0", activity: "Hviledag: Norsk Oljemuseum (tech-bonus!), Gamle Stavanger, strand", lodging: "Stavanger" },
      { day: 7, date: "søn 2/8", place: "Stavanger → Bergen", lat: 60.3913, lng: 5.3221, drive: "6t (m/pauser)", activity: "Lang kjøredag — pause i Røldal (lunsj + lek 1t). Ankomst Bergen kveld.", lodging: "Bergen camping (Lone, 3 netter)" },
      { day: 8, date: "man 3/8", place: "Bergen", lat: 60.3913, lng: 5.3221, drive: "0", activity: "Bergen by: Fløibanen, Bryggen, Akvariet (en heldag for små barn)", lodging: "Bergen" },
      { day: 9, date: "tir 4/8", place: "Bergen", lat: 60.3913, lng: 5.3221, drive: "0", activity: "Hviledag: VilVite (Norges beste vitensenter!) + bading/strand", lodging: "Bergen" },
      { day: 10, date: "ons 5/8", place: "Bergen → Flåm", lat: 60.8628, lng: 7.1136, drive: "2t 30m", activity: "Kjøredag via Voss — ankomst Flåm", lodging: "Flåm Camping (3 netter)" },
      { day: 11, date: "tor 6/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Flåmsbana heldag + lunsj i Flåm", lodging: "Flåm" },
      { day: 12, date: "fre 7/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Hviledag: kort Nærøyfjord-cruise eller lett gåtur", lodging: "Flåm" },
      { day: 13, date: "lør 8/8", place: "Flåm → Bø", lat: 59.4128, lng: 9.0653, drive: "5t (m/pauser)", activity: "Lang kjøredag — splitt med pauser. Innkomst Bø.", lodging: "Bø camping" },
      { day: 14, date: "søn 9/8", place: "Bø → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "2t", activity: "Hjem — kort kjøring", lodging: "Hjem" }
    ]
  },

  C: {
    name: "Alternativ C: Sverige-twist",
    color: "#003d99",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Gøteborg", lat: 57.7089, lng: 11.9746, drive: "4t (m/pauser)", activity: "Kjøredag via Svinesund (gratis bru!) — kveldsstrand eller innkomst", lodging: "Lisebergsbyn Camping (3 netter)" },
      { day: 2, date: "tir 28/7", place: "Gøteborg / Liseberg", lat: 57.6957, lng: 11.9928, drive: "0", activity: "Liseberg heldag — Kaninlandet for 5-åringen, mellomstore ride for 8-åringen", lodging: "Gøteborg" },
      { day: 3, date: "ons 29/7", place: "Gøteborg", lat: 57.7089, lng: 11.9746, drive: "0", activity: "Hviledag: Universeum (tech-bonus, hai+regnskog!) eller park og strand", lodging: "Gøteborg" },
      { day: 4, date: "tor 30/7", place: "Gøteborg → Vimmerby", lat: 57.6685, lng: 15.8552, drive: "3t 30m", activity: "Kjøredag østover — ankomst Astrid-land sen ettermiddag", lodging: "Vimmerby Camping (3 netter)" },
      { day: 5, date: "fre 31/7", place: "Astrid Lindgrens Värld", lat: 57.6685, lng: 15.8552, drive: "0", activity: "ALW heldag — Pippi, Emil, Brødrene Løvehjerte. Magisk for 5-8 år.", lodging: "Vimmerby" },
      { day: 6, date: "lør 1/8", place: "Vimmerby", lat: 57.6685, lng: 15.8552, drive: "0", activity: "Hviledag: Astrid Lindgrens hjem-museum + bading i Stångån eller lokal lek", lodging: "Vimmerby" },
      { day: 7, date: "søn 2/8", place: "Vimmerby → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "5t 30m (m/pauser)", activity: "Lang kjøredag hjemover — pause i Jönköping for Vättern-bading", lodging: "Hjem (Tvedestrand)" },
      { day: 8, date: "man 3/8", place: "Tvedestrand → Kristiansand", lat: 58.1399, lng: 8.0034, drive: "1t", activity: "Kort kjøring + strand + innkomst", lodging: "Kristiansand camping (3 netter)" },
      { day: 9, date: "tir 4/8", place: "Kristiansand", lat: 58.1399, lng: 8.0034, drive: "0", activity: "Dyreparken heldag", lodging: "Kristiansand" },
      { day: 10, date: "ons 5/8", place: "Kristiansand", lat: 58.1399, lng: 8.0034, drive: "0", activity: "Hviledag: strand, Ravnedalen, Posebyen", lodging: "Kristiansand" },
      { day: 11, date: "tor 6/8", place: "Kristiansand → Lofthus", lat: 60.3289, lng: 6.6603, drive: "5t (m/pauser)", activity: "Kjøredag via Suldal og Røldal — vakker rute. Innkomst Hardanger kveld.", lodging: "Lofthus Camping (3 netter)" },
      { day: 12, date: "fre 7/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Steinsdalsfossen + Buarbreen kort tur + frukthager", lodging: "Lofthus" },
      { day: 13, date: "lør 8/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Hviledag: bading, sykkel, fjordbåt, eple-smaking", lodging: "Lofthus" },
      { day: 14, date: "søn 9/8", place: "Lofthus → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "6t (m/pauser)", activity: "Lang siste dag — splitt med stopp og lunsj. Hjem kveld.", lodging: "Hjem" }
    ]
  }
};
