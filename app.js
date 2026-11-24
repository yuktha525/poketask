/**
 * PokéTask — Sinnoh Edition
 * Features:
 * 1. Gen 1 & Gen 2 Pokémon Pools with Official Pokédex One-Liners
 * 2. 3-Shake Animated Pokéball Capture Sequence
 * 3. 10-Day Streak Incubator Tracker (+ Test Button for Instant Review)
 * 4. Animated Egg Hatching Sequence with Mythic & Baby Pokémon
 * 5. Persistent LocalStorage State
 */

// ============================================================================
// POKÉMON DATA (GEN 1 & 2 WITH ONE-LINER DESCRIPTIONS)
// ============================================================================

// LEVEL 1: Easy Tasks (Basic & Starter Pokémon)
const LEVEL_1_POKEMON = [
  { id: 25, name: 'PIKACHU', gen: 'Gen 1', desc: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.' },
  { id: 133, name: 'EEVEE', gen: 'Gen 1', desc: 'Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.' },
  { id: 1, name: 'BULBASAUR', gen: 'Gen 1', desc: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.' },
  { id: 4, name: 'CHARMANDER', gen: 'Gen 1', desc: 'The flame on its tail indicates Charmander\'s life force. It burns fiercely when it is healthy.' },
  { id: 7, name: 'SQUIRTLE', gen: 'Gen 1', desc: 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.' },
  { id: 16, name: 'PIDGEY', gen: 'Gen 1', desc: 'Very docile. If attacked, it kicks up sand by flapping its wings rather than fighting back.' },
  { id: 39, name: 'JIGGLYPUFF', gen: 'Gen 1', desc: 'When its huge eyes light up, it sings a mysteriously soothing melody that lulls enemies to sleep.' },
  { id: 52, name: 'MEOWTH', gen: 'Gen 1', desc: 'It loves round objects. It wanders the streets on a nightly basis to look for dropped loose change.' },
  { id: 54, name: 'PSYDUCK', gen: 'Gen 1', desc: 'While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.' },
  { id: 129, name: 'MAGIKARP', gen: 'Gen 1', desc: 'Famous for being very unreliable. It can jump up high, but usually fails to do anything else.' },
  { id: 152, name: 'CHIKORITA', gen: 'Gen 2', desc: 'A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up the sun.' },
  { id: 155, name: 'CYNDAQUIL', gen: 'Gen 2', desc: 'It is timid, and always curls itself up into a ball. If attacked, it flares up its back for defense.' },
  { id: 158, name: 'TOTODILE', gen: 'Gen 2', desc: 'Its well-developed jaws are powerful and capable of crushing anything. It bites affectionately.' },
  { id: 175, name: 'TOGEPI', gen: 'Gen 2', desc: 'The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.' },
  { id: 179, name: 'MAREEP', gen: 'Gen 2', desc: 'If electricity builds up in its fleece, its small tail lightbulbs shine brightly.' },
  { id: 194, name: 'WOOPER', gen: 'Gen 2', desc: 'This Pokémon lives in cold water. When the air cools in the evening, it steps onto land to forage.' }
];

// LEVEL 2: Medium Tasks (Mid-Evolution & Strong Battlers)
const LEVEL_2_POKEMON = [
  { id: 2, name: 'IVYSAUR', gen: 'Gen 1', desc: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.' },
  { id: 5, name: 'CHARMELEON', gen: 'Gen 1', desc: 'When it swings its burning tail, it elevates the temperature to unbearably high levels.' },
  { id: 8, name: 'WARTORTLE', gen: 'Gen 1', desc: 'Often recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.' },
  { id: 26, name: 'RAICHU', gen: 'Gen 1', desc: 'Its tail discharges electricity into the ground, protecting it from getting shocked itself.' },
  { id: 93, name: 'HAUNTER', gen: 'Gen 1', desc: 'Because of its ability to slip through walls, it is said to be from another dimension.' },
  { id: 64, name: 'KADABRA', gen: 'Gen 1', desc: 'It emits special alpha waves from its body that induce headaches just by being in its vicinity.' },
  { id: 123, name: 'SCYTHER', gen: 'Gen 1', desc: 'With ninja-like agility and speed, it can create the illusion that there is more than one.' },
  { id: 134, name: 'VAPOREON', gen: 'Gen 1', desc: 'Its cell structure is similar to water molecules. It will melt away and become invisible in water.' },
  { id: 135, name: 'JOLTEON', gen: 'Gen 1', desc: 'It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts.' },
  { id: 136, name: 'FLAREON', gen: 'Gen 1', desc: 'When storing thermal energy in its body, its internal temperature could climb to over 1,600 degrees.' },
  { id: 153, name: 'BAYLEEF', gen: 'Gen 2', desc: 'A spicy aroma emanates from around its neck. The aroma acts as a stimulant to restore energy.' },
  { id: 156, name: 'QUILAVA', gen: 'Gen 2', desc: 'Be careful if it turns its back during battle. It means that it will attack with fire from its back.' },
  { id: 159, name: 'CROCONAW', gen: 'Gen 2', desc: 'Once it bites down, it won\'t let go no matter what. Its teeth grow back quickly if they break.' },
  { id: 214, name: 'HERACROSS', gen: 'Gen 2', desc: 'This powerful Pokémon thrusts its prized horn under enemies\' bellies then lifts and hurls them.' },
  { id: 229, name: 'HOUNDOOM', gen: 'Gen 2', desc: 'If you are burned by the flames it shoots from its mouth, the pain will never ever go away.' }
];

// LEVEL 3: Hard / Boss Tasks (Final Evolutions, Pseudo-Legendaries & Legendaries)
const LEVEL_3_POKEMON = [
  { id: 6, name: 'CHARIZARD', gen: 'Gen 1', desc: 'It spits fire that is hot enough to melt boulders. Known to unintentionally cause massive forest fires.' },
  { id: 9, name: 'BLASTOISE', gen: 'Gen 1', desc: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.' },
  { id: 3, name: 'VENUSAUR', gen: 'Gen 1', desc: 'The plant blooms when it absorbs solar energy. It stays on the move to seek sunlight.' },
  { id: 94, name: 'GENGAR', gen: 'Gen 1', desc: 'Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.' },
  { id: 149, name: 'DRAGONITE', gen: 'Gen 1', desc: 'An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.' },
  { id: 150, name: 'MEWTWO', gen: 'Gen 1', desc: 'It was created by a scientist after years of horrific gene-splicing and DNA engineering experiments.' },
  { id: 151, name: 'MEW', gen: 'Gen 1', desc: 'So rare that it is still said to be a mirage by many experts. Only a few people have seen it.' },
  { id: 144, name: 'ARTICUNO', gen: 'Gen 1', desc: 'A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.' },
  { id: 145, name: 'ZAPDOS', gen: 'Gen 1', desc: 'A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts.' },
  { id: 146, name: 'MOLTRES', gen: 'Gen 1', desc: 'Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.' },
  { id: 248, name: 'TYRANITAR', gen: 'Gen 2', desc: 'Its body can\'t be harmed by any sort of attack, so it is very eager to challenge enemies.' },
  { id: 249, name: 'LUGIA', gen: 'Gen 2', desc: 'It slumbers in the deep ocean trench. It is said that a flutter of its wings can cause a 40-day storm.' },
  { id: 250, name: 'HO-OH', gen: 'Gen 2', desc: 'A legend says that its body glows in seven colors. A rainbow is said to form behind it when it flies.' },
  { id: 243, name: 'RAIKOU', gen: 'Gen 2', desc: 'The rain clouds it carries allow it to fire thunderbolts at will. It is said to have descended with lightning.' },
  { id: 244, name: 'ENTEI', gen: 'Gen 2', desc: 'Volcanoes erupt when it barks. Unable to restrain its extreme power, it races headlong around the land.' },
  { id: 245, name: 'SUICUNE', gen: 'Gen 2', desc: 'Said to be the reincarnation of northern winds, it can instantly purify filthy, murky water.' }
];

// 10-DAY STREAK EGG HATCH POOL (Special Baby & Mythical Pokémon)
const EGG_HATCH_POOL = [
  { id: 175, name: 'TOGEPI', desc: 'A proverb says that happiness will come to anyone who can make a sleeping Togepi stand up.' },
  { id: 172, name: 'PICHU', desc: 'It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.' },
  { id: 173, name: 'CLEFFA', desc: 'Because of its unusual, star-like silhouette, people believe that it came here on a meteor.' },
  { id: 174, name: 'IGGLYBUFF', desc: 'It has a soft and bouncy body. Once it starts bouncing, it is impossible to stop.' },
  { id: 236, name: 'TYROGUE', desc: 'Even though it is small, it can\'t be ignored because it strikes any foe without warning.' },
  { id: 238, name: 'SMOOCHUM', desc: 'It rocks its head back and forth as if it were kissing someone. It moves merrily.' },
  { id: 239, name: 'ELEKID', desc: 'It rotates its arms to generate electricity, but it tires easily, so it charges up only a little bit.' },
  { id: 240, name: 'MAGBY', desc: 'Each and every time it inhales and exhales, hot embers dribble out of its mouth and nostrils.' },
  { id: 251, name: 'CELEBI', desc: 'This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright future awaits.' },
  { id: 151, name: 'MEW', desc: 'A mythical Pokémon containing the genetic codes of all Pokémon. It can make itself invisible at will.' }
];

const POKEBALL_ICONS = { easy: '🔴', medium: '🔵', hard: '🟡' };

const TRAINER_PROFILES = {
  lucas: { name: 'LUCAS', svg: `<svg viewBox="0 0 40 40" class="character-svg"><rect x="12" y="4" width="16" height="8" fill="#dc2626" rx="2" /><rect x="10" y="9" width="20" height="3" fill="#991b1b" /><circle cx="20" cy="8" r="2.5" fill="#ffffff" /><rect x="13" y="12" width="14" height="10" fill="#fbcfe8" /><rect x="11" y="13" width="3" height="7" fill="#1e1b4b" /><rect x="26" y="13" width="3" height="7" fill="#1e1b4b" /><rect x="15" y="16" width="2" height="3" fill="#1e293b" /><rect x="23" y="16" width="2" height="3" fill="#1e293b" /><rect x="10" y="22" width="20" height="5" fill="#f8fafc" /><rect x="8" y="27" width="24" height="11" fill="#1e3a8a" rx="2" /><rect x="17" y="27" width="6" height="11" fill="#0284c7" /></svg>` },
  dawn: { name: 'DAWN', svg: `<svg viewBox="0 0 40 40" class="character-svg"><rect x="11" y="4" width="18" height="9" fill="#f8fafc" rx="3" /><circle cx="20" cy="8" r="3" fill="#f472b6" /><rect x="8" y="12" width="6" height="14" fill="#1e3a8a" /><rect x="26" y="12" width="6" height="14" fill="#1e3a8a" /><rect x="13" y="12" width="14" height="10" fill="#fbcfe8" /><rect x="15" y="15" width="2" height="3" fill="#0284c7" /><rect x="23" y="15" width="2" height="3" fill="#0284c7" /><rect x="10" y="22" width="20" height="5" fill="#ec4899" /><rect x="9" y="27" width="22" height="11" fill="#0f172a" rx="2" /><rect x="13" y="28" width="14" height="10" fill="#f472b6" /></svg>` },
  barry: { name: 'BARRY', svg: `<svg viewBox="0 0 40 40" class="character-svg"><polygon points="12,5 15,2 18,6 20,1 23,6 26,2 29,6" fill="#fde047" /><rect x="11" y="6" width="18" height="6" fill="#facc15" /><rect x="13" y="12" width="14" height="10" fill="#fbcfe8" /><rect x="15" y="16" width="2" height="2" fill="#ca8a04" /><rect x="23" y="16" width="2" height="2" fill="#ca8a04" /><rect x="10" y="22" width="20" height="5" fill="#ea580c" /><rect x="8" y="27" width="24" height="11" fill="#15803d" rx="2" /><rect x="15" y="27" width="10" height="11" fill="#f97316" /></svg>` },
  cynthia: { name: 'CYNTHIA', svg: `<svg viewBox="0 0 40 40" class="character-svg"><rect x="8" y="4" width="24" height="18" fill="#fef08a" rx="4" /><rect x="6" y="10" width="7" height="22" fill="#fde047" /><rect x="27" y="10" width="7" height="22" fill="#fde047" /><rect x="8" y="12" width="4" height="3" fill="#0f172a" /><rect x="28" y="12" width="4" height="3" fill="#0f172a" /><rect x="14" y="10" width="12" height="11" fill="#fbcfe8" /><rect x="16" y="14" width="2" height="3" fill="#64748b" /><rect x="22" y="14" width="2" height="3" fill="#64748b" /><rect x="9" y="21" width="22" height="17" fill="#09090b" rx="2" /><circle cx="20" cy="24" r="2" fill="#38bdf8" /></svg>` },
  red: { name: 'RED', svg: `<svg viewBox="0 0 40 40" class="character-svg"><rect x="11" y="4" width="18" height="8" fill="#dc2626" rx="2" /><rect x="9" y="9" width="22" height="3" fill="#ffffff" /><rect x="11" y="12" width="3" height="8" fill="#18181b" /><rect x="26" y="12" width="3" height="8" fill="#18181b" /><rect x="13" y="12" width="14" height="10" fill="#fbcfe8" /><rect x="15" y="16" width="2" height="3" fill="#991b1b" /><rect x="23" y="16" width="2" height="3" fill="#991b1b" /><rect x="8" y="22" width="24" height="16" fill="#dc2626" rx="2" /><rect x="14" y="22" width="12" height="16" fill="#18181b" /><rect x="17" y="22" width="6" height="16" fill="#ffffff" /></svg>` }
};

// ============================================================================
// STORAGE & APP STATE
// ============================================================================

const STORAGE_KEY_PROFILE = 'poketask_full_profile_v2';
const STORAGE_KEY_TASKS = 'poketask_tasks_v2';
const STORAGE_KEY_CAUGHT = 'poketask_caught_v2';
const STORAGE_KEY_STREAK = 'poketask_streak_v2';

let appTasks = [];
let caughtPokemonList = [];
let streakDays = 0;

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const registrationScreen = document.getElementById('registrationScreen');
const homeScreen = document.getElementById('homeScreen');

const registrationForm = document.getElementById('registrationForm');
const trainerNameInput = document.getElementById('trainerNameInput');
const avatarGrid = document.getElementById('avatarGrid');

const homeTrainerName = document.getElementById('homeTrainerName');
const homeAvatarDisplay = document.getElementById('homeAvatarDisplay');
const switchProfileBtn = document.getElementById('switchProfileBtn');
const caughtCountDisplay = document.getElementById('caughtCountDisplay');
const homeDialogueText = document.getElementById('homeDialogueText');

// Streak Incubator Elements
const streakDaysCount = document.getElementById('streakDaysCount');
const streakMeterFill = document.getElementById('streakMeterFill');
const testAdvanceStreakBtn = document.getElementById('testAdvanceStreakBtn');

// Task Form & Slidedown
const taskMissionForm = document.getElementById('taskMissionForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskSlidedownPanel = document.getElementById('taskSlidedownPanel');
const taskDeadlineInput = document.getElementById('taskDeadlineInput');
const tierPillRadios = document.querySelectorAll('input[name="missionTier"]');

// Roster
const taskListEl = document.getElementById('taskList');
const rosterEmptyState = document.getElementById('rosterEmptyState');
const activeTasksCount = document.getElementById('activeTasksCount');

// Regular Catch Modal
const captureModal = document.getElementById('captureModal');
const modalBannerTitle = document.getElementById('modalBannerTitle');
const pokeballAnimationBox = document.getElementById('pokeballAnimationBox');
const animatingBall = document.getElementById('animatingBall');
const catchStatusCaption = document.getElementById('catchStatusCaption');
const revealedPokemonContent = document.getElementById('revealedPokemonContent');
const caughtPokemonImg = document.getElementById('caughtPokemonImg');
const caughtTierBadge = document.getElementById('caughtTierBadge');
const caughtPokemonName = document.getElementById('caughtPokemonName');
const oakDialogueFrame = document.getElementById('oakDialogueFrame');
const oakSpeechText = document.getElementById('oakSpeechText');
const claimRewardBtn = document.getElementById('claimRewardBtn');

// 10-Day Egg Hatching Modal
const eggHatchModal = document.getElementById('eggHatchModal');
const eggAnimationSequence = document.getElementById('eggAnimationSequence');
const pixelEgg = document.getElementById('pixelEgg');
const crackLine1 = document.getElementById('crackLine1');
const crackLine2 = document.getElementById('crackLine2');
const eggStatusCaption = document.getElementById('eggStatusCaption');
const hatchedPokemonReveal = document.getElementById('hatchedPokemonReveal');
const hatchedPokemonImg = document.getElementById('hatchedPokemonImg');
const hatchedPokemonName = document.getElementById('hatchedPokemonName');
const eggOakDialogue = document.getElementById('eggOakDialogue');
const eggOakSpeechText = document.getElementById('eggOakSpeechText');
const claimHatchBtn = document.getElementById('claimHatchBtn');

// Sound Toggle Element
const soundToggleBtn = document.getElementById('soundToggleBtn');
let soundEnabled = true;
let audioCtx = null;

// ============================================================================
// 8-BIT RETRO SOUND SYNTHESIS ENGINE (WEB AUDIO API)
// Zero external files, instant zero-latency playback in all browsers
// ============================================================================

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(freq, type, duration, startTime = 0, gainLevel = 0.12) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

  gain.gain.setValueAtTime(gainLevel, ctx.currentTime + startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime + startTime);
  osc.stop(ctx.currentTime + startTime + duration);
}

// 1. Classic Pokéball Wobble Sound
function playWobbleSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'square';
  osc.frequency.setValueAtTime(280, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.09);

  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.09);
}

// 2. The Iconic 8-Bit Pokémon Capture Victory Fanfare!
function playCaptureFanfare() {
  if (!soundEnabled) return;
  // C5, D5, E5, G5, C6 (classic victory arpeggio)
  playTone(523.25, 'square', 0.10, 0.00, 0.14);
  playTone(587.33, 'square', 0.10, 0.11, 0.14);
  playTone(659.25, 'square', 0.10, 0.22, 0.14);
  playTone(783.99, 'square', 0.12, 0.33, 0.15);
  playTone(1046.50, 'square', 0.35, 0.45, 0.18);
  // Shimmering octave resonance
  playTone(1318.51, 'triangle', 0.30, 0.48, 0.10);
  playTone(2093.00, 'sine', 0.40, 0.52, 0.08);
}

// 3. Egg Crack Sound
function playCrackSound() {
  if (!soundEnabled) return;
  playTone(450, 'square', 0.05, 0, 0.1);
  playTone(320, 'sawtooth', 0.06, 0.02, 0.12);
}

// 4. Egg Hatching Victory Chime
function playHatchFanfare() {
  if (!soundEnabled) return;
  playTone(587.33, 'square', 0.10, 0.00, 0.14);
  playTone(739.99, 'square', 0.10, 0.12, 0.14);
  playTone(880.00, 'square', 0.12, 0.24, 0.15);
  playTone(1174.66, 'square', 0.40, 0.38, 0.18);
  playTone(1760.00, 'sine', 0.45, 0.42, 0.10);
}

// Sound toggle button listener
soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundToggleBtn.textContent = '🔊';
    soundToggleBtn.classList.remove('muted');
    playTone(600, 'square', 0.08, 0, 0.1); // Quick feedback chirp
  } else {
    soundToggleBtn.textContent = '🔇';
    soundToggleBtn.classList.add('muted');
  }
});

