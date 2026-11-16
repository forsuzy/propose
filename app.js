/* =========================================================
   A question for Suzy  -  change the texts here
   ========================================================= */
const NAME = "Suzy";
const MAN_LOOK = "hoodie";   // "hoodie" | "cap" | "suit"   (how the stickman looks)
const MAN_NAME = "Bahaa";   // his name (shows on his speech bubbles)
const NO_MODE = "lie";       // "lie" = heart lie detector (new)  |  "wheel" = wheel of destiny  |  "journey" = little scenes  |  "runaway" = NO runs away
const NO_JUMPS = 3;          // (runaway mode only) how many times NO runs away before the messages start

// who: "man" | "suzy" | "cat" | "duck"      girl: Suzy's pose on that line ("idle","wave","shy")
const STORY = [
  { who: "cat",  text: "Psst... " + NAME + ", someone is coming 👀" },
  { act: "walkin" },
  { who: "duck", text: "Quack! He's carrying flowers! 💐" },
  { act: "arrive" },
  { who: "suzy", text: "Flowers? For me? 🥹", girl: "shy" },
  { who: "man",  text: "Hi " + NAME + " 👋" },
  { who: "suzy", text: "Hi you 😊 Why do you look so nervous?", girl: "wave" },
  { who: "man",  text: "Me? Nervous? Never... 😅" },
  { who: "cat",  text: "His hands are shaking 😹" },
  { who: "duck", text: "Quack quack! (He practised this 100 times)" },
  { who: "man",  text: "Shhh! You two promised to stay quiet 🤫" },
  { who: "suzy", text: "Hehe okay... go on 💗", girl: "shy" },
  { who: "man",  text: "I made something just for you..." },
  { who: "man",  text: "Every day with you feels like a gift 🎁" },
  { who: "man",  text: "You make my bad days good, and my good days the best." },
  { who: "duck", text: "Awww... *wipes a tear* 🥹" },
  { who: "cat",  text: "Meow... now I'm crying too 😿" },
  { who: "suzy", text: "Stop it, you'll make me cry 🥺", girl: "shy" },
  { who: "man",  text: "From the very first day, I knew you were special." },
  { who: "man",  text: "So today, I have a very important question..." },
  { who: "cat",  text: "Here it comes!!! 🙀" },
  { who: "duck", text: "QUACK!!! 😱" }
];
const SUSPENSE = NAME + "... 💗";
const QUESTION = "Will you marry me? 💍";
const YES_BIG = "You said\nYES!";
const AFTER_YES = [
  { who: "suzy", text: "Yes!! A thousand times yes!! 💍" },
  { who: "man",  text: "You just made me the happiest person alive 💗" },
  { who: "cat",  text: "SHE SAID YES!!! 🎉" },
  { who: "duck", text: "Quack quack quack!!! 🎊" }
];
const PROMISES = [
  "I promise to laugh with you every single day",
  "To stand by you in the easy days and the hard ones",
  "To be your biggest fan and your safe place",
  "To make you smile, even when you're mad at me 😅",
  "And to choose you again, every single morning 💍"
];
const LOVE_BIG = "I love you,\n" + NAME + " ❤️";
const FINAL_TEXT = "Forever starts now, " + NAME + " 💗";
const SHOT_TEXT = "Take a screenshot and send it to me 😉";
// every press on NO plays one stage. fx: faint | rain:🌞 | sing | beg | puppy | dim | undim
const STAGES = [
  { label: "No \ud83d\ude0f", meter: 85, lines: [
    { who: "duck", text: "QUACK?! Did she just press NO?! \ud83d\ude31", fx: "faint" },
    { who: "cat",  text: "Everybody stay calm... this is fine \ud83d\ude40" },
    { who: "suzy", text: "Hehe... what if I did? \ud83d\ude0f", girl: "wave" } ] },
  { label: "Still no", meter: 68, lines: [
    { who: "cat",  text: "Psst, " + NAME + "... say yes and you get my favourite sunny spot \ud83c\udf1e", fx: "rain:\ud83c\udf1e" },
    { who: "duck", text: "And ALL of my bread \ud83c\udf5e", fx: "rain:\ud83c\udf5e,\ud83e\udd56" },
    { who: "man",  text: "And coffee in bed every morning \u2615", fx: "rain:\u2615" },
    { who: "suzy", text: "Hmm... tempting \ud83e\udd14", girl: "shy" } ] },
  { label: "Maybe no", meter: 52, lines: [
    { who: "duck", text: "Okay, time for my secret weapon... a song! \ud83c\udfa4", fx: "sing" },
    { who: "duck", text: "\u266a " + NAME + ", " + NAME + ", say yes please \u266a" },
    { who: "cat",  text: "Duck, that's not singing. That's screaming \ud83d\ude39" },
    { who: "duck", text: "It's called ART \ud83d\ude24" },
    { who: "suzy", text: "I actually love it \ud83d\ude02", girl: "wave" } ] },
  { label: "Hmm...", meter: 34, lines: [
    { who: "man",  text: "Fine. Let me give you my best reasons..." },
    { cards: ["Reason #1: I'll always share my fries with you \ud83c\udf5f (almost always)", "Reason #2: I'll laugh at every joke, even the bad ones \ud83d\ude02", "Reason #3: I'll choose you, every single day \u2764\ufe0f"] } ] },
  { label: "Maybe?", meter: 17, lines: [
    { who: "man",  text: "PLEASE \ud83e\udd7a", fx: "beg" },
    { who: "cat",  text: "PLEASE \ud83e\udd7a\ud83e\udd7a" },
    { who: "duck", text: "QUACK PLEASE \ud83e\udd7a\ud83e\udd7a\ud83e\udd7a" },
    { who: "suzy", text: "Okay okay, stop it!! \ud83e\udd2d", girl: "shy" } ] },
  { label: "OK... Yes \ud83d\udc96", meter: 3, lines: [
    { who: "cat",  text: "Oh no... not THE PUPPY EYES \ud83d\ude40", fx: "dim" },
    { who: "man",  text: "\ud83e\udd7a", fx: "puppy" },
    { who: "duck", text: "Nobody can resist those!!! \ud83d\ude2d" },
    { who: "suzy", text: "...Okay, that's not fair \ud83e\udd79", girl: "shy", fx: "undim" } ] }
];
const NO_MESSAGES = [
  "Hey! You are not allowed to choose No 🚫",
  "Wrong button 😤 try the other one",
  "Error 404: the answer 'No' was not found 💻",
  "Nice try, but only YES is available today 😌",
  "My heart can't process 'No' 💔 please press Yes",
  "I'll just wait here until you press Yes 🥺"
];

/* ========================================================= */
const $ = (id) => document.getElementById(id);
const FAST = location.search.indexOf("fast") > -1 ? 0.25 : 1;
let runId = 0, sceneId = 0, tapAction = null;
const alive = (id, sid) => id === runId && (sid === undefined || sid === sceneId);
const wait = (id, ms, sid) => new Promise((res, rej) => setTimeout(() => (alive(id, sid) ? res() : rej(new Error("cancel"))), ms * FAST));
// wait, but a tap on the screen skips the wait
const hold = (id, ms, sid) => new Promise((res, rej) => {
  const done = () => { clearTimeout(t); tapAction = null; alive(id, sid) ? res() : rej(new Error("cancel")); };
  const t = setTimeout(done, ms * FAST); tapAction = done;
});

/* ---------- background ---------- */
(function stars() {
  const box = $("stars");
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    box.appendChild(s);
  }
})();
const EMOJIS = ["💗", "💖", "💕", "💍", "✨", "💞", "🌸"];
function spawnFloaty() {
  const f = document.createElement("div");
  f.className = "floaty";
  f.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  f.style.left = Math.random() * 96 + "%";
  f.style.fontSize = 16 + Math.random() * 22 + "px";
  f.style.animationDuration = 6 + Math.random() * 5 + "s";
  $("floaters").appendChild(f);
  setTimeout(() => f.remove(), 12000);
}
let floatTimer = null;
function floatRate(ms) { clearInterval(floatTimer); floatTimer = setInterval(spawnFloaty, ms); }

