export interface Hotel {
  name: string;
  address: string;
  phone: string;
  website?: string;
  rooms: string[];
  evCharging: boolean;
}

export interface Col {
  name: string;
  elevation: number;
}

export interface Ride {
  distance?: number;
  elevation?: number;
  cols: Col[];
  description: string;
  gpxFile?: string;
  gpxFileShort?: string; // For routes with kort/lang options
}

export interface Town {
  name: string;
  lat: number;
  lon: number;
}

export interface Day {
  date: string;
  dayNumber: number;
  title: string;
  location: string;
  hotel?: Hotel;
  ride?: Ride;
  isRestDay: boolean;
}

export const tripData: Day[] = [
  {
    date: "2026-09-07",
    dayNumber: 1,
    title: "Vertrek naar Albertville",
    location: "Albertville",
    isRestDay: true,
    hotel: {
      name: "Ibis Styles Albertville",
      address: "23 Av. des Chasseurs Alpins, 73200 Albertville, France",
      phone: "+33 4 86 80 29 70",
      website: "https://all.accor.com",
      rooms: [
        "2 x tweepersoonskamers met dubbelbed",
        "1 x tweepersoonskamer met twee aparte bedden",
        "2 x eenpersoonskamers",
      ],
      evCharging: true,
    },
  },
  {
    date: "2026-09-08",
    dayNumber: 2,
    title: "Albertville → Val-d'Isère",
    location: "Val-d'Isère",
    isRestDay: false,
    hotel: {
      name: "Avancher Hôtel",
      address: "554 Av. du Prariond, 73150 Val-d'Isère, France",
      phone: "+33 4 79 06 02 00",
      website: "http://www.hotel-avancher-valdisere.com/",
      rooms: [
        "1 x tweepersoonskamer met dubbelbed",
        "1 x junior suite voor 3 personen",
        "1 x familiekamer voor 3 personen",
      ],
      evCharging: true,
    },
    ride: {
      distance: 91,
      elevation: 3138,
      cols: [
        { name: "Col du Méraillet", elevation: 1605 },
        { name: "Cormet de Roselend", elevation: 1968 },
      ],
      description:
        "De eerste echte bergdag: via Beaufort omhoog naar de Col du Méraillet, langs het stuwmeer van Roselend en over het Cormet de Roselend (1968m). Daarna afdalen naar Bourg-Saint-Maurice en de lange slotklim door de Tarentaise naar Val-d'Isère.",
      gpxFile: "/gpx/TDGC_2026-09-08.gpx",
    },
  },
  {
    date: "2026-09-09",
    dayNumber: 3,
    title: "Val-d'Isère → Saint Michel de Maurienne",
    location: "Saint Michel de Maurienne",
    isRestDay: false,
    hotel: {
      name: "Savoy Hotel",
      address:
        "25 rue du Général Ferrier, 73140 Saint Michel de Maurienne, France",
      phone: "+33 4 79 56 55 12",
      website: "https://www.savoyhotel.fr/",
      rooms: ["3 x tweepersoonskamers", "2 x eenpersoonskamers"],
      evCharging: false,
    },
    ride: {
      distance: 113,
      elevation: 2085,
      cols: [
        { name: "Col de l'Iseran", elevation: 2764 },
        { name: "Col du Mont Cenis", elevation: 2083 },
      ],
      description:
        "Meteen vanuit het hotel omhoog naar de Col de l'Iseran (2764m), de hoogste verharde bergpas van de Alpen. Daarna de lange afdaling via Bonneval-sur-Arc de Maurienne in, met de Col du Mont Cenis in het grensgebied met Italië als tweede klim, en tot slot naar Saint Michel de Maurienne.",
      gpxFile: "/gpx/TDGC_2026-09-09.gpx",
    },
  },
  {
    date: "2026-09-10",
    dayNumber: 4,
    title: "Saint Michel → Briançon",
    location: "Briançon",
    isRestDay: false,
    hotel: {
      name: "Hotel Suite-Home Serre-Chevalier",
      address:
        "Centre commercial Grande Boucle, Avenue du Dauphiné, 05100 Briançon, France",
      phone: "+33 4 92 20 02 00",
      website: "http://www.suitehome-briancon.com/",
      rooms: ["3 x tweepersoonskamers", "2 x eenpersoonskamers"],
      evCharging: false,
    },
    ride: {
      distance: 92.8,
      elevation: 3173,
      cols: [
        { name: "Col du Télégraphe", elevation: 1566 },
        { name: "Col du Galibier", elevation: 2645 },
        { name: "Col de Granon", elevation: 2413 },
      ],
      description:
        "De legendarische Galibier! Via de Col du Télégraphe naar de mythische Col du Galibier, een van de meest iconische cols uit de Tour de France. Daarna over de Col du Lautaret naar beneden, om vanuit Saint-Chaffrey nog de steile Col de Granon (2413m) mee te pikken voor de afdaling naar Briançon.",
      gpxFile: "/gpx/TDGC_2026-09-10.gpx",
    },
  },
  {
    date: "2026-09-11",
    dayNumber: 5,
    title: "Briançon → Barcelonnette",
    location: "Barcelonnette",
    isRestDay: false,
    hotel: {
      name: "Azteca Hotel",
      address: "3 rue François Arnaud, 04400 Barcelonnette",
      phone: "+33 4 92 81 46 36",
      website: "https://www.azteca-hotel.fr/",
      rooms: ["3 x tweepersoonskamers", "2 x eenpersoonskamers"],
      evCharging: false,
    },
    ride: {
      distance: 143.2,
      elevation: 4141,
      cols: [
        { name: "Col d'Izoard", elevation: 2360 },
        { name: "Col de Vars", elevation: 2109 },
        { name: "Cime de la Bonette", elevation: 2802 },
      ],
      description:
        "De koningsrit. De spectaculaire Col d'Izoard met zijn Casse Déserte, gevolgd door de Col de Vars. In de lange versie volgt vanuit Jausiers nog de Cime de la Bonette (2802m), de hoogste verharde weg van Frankrijk. De korte versie (97km) slaat de Bonette over en rijdt na Vars rechtstreeks naar Barcelonnette.",
      gpxFile: "/gpx/TDGC_2026-09-11-lang.gpx",
      gpxFileShort: "/gpx/TDGC_2026-09-11-kort.gpx",
    },
  },
  {
    date: "2026-09-12",
    dayNumber: 6,
    title: "Barcelonnette → Saint-André-les-Alpes",
    location: "Saint-André-les-Alpes",
    isRestDay: false,
    hotel: {
      name: "Hotel Le Bel Air",
      address: "Route de Nice 04170, Saint-André-les-Alpes",
      phone: "+33 4 92 89 17 91",
      website: "https://hotel-belair.com/",
      rooms: [
        "1 x eenpersoonskamer",
        "3 x tweepersoonskamers",
        "1 x tweepersoonskamer met twee aparte bedden",
      ],
      evCharging: true,
    },
    ride: {
      distance: 107.5,
      elevation: 2660,
      cols: [
        { name: "Col de la Cayolle", elevation: 2326 },
        { name: "Col des Champs", elevation: 2087 },
      ],
      description:
        "Vanuit Barcelonnette door de Gorges du Bachelard omhoog naar de prachtige Col de la Cayolle. Via Saint-Martin-d'Entraunes daarna over de Col des Champs (2087m) naar Colmars en verder door de Verdon-vallei naar Saint-André-les-Alpes.",
      gpxFile: "/gpx/TDGC_2026-09-12.gpx",
    },
  },
  {
    date: "2026-09-13",
    dayNumber: 7,
    title: "Saint-André → Forcalquier",
    location: "Forcalquier",
    isRestDay: false,
    hotel: {
      name: "Grand Hotel Forcalquier",
      address: "10 bd Latourette, 04300 Forcalquier, France",
      phone: "+33 4 92 75 00 35",
      website: "https://www.grandhotel-forcalquier.fr/",
      rooms: [
        "2 x tweepersoonskamers",
        "1 x tweepersoonskamer met twee aparte bedden",
        "2 x eenpersoonskamers",
      ],
      evCharging: false,
    },
    ride: {
      distance: 147.2,
      elevation: 2763,
      cols: [
        { name: "Col de Cheiron", elevation: 887 },
        { name: "Col d'Illoire", elevation: 964 },
      ],
      description:
        "Over de Col de Cheiron richting Castellane en dan de Corniche Sublime door de spectaculaire Gorges du Verdon, met de Col d'Illoire hoog boven het Lac de Sainte-Croix. Daarna door de Provence naar Forcalquier. Geen grote cols, wel heel veel korte klimmetjes. De korte versie is 122km.",
      gpxFile: "/gpx/TDGC_2026-09-13.gpx",
      gpxFileShort: "/gpx/TDGC_2026-09-13-kort.gpx",
    },
  },
  {
    date: "2026-09-14",
    dayNumber: 8,
    title: "Forcalquier → Malaucène",
    location: "Malaucène",
    isRestDay: false,
    hotel: {
      name: "Ventoux Ride",
      address: "Route de Beaumont 4, 84340 Malaucène",
      phone: "",
      rooms: [
        "1 appartement met 2 slaapkamers",
        "1 appartement met 3 slaapkamers",
      ],
      evCharging: true,
    },
    ride: {
      distance: 125.4,
      elevation: 2867,
      cols: [
        { name: "Col de Notre-Dame des Abeilles", elevation: 996 },
        { name: "Mont Ventoux", elevation: 1912 },
      ],
      description:
        "De finale! Via Banon en de Col de Notre-Dame des Abeilles naar de Gorges de la Nesque, en dan afdalen naar Bédoin voor de klassieke beklimming van de Mont Ventoux (21km). De Reus van de Provence als apotheose van de week, met daarna de afdaling naar Malaucène.",
      gpxFile: "/gpx/TDGC_2026-09-14.gpx",
    },
  },
  {
    date: "2026-09-15",
    dayNumber: 9,
    title: "Terugreis naar huis",
    location: "Malaucène",
    isRestDay: true,
  },
];

