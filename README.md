# 🎮 PokéTask — Sinnoh Edition

> A gamified productivity web application inspired by Pokémon Diamond & Pearl, designed to defeat task paralysis through tiered rewards, real-time audio synthesis, and persistent habit tracking.

---

## 🌟 Overview

Standard to-do lists suffer from a delayed-gratification problem. **PokéTask** bridges this gap using **behavioral gamification**:
* Assigning a task prompts you to categorize its effort: **🟢 Easy**, **🔵 Medium**, or **🟡 Hard**.
* Completing a task triggers a **3-shake Pokéball capture sequence** and synthesizes retro 8-bit game audio in real time.
* Rewards are drawn from **Generation 1 (Kanto) and Generation 2 (Johto)**, scaled to task difficulty:
  * **Level 1 (Easy)**: Basic companions & starters (Pikachu, Bulbasaur, Cyndaquil, Eevee, etc.)
  * **Level 2 (Medium)**: Evolved forms & fierce battlers (Charmeleon, Haunter, Scyther, Raichu, etc.)
  * **Level 3 (Hard / Boss)**: Stage 2 evolutions & Legendaries (Charizard, Dragonite, Gengar, Mewtwo, Lugia, etc.)
* Each capture reveals **Professor Oak’s official Pokédex description** and archives the Pokémon in your personal **Sinnoh Pokédex**, stamping the exact real-world task you conquered to earn it!

---

## ⚔️ Key Features

- **🎮 Full-Screen Diamond & Pearl UI**: Built with authentic Generation IV battle gradients, dialogue frames, and retro typography (`Press Start 2P`).
- **👤 Trainer Registration**: Choose from iconic characters (**Lucas**, **Dawn**, **Barry**, **Cynthia**, **Red**) with state preservation.
- **⚡ Animated Task Slidedown**: Configure difficulty tiers and optional deadlines with smooth CSS transitions.
- **🔴 3-Shake Pokéball Capture**: Authentic wobble physics, blinking indicator button, and particle burst upon capture.
- **🔊 8-Bit Web Audio Engine**: Zero external audio files; synthesizes real-time square and triangle audio waves directly via the browser's `AudioContext`.
- **🥚 10-Day Streak Incubator**: Daily consistency tracks toward a 10-day milestone, triggering an animated **Egg Hatching sequence** for rare baby and mythical Pokémon (Togepi, Pichu, Celebi, Mew).
- **📖 Sinnoh Pokédex Archive**: Filterable gallery of all collected Pokémon featuring the **"CAPTURED BY"** task memory log.
- **💾 Offline-First Persistence**: Powered by client-side `localStorage`—zero database setup required, zero latency, and persistent across page reloads.

---

## 🛠️ Tech Stack & Architecture

* **Frontend**: Vanilla HTML5, CSS3, Modern JavaScript (ES6+)
* **Audio Synthesis**: Native Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`)
* **Assets & Sprites**: Official PokéAPI Generation IV/V sprite repository
* **Persistence**: Browser `localStorage` API
* **Typography**: Google Fonts (`Press Start 2P`)

---

## 🚀 How to Run Locally

1. **Clone this repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/poketask.git
   cd poketask
   ```

2. **Open in any browser**:
   * Simply double-click `index.html`, OR
   * Run a lightweight Python server:
     ```bash
     python3 -m http.server 8080
     ```
     Then open `http://localhost:8080` in your web browser.

---

## 📜 Project Structure

```text
poketask/
├── index.html     # Semantic structure & modals (Rowan, Oak, Pokédex, Egg Hatch)
├── style.css      # Diamond/Pearl retro styling, full-screen canvas & keyframe animations
├── app.js         # Game engine, sound synthesis, Pokédex pools, and state management
└── README.md      # Project documentation & presentation guide
```

---

## 💡 Author

Built with passion by **Sriyuktha** as an application project for **Google Developer Groups (GDG)**.