/* ---------- drawings ---------- */
const WHITE = 'stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"';
const SKIN = "#ffe3d3";
const LOOKS = {
  hoodie: { top: "#ef5b6b", pants: "#3b4262", hair: "#2b2118", style: "messy" },
  cap:    { top: "#ffffff", pants: "#ffffff", hair: "#2b2118", style: "cap" },
  suit:   { top: "#2b3a8a", pants: "#2b3a8a", hair: "#5a3a22", style: "spiky" }
};
const LK = LOOKS[MAN_LOOK] || LOOKS.hoodie;
function limb(d, color) {
  if (LK.style === "cap") return '<path d="' + d + '" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
  return '<path d="' + d + '" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
    '<path d="' + d + '" stroke="' + color + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
}
const arm = (d) => limb(d, LK.top), leg = (d) => limb(d, LK.pants);
const shoe = (d) => '<path d="' + d + '" stroke="#fff" stroke-width="8" stroke-linecap="round" fill="none"/>';
const hand = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + SKIN + '" stroke="#fff" stroke-width="2"/>';
function torso(x1, y1, x2, y2, rot) {
  const d = "M" + x1 + " " + y1 + " L" + x2 + " " + y2;
  if (LK.style === "cap") return '<path d="' + d + '" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none"/>';
  let s = '<path d="' + d + '" stroke="#fff" stroke-width="32" stroke-linecap="round" fill="none"/><path d="' + d + '" stroke="' + LK.top + '" stroke-width="26" stroke-linecap="round" fill="none"/>';
  s += '<g transform="rotate(' + (rot || 0) + ' 60 66)">';
  if (LK.style === "messy") {
    s += '<path d="M44 58 Q60 78 76 58 Q74 70 60 75 Q46 70 44 58z" fill="' + LK.top + '" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M56 73 l-1 14 M64 73 l1 14" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="55" cy="88" r="2" fill="#fff"/><circle cx="65" cy="88" r="2" fill="#fff"/>' +
      '<path d="M47 98 q13 9 26 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"/>';
  } else {
    s += '<path d="M60 62 L51 73 L60 80 L69 73z" fill="#fff"/><path d="M60 76 l-4.5 6 4.5 30 4.5 -30z" fill="#e5484d"/><path d="M60 72 l-5 4 5 4 5 -4z" fill="#ff7a80"/>';
  }
  return s + '</g>';
}
function hair() {
  if (LK.style === "cap")
    return '<path d="M38 30 q-3 7 -1 11 M82 30 q3 7 1 11" stroke="' + LK.hair + '" stroke-width="4" stroke-linecap="round" fill="none"/>' +
      '<path d="M37 28 Q38 5 60 5 Q82 5 83 28 Q60 20 37 28z" fill="#3b82f6" stroke="#fff" stroke-width="2"/>' +
      '<path d="M78 25 Q102 20 106 30 Q92 34 76 30z" fill="#2563eb" stroke="#fff" stroke-width="2"/><circle cx="60" cy="6" r="3" fill="#fff"/>';
  if (LK.style === "spiky")
    return '<path d="M38 31 L38 15 L47 21 L51 7 L60 17 L69 7 L73 21 L82 15 L82 31 Q72 19 60 22 Q48 19 38 31z" fill="' + LK.hair + '" stroke="' + LK.hair + '" stroke-width="2" stroke-linejoin="round"/>';
  return '<path d="M37 32 Q34 8 56 8 Q60 1 69 7 Q86 8 83 32 Q80 22 71 20 Q62 27 54 20 Q44 24 37 32z" fill="' + LK.hair + '" stroke="' + LK.hair + '" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M70 8 Q76 1 80 6" stroke="' + LK.hair + '" stroke-width="4" stroke-linecap="round" fill="none"/>';
}
function head(mouth) {
  return '<circle cx="60" cy="34" r="22" fill="' + SKIN + '" stroke="#fff" stroke-width="5"/>' + hair() +
    '<g class="brow"><path d="M46 30 Q51 27 57 30 M63 30 Q69 27 74 30" stroke="#3a2210" stroke-width="2.8" stroke-linecap="round" fill="none"/></g>' +
    '<g class="brow-sad"><path d="M46 34 L57 29 M74 34 L63 29" stroke="#3a2210" stroke-width="3" stroke-linecap="round"/></g>' +
    '<g class="eyes"><ellipse cx="52" cy="37" rx="3.1" ry="4" fill="#3a1f5c"/><ellipse cx="68" cy="37" rx="3.1" ry="4" fill="#3a1f5c"/><circle cx="53.2" cy="35.4" r="1.2" fill="#fff"/><circle cx="69.2" cy="35.4" r="1.2" fill="#fff"/></g>' +
    '<g class="puppyspark"><circle cx="50.5" cy="33.5" r="1.6" fill="#fff"/><circle cx="66.5" cy="33.5" r="1.6" fill="#fff"/><path class="spark" d="M84 26 l1.6 4.4 4.4 1.6 -4.4 1.6 -1.6 4.4 -1.6 -4.4 -4.4 -1.6 4.4 -1.6z" fill="#fff6b0"/><path class="spark" style="animation-delay:.5s" d="M34 24 l1.2 3.3 3.3 1.2 -3.3 1.2 -1.2 3.3 -1.2 -3.3 -3.3 -1.2 3.3 -1.2z" fill="#aef5ff"/></g>' +
    (mouth || '<path class="smile" d="M49 46 q11 9 22 0" stroke="#b83a6b" stroke-width="3.2" fill="none" stroke-linecap="round"/>' +
    '<path class="frown" d="M51 52 q9 -9 18 0" stroke="#b83a6b" stroke-width="3.2" fill="none" stroke-linecap="round"/>' +
    '<g class="tears" fill="#7be0ff"><path d="M45 43 q-3 7 0 9 q3 -2 0 -9z"/><path d="M75 43 q-3 7 0 9 q3 -2 0 -9z"/></g>');
}
const BOUQUET = '<g transform="translate(32,104)"><path d="M0 0 L-6 -20 M0 0 L0 -24 M0 0 L6 -20" stroke="#5fd48a" stroke-width="3" stroke-linecap="round"/>' +
  '<circle cx="-8" cy="-27" r="7" fill="#ff5fa2"/><circle cx="0" cy="-33" r="7" fill="#ff93c8"/><circle cx="8" cy="-27" r="7" fill="#ffd166"/>' +
  '<circle cx="-8" cy="-27" r="2.5" fill="#fff6b0"/><circle cx="0" cy="-33" r="2.5" fill="#fff6b0"/><circle cx="8" cy="-27" r="2.5" fill="#fff6b0"/></g>';

function manSVG(pose) {
  let b = "";
  if (pose === "stand" || pose === "wave") {
    const rArm = pose === "wave" ? '<g class="wavearm">' + arm("M60 72 L92 52") + hand(94, 50) + '</g>' : '<g class="wavearm">' + arm("M60 72 L88 98") + hand(90, 100) + '</g>';
    b = '<g class="legL">' + leg("M56 112 L42 166") + shoe("M42 168 L28 170") + '</g><g class="legR">' + leg("M64 112 L78 166") + shoe("M78 168 L92 170") + '</g>' +
      arm("M60 72 L32 102") + rArm + torso(60, 68, 60, 110) + hand(32, 104) + BOUQUET;
  } else if (pose === "kneel") {
    b = leg("M54 112 L92 128 L92 168") + shoe("M92 170 L108 170") + leg("M54 112 L30 166") + shoe("M30 168 L8 170") +
      arm("M57 72 L40 100") + arm("M58 72 L98 62") + torso(59, 68, 55, 110, -3) + hand(40, 102) + hand(100, 62) +
      '<rect x="98" y="60" width="22" height="15" rx="3" fill="#ff5fa2"/><path d="M98 60 l3 -10 h16 l3 10z" fill="#ff93c8"/>' +
      '<circle cx="109" cy="53" r="5.5" fill="none" stroke="#ffd166" stroke-width="2.6"/><path d="M109 40 l5.5 6 h-11z" fill="#aef5ff" stroke="#fff" stroke-width="1"/>' +
      '<path class="spark" d="M126 36 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" fill="#fff6b0"/>' +
      '<path class="spark" style="animation-delay:.5s" d="M92 34 l1.6 4.4 4.4 1.6 -4.4 1.6 -1.6 4.4 -1.6 -4.4 -4.4 -1.6 4.4 -1.6z" fill="#fff"/>' +
      '<path class="spark" style="animation-delay:.9s" d="M118 20 l1.4 3.6 3.6 1.4 -3.6 1.4 -1.4 3.6 -1.4 -3.6 -3.6 -1.4 3.6 -1.4z" fill="#aef5ff"/>';
  } else { // cheer
    b = leg("M56 112 L36 164") + shoe("M36 166 L22 166") + leg("M64 112 L84 164") + shoe("M84 166 L98 166") +
      arm("M60 72 L28 38") + arm("M60 72 L92 38") + torso(60, 68, 60, 110) + hand(28, 36) + hand(92, 36);
  }
  const mouth = pose === "cheer" ? '<path d="M49 44 q11 16 22 0z" fill="#ff5a7a"/>' : null;
  return '<svg viewBox="0 0 130 200">' + b + head(mouth) + '</svg>';
}