// Pokédex Elements
const openPokedexBtn = document.getElementById('openPokedexBtn');
const closePokedexBtn = document.getElementById('closePokedexBtn');
const pokedexModal = document.getElementById('pokedexModal');
const pokedexGrid = document.getElementById('pokedexGrid');
const pokedexEmptyState = document.getElementById('pokedexEmptyState');
const dexEntriesCount = document.getElementById('dexEntriesCount');
const pokedexFilters = document.getElementById('pokedexFilters');

let pokedexActiveFilter = 'all';

// ============================================================================
// 1. REGISTRATION & PROFILE
// ============================================================================

avatarGrid.addEventListener('change', (e) => {
  if (e.target.name === 'trainerAvatar') {
    document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
    e.target.closest('.avatar-option')?.classList.add('selected');
  }
});

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = trainerNameInput.value.trim();
  const selectedAvatar = document.querySelector('input[name="trainerAvatar"]:checked')?.value || 'lucas';
  if (!name) return;

  const profile = { name: name, avatar: selectedAvatar };
  localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));

  renderHomeScreen(profile);
  showScreen('home');
});

switchProfileBtn.addEventListener('click', () => {
  showScreen('registration');
  trainerNameInput.focus();
});

function showScreen(name) {
  if (name === 'home') {
    registrationScreen.classList.remove('active');
    homeScreen.classList.add('active');
  } else {
    homeScreen.classList.remove('active');
    registrationScreen.classList.add('active');
  }
}

