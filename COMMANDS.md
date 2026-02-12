# Quick Start Commands

## Development

```bash
# Start development server
npm run dev

# Site will be available at http://localhost:4321
```

## Build for Production

```bash
# Build the site
npm run build

# Preview production build
npm run preview
```

## Deploy

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# Then drag & drop the dist/ folder to Netlify
```

## Project Structure

- `src/data/trip.ts` - Edit trip details, hotels, ride info
- `src/components/` - Reusable components (DayCard, Map, Timeline)
- `src/pages/index.astro` - Homepage
- `public/gpx/` - GPX route files
- `src/styles/global.css` - Custom theme and colors

## Updating Content

### Change Hotel Info
Edit `src/data/trip.ts` and modify the hotel objects.

### Update Routes
Replace GPX files in `public/gpx/` and update references in `src/data/trip.ts`.

### Modify Colors
Update theme variables in `src/styles/global.css` under `@theme`.