function girlSVG(pose) {
  const A = (d) => '<path ' + WHITE + ' d="' + d + '"/>';
  const H = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + SKIN + '" stroke="#fff" stroke-width="2"/>';
  const dot = '<g class="eyes"><ellipse cx="52" cy="36" rx="3" ry="4" fill="#3a1f5c"/><ellipse cx="68" cy="36" rx="3" ry="4" fill="#3a1f5c"/><circle cx="53" cy="34.5" r="1.1" fill="#fff"/><circle cx="69" cy="34.5" r="1.1" fill="#fff"/></g>';
  const happy = '<path d="M47 37 q5 -7 10 0 M63 37 q5 -7 10 0" stroke="#3a1f5c" stroke-width="3" fill="none" stroke-linecap="round"/>';
  const wide = '<ellipse cx="52" cy="36" rx="4.2" ry="5.4" fill="#3a1f5c"/><ellipse cx="68" cy="36" rx="4.2" ry="5.4" fill="#3a1f5c"/><circle cx="53.5" cy="34" r="1.6" fill="#fff"/><circle cx="69.5" cy="34" r="1.6" fill="#fff"/>';
  const smile = '<path d="M52 45 q8 7 16 0" stroke="#d6457f" stroke-width="3" fill="none" stroke-linecap="round"/>';
  let arms, eyes, mouth = smile, extra = "";
  if (pose === "wave") { arms = A("M60 72 L38 104") + H(37, 106) + '<g class="wavearm">' + A("M60 72 L90 46") + H(92, 43) + '</g>'; eyes = dot; }
  else if (pose === "shy") { arms = A("M60 72 L40 78 L47 52") + H(47, 50) + A("M60 72 L80 78 L73 52") + H(73, 50); eyes = happy; }
  else if (pose === "shock") { arms = A("M60 72 L42 76 L52 52") + H(52, 50) + A("M60 72 L78 76 L68 52") + H(68, 50); eyes = wide; mouth = "";
    extra = '<g class="happytear" fill="#7be0ff"><path d="M43 42 q-3 7 0 9 q3 -2 0 -9z"/><path d="M77 42 q-3 7 0 9 q3 -2 0 -9z"/></g>'; }
  else if (pose === "cheer") { arms = A("M60 72 L30 40") + H(29, 38) + A("M60 72 L90 40") + H(91, 38); eyes = happy; mouth = '<path d="M50 44 q10 14 20 0z" fill="#ff5a7a"/>'; }
  else { arms = A("M60 72 L38 104") + H(37, 106) + A("M60 72 L82 104") + H(83, 106); eyes = dot; }
  return '<svg viewBox="0 0 120 200">' +
    '<path d="M37 32 Q28 62 38 84 M83 32 Q92 62 82 84" stroke="#ff7ac8" stroke-width="9" stroke-linecap="round" fill="none"/>' +
    '<path ' + WHITE + ' d="M50 138 L47 172 L36 172"/><path ' + WHITE + ' d="M70 138 L73 172 L84 172"/>' + arms +
    '<path ' + WHITE + ' d="M60 56 L60 84"/>' +
    '<path d="M60 80 L36 138 L84 138z" fill="#ff7ac8" stroke="#fff" stroke-width="3.5" stroke-linejoin="round"/>' +
    '<path d="M60 90 q-8 -9 -14 -2 q-5 7 14 20 q19 -13 14 -20 q-6 -7 -14 2z" fill="#fff" opacity=".85" transform="scale(.55) translate(49 62)"/>' +
    '<circle cx="60" cy="34" r="22" fill="' + SKIN + '" stroke="#fff" stroke-width="5"/>' +
    '<path d="M37 32 Q38 8 60 8 Q82 8 83 32 Q72 21 60 23 Q48 21 37 32z" fill="#ff7ac8"/>' +
    '<circle cx="80" cy="14" r="6" fill="#ffe27a"/><circle cx="90" cy="18" r="6" fill="#ffe27a"/><circle cx="85" cy="16" r="3" fill="#ff5fa2"/>' +
    eyes + '<circle cx="45" cy="44" r="4.5" fill="#ff8fc2" opacity=".8"/><circle cx="75" cy="44" r="4.5" fill="#ff8fc2" opacity=".8"/>' + mouth + extra + '</svg>';
}

function duckSVG() {
  return '<svg viewBox="0 0 180 190"><g transform="translate(180,0) scale(-1,1)">' +
    '<ellipse cx="70" cy="181" rx="17" ry="6" fill="#ff9f1c"/><ellipse cx="112" cy="181" rx="17" ry="6" fill="#ff9f1c"/>' +
    '<path d="M34 130 Q4 122 8 100 Q26 108 42 116z" fill="#ffc61f" stroke="#f0b823" stroke-width="2"/>' +
    '<ellipse cx="88" cy="138" rx="56" ry="44" fill="#ffd84a" stroke="#f0b823" stroke-width="2"/>' +
    '<path d="M64 124 Q92 108 114 134 Q98 162 66 154 Q52 140 64 124z" fill="#ffc61f" stroke="#f0b823" stroke-width="2"/><path d="M74 138 Q88 132 102 140" stroke="#f0b823" stroke-width="2" fill="none"/>' +
    '<circle cx="116" cy="72" r="38" fill="#ffd84a" stroke="#f0b823" stroke-width="2"/>' +
    '<path d="M106 38 Q102 20 113 26 M118 36 Q120 16 129 28" stroke="#f0b823" stroke-width="4" stroke-linecap="round" fill="none"/>' +
    '<ellipse cx="130" cy="66" rx="5" ry="6.5" fill="#3a1f5c"/><circle cx="132" cy="63" r="2" fill="#fff"/>' +
    '<ellipse cx="122" cy="84" rx="8" ry="5" fill="#ff9bb8" opacity=".75"/>' +
    '<path d="M146 74 Q176 68 178 82 Q172 94 144 90 Q150 82 146 74z" fill="#ff9f1c" stroke="#e88a0a" stroke-width="2"/><path d="M148 82 Q166 84 176 82" stroke="#e88a0a" stroke-width="2" fill="none"/>' +
    '<path d="M98 110 l-18 -10 v20z M98 110 l18 -10 v20z" fill="#4aa8ff"/><circle cx="98" cy="110" r="6" fill="#8cc8ff"/></g></svg>';
}

function catSVG() {
  return '<svg viewBox="0 0 220 250">' +
    '<g class="tail"><path d="M150 218 C190 218 200 180 184 160" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round"/></g>' +
    '<ellipse cx="110" cy="182" rx="46" ry="50" fill="#fff" stroke="#e1dcf2" stroke-width="2"/>' +
    '<ellipse cx="88" cy="230" rx="17" ry="9" fill="#fff" stroke="#e1dcf2" stroke-width="2"/><ellipse cx="132" cy="230" rx="17" ry="9" fill="#fff" stroke="#e1dcf2" stroke-width="2"/>' +
    '<path d="M56 84 L52 36 L94 64z" fill="#fff" stroke="#e1dcf2" stroke-width="2" stroke-linejoin="round"/><path d="M164 84 L168 36 L126 64z" fill="#fff" stroke="#e1dcf2" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M62 74 L60 48 L82 64z" fill="#ffc2dc"/><path d="M158 74 L160 48 L138 64z" fill="#ffc2dc"/>' +
    '<ellipse cx="110" cy="102" rx="60" ry="50" fill="#fff" stroke="#e1dcf2" stroke-width="2"/>' +
    '<path d="M80 104 q9 -11 18 0 M122 104 q9 -11 18 0" stroke="#5b4a6a" stroke-width="3.2" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="72" cy="118" rx="9" ry="5.5" fill="#ffb3cf" opacity=".75"/><ellipse cx="148" cy="118" rx="9" ry="5.5" fill="#ffb3cf" opacity=".75"/>' +
    '<ellipse cx="110" cy="114" rx="4.5" ry="3.2" fill="#ff8aa8"/>' +
    '<path d="M98 122 q12 20 24 0z" fill="#ff8aa8"/><path d="M104 130 q6 5 12 0" stroke="#ff5f88" stroke-width="2" fill="none"/>' +
    '<path d="M60 112 l-22 -4 M60 120 l-22 6 M160 112 l22 -4 M160 120 l22 6" stroke="#cfc6e6" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M110 152 l-18 -10 v20z M110 152 l18 -10 v20z" fill="#ff5fa2"/><circle cx="110" cy="152" r="6" fill="#ff93c8"/>' +
    '<path d="M110 196 q-14 -14 -22 -4 q-6 10 22 28 q28 -18 22 -28 q-8 -10 -22 4z" fill="#ff5fa2" opacity=".9"/></svg>';
}
const RINGBOX_SVG = '<svg viewBox="0 0 160 150"><rect x="20" y="66" width="120" height="70" rx="12" fill="#c2306e"/><rect x="20" y="66" width="120" height="70" rx="12" fill="url(#rb)"/>' +
  '<defs><linearGradient id="rb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac8"/><stop offset="1" stop-color="#c0307a"/></linearGradient></defs>' +
  '<path d="M20 78 q60 -42 120 0 v-14 q-60 -40 -120 0z" fill="#ff93c8"/>' +
  '<circle cx="80" cy="46" r="18" fill="none" stroke="#ffd166" stroke-width="7"/><path d="M80 14 l13 15 h-26z" fill="#aef5ff" stroke="#fff" stroke-width="2"/>' +
  '<path d="M30 26 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z M128 22 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4z" fill="#fff"/></svg>';