function renderHomeScreen(profile) {
  const upper = profile.name.toUpperCase();
  homeTrainerName.textContent = upper;
  homeAvatarDisplay.innerHTML = TRAINER_PROFILES[profile.avatar]?.svg || TRAINER_PROFILES.lucas.svg;
  homeDialogueText.textContent = `What will ${upper} do?`;
  caughtCountDisplay.textContent = caughtPokemonList.length;
  updateStreakUI();
}

// ============================================================================
// 2. STREAK INCUBATOR SYSTEM
// ============================================================================

function updateStreakUI() {
  streakDaysCount.textContent = `${streakDays}/10 DAYS`;
  const pct = Math.min(100, Math.round((streakDays / 10) * 100));
  streakMeterFill.style.width = `${pct}%`;

  if (streakDays >= 10) {
    streakMeterFill.style.background = 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)';
  } else {
    streakMeterFill.style.background = 'linear-gradient(90deg, #38bdf8 0%, #0284c7 100%)';
  }
}

function incrementStreak() {
  streakDays++;
  saveData();
  updateStreakUI();

  if (streakDays >= 10) {
    // 10-day milestone reached! Trigger Egg Hatch!
    setTimeout(() => {
      startEggHatchingSequence();
    }, 500);
  }
}

// Test advance button for review & GDG evaluators
testAdvanceStreakBtn.addEventListener('click', () => {
  incrementStreak();
  const trainerUpper = homeTrainerName.textContent || 'TRAINER';
  homeDialogueText.textContent = `Streak advanced to ${streakDays}/10 days!`;
});

