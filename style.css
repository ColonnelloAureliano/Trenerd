:root {
  --bg: #ffffff;
  --deep: #0f2730;
  --green: #39c85a;
  --green-2: #7bf19b;
  --green-dark: #1f8e43;

  --metal-1: #eef3f5;
  --metal-2: #c2cdd3;
  --metal-3: #8697a1;
  --metal-4: #5f7079;

  --sleeper-1: #28414b;
  --sleeper-2: #1b3139;
  --sleeper-3: #10252d;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: var(--bg);
  font-family: Arial, Helvetica, sans-serif;
  color: var(--deep);
}

body {
  overflow-x: hidden;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: opacity 0.45s ease, transform 0.45s ease;
}

/* =========================
   PARTE SUPERIORE
   ========================= */
.top-area {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px 20px 10px;
}

.image-card {
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #f4f8f9 100%);
  border: 2px solid rgba(15, 39, 48, 0.08);
  border-radius: 22px;
  padding: 18px;
  box-shadow:
    0 14px 34px rgba(15, 39, 48, 0.10),
    0 2px 8px rgba(15, 39, 48, 0.06);
}

.image-card::after {
  content: "";
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -8px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(57, 200, 90, 0.20) 25%,
    rgba(57, 200, 90, 0.30) 50%,
    rgba(57, 200, 90, 0.20) 75%,
    transparent 100%
  );
  filter: blur(6px);
}

.top-image {
  display: block;
  width: 100%;
  max-width: min(72vw, 360px);
  height: auto;
  object-fit: contain;
}

/* =========================
   PARTE INFERIORE
   ========================= */
.bottom-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 20px 40px;
}

.track-scene {
  width: min(980px, 94vw);
}

.track {
  position: relative;
  width: 100%;
  height: 230px;
  margin: 0 auto;
}

/* =========================
   GEOMETRIA PRINCIPALE
   ========================= */
/*
  Rotaie:
  - top rail: 78 -> 90
  - bottom rail: 146 -> 158

  Centro luce:
  - metà esatta tra i centri delle rotaie:
    (84 + 152) / 2 = 118

  Traverse:
  - le faccio sporgere in modo simmetrico:
    top 62, height 112 => bottom 174
    quindi sporgenza:
    sopra la rotaia alta = 78 - 62 = 16
    sotto la rotaia bassa = 174 - 158 = 16
*/

/* =========================
   TRAVERSE
   ========================= */
.sleepers {
  position: absolute;
  left: 5%;
  width: 90%;
  top: 62px;
  height: 112px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  z-index: 1;
}

.sleeper {
  justify-self: center;
  width: 22px;
  height: 112px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      var(--sleeper-1) 0%,
      var(--sleeper-2) 40%,
      var(--sleeper-3) 100%
    );
  box-shadow:
    inset 0 2px 2px rgba(255,255,255,0.08),
    inset 0 -2px 4px rgba(0,0,0,0.24),
    0 4px 10px rgba(15, 39, 48, 0.16);
  position: relative;
}

.sleeper::before,
.sleeper::after {
  content: "";
  position: absolute;
  left: 4px;
  right: 4px;
  height: 2px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
}

.sleeper::before {
  top: 18px;
}

.sleeper::after {
  bottom: 18px;
}

/* =========================
   ROTAIE
   ========================= */
.rail {
  position: absolute;
  left: 3%;
  width: 94%;
  height: 12px;
  border-radius: 999px;
  z-index: 3;
  background:
    linear-gradient(
      180deg,
      var(--metal-1) 0%,
      var(--metal-2) 18%,
      var(--metal-3) 44%,
      #dce4e8 60%,
      #8597a1 82%,
      var(--metal-4) 100%
    );
  box-shadow:
    inset 0 1px 1px rgba(255,255,255,0.85),
    inset 0 -1px 2px rgba(0,0,0,0.22),
    0 2px 6px rgba(15, 39, 48, 0.16);
}

.rail-top {
  top: 78px;
}

.rail-bottom {
  top: 146px;
}

.rail::before,
.rail::after {
  content: "";
  position: absolute;
  top: 2px;
  bottom: 2px;
  width: 7px;
  border-radius: 999px;
  background: rgba(255,255,255,0.28);
}

.rail::before {
  left: 10px;
}

.rail::after {
  right: 10px;
}

/* =========================
   LUCI
   ========================= */
.lights {
  position: absolute;
  z-index: 5;

  /* centro dei 7 spazi fra 8 traverse */
  left: calc(5% + (90% / 16));
  width: calc(90% * 7 / 8);

  /* CENTRO ESATTO TRA LE DUE ROTAIE */
  top: 118px;
  transform: translateY(-50%);

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
}

/*
  IMPORTANTE:
  - niente ::before metallico sul bottone
  - la ghiera la faccio con box-shadow fisso
  - così il browser non può applicare effetti strani all'ultimo toccato
*/
.light {
  justify-self: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  border: 0 !important;
  outline: none !important;
  background-clip: padding-box;
  padding: 0;
  margin: 0;

  position: relative;
  box-sizing: border-box;

  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  user-select: none;

  transition:
    transform 0.14s ease,
    box-shadow 0.20s ease,
    background 0.20s ease;
}