/* ---------- confetti + fireworks ---------- */
const cv = $("fx"), cx = cv.getContext("2d");
let parts = [], fxOn = false, W = 0, H = 0;
function fit() { const d = window.devicePixelRatio || 1; W = cv.width = innerWidth * d; H = cv.height = innerHeight * d; cx.setTransform(d, 0, 0, d, 0, 0); }
addEventListener("resize", fit); fit();
const COLORS = ["#ff4fa0", "#ffd166", "#7be0ff", "#b48cff", "#fff", "#ff8fc2", "#5fd48a"];
function confetti(n) {
  for (let i = 0; i < n; i++) parts.push({ t: "c", x: Math.random() * innerWidth, y: -20 - Math.random() * 200, vx: (Math.random() - .5) * 3, vy: 2 + Math.random() * 4, r: Math.random() * 6, vr: (Math.random() - .5) * .3, w: 6 + Math.random() * 7, h: 8 + Math.random() * 9, c: COLORS[i % COLORS.length], life: 400 });
}
function burst(x, y) {
  const c = COLORS[Math.floor(Math.random() * COLORS.length)], n = 36;
  for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2, s = 2 + Math.random() * 3.5; parts.push({ t: "f", x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, c, life: 55 + Math.random() * 25, max: 80 }); }
}
function heartsRain(n) {
  for (let i = 0; i < n; i++) parts.push({ t: "h", x: Math.random() * innerWidth, y: innerHeight + 20, vx: (Math.random() - .5) * 1.2, vy: -(1.5 + Math.random() * 2.5), s: 16 + Math.random() * 20, life: 300, e: ["💗", "💖", "💕", "💍"][i % 4] });
}
function loop() {
  requestAnimationFrame(loop);
  cx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter((p) => p.life > 0);
  for (const p of parts) {
    p.life--; p.x += p.vx; p.y += p.vy;
    if (p.t === "c") { p.r += p.vr; p.vy += .02; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore(); }
    else if (p.t === "f") { p.vy += .05; p.vx *= .985; cx.globalAlpha = Math.max(0, p.life / p.max); cx.fillStyle = p.c; cx.beginPath(); cx.arc(p.x, p.y, 2.6, 0, 7); cx.fill(); cx.globalAlpha = 1; }
    else { cx.font = p.s + "px serif"; cx.fillText(p.e, p.x, p.y); }
  }
}
loop();
let showTimer = null;
function celebrate() {
  confetti(150); heartsRain(14); for (let i = 0; i < 4; i++) setTimeout(() => burst(innerWidth * (.2 + Math.random() * .6), innerHeight * (.15 + Math.random() * .3)), i * 350);
  clearInterval(showTimer);
  showTimer = setInterval(() => { SFX.firework(); burst(innerWidth * (.15 + Math.random() * .7), innerHeight * (.12 + Math.random() * .35)); if (Math.random() < .5) confetti(30); if (Math.random() < .3) heartsRain(3); }, 1100);
}

/* ---------- audio ---------- */
const SONG_VOL = 0.25;   // music loudness (0 to 1) - lower = quieter
const SONG_FILE = "song.mp3";   // the song (put another file here to change it)
const song = SONG_FILE ? Object.assign(new Audio(SONG_FILE), { loop: true, preload: "auto" }) : { volume: 1, muted: false, play() {} };
function playSong() { try { song.volume = SONG_VOL; const p = song.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {} $("mute").classList.add("on"); }
let fadeT = 0;
function fadeSong(to, ms) { clearInterval(fadeT); const from = song.volume, t0 = performance.now(); fadeT = setInterval(() => { const p = Math.min(1, (performance.now() - t0) / ms); song.volume = Math.max(0, Math.min(1, from + (to - from) * p)); if (p >= 1) clearInterval(fadeT); }, 40); }
let duckT = 0;
SFX.onLoud = (ms) => { if (song.muted) return; fadeSong(SONG_VOL * .45, 250); clearTimeout(duckT); duckT = setTimeout(() => fadeSong(SONG_VOL, 900), ms); };
$("mute").addEventListener("click", () => { song.muted = !song.muted; SFX.mute(song.muted); $("mute").textContent = song.muted ? "🔇" : "🔊"; });

/* ---------- helpers ---------- */
let curVoice = "man";
async function typeInto(id, el, text, speed, sid) {
  let skipped = false; tapAction = () => { skipped = true; };
  el.textContent = "";
  for (const ch of Array.from(text)) {
    if (skipped) { el.textContent = text; break; }
    el.textContent += ch; if (ch.trim()) SFX.talk(curVoice); await wait(id, speed || 42, sid);
  }
  tapAction = null;
}
function scene(name, on) { $(name).classList.toggle("on", on); }
let curPose = "", curGirl = "";
function setMan(pose, cls) {
  const m = $("man");
  m.innerHTML = manSVG(pose); curPose = pose;
  ["walk", "wave", "jump", "sad", "idle", "talk"].forEach((c) => m.classList.remove(c));
  (cls || "").split(" ").filter(Boolean).forEach((c) => m.classList.add(c));
}
function setGirl(pose, cls) {
  if (pose === curGirl && !cls) return;
  const g = $("girl"); g.innerHTML = girlSVG(pose); curGirl = pose;
  ["idle", "jump", "talk"].forEach((c) => g.classList.remove(c));
  g.classList.add(...(cls || "idle").split(" ").filter(Boolean));
}
function popEmoji(emoji, el) {
  const r = (el || $("man")).getBoundingClientRect();
  const p = document.createElement("div"); p.className = "pop"; p.textContent = emoji;
  p.style.left = r.left + r.width * (.2 + Math.random() * .5) + "px"; p.style.top = r.top + r.height * .05 + "px";
  document.body.appendChild(p); setTimeout(() => p.remove(), 1600); SFX.pop();
}
document.addEventListener("pointerdown", (e) => {   // little hearts wherever you tap
  if (e.target && e.target.id === "no") return;
  SFX.unlock(); SFX.tap();
  parts.push({ t: "h", x: e.clientX - 10, y: e.clientY, vx: (Math.random() - .5) * 1.5, vy: -2.2, s: 22, life: 50, e: "💗" });
});

/* ---------- the NO button (it runs away!) ---------- */
let noJumps = 0, noMsgs = 0, noLock = false, yesScale = 1, toastTimer = null;
// a different sad reaction every time (never the same twice in a row)
const SAD = {
  droop: "💔", shake: "🙅", faint: "😵", spin: "💫", cry: "😭", stomp: "😤", melt: "🫠", shrink: "🙈"
};
let sadBag = [], lastSad = "";
function nextSad() {
  if (!sadBag.length) {
    sadBag = Object.keys(SAD).sort(() => Math.random() - .5);
    if (sadBag[sadBag.length - 1] === lastSad) sadBag.unshift(sadBag.pop());
  }
  lastSad = sadBag.pop(); return lastSad;
}
function overlap(a, b, pad) { return !(a.right + pad < b.left || a.left - pad > b.right || a.bottom + pad < b.top || a.top - pad > b.bottom); }
function jumpNo() {
  SFX.whoosh();
  const no = $("no"), bw = no.offsetWidth, bh = no.offsetHeight, pad = 12;
  const avoid = [$("yes").getBoundingClientRect(), $("question").getBoundingClientRect(), $("mute").getBoundingClientRect()];
  const cur = no.getBoundingClientRect();
  let best = null;
  for (let i = 0; i < 60; i++) {
    const x = pad + Math.random() * (innerWidth - bw - pad * 2), y = pad + Math.random() * (innerHeight - bh - pad * 2);
    const r = { left: x, top: y, right: x + bw, bottom: y + bh };
    if (avoid.some((a) => overlap(r, a, 14))) continue;
    if (Math.hypot(x - cur.left, y - cur.top) < 150) continue;
    best = { x, y }; break;
  }
  if (!best) best = { x: pad, y: innerHeight - bh - 70 };
  if (!no.classList.contains("free")) { no.style.left = cur.left + "px"; no.style.top = cur.top + "px"; no.classList.add("free"); void no.offsetWidth; }
  no.style.left = best.x + "px"; no.style.top = best.y + "px";
}
function toast(msg) {
  SFX.nope();
  const t = $("toast"); t.textContent = msg; t.classList.add("on");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("on"), 2300);
}
function sadMan(forced) {
  const m = $("man"), a = forced || nextSad();
  Object.keys(SAD).forEach((k) => m.classList.remove("a-" + k));
  m.classList.remove("sad"); void m.offsetWidth; m.classList.add("sad", "a-" + a);
  popEmoji(SAD[a]); SFX.sad(a);
  if (Math.random() < .6) { const who = Math.random() < .5 ? "cat" : "duck"; (who === "cat" ? SFX.meow() : SFX.quack()); popEmoji(who === "cat" ? ["😹", "🙀", "😿"][Math.floor(Math.random() * 3)] : ["🦆", "😮", "🤭"][Math.floor(Math.random() * 3)], $(who)); }
  try { navigator.vibrate && navigator.vibrate(80); } catch (e) {}
  clearTimeout(m._t); m._t = setTimeout(() => { m.classList.remove("sad"); Object.keys(SAD).forEach((k) => m.classList.remove("a-" + k)); }, 1700);
}
function noJump(e) {
  if (noJumps >= NO_JUMPS) return false;
  if (noLock) return true;
  noLock = true; setTimeout(() => (noLock = false), 550);
  if (e && e.preventDefault && e.cancelable) e.preventDefault();
  noJumps++; sadMan(); jumpNo();
  return true;
}
function bindNo() {
  if (NO_MODE === "lie") {
    $("no").addEventListener("click", (e) => { e.preventDefault(); startLie(); });
    const b = $("lBtn"); b.addEventListener("pointerdown", lieDown); ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => b.addEventListener(t, lieUp));
    b.addEventListener("contextmenu", (e) => e.preventDefault()); $("lYes").addEventListener("click", sayYes);
    return;
  }
  if (NO_MODE === "wheel") { $("no").addEventListener("click", (e) => { e.preventDefault(); startWheel(); }); $("spinBtn").addEventListener("click", doSpin); $("wYes").addEventListener("click", sayYes); return; }
  if (NO_MODE === "journey") {
    $("no").addEventListener("click", (e) => {
      e.preventDefault();
      if (sceneBusy) return;
      if (stageIdx >= STAGES.length) { $("yes").click(); return; }   // the last label says "OK... Yes"
      playStage();
    });
    return;
  }
  bindNoRunaway();
}
function bindNoRunaway() {
  const no = $("no");
  no.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") noJump(e); });
  no.addEventListener("pointerdown", noJump);
  no.addEventListener("touchstart", noJump, { passive: false });
  no.addEventListener("click", (e) => {
    e.preventDefault();
    if (noJumps < NO_JUMPS || noLock) return;
    noLock = true; setTimeout(() => (noLock = false), 450);
    toast(NO_MESSAGES[noMsgs % NO_MESSAGES.length]);
    noMsgs++; sadMan();
    yesScale = Math.min(1.9, 1 + noMsgs * 0.12);
    $("yes").style.setProperty("--s", yesScale);
  });
}