export const tripStats = {
  totalDistance: tripData.reduce(
    (sum, day) => sum + (day.ride?.distance || 0),
    0,
  ),
  totalElevation: tripData.reduce(
    (sum, day) => sum + (day.ride?.elevation || 0),
    0,
  ),
  totalDays: tripData.length,
  cyclingDays: tripData.filter((day) => !day.isRestDay).length,
  totalCols: tripData.reduce(
    (sum, day) => sum + (day.ride?.cols.length || 0),
    0,
  ),
};

export const routeGpxFiles = tripData
  .map((day) => day.ride?.gpxFile)
  .filter((gpxFile): gpxFile is string => Boolean(gpxFile));

export const routeTowns: Town[] = [
  { name: "Albertville", lat: 45.675, lon: 6.392 },
  { name: "Val-d'Isere", lat: 45.448, lon: 6.979 },
  { name: "Saint-Michel-de-Maurienne", lat: 45.218, lon: 6.473 },
  { name: "Briançon", lat: 44.899, lon: 6.643 },
  { name: "Barcelonnette", lat: 44.387, lon: 6.651 },
  { name: "Saint-Andre-les-Alpes", lat: 43.967, lon: 6.514 },
  { name: "Forcalquier", lat: 43.959, lon: 5.779 },
  { name: "Malaucene", lat: 44.175, lon: 5.133 },
];
