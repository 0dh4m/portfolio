/* ==========================================================================
   ADHAM CHERKAOUI EDDEQAQI — POWERHOUSE PROJECTS DATA SOURCE OF TRUTH
   Curated elite software systems engineered and delivered by Adham Cherkaoui (0dh4m)
   ========================================================================== */
const projectsData = [

  {
    id: "watch-together",
    category: "web",
    icon: "bi-film",
    gradient: "g1",
    tag: { en: "Real-Time Web & PWA", fr: "Web Temps Réel & PWA" },
    title: { en: "Watch Together — Synced Streaming & Mesh Voice", fr: "Watch Together — Streaming Synchronisé & Salons Vocaux" },
    desc: {
      en: "A production-ready real-time Watch Together PWA where users watch movies and videos in perfect sub-second sync (<1.5s drift correction), talk via low-latency WebRTC mesh voice rooms, chat live, and react with floating emojis across 7 media sources.",
      fr: "Application PWA temps réel de visionnage synchronisé à la milliseconde (<1.5s de dérive), intégrant des salons vocaux maillés à faible latence via WebRTC, chat instantané, réactions animées et prise en charge de 7 sources multimédias."
    },
    tech: ["Node.js", "Express", "Socket.IO", "WebRTC Mesh", "SQLite", "Tailwind CSS", "PWA"],
    demo: "demos/watch-together/index.html",
    github: "https://github.com/0dh4m/watch-together"
  },

  {
    id: "cyberops",
    category: "ai",
    icon: "bi-shield-check",
    gradient: "g4",
    tag: { en: "Cybersecurity & Web Platform", fr: "Cybersécurité & Plateforme Web" },
    title: { en: "CyberOps Academy — Interactive Cybersecurity Platform", fr: "CyberOps Academy — Plateforme Interactive de Cybersécurité" },
    desc: {
      en: "Comprehensive interactive cybersecurity learning and training platform. Features in-browser interactive CTF challenge engines, sandboxed SQLi/XSS labs, network packet analyzers, and multi-provider AI security advisor.",
      fr: "Plateforme interactive d'apprentissage et d'entraînement à la cybersécurité. Simulateurs CTF interactifs dans le navigateur, laboratoires SQLi/XSS, analyseur de paquets réseau et tuteur IA d'assistance."
    },
    tech: ["Node.js", "Cybersecurity", "Multi-Provider AI", "CTF Engine", "Packet Lab", "Docker", "PostgreSQL"],
    demo: "demos/cyberops/index.html",
    github: "https://github.com/0dh4m/cyberops-academy"
  },

  {
    id: "hmp",
    category: "desktop",
    icon: "bi-egg-fried",
    gradient: "g2",
    tag: { en: "AI Web & Desktop App", fr: "Application Web & Desktop IA" },
    title: { en: "Happy Gym PRO — Sports Nutrition & AI (PFE)", fr: "Happy Gym PRO — Nutrition Sportive & IA (PFE)" },
    desc: {
      en: "End-of-Studies PFE project — Synchronized hybrid sports nutrition platform (PHP 8 Web + C# .NET WPF native Windows desktop) with Google Gemini 1.5 multimodal fridge photo ingredient recognition, automated BMR/TDEE caloric meal planning, and OpenWA WhatsApp OTP password recovery.",
      fr: "Projet de Fin d'Études (PFE) — Solution hybride synchronisée (Web PHP 8 + Desktop natif Windows C# WPF) intégrant l'IA multimodale Gemini 1.5 pour l'analyse photo du frigo, calcul automatique BMR/TDEE et récupération de mot de passe par OTP WhatsApp (OpenWA)."
    },
    tech: ["C# / WPF", "PHP 8", "MySQL", "Gemini 1.5 API", "Tailwind CSS", "OpenWA API"],
    demo: "demos/hmp/home.html",
    github: "https://github.com/0dh4m/happy-gym-pro"
  },

  {
    id: "dualaudio",
    category: "desktop",
    icon: "bi-soundwave",
    gradient: "g1",
    tag: { en: "Desktop & Audio Systems", fr: "Système Audio & Desktop" },
    title: { en: "DualAudio Sync — Zero-Latency Audio Hub", fr: "DualAudio Sync — Hub Audio Zéro-Latence" },
    desc: {
      en: "Advanced Windows audio synchronization suite bridging Sonos Play:1 (Wi-Fi UPnP/DLNA) and Citytek MF109099 (Bluetooth/AUX). Features Windows WASAPI loopback capture (PyAudioWPatch), sub-millisecond circular delay line (0-3000ms), and metronome pulse test.",
      fr: "Suite logicielle Windows de synchronisation audio de haute précision reliant Sonos Play:1 (Wi-Fi UPnP) et Citytek MF109099 (Bluetooth). Capture audio WASAPI Loopback, ligne à retard circulaire à la milliseconde et étalonnage métronomique."
    },
    tech: ["Python", "PyAudioWPatch", "SoCo UPnP", "WASAPI", "Web Audio API", "Dark Glassmorphism"],
    demo: "demos/dualaudio/index.html",
    github: "https://github.com/0dh4m/dualaudio-sync"
  },

  {
    id: "duallumi",
    category: "desktop",
    icon: "bi-lightbulb",
    gradient: "g2",
    tag: { en: "Desktop & BLE Hardware", fr: "Desktop & Matériel BLE" },
    title: { en: "DualLumi PRO v3.5 — Smart Lighting Suite", fr: "DualLumi PRO v3.5 — Contrôleur Éclairage BLE" },
    desc: {
      en: "Native Windows desktop application & BLE hardware lighting controller with reverse-engineered ELK-BLEDOM and KeepSmile GATT protocols, packet coalescing, system tray companion, RGB color sync, and reactive ambient scenes.",
      fr: "Application desktop native Windows et contrôleur matériel Bluetooth Low Energy (BLE) rétro-conçu pour protocoles ELK-BLEDOM et KeepSmile, avec fusion de paquets GATT, icône en barre des tâches et scènes lumineuses réactives."
    },
    tech: ["Python", "Bleak (WinRT BLE)", "Tailwind CSS", "GATT Reverse-Engineering", "Desktop Companion"],
    demo: "demos/duallumi/index.html",
    github: "https://github.com/0dh4m/duallumi-pro"
  },

  {
    id: "tapocam",
    category: "desktop",
    icon: "bi-camera-video",
    gradient: "g4",
    tag: { en: "IoT & WebRTC Streamer", fr: "IoT & Streaming WebRTC" },
    title: { en: "TapoCam Stream & PTZ — Security Viewer", fr: "TapoCam Stream & PTZ — Visionneuse Sécurité" },
    desc: {
      en: "Ultra-low latency private security camera viewer for Tapo C510W. Integrates go2rtc RTSP-to-WebRTC streaming gateway (<180ms delay), Python ONVIF WSSE digest authentication, continuous pan/tilt joystick, and night-vision modes.",
      fr: "Visionneuse privée de sécurité ultra-faible latence pour Tapo C510W. Passerelle go2rtc RTSP vers WebRTC (<180ms), authentification ONVIF WSSE en Python, contrôle motorisé Pan/Tilt et vision nocturne infrarouge."
    },
    tech: ["Python", "go2rtc", "WebRTC / MSE", "ONVIF PTZ", "WSSE Security", "Canvas UI"],
    demo: "demos/tapocam/index.html",
    github: "https://github.com/0dh4m/tapocam-viewer"
  },

  {
    id: "pharmacare",
    category: "ai",
    icon: "bi-capsule-pill",
    gradient: "g3",
    tag: { en: "Management System & AI", fr: "Système de Gestion & IA" },
    title: { en: "PharmaCare PRO — Pharmacy Management & AI OCR", fr: "PharmaCare PRO — Gestion d'Officine & IA OCR" },
    desc: {
      en: "A comprehensive pharmacy management suite: patient records with medication history, AI-assisted prescription scanning (Gemini Vision OCR) to auto-fill patient dosages, drug-drug interaction alerts, barcode scanner simulator, and dynamic analytics dashboard in Moroccan Dirham (MAD).",
      fr: "Système complet de gestion officinale : fiches patients avec historique médicamenteux, numérisation intelligente des ordonnances par IA (Gemini Vision OCR), détection des interactions médicamenteuses, lecteur code-barres et tableau de bord en Dirhams Marocains (MAD)."
    },
    tech: ["PHP OOP", "MySQL", "Gemini Vision OCR", "Chart.js", "Web Audio API", "Tailwind CSS"],
    demo: "demos/pharmacare/index.html",
    github: "https://github.com/0dh4m/pharmacare-pro-ai"
  },

  {
    id: "hotel",
    category: "web",
    icon: "bi-building",
    gradient: "g4",
    tag: { en: "Commercial Internship & Solution", fr: "Stage Professionnel & Solution" },
    title: { en: "Guest House & Hotel Management ERP", fr: "Système de Gestion Hôtelière & Maison d'Hôtes" },
    desc: {
      en: "Engineered during commercial internship at SARL HIND ET PIERRE (Rabat). Features room allocation matrices, atomic PDO transactions with rollback safeguards, client CRM, check-in/out workflows, and automated official invoice generation in MAD.",
      fr: "Conçu lors du stage professionnel au sein de SARL HIND ET PIERRE (Rabat). Comprend la gestion matricielle des chambres, transactions PDO atomiques avec rollback, CRM clients, gestion des arrivées/départs et facturation officielle en MAD."
    },
    tech: ["PHP 8 OOP", "PDO Transactions", "MySQL 3NF", "Bootstrap 5", "Financial MAD Billing"],
    demo: "demos/hotel/index.html",
    github: "https://github.com/0dh4m/hotel-management-system"
  },

  {
    id: "radio-maroc",
    category: "web",
    icon: "bi-broadcast-pin",
    gradient: "g5",
    tag: { en: "Live Streaming Web App", fr: "Application Web Streaming" },
    title: { en: "Radio Maroc Live — Moroccan Radio Platform", fr: "Radio Maroc Live — Plateforme Radio Marocaine" },
    desc: {
      en: "A modern, high-performance live streaming Single Page Application for Moroccan radio stations. Features 24 live national & regional streams, instant search, category filters, LocalStorage favorites, uninterrupted continuous audio playback, and an animated audio equalizer.",
      fr: "Plateforme de streaming audio SPA moderne diffusant 24 radios marocaines en direct sans coupure lors de la navigation, avec recherche instantanée, filtres par ville/catégorie, favoris LocalStorage et égaliseur audio animé."
    },
    tech: ["JavaScript (ES6+)", "HTML5 Audio API", "Bootstrap 5 RTL", "Glassmorphism", "LocalStorage"],
    demo: "demos/radio-maroc/index.html",
    github: "https://github.com/0dh4m/radio-maroc-live"
  },

  {
    id: "movies",
    category: "web",
    icon: "bi-camera-reels",
    gradient: "g1",
    tag: { en: "Multilingual Cinema Platform", fr: "Plateforme Cinéma Multilingue" },
    title: { en: "Movies & Series Streaming Platform", fr: "Plateforme de Streaming Films & Séries" },
    desc: {
      en: "Full-stack multilingual cinema and TV series streaming web platform with high-definition video player integration, 4-language localization (Arabic RTL, English, French, Italian), instant catalog search, user favorites, and visitor traffic analytics.",
      fr: "Plateforme web complète de streaming de films et séries avec intégration de lecteur vidéo HD, internationalisation en 4 langues (Arabe RTL, Anglais, Français, Italien), recherche instantanée, favoris et suivi analytique du trafic."
    },
    tech: ["PHP 8", "MySQL / JSON DB", "Multilingual i18n", "Responsive Cinema UI", "Traffic Analytics"],
    demo: "demos/movies/index.html",
    github: "https://github.com/0dh4m/movies-streaming-platform"
  }

];
