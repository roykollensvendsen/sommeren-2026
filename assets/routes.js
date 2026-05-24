// Rute-data for de tre alternativene
// Roligere tempo + Dyreparken byttet ut med Bø Sommarland og Kongeparken

const ROUTES = {
  A: {
    name: "Alternativ A: Hardangerfjord-base",
    color: "#2d6a4f",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Bø", lat: 59.4128, lng: 9.0653, drive: "1t 30m", activity: "Kort kjøretur, lett ankomst, kvelds-bading", lodging: "Bø camping (3 netter)" },
      { day: 2, date: "tir 28/7", place: "Bø Sommarland", lat: 59.4128, lng: 9.0653, drive: "0", activity: "Bø Sommarland heldag — Norges største vannpark. Supersklia + plaskeland.", lodging: "Bø" },
      { day: 3, date: "ons 29/7", place: "Bø", lat: 59.4128, lng: 9.0653, drive: "0", activity: "Hviledag: Telemarkskanalen kort båttur, kanopadling, eller halv-dag Sommarland igjen", lodging: "Bø" },
      { day: 4, date: "tor 30/7", place: "Bø → Sandnes", lat: 58.8521, lng: 5.7370, drive: "5t (m/pauser)", activity: "Lang kjøredag — splitt med stopp og lunsj. Ankomst Sandnes kveld.", lodging: "Sandnes camping (3 netter)" },
      { day: 5, date: "fre 31/7", place: "Kongeparken", lat: 58.7619, lng: 5.7869, drive: "20m", activity: "Kongeparken heldag — Norges nest største fornøyelsespark. Magisk for 5-8 år.", lodging: "Sandnes" },
      { day: 6, date: "lør 1/8", place: "Sandnes", lat: 58.8521, lng: 5.7370, drive: "0", activity: "Hviledag: Vitenfabrikken (tech-bonus!) + strand og lekeplass", lodging: "Sandnes" },
      { day: 7, date: "søn 2/8", place: "Sandnes → Lofthus", lat: 60.3289, lng: 6.6603, drive: "4t (m/pause)", activity: "Kjøredag via Suldal og Røldal Stavkirke (kort stopp). Vakker rute.", lodging: "Lofthus Camping (3 netter)" },
      { day: 8, date: "man 3/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Steinsdalsfossen (gå BAK fossen!) + Buarbreen kort tur + frukthager", lodging: "Lofthus" },
      { day: 9, date: "tir 4/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Hviledag: bading, sykkel, fjordbåt-tur, eple-cider-smaking", lodging: "Lofthus" },
      { day: 10, date: "ons 5/8", place: "Lofthus → Flåm", lat: 60.8628, lng: 7.1136, drive: "3t", activity: "Kjøredag via Stegastein utsiktspunkt — ankomst Flåm", lodging: "Flåm Camping (3 netter)" },
      { day: 11, date: "tor 6/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Flåmsbana heldag — verdens vakreste togreise (Myrdal og tilbake)", lodging: "Flåm" },
      { day: 12, date: "fre 7/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Hviledag: lett tur til Otternes, kort RIB-tur på Nærøyfjord, vikingmuseum", lodging: "Flåm" },
      { day: 13, date: "lør 8/8", place: "Flåm → Notodden", lat: 59.5589, lng: 9.2620, drive: "5t (m/pauser)", activity: "Kjøredag hjemover — pause på Geilo/Hardangervidda. Innkomst Notodden kveld.", lodging: "Notodden camping" },
      { day: 14, date: "søn 9/8", place: "Notodden → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "2t 30m", activity: "Kort hjemtur — evt stopp Heddal Stavkirke", lodging: "Hjem" }
    ]
  },

  B: {
    name: "Alternativ B: Klassisk Vestlandsrundtur",
    color: "#1e3a5f",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Bø", lat: 59.4128, lng: 9.0653, drive: "1t 30m", activity: "Kort kjøretur, lett ankomst, kvelds-bading", lodging: "Bø camping (3 netter)" },
      { day: 2, date: "tir 28/7", place: "Bø Sommarland", lat: 59.4128, lng: 9.0653, drive: "0", activity: "Bø Sommarland heldag — Norges største vannpark", lodging: "Bø" },
      { day: 3, date: "ons 29/7", place: "Bø", lat: 59.4128, lng: 9.0653, drive: "0", activity: "Hviledag: Telemarkskanalen, kanopadling, kort tur", lodging: "Bø" },
      { day: 4, date: "tor 30/7", place: "Bø → Stavanger", lat: 58.9700, lng: 5.7331, drive: "5t (m/pauser)", activity: "Kjøredag via Sørlandet — Gamle Stavanger kveld", lodging: "Stavanger camping (3 netter)" },
      { day: 5, date: "fre 31/7", place: "Stavanger / Lysefjord", lat: 58.9863, lng: 6.1873, drive: "2t totalt", activity: "Lysefjord-cruise (familievennlig — ser Preikestolen nedenfra) ELLER Preikestolen-tur m/én forelder for 8-åringen", lodging: "Stavanger" },
      { day: 6, date: "lør 1/8", place: "Stavanger", lat: 58.9700, lng: 5.7331, drive: "0", activity: "Hviledag: Norsk Oljemuseum (tech-bonus!), Gamle Stavanger, strand", lodging: "Stavanger" },
      { day: 7, date: "søn 2/8", place: "Stavanger → Bergen", lat: 60.3913, lng: 5.3221, drive: "6t (m/pauser)", activity: "Lang kjøredag — pause i Røldal (lunsj + lek 1t). Ankomst Bergen kveld.", lodging: "Bergen camping Lone (3 netter)" },
      { day: 8, date: "man 3/8", place: "Bergen", lat: 60.3913, lng: 5.3221, drive: "0", activity: "Bergen by: Fløibanen, Bryggen, Akvariet — heldag for små barn", lodging: "Bergen" },
      { day: 9, date: "tir 4/8", place: "Bergen", lat: 60.3913, lng: 5.3221, drive: "0", activity: "Hviledag: VilVite (Norges beste vitensenter!) + bading/strand", lodging: "Bergen" },
      { day: 10, date: "ons 5/8", place: "Bergen → Flåm", lat: 60.8628, lng: 7.1136, drive: "2t 30m", activity: "Kjøredag via Voss — ankomst Flåm", lodging: "Flåm Camping (3 netter)" },
      { day: 11, date: "tor 6/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Flåmsbana heldag + lunsj i Flåm", lodging: "Flåm" },
      { day: 12, date: "fre 7/8", place: "Flåm", lat: 60.8628, lng: 7.1136, drive: "0", activity: "Hviledag: kort Nærøyfjord-cruise eller lett gåtur", lodging: "Flåm" },
      { day: 13, date: "lør 8/8", place: "Flåm → Notodden", lat: 59.5589, lng: 9.2620, drive: "5t (m/pauser)", activity: "Kjøredag hjemover — pause på Geilo. Innkomst Notodden.", lodging: "Notodden camping" },
      { day: 14, date: "søn 9/8", place: "Notodden → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "2t 30m", activity: "Hjem — kort kjøring, evt Heddal Stavkirke", lodging: "Hjem" }
    ]
  },

  D: {
    name: "Alternativ D: Amsterdam / Nederland",
    color: "#FF8C42",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Amsterdam", lat: 52.3676, lng: 4.9041, drive: "1,5t bil + 1t50min fly + transfer", activity: "Reisedag: kjøre Tvedestrand → OSL (1,5t), fly OSL→AMS direkte (1t50min), tog Schiphol→Amsterdam Centraal (15 min). Innkomst hotell kveld.", lodging: "Amsterdam hotell (Oud-West)", links: [{label:"SAS booking",url:"https://www.flysas.com/no/"},{label:"Schiphol info",url:"https://www.schiphol.nl/en/"}] },
      { day: 2, date: "tir 28/7", place: "Amsterdam — lett start", lat: 52.3580, lng: 4.8686, drive: "0", activity: "Vondelpark + lekeplass formiddag, kort kanaltur (60 min), Bloemenmarkt, pannekake-lunsj. KVELD: Blast Galaxy retro-arkade (Amsterdam Noord) — 120+ spillbare maskiner, flat fee.", lodging: "Amsterdam hotell", links: [{label:"Vondelpark",url:"https://www.iamsterdam.com/en/see-and-do/things-to-do/parks-and-natural-spaces/vondelpark"},{label:"Blast Galaxy",url:"https://www.blastgalaxy.nl/"},{label:"Bloemenmarkt",url:"https://en.wikipedia.org/wiki/Bloemenmarkt"}] },
      { day: 3, date: "ons 29/7", place: "NEMO + The Arcade Hotel ⭐", lat: 52.3738, lng: 4.9123, drive: "0", activity: "NEMO Science Museum heldag — 5 etasjer interaktiv vitenskap, store såpebobler, kjemilab, tak-terrasse. KVELD: sjekk inn på THE ARCADE HOTEL (1 natt) — verdens første gaming-hotell med retro-konsoller på rommet!", lodging: "The Arcade Hotel (1 natt!)", links: [{label:"NEMO Museum",url:"https://www.nemosciencemuseum.nl/en/"},{label:"The Arcade Hotel",url:"https://www.arcadehotel.nl/"}] },
      { day: 4, date: "tor 30/7", place: "Amsterdam — hvile + Artis", lat: 52.3676, lng: 4.9041, drive: "0", activity: "Hviledag etter NEMO og gaming-natt: Artis Royal Zoo formiddag (1838 — Nederlands eldste), sykkeltur ettermiddag. Tilbake til normal hotell.", lodging: "Amsterdam hotell", links: [{label:"Artis Zoo",url:"https://www.artis.nl/en/"},{label:"Black Bikes (sykkelutleie)",url:"https://black-bikes.com/"}] },
      { day: 5, date: "fre 31/7", place: "Bonami Zwolle dagstur 🕹️", lat: 52.5168, lng: 6.0830, drive: "1t 15m tog hver vei", activity: "Dagstur til Bonami Spelcomputer Museum Zwolle — Nederlands største retrogaming-samling: 3 250 m² fri lek, 10 000+ spillbare spill, pinball-haller. Lukas vil elske det!", lodging: "Amsterdam hotell", links: [{label:"Bonami Museum",url:"https://computermuseum.nl/"},{label:"NS togbooking",url:"https://www.ns.nl/"}] },
      { day: 6, date: "lør 1/8", place: "Amsterdam → Den Haag", lat: 52.0705, lng: 4.3007, drive: "1t tog", activity: "Morgen-tog Amsterdam → Den Haag (1t, IC-tog). Innkomst hotell, ettermiddag på Scheveningen strand.", lodging: "Den Haag hotell (4 netter)", links: [{label:"Den Haag turistinfo",url:"https://denhaag.com/en"},{label:"Scheveningen",url:"https://scheveningen.com/en/"}] },
      { day: 7, date: "søn 2/8", place: "Madurodam Den Haag", lat: 52.0976, lng: 4.2986, drive: "0", activity: "Madurodam heldag — mini-Nederland i 1:25 skala. 50 000+ små mennesker, tog som faktisk kjører, båter, og en interaktiv del der Lukas kan styre Schiphol-flyplassen i miniatyr.", lodging: "Den Haag", links: [{label:"Madurodam",url:"https://www.madurodam.nl/en/"}] },
      { day: 8, date: "man 3/8", place: "Scheveningen hvile", lat: 52.1063, lng: 4.2730, drive: "0", activity: "Hviledag: Scheveningen strand heldag — sand, sjøvann, fiskebåter, iskremstand på molo. Kveld: lett tur i Den Haag sentrum (Mauritshuis valgfri).", lodging: "Den Haag", links: [{label:"SEA LIFE Scheveningen",url:"https://www.visitsealife.com/scheveningen/"},{label:"Mauritshuis (kunst)",url:"https://www.mauritshuis.nl/en/"}] },
      { day: 9, date: "tir 4/8", place: "Kinderdijk dagstur 🌬️", lat: 51.8826, lng: 4.6402, drive: "1t tog+ferge hver vei", activity: "UNESCO-dagstur: Den Haag → Rotterdam Centraal (20 min) + Waterbus 20 → Kinderdijk (30 min). 19 hollandske møller fra 1740. Sykkelutleie eller båttur rundt.", lodging: "Den Haag", links: [{label:"Kinderdijk",url:"https://kinderdijk.nl/en/"},{label:"Waterbus",url:"https://www.waterbus.nl/"}] },
      { day: 10, date: "ons 5/8", place: "Den Haag → Kaatsheuvel", lat: 51.6471, lng: 5.0440, drive: "1,5t (leiebil)", activity: "Hent leiebil i Den Haag, kjør til Kaatsheuvel. Innkomst Landal Marvilla Parks (ved Efteling). Basseng + lekeplass kveld.", lodging: "Landal Marvilla Parks (4 netter)", links: [{label:"Marvilla Parks",url:"https://marvillaparks.nl/en/parks/kaatsheuvel/"},{label:"Hertz leiebil",url:"https://www.hertz.com/"}] },
      { day: 11, date: "tor 6/8", place: "Efteling 🎢", lat: 51.6494, lng: 5.0480, drive: "0", activity: "Efteling heldag — Nederlands største eventyrpark. Eventyrskogen for Alana, Joris en de Draak (kappløp på vannseilebane!) for Lukas, Droomvlucht magisk for begge.", lodging: "Marvilla Parks", links: [{label:"Efteling",url:"https://www.efteling.com/"},{label:"Efteling billett",url:"https://www.efteling.com/en/park/tickets"}] },
      { day: 12, date: "fre 7/8", place: "Marvilla — hvile", lat: 51.6471, lng: 5.0440, drive: "0", activity: "Hviledag etter Efteling: subtropisk badeland på parken, sykkel i Loonse Duinen, lekeplass, evt bowling/minigolf. Cesaria kan ta spa.", lodging: "Marvilla Parks", links: [{label:"Loonse en Drunense Duinen",url:"https://www.np-loonseendrunenseduinen.nl/en"}] },
      { day: 13, date: "lør 8/8", place: "HomeComputerMuseum + Philips ⭐", lat: 51.4827, lng: 5.6614, drive: "25m + 30m", activity: "Tech-dag! Formiddag: HomeComputerMuseum Helmond (Commodore, Atari, Amiga + arcade-kafé). Ettermiddag: Philips Museum Eindhoven (Philips-innovasjonshistorie). Begge ~25-30 min fra Kaatsheuvel.", lodging: "Marvilla Parks", links: [{label:"HomeComputerMuseum",url:"https://www.homecomputermuseum.nl/en/"},{label:"Philips Museum",url:"https://www.philips.com/a-w/philips-museum.html"}] },
      { day: 14, date: "søn 9/8", place: "Kaatsheuvel → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "1,5t bil + 1t50min fly + 1,5t bil", activity: "Reisedag hjem: leiebil → Schiphol (1,5t), levér bil, fly AMS→OSL (1t50min), kjøre OSL→Tvedestrand. Hjem kveld.", lodging: "Hjem 🏡", links: [{label:"SAS hjemreise",url:"https://www.flysas.com/no/"}] }
    ]
  },

  C: {
    name: "Alternativ C: Sverige-twist",
    color: "#003d99",
    days: [
      { day: 1, date: "man 27/7", place: "Tvedestrand → Bø", lat: 59.4128, lng: 9.0653, drive: "1t 30m", activity: "Kort kjøretur, lett ankomst", lodging: "Bø camping (3 netter)" },
      { day: 2, date: "tir 28/7", place: "Bø Sommarland", lat: 59.4128, lng: 9.0653, drive: "0", activity: "Bø Sommarland heldag — Norges største vannpark", lodging: "Bø" },
      { day: 3, date: "ons 29/7", place: "Bø", lat: 59.4128, lng: 9.0653, drive: "0", activity: "Hviledag: Telemarkskanalen, kanopadling, lett tur", lodging: "Bø" },
      { day: 4, date: "tor 30/7", place: "Bø → Gøteborg", lat: 57.7089, lng: 11.9746, drive: "4t (m/pauser)", activity: "Kjøredag østover via Sverige-grensen", lodging: "Lisebergsbyn Camping (3 netter)" },
      { day: 5, date: "fre 31/7", place: "Liseberg", lat: 57.6957, lng: 11.9928, drive: "0", activity: "Liseberg heldag — Kaninlandet for 5-åringen, mellomstore ride for 8-åringen", lodging: "Gøteborg" },
      { day: 6, date: "lør 1/8", place: "Gøteborg", lat: 57.7089, lng: 11.9746, drive: "0", activity: "Hviledag: Universeum (tech-bonus, hai+regnskog!) eller park og strand", lodging: "Gøteborg" },
      { day: 7, date: "søn 2/8", place: "Gøteborg → Vimmerby", lat: 57.6685, lng: 15.8552, drive: "3t 30m", activity: "Kjøredag østover — ankomst Astrid-land sen ettermiddag", lodging: "Vimmerby Camping (3 netter)" },
      { day: 8, date: "man 3/8", place: "Astrid Lindgrens Värld", lat: 57.6685, lng: 15.8552, drive: "0", activity: "ALW heldag — Pippi, Emil, Brødrene Løvehjerte. Magisk for 5-8 år.", lodging: "Vimmerby" },
      { day: 9, date: "tir 4/8", place: "Vimmerby", lat: 57.6685, lng: 15.8552, drive: "0", activity: "Hviledag: Astrid Lindgrens hjem-museum + bading i Stångån", lodging: "Vimmerby" },
      { day: 10, date: "ons 5/8", place: "Vimmerby → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "5t 30m (m/pauser)", activity: "Lang kjøredag hjemover — pause i Jönköping for Vättern-bading", lodging: "Hjem (Tvedestrand)" },
      { day: 11, date: "tor 6/8", place: "Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "0", activity: "Hjemme-hviledag — egen seng, lokal strand, vaske klær", lodging: "Hjem" },
      { day: 12, date: "fre 7/8", place: "Tvedestrand → Lofthus", lat: 60.3289, lng: 6.6603, drive: "6t (m/pauser)", activity: "Lang kjøredag vestover — pause i Suldal og Røldal", lodging: "Lofthus Camping (2 netter)" },
      { day: 13, date: "lør 8/8", place: "Hardanger", lat: 60.3289, lng: 6.6603, drive: "0", activity: "Steinsdalsfossen + Buarbreen kort tur + frukthager", lodging: "Lofthus" },
      { day: 14, date: "søn 9/8", place: "Lofthus → Tvedestrand", lat: 58.6225, lng: 8.9319, drive: "6t (m/pauser)", activity: "Lang siste dag — splitt med stopp og lunsj. Hjem kveld.", lodging: "Hjem" }
    ]
  }
};
