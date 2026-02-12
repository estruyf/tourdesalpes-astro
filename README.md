# Tour des Grands Cols Alpes 2026

Een one-page timeline website voor onze wielrenreis door de Franse Alpen in September 2026.

## 🚴 Over de trip

- **Datum**: 7-15 September 2026
- **Route**: Albertville → Malaucène
- **Afstand**: ~831 km
- **Hoogtemeters**: ~17,650m
- **Cols**: 11 legendarische bergpassen

### Hoogtepunten

- Col de l'Iseran (2764m) - Hoogste col in de Alpen
- Col du Galibier (2645m) - Tour de France legende
- Col d'Izoard (2360m) - Met de legendarische Casse Déserte
- Mont Ventoux (1912m) - De Reus van de Provence als finale

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
- `TDGC_2026-09-08.gpx` - Albertville → Val-d'Isère
- `TDGC_2026-09-09.gpx` - Val-d'Isère → Saint Michel
- `TDGC_2026-09-10.gpx` - Saint Michel → Briançon
- `TDGC_2026-09-11-lang.gpx` / `kort.gpx` - Briançon → Barcelonnette
- `TDGC_2026-09-12.gpx` - Barcelonnette → Saint-André
- `TDGC_2026-09-13.gpx` / `kort.gpx` - Saint-André → Forcalquier
- `TDGC_2026-09-14.gpx` - Forcalquier → Malaucène

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

## 🌐 Deployment

Het project kan gedeployed worden naar:
- **Vercel**: `npx vercel`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Via GitHub Actions
- **Cloudflare Pages**: Connect repository

### Aanbevolen: Vercel

```bash
npm run build
npx vercel --prod
```

## 📚 Bronnen

- Gebaseerd op de route van [Harold Slegers](https://2wieligpaard.blogspot.com/2021/10/tour-des-grands-cols-alpes.html)
- [Astro Documentatie](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Leaflet.js](https://leafletjs.com/)

## 💪 Team Motto

> "Suffering is only temporary, giving up lasts forever"

---

**Let's ride! 🚴‍♂️⚡**
