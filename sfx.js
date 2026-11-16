/* ---------- sound effects (all synthesized live with Web Audio, no files) ---------- */
const SFX = (function () {
  let ac = null, master = null, rev = null, last = {};
  function unlock() {
    try {
      if (!ac) {
        const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
        ac = new AC(); master = ac.createGain(); master.gain.value = 1.0;
        const comp = ac.createDynamicsCompressor(); master.connect(comp); comp.connect(ac.destination);
        // small reverb send
        const len = ac.sampleRate * 1.6, buf = ac.createBuffer(2, len, ac.sampleRate);
        for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
        rev = ac.createConvolver(); rev.buffer = buf; const rg = ac.createGain(); rg.gain.value = 0.35; rev.connect(rg); rg.connect(master);
      }
      if (ac.state === "suspended") ac.resume();
    } catch (e) {}
  }
  function ok(name, gap) { const n = performance.now(); if (last[name] && n - last[name] < gap) return false; last[name] = n; return !!ac; }
  function note(f, t0, dur, o) {
    o = o || {}; const t = ac.currentTime + (t0 || 0);
    const osc = ac.createOscillator(), g = ac.createGain(), flt = ac.createBiquadFilter();
    osc.type = o.type || "sine"; osc.frequency.setValueAtTime(f, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, o.to), t + dur);
    if (o.vib) { const l = ac.createOscillator(), lg = ac.createGain(); l.frequency.value = o.vib; lg.gain.value = f * 0.02; l.connect(lg); lg.connect(osc.frequency); l.start(t); l.stop(t + dur + .1); }
    flt.type = "lowpass"; flt.frequency.value = o.lp || 5000;
    const v = o.v == null ? 0.2 : o.v, a = o.a || 0.008;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(flt); flt.connect(g); g.connect(master); if (o.rev) g.connect(rev);
    osc.start(t); osc.stop(t + dur + .05);
  }
  function noise(t0, dur, o) {
    o = o || {}; const t = ac.currentTime + (t0 || 0), n = Math.floor(ac.sampleRate * dur), buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const s = ac.createBufferSource(); s.buffer = buf; const f = ac.createBiquadFilter(); f.type = o.type || "bandpass";
    f.frequency.setValueAtTime(o.f || 2000, t); if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t + dur); f.Q.value = o.q || 1;
    const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(o.v || .15, t + (o.a || .01)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(master); if (o.rev) g.connect(rev); s.start(t); s.stop(t + dur + .05);
  }
  const P = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.7, 1318.5]; // C major pentatonic
  const api = {
    unlock,
    draw() { if (!ok("draw", 120)) return; for (let i = 0; i < 5; i++) note(900 + i * 170, i * .05, .12, { v: .035, rev: 1 }); },
    beep(k) { if (!ac) return; note(880 + 520 * k, 0, .08, { type: "sine", v: .07, lp: 4000 }); },
    alarm() { if (!ac) return; if (api.onLoud) api.onLoud(3000); for (let i = 0; i < 6; i++) note(i % 2 ? 620 : 880, i * .24, .22, { type: "square", v: .06, lp: 2200 }); },
    stamp() { if (!ac) return; noise(0, .14, { type: "lowpass", f: 400, v: .4 }); note(80, 0, .3, { v: .5, to: 40, lp: 250 }); },
    onLoud: null,
    tick(k) { if (!ok("tick", 28)) return; note(750 + 700 * k, 0, .05, { type: "square", v: .045, lp: 3200 }); },
    spinStart() { if (!ac) return; noise(0, .9, { f: 300, to: 3200, v: .1, a: .4 }); note(110, 0, .9, { type: "sawtooth", v: .035, to: 240, lp: 600 }); },
    landed() { if (!ac) return; if (api.onLoud) api.onLoud(2200); [0, .14, .28].forEach((t) => { noise(t, .12, { type: "lowpass", f: 300, v: .3 }); note(90, t, .15, { v: .35, to: 50, lp: 250 }); }); [0, 2, 4, 7].forEach((k, i) => note(P[k], .45 + i * .07, 1.3, { type: "triangle", v: .1, rev: 1 })); },
    wheelOpen() { if (!ac) return; note(P[0] / 2, 0, 1.6, { type: "triangle", v: .08, a: .5, lp: 1400, rev: 1 }); [3, 5, 7].forEach((k, i) => note(P[k], .3 + i * .1, .8, { v: .07, rev: 1 })); },
    prize() { if (!ac) return; [4, 5, 7].forEach((k, i) => note(P[k], i * .08, .5, { type: "triangle", v: .09, rev: 1 })); },
    shrink() { if (!ac) return; note(700, 0, .55, { type: "sine", v: .1, to: 70 }); noise(0, .35, { type: "highpass", f: 4500, v: .05 }); },
    vanish() { if (!ac) return; noise(0, .4, { f: 1500, to: 6000, v: .12, a: .01 }); [5, 6, 7].forEach((k, i) => note(P[k], .1 + i * .07, .6, { v: .08, rev: 1 })); },
    mute(m) { if (master) master.gain.value = m ? 0 : 1.0; },
    // typing "voices": each character talks a little differently
    talk(who) {
      if (!ok("talk", 62)) return; const r = Math.random();
      if (who === "man") note(150 + r * 40, 0, .07, { type: "triangle", v: .07, lp: 900 });
      else if (who === "suzy") note(520 + r * 140, 0, .08, { type: "sine", v: .06, lp: 3000 });
      else if (who === "cat") note(700 + r * 160, 0, .09, { type: "triangle", v: .05, to: 520 + r * 100, lp: 2500 });
      else note(300 + r * 60, 0, .06, { type: "square", v: .03, lp: 1100 });
    },
    click() { if (!ok("click", 60)) return; note(880, 0, .08, { type: "triangle", v: .12 }); note(1320, .04, .1, { type: "sine", v: .08 }); },
    tap() { if (!ok("tap", 80)) return; note(1500 + Math.random() * 400, 0, .12, { v: .035, rev: 1 }); },
    pop() { if (!ok("pop", 90)) return; note(420, 0, .09, { type: "sine", v: .12, to: 900 }); },
    chime() { [0, 2, 4, 7].forEach((k, i) => note(P[k], i * .09, .9, { v: .1, rev: 1 })); },
    appear(kind) { // an actor walks into the scene
      if (!ac) return;
      if (kind === "cat") { note(900, 0, .35, { type: "sine", v: .09, to: 500, vib: 12, rev: 1 }); note(700, .05, .3, { type: "triangle", v: .05, to: 480 }); }
      else if (kind === "duck") { api.quack(); }
      else { api.pop(); note(1046, .08, .35, { v: .08, rev: 1 }); }
    },
    steps(n) { if (!ac) return; for (let i = 0; i < (n || 6); i++) { noise(i * .32, .09, { type: "lowpass", f: 400, v: .22 }); note(90, i * .32, .1, { v: .12, to: 55 }); } },
    meow() { if (!ok("meow", 200)) return; note(620, 0, .5, { type: "triangle", v: .1, to: 380, vib: 9, lp: 2600 }); note(880, 0, .3, { type: "sine", v: .04, to: 560 }); },
    quack() { if (!ok("quack", 200)) return; note(420, 0, .17, { type: "sawtooth", v: .09, to: 300, lp: 1400 }); note(400, .2, .15, { type: "sawtooth", v: .08, to: 260, lp: 1300 }); },
    whoosh() { if (!ac) return; noise(0, .45, { f: 500, to: 3500, q: .8, v: .14, a: .2 }); },
    boing() { if (!ac) return; note(180, 0, .45, { type: "sine", v: .2, to: 520, vib: 14 }); },
    nope() { if (!ac) return; note(300, 0, .14, { type: "square", v: .06, lp: 900 }); note(220, .16, .2, { type: "square", v: .06, lp: 800 }); },
    heartbeat() { if (!ac) return; [0, .22, 1.0, 1.22].forEach((t) => note(70, t, .18, { v: .5, to: 45, lp: 300 })); },
    ring() { if (!ac) return; [0, 3, 5, 7].forEach((k, i) => note(P[Math.min(k + 1, 7)], i * .11, 1.2, { v: .09, rev: 1 })); note(2093, .5, .8, { v: .04, rev: 1 }); },
    ask() { if (!ac) return; note(P[2], 0, .5, { v: .1, rev: 1 }); note(P[4], .12, .7, { v: .1, rev: 1 }); },
    // sad sounds, one per sad animation
    sad(kind) {
      if (!ac) return; if (api.onLoud) api.onLoud(1400);
      const slide = (f, d, t0) => note(f, t0 || 0, d, { type: "triangle", v: .13, to: f * .45, lp: 1500, vib: 6, rev: 1 });
      switch (kind) {
        case "faint": slide(520, .9); noise(.8, .15, { type: "lowpass", f: 300, v: .3 }); note(70, .8, .2, { v: .4, to: 40 }); break;
        case "spin": note(300, 0, .8, { type: "sine", v: .12, to: 1200, vib: 10 }); note(1200, .8, .35, { type: "sine", v: .1, to: 200 }); break;
        case "cry": for (let i = 0; i < 4; i++) note(700 - i * 40, i * .22, .2, { type: "sine", v: .09, to: 520 - i * 40, vib: 8, rev: 1 }); break;
        case "stomp": for (let i = 0; i < 3; i++) { noise(i * .2, .1, { type: "lowpass", f: 250, v: .35 }); note(80, i * .2, .12, { v: .4, to: 45 }); } break;
        case "melt": note(500, 0, 1.1, { type: "sine", v: .13, to: 90, vib: 7, rev: 1 }); noise(.2, .8, { type: "lowpass", f: 600, to: 150, v: .08 }); break;
        case "shrink": note(900, 0, .6, { type: "sine", v: .12, to: 2000 }); note(2000, .6, .15, { type: "sine", v: .08 }); break;
        case "shake": for (let i = 0; i < 6; i++) note(260 + (i % 2) * 40, i * .07, .09, { type: "square", v: .04, lp: 700 }); slide(380, .5, .4); break;
        default: slide(420, .8); // droop
      }
    },
    drops() { if (!ac) return; for (let i = 0; i < 8; i++) note(1800 + Math.random() * 1400, i * .13 + Math.random() * .05, .12, { v: .04, to: 1000, rev: 1 }); },
    sing() { if (!ac) return; [4, 2, 3, 1, 2, 0].forEach((k, i) => note(P[k] / 2, i * .38, .5, { type: "triangle", v: .08, vib: 6, lp: 2000, rev: 1 })); },
    beg() { if (!ac) return; note(560, 0, .35, { type: "sine", v: .1, to: 760, vib: 8, rev: 1 }); note(740, .4, .45, { type: "sine", v: .09, to: 520, vib: 8, rev: 1 }); },
    sparkle() { if (!ac) return; [5, 6, 7, 5, 7].forEach((k, i) => note(P[k], i * .06, .35, { v: .06, rev: 1 })); },
    card() { if (!ac) return; noise(0, .25, { f: 1200, to: 4000, q: .6, v: .07, a: .1 }); note(P[2], .15, .6, { v: .06, rev: 1 }); },
    swell() { if (!ac) return; [0, 2, 4].forEach((k) => note(P[k] / 2, 0, 1.4, { type: "triangle", v: .08, a: .6, lp: 1200, rev: 1 })); },
    // celebration
    yes() {
      if (!ac) return; if (api.onLoud) api.onLoud(4500); noise(0, .6, { f: 800, to: 6000, v: .12, a: .3 });
      [0, 2, 4, 7, 5, 7].forEach((k, i) => note(P[k] * (i > 3 ? 1 : 1), .15 + i * .09, .9, { type: "triangle", v: .12, rev: 1 }));
      [0, 4, 7].forEach((k) => note(P[k] / 2, .6, 1.6, { type: "triangle", v: .1, rev: 1 }));
      note(55, .5, .6, { v: .4, to: 40, lp: 200 });
    },
    firework() {
      if (!ok("fw", 250)) return; noise(0, .12, { f: 3000, to: 800, v: .12, a: .005 });
      noise(.12, .6, { type: "highpass", f: 3500, v: .09, a: .02, rev: 1 }); note(100, .1, .3, { v: .3, to: 40, lp: 250 });
    },
    confetti() { if (!ac) return; noise(0, .25, { f: 2500, to: 6000, v: .12, a: .01 }); for (let i = 0; i < 6; i++) note(1200 + Math.random() * 1800, i * .04, .08, { v: .04 }); },
    love() { if (!ac) return; [0, 2, 4, 5, 7].forEach((k, i) => note(P[k], i * .13, 1.2, { v: .09, rev: 1 })); },
    final() { if (!ac) return; [0, 2, 4, 7, 4, 7, 9 > 7 ? 7 : 7].forEach((k, i) => note(P[k] * (i > 5 ? 2 : 1), i * .16, 1.4, { v: .08, rev: 1 })); }
  };
  return api;
})();