// ============================================================================
// 3. TASK SLIDEDOWN ENGINE
// ============================================================================

taskNameInput.addEventListener('focus', () => {
  taskSlidedownPanel.classList.add('open');
});

taskNameInput.addEventListener('input', () => {
  taskSlidedownPanel.classList.add('open');
});

tierPillRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    document.querySelectorAll('.tier-pill').forEach(pill => pill.classList.remove('selected'));
    e.target.closest('.tier-pill')?.classList.add('selected');
  });
});

taskMissionForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = taskNameInput.value.trim();
  if (!title) return;

  const tier = document.querySelector('input[name="missionTier"]:checked')?.value || 'easy';
  const deadline = taskDeadlineInput.value;

  const newTask = {
    id: 'task_' + Date.now(),
    title: title,
    tier: tier,
    deadline: deadline || null,
    createdAt: new Date().toISOString()
  };

  appTasks.unshift(newTask);
  saveData();

  taskNameInput.value = '';
  taskDeadlineInput.value = '';
  taskSlidedownPanel.classList.remove('open');
  taskNameInput.blur();

  renderTaskList();

  const trainerUpper = homeTrainerName.textContent;
  homeDialogueText.textContent = `${trainerUpper} assigned mission: "${title.toUpperCase()}"!`;
});

