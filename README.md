# Tour des Grands Cols Alpes 2026

Een one-page timeline website voor onze wielrenreis door de Franse Alpen in September 2026.

## 🚴 Over de trip

- **Datum**: 7-15 September 2026
- **Duur**: 9 dagen (8 rijdagen + 2 reisdagen)
- **Route**: Albertville → Mont Ventoux (Malaucène)
- **Afstand**: ~765 km
- **Hoogtemeters**: ~22,435 m
- **Cols**: 10 legendarische bergpassen

### Etappes

1. **Dag 1** (7 sept) - Reisdag naar Albertville
2. **Dag 2** (8 sept) - Albertville → Val-d'Isère (91 km, 3138 m, Col de l'Iseran 2764m)
3. **Dag 3** (9 sept) - Val-d'Isère → Saint Michel (113 km, 2085 m, Mont Cenis 2083m)
4. **Dag 4** (10 sept) - Saint Michel → Briançon (93 km, 3173 m, Galibier 2645m)
5. **Dag 5** (11 sept) - Briançon → Barcelonnette (92 km, 2370 m, Izoard 2360m + Vars 2109m)
6. **Dag 6** (12 sept) - Barcelonnette → Saint-André (143 km, 4141 m, Cayolle 2326m)
7. **Dag 7** (13 sept) - Saint-André → Forcalquier (108 km, 2660 m, Illoire 964m)
8. **Dag 8** (14 sept) - Forcalquier → Malaucène (125 km, 2867 m, Signal de Lure 1826m + Mont Ventoux 1912m)
9. **Dag 9** (15 sept) - Terugreis naar huis

### Hoogtepunten

- **Col de l'Iseran** (2764m) - Hoogste verharde bergpas in de Alpen
- **Col du Galibier** (2645m) - Tour de France legende
- **Col d'Izoard** (2360m) - Met de legendarische Casse Déserte
- **Mont Ventoux** (1912m) - De Reus van de Provence als apotheose van de week

## 🛠️ Technische Stack

- **Framework**: [Astro](https://astro.build) v5.x
- **Styling**: Tailwind CSS v4
- **Maps**: Leaflet.js
- **TypeScript**: Strict mode
- **Data**: GPX files voor alle etappes

## 🎨 Design

Het design is geïnspireerd op het teamtenue:
- **Primary**: Turquoise (#51C7CC)
- **Secondary**: Navy (#2C4A5E)
- **Accent**: Orange (#F59E0B)
- **Pattern**: Checkered pattern vanaf het wielershirt

## 📁 Project Structuur

```
tourdesgrandscolsalpes-astro/
├── src/
│   ├── components/
│   │   ├── DayCard.astro       # Dag kaart component
│   │   ├── InteractiveMap.astro # Leaflet kaart met GPX
│   │   └── Timeline.astro       # Timeline container
│   ├── data/
│   │   └── trip.ts             # Trip data (hotels, routes, stats)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Basis layout met header/footer
│   ├── pages/
│   │   └── index.astro         # Homepage
│   └── styles/
│       └── global.css          # Globale styles + Tailwind theme
├── public/
│   ├── gpx/                    # GPX bestanden (7 dagen)
│   └── favicon.svg             # Custom favicon
└── assets/
    └── gpx/                    # Originele GPX bestanden
```

## 🚀 Development

### Installatie

```bash
npm install
```

### Development Server

```bash
npm run dev
```

De website is beschikbaar op [http://localhost:4321](http://localhost:4321)

### Build

```bash
npm run build
```

Build output komt in de `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🗺️ GPX Bestanden

Alle GPX routes zijn opgeslagen in `public/gpx/` met de naamgeving:
- `TDGC_2026-09-08.gpx` - Albertville → Val-d'Isère (Col de l'Iseran)
- `TDGC_2026-09-09.gpx` - Val-d'Isère → Saint Michel de Maurienne (Mont Cenis)
- `TDGC_2026-09-10.gpx` - Saint Michel → Briançon (Col du Télégraphe & Galibier)
- `TDGC_2026-09-11-lang.gpx` - Briançon → Barcelonnette (lange route)
- `TDGC_2026-09-11-kort.gpx` - Briançon → Barcelonnette (korte route)
- `TDGC_2026-09-12.gpx` - Barcelonnette → Saint-André-les-Alpes (Col de la Cayolle)
- `TDGC_2026-09-13.gpx` - Saint-André → Forcalquier (Gorges du Verdon - lange route)
- `TDGC_2026-09-13-kort.gpx` - Saint-André → Forcalquier (korte route)
- `TDGC_2026-09-14.gpx` - Forcalquier → Malaucène (Signal de Lure & Mont Ventoux finale)

## ✨ Features

- ✅ **Responsive design** - Mobiel, tablet en desktop
- ✅ **Interactive maps** - Leaflet met GPX overlay
- ✅ **Route opties** - Kort/lang varianten voor dag 5 en 7
- ✅ **Hotel details** - Complete info met EV-charging indicatie
- ✅ **Col statistieken** - Afstand, hoogtemeters, cols per dag
- ✅ **Timeline layout** - Alternating left/right cards
- ✅ **Jersey kleuren** - Turquoise, navy en orange theme
- ✅ **Checkered pattern** - Geïnspireerd op het wielershirt

## 📝 Data Updaten

### Hotel informatie aanpassen

Bewerk `src/data/trip.ts` en update de `hotel` objecten.

### Route beschrijving wijzigen

In `src/data/trip.ts`, pas de `ride.description` velden aan.

### GPX bestanden vervangen

1. Plaats nieuwe GPX in `assets/gpx/`
2. Kopieer naar `public/gpx/`
3. Update referenties in `src/data/trip.ts` indien nodig

## 📚 Bronnen

- Gebaseerd op de route van [Harold Slegers](https://2wieligpaard.blogspot.com/2021/10/tour-des-grands-cols-alpes.html)

## 💪 Team Motto

> "Suffering is only temporary, giving up lasts forever"

---

**Let's ride! 🚴‍♂️⚡**