/* =========================================================
   NO button: the Wheel of Destiny (it is rigged, of course)
   ========================================================= */
const WHEEL_SLICES = [
  { e: "🚫", t: "NO", c: ["#6b6b86", "#26263a"] },
  { e: "🍝", t: "Dinner", c: ["#ff9bc8", "#ff3d8b"] },
  { e: "😽", t: "Cat kiss", c: ["#c9a0ff", "#7b3cff"] },
  { e: "🍞", t: "Bread", c: ["#ffd98a", "#ff9a3d"] },
  { e: "💐", t: "Flowers", c: ["#ffa3b8", "#ff4f7a"] },
  { e: "🎬", t: "Movie night", c: ["#a7b4ff", "#4f63ff"] },
  { e: "🤗", t: "Hug", c: ["#ffb5e0", "#e04aa8"] },
  { e: "💍", t: "Forever", c: ["#ffe7a3", "#f0a020"] }
];
const FINAL_LABELS = [null, ["💍", "YES"], ["💖", "SÍ"], ["✨", "OUI"], ["🌹", "JA"], ["💗", "نعم"], ["💫", "EVET"], ["💞", "はい"]];
const WHEEL_INTRO = "You pressed NO?! 😱 Let the Wheel of Destiny decide ✨";
// land = slice index, f = where inside the slice (0..1; near 0 or 1 = right next to its neighbour)
const WHEEL_STEPS = [
  { land: 1, f: .07, dur: 5.2, shrink: .6, spin: "Please don't land on NO... 🙏", next: "Phew! The NO slice just got smaller 👀", prize: ["🍝", "Romantic dinner", "valid with YES only 😏"], lines: [
    { who: "duck", text: "PHEW!! It missed NO by a whisker 😱" },
    { who: "man",  text: "The wheel knows what's best 😏" },
    { who: "suzy", text: "A romantic dinner? Hmm... 🍝", girl: "shy" } ] },
  { land: 2, f: .5, dur: 5.4, shrink: .34, spin: "Round two... 🤞", next: "NO is shrinking... 😬", prize: ["😽", "Kisses from the cat", "non-refundable"], lines: [
    { who: "cat",  text: "Prize: kisses from ME 😽" },
    { who: "duck", text: "Gross. Spin again!! 🤢" },
    { who: "suzy", text: "Hehe... I'm still thinking 😌", girl: "wave" } ] },
  { land: 3, f: .5, dur: 5.6, shrink: .16, spin: "Come on wheel... 🥚", next: "The NO slice is almost gone 👀", prize: ["🍞", "ALL the bread", "the duck is crying"], lines: [
    { who: "duck", text: "ALL MY BREAD 🍞 ...it's yours. I'm fine. 🥲" },
    { who: "cat",  text: NAME + ", this wheel is clearly rigged 😹" },
    { who: "man",  text: "Rigged? Me? Never 😇" } ] },
  { land: 4, f: .5, dur: 5.8, shrink: .05, spin: "Third time lucky? 🍀", next: "NO is basically a dot now 🔍", prize: ["💐", "Flowers every week", "for a whole year"], lines: [
    { who: "man",  text: "Flowers every week, for a whole year 💐" },
    { who: "suzy", text: "Okay... that's actually really sweet 🥹", girl: "shy" },
    { who: "duck", text: "NO is a tiny dot. A DOT. 🔍" } ] },
  { land: 7, f: .94, dur: 7.6, shrink: 0, spin: "This one decides everything... 😬", next: "The wheel is now 100% YES 💖", prize: ["💍", "Forever", "with these three idiots 😹"], lines: [
    { who: "cat",  text: "THAT WAS SO CLOSE 🙀🙀" },
    { who: "duck", text: "THE NO SLICE IS GONE!!! 🤯" },
    { who: "suzy", text: "Wait... I never even got to say yes! 🤭", girl: "shock" } ] },
  { land: 5, f: .5, dur: 6.2, shrink: null, final: true, spin: "Every slice says YES 💖", prize: ["💍", "YES!", "نعم 💖"], lines: [
    { who: "cat",  text: "THE WHEEL HAS SPOKEN!!! 🙀" },
    { who: "duck", text: "QUACK!!! (that means yes) 🎉" },
    { who: "suzy", text: "...Okay, okay. YES 🥹💍", girl: "cheer" } ] }
];
const WH = { rot: 0, w: [1, 1, 1, 1, 1, 1, 1, 1], step: 0, busy: false, open: false, final: false, size: 300, raf: 0 };
const TAU = Math.PI * 2, modTau = (x) => ((x % TAU) + TAU) % TAU;
function wheelGeom() { const tot = WH.w.reduce((a, b) => a + b, 0); let a = 0; return WH.w.map((w) => { const s = a, sz = (w / tot) * TAU; a += sz; return { s, sz }; }); }
function wheelIdx(rot) { const a = modTau(-Math.PI / 2 - rot), g = wheelGeom(); for (let i = 0; i < g.length; i++) if (WH.w[i] > 0 && a >= g[i].s && a < g[i].s + g[i].sz) return i; return 0; }
function fitWheel() {
  const size = Math.round(Math.max(190, Math.min(innerWidth * .78, innerHeight * .34, 320))); WH.size = size;
  const cv = $("wheel"), d = window.devicePixelRatio || 1;
  cv.width = cv.height = size * d; cv.style.width = cv.style.height = size + "px";
  $("wheelWrap").style.setProperty("--ws", size + "px");
}
function drawWheel() {
  const cv = $("wheel"), c = cv.getContext("2d"), S = WH.size, R = S / 2, d = cv.width / S;
  c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, S, S);
  const rad = R - 16, geo = wheelGeom();
  c.save(); c.translate(R, R);
  c.shadowColor = "rgba(255,120,200,.7)"; c.shadowBlur = 26;
  c.beginPath(); c.arc(0, 0, rad + 11, 0, 7);
  const rg = c.createLinearGradient(-R, -R, R, R); rg.addColorStop(0, "#fff0b8"); rg.addColorStop(.5, "#d9a441"); rg.addColorStop(1, "#fff0b8");
  c.fillStyle = rg; c.fill(); c.shadowBlur = 0;
  c.save(); c.rotate(WH.rot);
  geo.forEach((q, i) => {
    if (WH.w[i] <= 0.002) return;
    const sl = WHEEL_SLICES[i];
    c.beginPath(); c.moveTo(0, 0); c.arc(0, 0, rad, q.s, q.s + q.sz); c.closePath();
    const g = c.createRadialGradient(0, 0, rad * .12, 0, 0, rad); g.addColorStop(0, sl.c[0]); g.addColorStop(1, sl.c[1]);
    c.fillStyle = g; c.fill(); c.strokeStyle = "rgba(255,255,255,.7)"; c.lineWidth = 2; c.stroke();
    if (q.sz < .2) return;
    const lab = WH.final && FINAL_LABELS[i] ? FINAL_LABELS[i] : [sl.e, sl.t];
    c.save(); c.rotate(q.s + q.sz / 2); c.textAlign = "center"; c.textBaseline = "middle";
    c.font = Math.round(rad * .17) + "px serif"; c.fillText(lab[0], rad * .8, 0);
    if (q.sz > .42) {
      c.font = "800 " + Math.round(rad * .125) + 'px "Trebuchet MS", Arial, sans-serif'; c.fillStyle = "#fff";
      c.shadowColor = "rgba(40,0,40,.75)"; c.shadowBlur = 5; c.fillText(lab[1], rad * .5, 0); c.shadowBlur = 0;
    }
    c.restore();
  });
  c.restore();
  const t = Math.floor(performance.now() / 260);
  for (let i = 0; i < 24; i++) { const a = (i / 24) * TAU; c.beginPath(); c.arc(Math.cos(a) * (rad + 5.5), Math.sin(a) * (rad + 5.5), 2.6, 0, 7); c.fillStyle = (i + t) % 2 ? "#fff8d6" : "#ff7ab0"; c.fill(); }
  const hg = c.createRadialGradient(-4, -4, 2, 0, 0, rad * .2); hg.addColorStop(0, "#ffd0ea"); hg.addColorStop(1, "#ff2d7e");
  c.beginPath(); c.arc(0, 0, rad * .2, 0, 7); c.fillStyle = hg; c.fill(); c.strokeStyle = "#fff"; c.lineWidth = 3; c.stroke();
  c.font = Math.round(rad * .2) + "px serif"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillStyle = "#fff"; c.fillText("💗", 0, 2);
  c.restore();
}
function wheelLoop() { if (!WH.open) { WH.raf = 0; return; } if (!WH.busy) WH.rot += .004; drawWheel(); WH.raf = requestAnimationFrame(wheelLoop); }
function oddsText() { const w0 = WH.w[0], tot = WH.w.reduce((a, b) => a + b, 0); const p = tot > 0 ? Math.round((w0 / tot) * 100) : 0; $("wOdds").innerHTML = p <= 0 ? "Chance of NO: <b>0%</b> 💖" : "Chance of NO: <b>" + p + "%</b>"; }
function setWheelMode(m) { $("wheelWrap").classList.toggle("small", m === "small"); }
function resetWheel() {
  WH.rot = 0; WH.w = [1, 1, 1, 1, 1, 1, 1, 1]; WH.step = 0; WH.busy = false; WH.open = false; WH.final = false;
  $("wheelWrap").classList.remove("on", "small"); $("prize").classList.remove("on");
  $("spinBtn").classList.remove("off"); $("spinBtn").textContent = "SPIN 🎡";
}
function startWheel() {
  if (WH.open) return;
  WH.open = true; fitWheel(); oddsText(); setWheelMode("big");
  $("wTitle").textContent = WHEEL_INTRO; $("ask").classList.remove("on");
  $("wheelWrap").classList.add("on"); SFX.wheelOpen(); popEmoji("😱", $("man"));
  if (!WH.raf) WH.raf = requestAnimationFrame(wheelLoop);
}
function spinWheel(c, st) {
  return new Promise((res, rej) => {
    const g = wheelGeom(), tgt = g[st.land].s + g[st.land].sz * st.f, r0 = WH.rot;
    const total = modTau(-Math.PI / 2 - tgt - r0) + TAU * (5 + Math.floor(Math.random() * 2));
    const t0 = performance.now(), D = st.dur * 1000 * FAST; let last = wheelIdx(r0);
    (function step() {
      if (!alive(c.id, c.sid)) { rej(new Error("cancel")); return; }
      const p = Math.min(1, (performance.now() - t0) / D), e = 1 - Math.pow(1 - p, 4.5);
      WH.rot = r0 + total * e; const i = wheelIdx(WH.rot);
      if (i !== last) { last = i; SFX.tick(1 - p); const pt = $("pointer"); pt.classList.remove("flick"); void pt.offsetWidth; pt.classList.add("flick"); }
      if (p < 1) requestAnimationFrame(step); else res();
    })();
  });
}
function tweenNo(c, to) {
  return new Promise((res, rej) => {
    const from = WH.w[0], t0 = performance.now(), D = 1100 * FAST;
    (function step() {
      if (!alive(c.id, c.sid)) { rej(new Error("cancel")); return; }
      const p = Math.min(1, (performance.now() - t0) / D), e = p * p * (3 - 2 * p);
      WH.w[0] = from + (to - from) * e; oddsText();
      if (p < 1) requestAnimationFrame(step); else { WH.w[0] = to; oddsText(); res(); }
    })();
  });
}
async function doSpin() {
  if (WH.busy || !WH.open) return;
  WH.busy = true; const c = { id: runId, sid: sceneId }, st = WHEEL_STEPS[WH.step];
  $("spinBtn").classList.add("off"); $("wTitle").textContent = st.spin; SFX.spinStart();
  try {
    await spinWheel(c, st);
    SFX.landed(); const pr = $("prize"); pr.innerHTML = "<b>" + st.prize[0] + "</b><span>" + st.prize[1] + "</span><em>" + st.prize[2] + "</em>";
    pr.classList.add("on"); setTimeout(SFX.prize, 350); popEmoji(st.prize[0], $("man"));
    await wait(c.id, 2000, c.sid); pr.classList.remove("on");
    setWheelMode("small"); await wait(c.id, 900, c.sid);
    for (const line of st.lines) await say(c.id, line, 1400, { sid: c.sid, keep: true });
    if (st.final) { WH.step++; await wait(c.id, 400, c.sid); sayYes(); return; }
    setWheelMode("big"); await wait(c.id, 900, c.sid);
    $("wTitle").textContent = st.next;
    if (st.shrink === 0) { SFX.vanish(); await tweenNo(c, 0); WH.final = true; }
    else { SFX.shrink(); await tweenNo(c, st.shrink); }
    await wait(c.id, 900, c.sid);
    WH.step++;
    $("spinBtn").textContent = WH.step >= WHEEL_STEPS.length - 1 ? "LAST SPIN 💍" : "SPIN AGAIN 🎡";
    $("spinBtn").classList.remove("off"); WH.busy = false;
  } catch (e) { if (!(e && e.message === "cancel")) console.error(e); WH.busy = false; $("bubble").classList.remove("on"); }
}
function sayYes() {
  SFX.unlock(); sceneId++; WH.open = false; LIE.open = false; $("wheelWrap").classList.remove("on"); $("lie").classList.remove("on");
  if (yesResolve) { const r = yesResolve; yesResolve = null; r(); }
}