function renderTaskList() {
  taskListEl.innerHTML = '';

  if (appTasks.length === 0) {
    rosterEmptyState.style.display = 'flex';
    activeTasksCount.textContent = '0 MISSIONS';
    return;
  }

  rosterEmptyState.style.display = 'none';
  activeTasksCount.textContent = `${appTasks.length} MISSIONS`;

  appTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = task.id;

    const ballIcon = POKEBALL_ICONS[task.tier] || '🔴';
    const tierLevelText = task.tier === 'easy' ? 'LV.1 EASY' : task.tier === 'medium' ? 'LV.2 MED' : 'LV.3 HARD';
    const tierClass = `tag-${task.tier}`;

    let deadlineDisplay = '';
    if (task.deadline) {
      deadlineDisplay = `<span class="task-deadline-tag">📅 Due: ${task.deadline}</span>`;
    }

    li.innerHTML = `
      <div class="task-item-left">
        <div class="pokeball-btn-wrap">
          <button class="pokeball-catch-box" data-action="catch" title="Click to complete task & catch Pokémon!">
            <span class="pokeball-sprite">${ballIcon}</span>
          </button>
          <span class="complete-label">DONE</span>
        </div>
        <div class="task-item-content">
          <span class="task-item-name">${escapeHTML(task.title.toUpperCase())}</span>
          <div class="task-item-tags">
            <span class="task-tier-tag ${tierClass}">${tierLevelText}</span>
            ${deadlineDisplay}
          </div>
        </div>
      </div>
      <div class="delete-btn-wrap">
        <button class="delete-task-btn" data-action="delete" title="Cancel Mission">&times;</button>
        <span class="cancel-label">CANCEL</span>
      </div>
    `;

    taskListEl.appendChild(li);
  });
}