/* Firefox inner border */
.light::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.light:focus,
.light:focus-visible,
.light:focus-within,
.light:active {
  outline: none !important;
  box-shadow: none;
}

.light:hover {
  transform: scale(1.05);
}

/* SPENTA */
.light.off {
  background:
    radial-gradient(circle at 35% 35%, #2c3940 0%, #121e24 48%, #050b0e 100%);
  box-shadow:
    /* ghiera esterna uguale per tutte */
    0 0 0 5px #b9c5cc,
    0 0 0 6px #73858f,
    /* shading interno */
    inset 0 1px 2px rgba(255,255,255,0.06),
    inset 0 -2px 4px rgba(0,0,0,0.5);
}

/* ACCESA */
.light.on {
  background:
    radial-gradient(circle at 35% 35%, #d4ffdc 0%, var(--green-2) 26%, var(--green) 58%, var(--green-dark) 100%);
  box-shadow:
    /* ghiera esterna uguale per tutte */
    0 0 0 5px #b9c5cc,
    0 0 0 6px #73858f,
    /* luce */
    inset 0 1px 2px rgba(255,255,255,0.35),
    inset 0 -2px 3px rgba(0,0,0,0.16),
    0 0 12px rgba(57, 200, 90, 0.56),
    0 0 22px rgba(57, 200, 90, 0.30);
}

/* =========================
   SCHERMATA SEGRETA
   ========================= */
.secret-screen {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at center, rgba(57,200,90,0.15) 0%, rgba(57,200,90,0.05) 22%, #ffffff 62%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.55s ease;
}

.secret-screen.show {
  opacity: 1;
  pointer-events: auto;
}

.secret-content {
  position: relative;
  text-align: center;
  padding: 24px;
}

.secret-glow {
  position: absolute;
  inset: -40px;
  background: radial-gradient(circle, rgba(57,200,90,0.30) 0%, rgba(57,200,90,0.10) 35%, rgba(57,200,90,0) 72%);
  filter: blur(18px);
  z-index: 0;
}

.secret-content h1 {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: clamp(2.8rem, 8vw, 6rem);
  letter-spacing: 0.22em;
  color: var(--deep);
  text-shadow: 0 0 18px rgba(57, 200, 90, 0.26);
}

body.unlocked .page {
  opacity: 0;
  transform: scale(0.985);
  pointer-events: none;
}

/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 800px) {
  .top-area {
    min-height: 42vh;
    padding-top: 18px;
  }

  .top-image {
    max-width: min(84vw, 320px);
  }

  .track {
    height: 210px;
  }

  .sleepers {
    top: 58px;
    height: 102px;
  }

  .sleeper {
    width: 18px;
    height: 102px;
  }

  .rail-top {
    top: 74px;
  }

  .rail-bottom {
    top: 136px;
  }

  /* simmetria traverse:
     sopra = 74 - 58 = 16
     sotto = (58+102) - (136+12) = 160 - 148 = 12
     aggiusto leggermente aumentando top e tenendo risultato visivo migliore
  */
  .lights {
    top: 111px; /* centro tra 80 e 142 circa */
  }

  .light {
    width: 36px;
    height: 36px;
  }

  .light.off {
    box-shadow:
      0 0 0 4px #b9c5cc,
      0 0 0 5px #73858f,
      inset 0 1px 2px rgba(255,255,255,0.06),
      inset 0 -2px 4px rgba(0,0,0,0.5);
  }

  .light.on {
    box-shadow:
      0 0 0 4px #b9c5cc,
      0 0 0 5px #73858f,
      inset 0 1px 2px rgba(255,255,255,0.35),
      inset 0 -2px 3px rgba(0,0,0,0.16),
      0 0 10px rgba(57, 200, 90, 0.56),
      0 0 18px rgba(57, 200, 90, 0.28);
  }
}

@media (max-width: 520px) {
  .track {
    height: 190px;
  }

  .sleepers {
    top: 52px;
    height: 92px;
  }

  .sleeper {
    width: 14px;
    height: 92px;
    border-radius: 6px;
  }

  .rail {
    height: 10px;
  }

  .rail-top {
    top: 66px;
  }

  .rail-bottom {
    top: 122px;
  }

  .lights {
    top: 99px;
  }

  .light {
    width: 30px;
    height: 30px;
  }

  .light.off {
    box-shadow:
      0 0 0 4px #b9c5cc,
      0 0 0 5px #73858f,
      inset 0 1px 2px rgba(255,255,255,0.06),
      inset 0 -2px 4px rgba(0,0,0,0.5);
  }

  .light.on {
    box-shadow:
      0 0 0 4px #b9c5cc,
      0 0 0 5px #73858f,
      inset 0 1px 2px rgba(255,255,255,0.35),
      inset 0 -2px 3px rgba(0,0,0,0.16),
      0 0 8px rgba(57, 200, 90, 0.52),
      0 0 14px rgba(57, 200, 90, 0.26);
  }
}