/* =========================================================
   NO button: the Heart Lie Detector
   Hold the heart to "confirm" your NO... and your own heart tells on you.
   ========================================================= */
const LIE_HOLD = 3200;   // ms you have to hold the heart
const LIE_TITLE = "Hmm... you pressed NO. Let's check if your heart agrees 🫀";
const LIE_START = "Hold the heart to confirm your NO 👇";
const LIE_STATUS_HOLD = ["Scanning heart... 🔍", "Heart rate rising 📈", "Pupils dilating 👀", "Cheeks turning pink 🌸", "Something doesn't add up 🤨", "Almost there... 🚨"];
const LIE_STATUS_FAIL = ["Scan interrupted 🤨 hold it again", "Your heart was racing! try again 👀", "The cat saw that 😹 hold again", "Not a tap! HOLD the heart 😏"];
const LIE_RESULT = "Her heart says YES 💖";
const LIE_LINES = [
  { who: "duck", text: "LIE DETECTED!!! QUACK 🚨" },
  { who: "cat",  text: "Told you. Hearts can't lie 😼" },
  { who: "suzy", text: "Okay okay... my heart wins 🥹", girl: "shy" },
  { who: "man",  text: "Is that a... YES? 🥺💍" }
];
const LIE = { open: false, down: false, p: 0, done: false, bpm: 72, last: 0, raf: 0, buf: [], phase: 0, fails: 0, since: 0 };
function ecgShape(ph) {
  const g = (x, c, w, a) => a * Math.exp(-((x - c) * (x - c)) / (2 * w * w));
  return g(ph, .12, .03, .12) + g(ph, .2, .008, -.15) + g(ph, .23, .012, 1) + g(ph, .26, .01, -.3) + g(ph, .42, .05, .22);
}
function fitEcg() {
  const cv = $("ecg"), d = window.devicePixelRatio || 1, w = cv.parentNode.clientWidth - 8, h = Math.round(Math.max(56, Math.min(92, innerHeight * .105)));
  cv.width = w * d; cv.height = h * d; cv.style.width = w + "px"; cv.style.height = h + "px"; LIE.w = w; LIE.h = h; LIE.buf = [];
}
function drawEcg() {
  const cv = $("ecg"), c = cv.getContext("2d"), d = cv.width / LIE.w, W = LIE.w, H = LIE.h;
  c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, W, H);
  c.strokeStyle = "rgba(255,255,255,.07)"; c.lineWidth = 1;
  for (let x = 0; x < W; x += 24) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); }
  for (let y = 0; y < H; y += 24) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
  const hot = LIE.done || LIE.p > .7, col = hot ? "#ff3b5c" : "#ff8ccb", amp = (.55 + .45 * LIE.p) * H * .42, N = Math.floor(W / 2.2);
  while (LIE.buf.length > N) LIE.buf.shift();
  c.beginPath();
  LIE.buf.forEach((v, i) => { const x = (i / N) * W, y = H * .62 - v * amp; i ? c.lineTo(x, y) : c.moveTo(x, y); });
  c.strokeStyle = col; c.lineWidth = 2.6; c.lineJoin = "round"; c.shadowColor = col; c.shadowBlur = 12; c.stroke(); c.shadowBlur = 0;
  const last = LIE.buf.length - 1; if (last > 0) { c.beginPath(); c.arc((last / N) * W, H * .62 - LIE.buf[last] * amp, 4, 0, 7); c.fillStyle = "#fff"; c.fill(); }
}
function lieLoop() {
  if (!LIE.open) { LIE.raf = 0; return; }
  const now = performance.now(), dt = Math.min(.05, (now - (LIE.last || now)) / 1000); LIE.last = now;
  if (!LIE.done) {
    if (LIE.down) LIE.p = Math.min(1, LIE.p + (dt * 1000) / (LIE_HOLD * FAST)); else LIE.p = Math.max(0, LIE.p - dt * 1.4);
  }
  const target = LIE.done ? 188 : 72 + 116 * Math.pow(LIE.p, 1.25);
  LIE.bpm += (target - LIE.bpm) * Math.min(1, dt * 4);
  LIE.phase += (dt * LIE.bpm) / 60;
  if (LIE.phase >= 1) { LIE.phase -= 1; SFX.beep(LIE.p); const h = $("lHeart"); h.classList.remove("beat"); void h.offsetWidth; h.classList.add("beat"); }
  const steps = Math.max(1, Math.round(dt * 150));
  for (let s = 0; s < steps; s++) { LIE.buf.push(ecgShape((LIE.phase + (s / steps) * (dt * LIE.bpm) / 60) % 1) + (Math.random() - .5) * .05 * (1 + LIE.p * 3)); }
  drawEcg();
  $("lBpm").textContent = Math.round(LIE.bpm); $("lBtn").style.setProperty("--p", (LIE.p * 100).toFixed(1));
  if (LIE.down && !LIE.done) $("lStatus").textContent = LIE_STATUS_HOLD[Math.min(LIE_STATUS_HOLD.length - 1, Math.floor(LIE.p * LIE_STATUS_HOLD.length))];
  if (LIE.p >= 1 && !LIE.done) { LIE.done = true; lieDetected(); }
  LIE.raf = requestAnimationFrame(lieLoop);
}
function resetLie() {
  LIE.open = false; LIE.down = false; LIE.p = 0; LIE.done = false; LIE.bpm = 72; LIE.buf = []; LIE.phase = 0;
  $("lie").classList.remove("on", "done", "alarm"); $("stamp").classList.remove("on"); $("lResult").classList.remove("on"); $("lBtn").style.setProperty("--p", 0);
}
function startLie() {
  if (LIE.open) return;
  resetLie(); LIE.open = true; $("ask").classList.remove("on");
  $("lTitle").textContent = LIE_TITLE; $("lStatus").textContent = LIE_START; $("lBpm").textContent = 72;
  $("lie").classList.add("on"); fitEcg(); SFX.wheelOpen();
  if (!LIE.raf) { LIE.last = 0; LIE.raf = requestAnimationFrame(lieLoop); }
}
function lieDown(e) { if (e) e.preventDefault(); if (!LIE.open || LIE.done) return; LIE.down = true; LIE.since = performance.now(); SFX.click(); try { e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId); } catch (x) {} }
function lieUp() {
  if (!LIE.down) return; LIE.down = false; if (LIE.done) return;
  const quick = performance.now() - LIE.since < 350;
  if (LIE.p > .12 || quick) { $("lStatus").textContent = quick ? LIE_STATUS_FAIL[3] : LIE_STATUS_FAIL[(LIE.fails++) % 3]; SFX.nope(); popEmoji(["😹", "🤣", "😏"][LIE.fails % 3], $("cat")); }
}
async function lieDetected() {
  const c = { id: runId, sid: sceneId };
  try {
    $("lie").classList.add("alarm"); SFX.alarm(); $("stamp").classList.add("on"); $("lTitle").textContent = "Analysis complete ✅";
    setTimeout(SFX.stamp, 380);
    for (const e of ["🚨", "😱", "🙀"]) { popEmoji(e, $(["man", "cat", "duck"][Math.floor(Math.random() * 3)])); }
    await wait(c.id, 1700, c.sid);
    $("lie").classList.add("done"); $("lie").classList.remove("alarm"); $("lResult").textContent = LIE_RESULT; $("lResult").classList.add("on"); SFX.love();
    await wait(c.id, 1300, c.sid);
    for (const line of LIE_LINES) await say(c.id, line, 1300, { sid: c.sid, keep: true });
    await wait(c.id, 350, c.sid); sayYes();
  } catch (e) { if (!(e && e.message === "cancel")) console.error(e); $("bubble").classList.remove("on"); }
}