// ============================================================================
// 4. POKÉBALL 3-SHAKE SEQUENCE & OAK POKÉDEX LORE
// ============================================================================

taskListEl.addEventListener('click', (e) => {
  const target = e.target;
  const taskItem = target.closest('.task-item');
  if (!taskItem) return;

  const taskId = taskItem.dataset.id;
  const task = appTasks.find(t => t.id === taskId);
  if (!task) return;

  if (target.dataset.action === 'catch' || target.closest('[data-action="catch"]')) {
    startPokeballCaptureSequence(task);
  }
  
  if (target.dataset.action === 'delete' || target.closest('[data-action="delete"]')) {
    appTasks = appTasks.filter(t => t.id !== taskId);
    saveData();
    renderTaskList();
    homeDialogueText.textContent = `Mission cancelled.`;
    return;
  }
});

function startPokeballCaptureSequence(task) {
  let pool = LEVEL_1_POKEMON;
  let levelBadge = 'LEVEL 1 POKÉMON';

  if (task.tier === 'medium') {
    pool = LEVEL_2_POKEMON;
    levelBadge = 'LEVEL 2 POKÉMON';
  } else if (task.tier === 'hard') {
    pool = LEVEL_3_POKEMON;
    levelBadge = 'LEVEL 3 (BOSS) POKÉMON';
  }

  const chosenPokemon = pool[Math.floor(Math.random() * pool.length)];
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${chosenPokemon.id}.png`;

  modalBannerTitle.textContent = 'CAPTURING POKÉMON...';
  pokeballAnimationBox.style.display = 'flex';
  revealedPokemonContent.style.display = 'none';
  oakDialogueFrame.style.display = 'none';
  claimRewardBtn.style.display = 'none';

  animatingBall.classList.remove('shaking');
  void animatingBall.offsetWidth;
  animatingBall.classList.add('shaking');

  catchStatusCaption.textContent = 'Throwing Pokéball...';
  captureModal.style.display = 'flex';

  setTimeout(() => { 
    catchStatusCaption.textContent = 'Wiggle...'; 
    playWobbleSound();
  }, 350);

  setTimeout(() => { 
    catchStatusCaption.textContent = 'Wiggle... Wiggle...'; 
    playWobbleSound();
  }, 750);

  setTimeout(() => { 
    catchStatusCaption.textContent = 'Click! Gotcha!'; 
    playWobbleSound();
  }, 1100);

  setTimeout(() => {
    pokeballAnimationBox.style.display = 'none';

    // Play 8-bit victory catch fanfare!
    playCaptureFanfare();

    caughtPokemonImg.src = spriteUrl;
    caughtTierBadge.textContent = `${levelBadge} (${chosenPokemon.gen})`;
    caughtPokemonName.textContent = chosenPokemon.name;
    revealedPokemonContent.style.display = 'flex';

    // No emojis in banner
    modalBannerTitle.textContent = 'MISSION ACCOMPLISHED!';
    // Show the completed task name so the user knows what they just finished
    const modalTaskLabel = document.getElementById('modalTaskLabel');
    if (modalTaskLabel) {
      modalTaskLabel.textContent = `Completed: "${task.title.toUpperCase()}"`;
    }
    
    // Unique one-liner Pokédex description
    oakSpeechText.innerHTML = `
      Congratulations on completing <strong>"${escapeHTML(task.title)}"</strong>!<br><br>
      As your reward, you caught <strong>${chosenPokemon.name}</strong>!<br><br>
      <em>"${chosenPokemon.desc}"</em><br><br>
      — <strong>Professor Oak</strong>
    `;

    oakDialogueFrame.style.display = 'flex';
    claimRewardBtn.style.display = 'block';

    appTasks = appTasks.filter(t => t.id !== task.id);
    caughtPokemonList.unshift({
      ...chosenPokemon,
      caughtAt: new Date().toISOString(),
      taskTitle: task.title,
      tier: task.tier
    });

    // Advance daily streak
    incrementStreak();

    saveData();
    renderTaskList();
    caughtCountDisplay.textContent = caughtPokemonList.length;
    homeDialogueText.textContent = `Gotcha! ${chosenPokemon.name} was caught!`;
  }, 1400);
}

claimRewardBtn.addEventListener('click', () => {
  captureModal.style.display = 'none';
  const trainerUpper = homeTrainerName.textContent;
  homeDialogueText.textContent = `What will ${trainerUpper} do next?`;
});

// ============================================================================
// 5. 10-DAY STREAK EGG HATCHING SEQUENCE
// ============================================================================

function startEggHatchingSequence() {
  const chosenBaby = EGG_HATCH_POOL[Math.floor(Math.random() * EGG_HATCH_POOL.length)];
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${chosenBaby.id}.png`;

  // Prepare Egg Modal
  eggAnimationSequence.style.display = 'flex';
  hatchedPokemonReveal.style.display = 'none';
  eggOakDialogue.style.display = 'none';
  claimHatchBtn.style.display = 'none';

  crackLine1.style.opacity = '0';
  crackLine2.style.opacity = '0';
  pixelEgg.classList.remove('cracking');
  void pixelEgg.offsetWidth;
  pixelEgg.classList.add('cracking');

  eggStatusCaption.textContent = 'The Egg is shaking...';
  eggHatchModal.style.display = 'flex';

  // Egg cracking progression timeline
  setTimeout(() => {
    crackLine1.style.opacity = '1';
    eggStatusCaption.textContent = 'Crack! Something is stirring inside!';
    playCrackSound();
  }, 600);

  setTimeout(() => {
    crackLine2.style.opacity = '1';
    eggStatusCaption.textContent = 'Crack! The shell is breaking open!';
    playCrackSound();
  }, 1200);

  // Shell shatters & Pokémon is born!
  setTimeout(() => {
    eggAnimationSequence.style.display = 'none';

    // Play radiant egg hatch victory fanfare!
    playHatchFanfare();

    hatchedPokemonImg.src = spriteUrl;
    hatchedPokemonName.textContent = chosenBaby.name;
    hatchedPokemonReveal.style.display = 'flex';

    eggOakSpeechText.innerHTML = `
      "Incredible dedication, Trainer! Over 10 consecutive days, your perseverance incubated this egg! <br><br>
      Out came <strong>${chosenBaby.name}</strong>! <br>
      <em>"${chosenBaby.desc}"</em> <br><br>
      — <strong>Professor Oak</strong>
    `;

    eggOakDialogue.style.display = 'flex';
    claimHatchBtn.style.display = 'block';

    caughtPokemonList.unshift({
      ...chosenBaby,
      caughtAt: new Date().toISOString(),
      taskTitle: '10-Day Streak Milestone',
      tier: 'streak_egg'
    });

    saveData();
    caughtCountDisplay.textContent = caughtPokemonList.length;
  }, 1900);
}

