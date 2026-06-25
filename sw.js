const CACHE_NAME = "jojo-mobile-vn-ch01-v5";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./game.js",
  "./data/chapter_01.js",
  "./manifest.webmanifest",
  "./assets/auto_prologue/B015_apartment_elevator.png",
  "./assets/auto_prologue/B040_meeting_room.png",
  "./assets/auto_prologue/B049_office_open.png",
  "./assets/auto_prologue/P014_cao_mengde_reveal.png",
  "./assets/auto_prologue/P024_office_return_cg.png",
  "./assets/auto_prologue/P074_peak_closeup_cg.png",
  "./assets/bg/office_meeting_night.png",
  "./assets/protagonist/cao_mengde_reveal.png",
  "./assets/cg/prologue_wife_peak_closeup_cg.png",
  "./assets/ui/title_logo_clean.png",
  "./assets/ui/studio_ground_splash_logo.png",
  "./assets/ui/studio_ground_splash_9x16.png",
  "./assets/ui/icon-192.png",
  "./assets/ui/icon-512.png",
  "./assets/characters/prologue_wife_story/cut01_calm.png",
  "./assets/characters/prologue_wife_story/cut02_attentive.png",
  "./assets/characters/prologue_wife_story/cut03_guarded.png",
  "./assets/characters/prologue_wife_story/cut04_peak.png",
  "./assets/characters/prologue_wife_story/cut05_trust.png",
  "./assets/characters/prologue_wife_story/cut06_startled.png",
  "./assets/characters/prologue_wife_story/cut07_soft.png",
  "./assets/characters/prologue_wife_story/cut08_phone.png",
  "./assets/characters/prologue_wife_story/cut09_resolve.png",
  "./assets/characters/prologue_wife_story/cut10_pheromone_startle.png",
  "./assets/characters/prologue_wife_story/cut11_shy.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});