/* ---------- one big heart on the LEFT and one on the RIGHT, drawn again and again after YES ---------- */
const HEART_D = "M16 27.5 C16 27.5 2.5 18.5 2.5 9.5 C2.5 5 5.8 2.3 9.4 2.3 C12.3 2.3 14.6 3.8 16 6.4 C17.4 3.8 19.7 2.3 22.6 2.3 C26.2 2.3 29.5 5 29.5 9.5 C29.5 18.5 16 27.5 16 27.5 Z";
let hdTimer = 0;
function bigHeart(side) {
  const id = "bh" + side, w = document.createElement("div"); w.className = "hd2 " + side;
  w.innerHTML = '<svg viewBox="0 0 32 30"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb5e0"/><stop offset="1" stop-color="#ff2d7e"/></linearGradient></defs><path class="hfill" d="' + HEART_D + '" fill="url(#' + id + ')"/><path class="hline" d="' + HEART_D + '" pathLength="1" stroke="#fff"/></svg>';
  return w;
}
function startHeartDraw() {
  stopHeartDraw(); const box = $("heartDraw");
  box.appendChild(bigHeart("L")); box.appendChild(bigHeart("R")); SFX.draw();
  hdTimer = setInterval(SFX.draw, 5200 * FAST);
}
function stopHeartDraw() { clearInterval(hdTimer); hdTimer = 0; const b = $("heartDraw"); if (b) b.innerHTML = ""; }
/* ---------- the story ---------- */
let yesResolve = null;
const NAMES = { man: MAN_NAME, suzy: NAME, cat: "Cat", duck: "Duck" };
const ACTOR = { man: "man", suzy: "girl", cat: "cat", duck: "duck" };
const HEART_BIG = '<svg viewBox="0 0 100 90"><defs><radialGradient id="bh" cx=".4" cy=".3" r=".9"><stop offset="0" stop-color="#ff9ad0"/><stop offset="1" stop-color="#ff2d7e"/></radialGradient></defs><path d="M50 86 C6 54 8 14 30 10 C42 8 48 16 50 22 C52 16 58 8 70 10 C92 14 94 54 50 86z" fill="url(#bh)"/></svg>';
/* put the bubble above the speaker AND above every character under it, so it never hides a face */
function placeBubble(b, actor) {
  const r = actor.getBoundingClientRect(), w = b.offsetWidth, cxs = r.left + r.width / 2;
  const left = Math.min(Math.max(8, cxs - w / 2), innerWidth - w - 8);
  let top = r.top;
  ["man", "girl", "cat", "duck"].forEach((k) => {
    const q = $(k).getBoundingClientRect();
    if (q.width && q.right > left && q.left < left + w) top = Math.min(top, q.top);
  });
  const gap = Math.min(24, r.top - top);
  b.style.left = left + "px"; b.style.bottom = innerHeight - top + 14 + "px";
  b.style.setProperty("--tail", Math.min(Math.max(26, cxs - left), w - 26) + "px");
  b.style.setProperty("--th", 12 + gap + "px");
}
async function say(id, line, holdMs, opts) {
  opts = opts || {};
  const who = line.who, actor = $(ACTOR[who]), b = $("bubble"), sid = opts.sid; curVoice = who;
  if (!opts.keep) {
    if (who === "man") { if (curPose !== "wave") setMan("wave", "wave"); } else if (curPose === "wave") setMan("stand", "idle");
    const gp = line.girl || "idle";
    if (gp !== curGirl) setGirl(gp);
  } else if (line.girl && line.girl !== curGirl) setGirl(line.girl);
  if (who === "cat") SFX.meow(); else if (who === "duck") SFX.quack();
  b.className = "bubble b-" + who; b.dataset.name = NAMES[who];
  b.querySelector(".ghost").textContent = line.text; b.querySelector(".live").textContent = "";
  placeBubble(b, actor);
  void b.offsetWidth; b.classList.add("on");
  actor.classList.add("talk");
  try {
    await typeInto(id, b.querySelector(".live"), line.text, 40, sid);
    actor.classList.remove("talk");
    await hold(id, holdMs || 1800, sid);
  } finally { actor.classList.remove("talk"); }
  b.classList.remove("on");
  await wait(id, 380, sid);
}