claimHatchBtn.addEventListener('click', () => {
  eggHatchModal.style.display = 'none';
  streakDays = 0; // Reset streak cycle
  saveData();
  updateStreakUI();

  const trainerUpper = homeTrainerName.textContent;
  homeDialogueText.textContent = `A new 10-day streak cycle has begun! Keep up the momentum!`;
});

// ============================================================================
// 6. STORAGE & INITIALIZATION
// ============================================================================

function saveData() {
  localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(appTasks));
  localStorage.setItem(STORAGE_KEY_CAUGHT, JSON.stringify(caughtPokemonList));
  localStorage.setItem(STORAGE_KEY_STREAK, streakDays.toString());
}

function loadData() {
  try {
    const rawTasks = localStorage.getItem(STORAGE_KEY_TASKS);
    if (rawTasks) appTasks = JSON.parse(rawTasks);

    const rawCaught = localStorage.getItem(STORAGE_KEY_CAUGHT);
    if (rawCaught) caughtPokemonList = JSON.parse(rawCaught);

    const rawStreak = localStorage.getItem(STORAGE_KEY_STREAK);
    if (rawStreak) streakDays = parseInt(rawStreak, 10) || 0;
  } catch (err) {
    console.error('Storage error:', err);
  }
}

function escapeHTML(str) {
  const p = document.createElement('p');
  p.appendChild(document.createTextNode(str));
  return p.innerHTML;
}

