# Tour des Grands Cols Alpes 2026 - Project Plan
## 1. Project Overview

A static website built with **Astro** to visualize the cycling tour "Tour des Grands Cols Alpes". The site will serve as a digital itinerary and information hub for the trip in September 2026.

### Tech Stack
- **Framework**: Astro
- **Styling**: Tailwind CSS (v4)
- **Maps**: Leaflet + leaflet-gpx
- **Deployment**: TBD (Vercel/Netlify/GitHub Pages)

### Structure
```
src/
    components/
        DayCard.astro       # Specific card for each day's summary
        InteractiveMap.astro # Map component using Leaflet
        Timeline.astro      # Vertical timeline of the trip
    data/
        trip.ts             # Single source of truth for itinerary data
    layouts/
        BaseLayout.astro    # Common layout
    pages/
        index.astro         # Main dashboard
    styles/
        global.css          # Tailwind imports & custom styles
```

## 2. Itinerary & Route Details

Based on `src/data/trip.ts`:

| Day | Date | Route / Activity | Stats | Hotel |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Mon 07 Sep | **Vertrek naar Albertville** <br> (Arrival) | - | **Ibis Styles Albertville** <br> 23 Av. des Chasseurs Alpins, Albertville <br> *EV Charging: Yes* |
| **2** | Tue 08 Sep | **Albertville → Val-d'Isère** <br> Col de l'Iseran (2764m) | 92km <br> 2780m+ | **Avancher Hôtel** <br> 554 Av. du Prariond, Val-d'Isère <br> *EV Charging: Yes* |
| **3** | Wed 09 Sep | **Val-d'Isère → Saint Michel de Maurienne** <br> Mont Cenis (2083m) | 95km <br> 2200m+ | **Savoy Hotel** <br> 25 rue du Général Ferrier, St Michel de Maurienne <br> *EV Charging: No* |
| **4** | Thu 10 Sep | **Saint Michel → Briançon** <br> Col du Télégraphe (1566m), Col du Galibier (2645m) | 129km <br> 2400m+ | **Hotel Suite-Home Serre-Chevalier** <br> Briançon <br> *EV Charging: No* |
| **5** | Fri 11 Sep | **Briançon → Barcelonnette** <br> Col d'Izoard (2360m), Col de Vars (2109m) | 92km <br> 2370m+ | **Azteca Hotel** <br> Barcelonnette <br> *EV Charging: No* |
| **6** | Sat 12 Sep | **Barcelonnette → Saint-André-les-Alpes** <br> Col de la Cayolle (2326m) | 130km <br> 1950m+ | **Hotel Le Bel Air** <br> Saint-André-les-Alpes <br> *EV Charging: Yes* |
| **7** | Sun 13 Sep | **Saint-André → Forcalquier** <br> Gorges du Verdon, Col d'Illoire (964m) | 138km <br> 2050m+ | **Grand Hotel Forcalquier** <br> Forcalquier <br> *EV Charging: No* |
| **8** | Mon 14 Sep | **Forcalquier → Malaucène** <br> Mont Ventoux (1912m), Signal de Lure (1826m) | 169km <br> 3500m+ | **Ventoux Ride** <br> Malaucène <br> *EV Charging: Yes (village)* |
| **9** | Tue 15 Sep | **Terugreis naar huis** <br> (Departure) | - | - |

**Total Stats**: ~845km distance, ~17,250m elevation gain.

## 3. Implementation Plan

### Phase 1: Setup & Data Structure
- [x] Create Astro project
- [x] Configure Tailwind CSS
- [x] Define TypeScript interfaces for `Trip`, `Day`, `Hotel`, `Ride`
- [x] Populate `src/data/trip.ts` with full itinerary

### Phase 2: Core Components
- [ ] **InteractiveMap**:
    - Integrate Leaflet.js
    - Implement parse/display of GPX files
    - Add markers for start/end points of each day
- [ ] **DayCard**:
    - Display day number, date, and title
    - Show ride stats (km, elevation)
    - List Cols/Passes
    - Show Hotel info with links
- [ ] **Timeline**:
    - Vertical list of DayCards
    - Responsive layout (stack on mobile, timeline on desktop)

### Phase 3: Assets & Styling
- [ ] Add GPX files to `public/gpx`
- [ ] Apply "Tour des Grands Cols" branding (colors, fonts)
- [ ] Responsive testing

### Phase 4: Deployment
- [ ] Build production version (`npm run build`)
- [ ] Deploy to hosting provider

## 4. Notes & Resources
- **Source**: [https://2wieligpaard.blogspot.com/2021/10/tour-des-grands-cols-alpes.html](https://2wieligpaard.blogspot.com/2021/10/tour-des-grands-cols-alpes.html)
- **GPX Files**: Located in `public/gpx/`
- **Accommodations**: Most confirmed, check specific room configs in `trip.ts`.