/* ---------- NO button, "journey" mode: every press = one little scene ---------- */
let stageIdx = 0, sceneBusy = false, sceneTimers = [];
function setMeter(v) { $("meter").classList.add("on"); $("mfill").style.width = v + "%"; $("mval").textContent = v + "%"; }
function rainEmoji(list, n) {
  for (let i = 0; i < n; i++) sceneTimers.push(setTimeout(() => parts.push({ t: "h", x: Math.random() * innerWidth, y: -30, vx: (Math.random() - .5) * .8, vy: 2 + Math.random() * 2.5, s: 26 + Math.random() * 14, life: 280, e: list[i % list.length] }), i * 90 * FAST));
}
function loopPop(el, emojis, ms) {
  const iv = setInterval(() => popEmoji(emojis[Math.floor(Math.random() * emojis.length)], el), 420 * FAST);
  sceneTimers.push(iv); sceneTimers.push(setTimeout(() => clearInterval(iv), ms * FAST));
}
function applyFx(fx) {
  if (!fx) return;
  if (fx === "sing") SFX.sing(); else if (fx === "beg") SFX.beg(); else if (fx === "puppy") SFX.sparkle(); else if (fx === "dim") SFX.swell(); else if (fx.indexOf("rain:") === 0) SFX.drops();
  if (fx === "faint") sadMan("faint");
  else if (fx.indexOf("rain:") === 0) rainEmoji(fx.slice(5).split(","), 16);
  else if (fx === "sing") { $("duck").classList.add("sing"); loopPop($("duck"), ["🎵", "🎶", "♪"], 4200); }
  else if (fx === "beg") { ["man", "cat", "duck"].forEach((k) => $(k).classList.add("beg")); loopPop($("cat"), ["🥺", "💧"], 3600); }
  else if (fx === "puppy") { $("man").classList.add("puppy"); popEmoji("✨", $("man")); }
  else if (fx === "dim") $("dim").classList.add("on");
  else if (fx === "undim") $("dim").classList.remove("on");
}
function cleanupScene() {
  sceneTimers.forEach((t) => { clearTimeout(t); clearInterval(t); }); sceneTimers = [];
  ["man", "cat", "duck"].forEach((k) => $(k).classList.remove("beg", "sing", "puppy", "talk"));
  $("dim").classList.remove("on"); $("bubble").classList.remove("on"); $("reason").classList.remove("on");
}
async function stageLine(c, line) {
  if (line.cards) {
    const el = $("reason");
    for (const t of line.cards) {
      el.textContent = t; void el.offsetWidth; el.classList.add("on"); SFX.card();
      await wait(c.id, 3200, c.sid); el.classList.remove("on"); await wait(c.id, 700, c.sid);
    }
    return;
  }
  applyFx(line.fx);
  await say(c.id, line, 1500, { sid: c.sid, keep: true });
}
async function playStage() {
  if (sceneBusy) return;
  sceneBusy = true; SFX.boing();
  const c = { id: runId, sid: ++sceneId }, st = STAGES[stageIdx];
  $("ask").classList.add("busy"); setMeter(st.meter);
  try { for (const line of st.lines) await stageLine(c, line); }
  catch (e) { cleanupScene(); sceneBusy = false; if (!(e && e.message === "cancel")) console.error(e); return; }
  cleanupScene(); setGirl("shock", "idle");
  stageIdx++;
  $("no").textContent = st.label;
  yesScale = Math.min(1.18, 1 + stageIdx * 0.03); $("yes").style.setProperty("--s", yesScale);
  if (stageIdx >= STAGES.length) $("no").classList.add("final");
  sceneBusy = false; $("ask").classList.remove("busy");
}

async function run() {
  const id = ++runId; tapAction = null;
  try {
    ["bubble", "ask", "big", "finalText", "shot", "dim", "bigHeart", "tapHint"].forEach((x) => $(x).classList.remove("on"));
    $("promises").innerHTML = ""; $("catHeart").classList.remove("on"); $("toast").classList.remove("on");
    $("replay").classList.remove("on");
    clearInterval(showTimer); parts = []; stopHeartDraw();
    const man = $("man"), girl = $("girl"), cat = $("cat"), duck = $("duck");
    man.className = "actor man"; girl.className = "actor girl"; cat.className = "actor cat idle"; duck.className = "actor duck idle";
    man.style.transition = "none"; void man.offsetWidth; man.style.transition = "";
    setMan("stand", "walk"); curGirl = ""; setGirl("idle");
    cat.innerHTML = catSVG(); duck.innerHTML = duckSVG(); $("bigHeart").innerHTML = HEART_BIG;
    const no = $("no"); no.classList.remove("free"); no.style.left = no.style.top = "";
    noJumps = 0; noMsgs = 0; noLock = false; yesScale = 1; $("yes").style.setProperty("--s", 1);
    resetWheel(); resetLie(); stageIdx = 0; sceneBusy = false; sceneId++; cleanupScene(); $("ask").classList.remove("busy");
    $("no").textContent = "No"; $("no").classList.remove("final");
    $("meter").classList.remove("on"); $("mfill").style.width = "100%"; $("mval").textContent = "100%";
    scene("stage", true);
    floatRate(1400);

    // 1. Suzy, the cat and the duck are already there
    await wait(id, 700); girl.classList.add("in"); SFX.appear("girl");
    await wait(id, 500); cat.classList.add("in"); SFX.appear("cat");
    await wait(id, 400); duck.classList.add("in"); SFX.appear("duck");
    await wait(id, 900);
    $("tapHint").classList.add("on");

    // 2. the story: they all talk
    for (const s of STORY) {
      if (s.act === "walkin") { man.classList.add("in"); SFX.steps(6); continue; }
      if (s.act === "arrive") { setMan("stand", "idle"); continue; }
      await say(id, s);
    }
    $("tapHint").classList.remove("on");

    // 3. suspense
    setMan("stand", "idle"); setGirl("shy");
    $("dim").classList.add("on"); SFX.heartbeat();
    {
      const b = $("bubble"), who = "man", actor = man;
      b.className = "bubble b-man"; b.dataset.name = MAN_NAME; b.querySelector(".ghost").textContent = SUSPENSE; b.querySelector(".live").textContent = "";
      placeBubble(b, actor);
      void b.offsetWidth; b.classList.add("on");
      await typeInto(id, b.querySelector(".live"), SUSPENSE, 130);
      await wait(id, 1800); b.classList.remove("on");
    }
    await wait(id, 500);

    // 4. the ring + the question
    setMan("kneel"); setGirl("shock", "idle");
    $("catHeart").classList.add("on"); SFX.ring();
    await wait(id, 1600);
    $("dim").classList.remove("on");
    $("question").textContent = QUESTION;
    $("ask").classList.add("on"); SFX.ask();
    await new Promise((res) => { yesResolve = res; });
    if (id !== runId) return;

    // 5. she said YES
    $("ask").classList.remove("on"); $("wheelWrap").classList.remove("on"); $("lie").classList.remove("on"); $("no").classList.remove("free"); $("toast").classList.remove("on");
    $("flash").classList.remove("go"); void $("flash").offsetWidth; $("flash").classList.add("go");
    celebrate(); floatRate(800); startHeartDraw(); SFX.yes(); for (let i = 0; i < 4; i++) setTimeout(SFX.firework, 300 + i * 350);
    [man, girl, cat, duck].forEach((a) => a.classList.remove("idle", "talk"));
    man.classList.add("joy"); girl.classList.add("joy");
    setMan("cheer", "jump"); setGirl("cheer", "jump late");
    cat.classList.add("jump", "late2"); duck.classList.add("jump", "late3");
    $("bigHeart").classList.add("on");
    $("big").textContent = YES_BIG; $("big").classList.add("on");
    await wait(id, 3400);
    $("big").classList.remove("on");
    await wait(id, 700);
    for (const l of AFTER_YES) await say(id, l, 1500);
    const box = $("promises");
    for (const p of PROMISES) {
      box.innerHTML = ""; const el = document.createElement("p"); el.textContent = p; box.appendChild(el);
      void el.offsetWidth; el.classList.add("on"); SFX.love();
      await wait(id, 3000);
      el.classList.remove("on");
      await wait(id, 900);
    }
    $("big").textContent = LOVE_BIG; $("big").classList.add("on"); SFX.confetti(); SFX.final();
    for (let i = 0; i < 5; i++) setTimeout(() => burst(innerWidth * (.15 + Math.random() * .7), innerHeight * (.12 + Math.random() * .3)), i * 300);
    await wait(id, 3800);
    $("big").classList.remove("on");
    await wait(id, 800);
    $("finalText").textContent = FINAL_TEXT; $("finalText").classList.add("on"); SFX.chime();
    await wait(id, 1500);
    $("shot").textContent = SHOT_TEXT; $("shot").classList.add("on");
    $("replay").classList.add("on");
  } catch (e) { if (!(e && e.message === "cancel")) console.error(e); }
}

$("stage").addEventListener("click", (e) => { if (e.target.closest("button")) return; if (tapAction) tapAction(); });
$("yes").addEventListener("click", sayYes);
$("ringBox").innerHTML = RINGBOX_SVG; document.documentElement.style.setProperty("--fast", FAST);
$("startTitle").textContent = "For " + NAME;
setInterval(() => { const s = document.createElement("div"); s.className = "shoot"; s.style.left = Math.random() * 70 + "%"; s.style.top = Math.random() * 35 + "%"; document.body.appendChild(s); setTimeout(() => s.remove(), 1800); }, 4200);
bindNo();
$("start").addEventListener("click", () => { SFX.unlock(); SFX.chime(); playSong(); scene("start", false); setTimeout(() => ($("start").style.display = "none"), 1000); run(); }, { once: true });
$("replay").addEventListener("click", () => { SFX.click(); yesResolve = null; run(); });