// ============================================================================
// 6. SINNOH POKÉDEX ARCHIVE & COLLECTION DRAWER
// ============================================================================

openPokedexBtn.addEventListener('click', () => {
  renderPokedex();
  pokedexModal.style.display = 'flex';
});

closePokedexBtn.addEventListener('click', () => {
  pokedexModal.style.display = 'none';
});

pokedexModal.addEventListener('click', (e) => {
  if (e.target === pokedexModal) {
    pokedexModal.style.display = 'none';
  }
});

pokedexFilters.addEventListener('click', (e) => {
  if (!e.target.classList.contains('dex-filter-pill')) return;

  pokedexFilters.querySelectorAll('.dex-filter-pill').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  pokedexActiveFilter = e.target.dataset.filter;
  renderPokedex();
});

function renderPokedex() {
  dexEntriesCount.textContent = caughtPokemonList.length;

  // Filter based on active pill
  let filtered = caughtPokemonList;
  if (pokedexActiveFilter === 'easy') {
    filtered = caughtPokemonList.filter(p => p.tier === 'easy');
  } else if (pokedexActiveFilter === 'medium') {
    filtered = caughtPokemonList.filter(p => p.tier === 'medium');
  } else if (pokedexActiveFilter === 'hard') {
    filtered = caughtPokemonList.filter(p => p.tier === 'hard');
  } else if (pokedexActiveFilter === 'streak') {
    filtered = caughtPokemonList.filter(p => p.tier === 'streak_egg');
  }

  pokedexGrid.innerHTML = '';

  if (filtered.length === 0) {
    pokedexEmptyState.style.display = 'flex';
    return;
  }

  pokedexEmptyState.style.display = 'none';

  filtered.forEach(pokemon => {
    const card = document.createElement('div');
    const isStreak = pokemon.tier === 'streak_egg';
    card.className = `dex-card ${isStreak ? 'streak-special' : ''}`;

    const numStr = `#${String(pokemon.id).padStart(3, '0')}`;
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    let tierBadge = `<span class="dex-tier-pill tag-easy">LV.1</span>`;
    if (pokemon.tier === 'medium') tierBadge = `<span class="dex-tier-pill tag-medium">LV.2</span>`;
    if (pokemon.tier === 'hard') tierBadge = `<span class="dex-tier-pill tag-hard">LV.3</span>`;
    if (isStreak) tierBadge = `<span class="dex-tier-pill mythic-tier-pill">★ STREAK HATCH</span>`;

    const memoryTask = pokemon.taskTitle ? escapeHTML(pokemon.taskTitle) : 'Special Mission';

    card.innerHTML = `
      <div class="dex-card-top">
        <span class="dex-num-badge">${numStr}</span>
        ${tierBadge}
      </div>

      <div class="dex-sprite-wrap">
        <img src="${spriteUrl}" alt="${pokemon.name}" class="dex-sprite-img" />
      </div>

      <h4 class="dex-pokemon-name">${pokemon.name}</h4>

      <div class="dex-memory-box">
        <span class="dex-memory-label">CAPTURED BY:</span>
        <span class="dex-memory-task">"${memoryTask}"</span>
      </div>

      <p class="dex-lore-text">"${escapeHTML(pokemon.desc || '')}"</p>
    `;

    pokedexGrid.appendChild(card);
  });
}

function init() {
  loadData();

  const savedProfile = localStorage.getItem(STORAGE_KEY_PROFILE);
  if (savedProfile) {
    try {
      const parsed = JSON.parse(savedProfile);
      renderHomeScreen(parsed);
      renderTaskList();
      showScreen('home');
      return;
    } catch (err) {
      console.error(err);
    }
  }

  showScreen('registration');
}

init();
