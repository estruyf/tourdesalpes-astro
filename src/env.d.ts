/// <reference types="astro/client" />

// Leaflet global types
declare global {
  interface Window {
    L: typeof import("leaflet");
  }

  const L: typeof import("leaflet");
}

export {};
