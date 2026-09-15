/* ==========================================================================
   FOZIYA / HEER - CINEMATIC LOVE WEBSITE SCRIPT
   ========================================================================== */

// 1. CONFIGURATION OBJECT
const CONFIG = {
  herName: "Foziya",
  nickname: "Heer",
  herPhotoCount: 10,
  diaryPhotoCount: 18,
  myPhoto: "./assets/us/my-photo.jpg",
  herFinalPhoto: "./assets/us/her-photo.jpg",
  music: "./assets/music/our-song.mp3"
};

// 2. HER PHOTOS DATA ARRAY
const herPhotosData = [
  {
    src: "./assets/her/her1.jpg",
    quote: "So this is the gorgeous girl I was talking about... apparently she also comes with a built-in comedy mode. 😂",
    sub: "my little troublemaker ♡",
    type: "flash"
  },
  {
    src: "./assets/her/her2.jpg",
    quote: "Okay... enough with the cuteness. You're making it very difficult for me to act normal.",
    sub: null,
    type: "soft"
  },
  {
    src: "./assets/her/her3.jpg",
    quote: "I swear, you don't even have to try... you just exist and somehow make everything prettier.",
    sub: null,
    type: "parallax"
  },
  {
    src: "./assets/her/her4.jpg",
    quote: "Excuse me... who gave you permission to look THIS beautiful?",
    sub: "Seriously, Heer?",
    type: "vertical"
  },
  {
    src: "./assets/her/her5.jpg",
    quote: "One beautiful picture wasn't enough, was it? You had to make me fall for you twice.",
    sub: null,
    type: "tilt3d"
  },
  {
    src: "./assets/her/her6.jpg",
    quote: "Maybe this is just a picture... but if I could choose one little world to stay in forever, I'd choose the one where it's you and me.",
    sub: "you + me ♡",
    type: "ghibli"
  },
  {
    src: "./assets/her/her7.jpg",
    quote: "Even with the whole world around you... somehow, you're still the first thing I notice.",
    sub: null,
    type: "sand"
  },
  {
    src: "./assets/her/her8.jpg",
    quote: "Okay Heer... I genuinely don't know what I'm supposed to do with this much beauty.",
    sub: "You're unreal.",
    type: "blur"
  },
  {
    src: "./assets/her/her9.jpg",
    quote: "I could write a thousand things about how beautiful you are... and I'd still feel like I haven't said enough.",
    sub: null,
    type: "spotlight"
  },
  {
    src: "./assets/her/her10.jpg",
    quote: null,
    sub: null,
    type: "childhood",
    childhoodLines: [
      { text: "Wait...", delay: 0 },
      { text: "THIS is you? 😂", delay: 1, highlight: true },
      { text: "You were this tiny...", delay: 2 },
      { text: "and somehow you already had that \"I'm going to be trouble\" energy.", delay: 3 },
      { text: "If I could go back for a minute...", delay: 4 },
      { text: "I'd tell this little girl that one day, someone is going to love her more than she could imagine.", delay: 5, highlight: true },
      { text: "And somehow, I became that someone. ❤️", delay: 6.5, highlight: true }
    ]
  }
];

// 3. DIARY PHOTOS ARRAY
const diaryPhotos = Array.from(
  { length: CONFIG.diaryPhotoCount },
  (_, i) => `./assets/diary/diary${i + 1}.jpg`
);

// 4. LOVE LETTER EXACT TEXT PARAGRAPHS
const loveLetterParagraphs = [
  "Foziya, I don't know if I'll ever be able to properly explain what your little efforts mean to me.",
  "Maybe when you made that diary, you thought you were just making something cute for me.",
  "Maybe the drawings were just drawings, the envelopes were just envelopes, and all those little details were just little things.",
  "But I saw something much bigger in them.",
  "I saw your time.",
  "I saw your effort.",
  "I saw the thought you put into every little thing.",
  "And I kept thinking about you while looking at all those pages.",
  "Not just the things you made...",
  "but the person who sat down and made them.",
  "That's what makes them priceless to me.",
  "I notice the little things.",
  "I notice the effort.",
  "I notice the things you probably think are too small to matter.",
  "And I want you to know that they matter to me.",
  "Thank you for every page.",
  "Every drawing.",
  "Every little detail.",
  "Every silly thing.",
  "Every beautiful thing.",
  "But most of all...",
  "thank you for being you.",
  "You're my gorgeous girl.",
  "My cute girl.",
  "My little troublemaker.",
  "My favorite person.",
  "And the girl who somehow became such a huge part of my heart.",
  "I don't know exactly what the future will look like.",
  "But I know I want more memories with you.",
  "More photographs.",
  "More stupid jokes.",
  "More little moments.",
  "More pages.",
  "More reasons to smile when I think about you.",
  "So if you ever wonder whether your efforts mattered...",
  "they did.",
  "More than you know.",
  "And if you ever wonder whether I appreciate you...",
  "I do.",
  "More than I can explain.",
  "And if you ever wonder how much I love you...",
  "well...",
  "I think you already know.",
  "But I'm going to say it anyway."
];

// ==========================================================================
// MISSING IMAGE FALLBACK GENERATOR
// ==========================================================================
function generateFallbackCanvas(title, width = 600, height = 800) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#1a080d");
  grad.addColorStop(1, "#080305");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Borders
  ctx.strokeStyle = "#4a0e17";
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, width - 20, height - 20);

  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // Content Text
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillStyle = "#d4af37";
  ctx.font = "italic 24px 'Cormorant Garamond', serif";
  ctx.fillText("♡ HEER & FOZIYA ♡", width / 2, height / 2 - 40);

  ctx.fillStyle = "#f7e7ce";
  ctx.font = "bold 28px 'Cormorant Garamond', serif";
  ctx.fillText(title, width / 2, height / 2 + 10);

  ctx.fillStyle = "#a39893";
  ctx.font = "16px 'Inter', sans-serif";
  ctx.fillText("Memory Card", width / 2, height / 2 + 50);

  return canvas.toDataURL("image/jpeg");
}

function setupImageFallback(imgElement, fallbackTitle, src) {
  imgElement.onerror = function() {
    console.warn("Missing image: " + src);
    imgElement.onerror = null;
    imgElement.src = generateFallbackCanvas(fallbackTitle);
  };
}

// ==========================================================================
// DOM BUILDERS FOR HER PHOTOS & LOVE LETTER
// ==========================================================================
function initDomElements() {
  // Render Her Photos 1-5
  const container1 = document.getElementById("her-photos-1-container");
  herPhotosData.slice(0, 5).forEach((data, index) => {
    const card = createPhotoCardDom(data, index + 1);
    container1.appendChild(card);
  });

  // Render Her Photos 6-10
  const container2 = document.getElementById("her-photos-2-container");
  herPhotosData.slice(5, 10).forEach((data, index) => {
    const card = createPhotoCardDom(data, index + 6);
    container2.appendChild(card);
  });

  // Render Love Letter Paragraphs
  const letterContainer = document.getElementById("letter-content");
  loveLetterParagraphs.forEach((paraText) => {
    const p = document.createElement("p");
    p.textContent = paraText;
    letterContainer.appendChild(p);
  });

  // Setup Image Fallbacks for Us Photos
  const imgMy = document.getElementById("img-my");
  const imgHer = document.getElementById("img-her-us");
  setupImageFallback(imgMy, "My Photo", CONFIG.myPhoto);
  setupImageFallback(imgHer, "Her Photo", CONFIG.herFinalPhoto);
}

function createPhotoCardDom(data, num) {
  const card = document.createElement("div");
  card.className = `her-photo-card card-her-${num} ${data.type || ''}`;
  card.id = `her-card-${num}`;

  const frameContainer = document.createElement("div");
  frameContainer.className = "photo-frame-container";

  if (data.type === "flash") {
    const flash = document.createElement("div");
    flash.className = "flash-effect";
    frameContainer.appendChild(flash);
  }

  const img = document.createElement("img");
  img.className = "her-img";
  img.alt = `Heer Photo ${num}`;
  img.src = data.src;
  setupImageFallback(img, `Heer Photo #${num}`, data.src);
  frameContainer.appendChild(img);

  card.appendChild(frameContainer);

  const quoteBox = document.createElement("div");
  quoteBox.className = "photo-quote-box";

  if (data.type === "childhood") {
    quoteBox.className += " childhood-sequence";
    const subContainer = document.createElement("div");
    subContainer.className = "childhood-sublines";
    data.childhoodLines.forEach((lineObj, idx) => {
      const lineSpan = document.createElement("div");
      lineSpan.className = `childhood-line line-${idx} ${lineObj.highlight ? 'highlight' : ''}`;
      lineSpan.textContent = lineObj.text;
      subContainer.appendChild(lineSpan);
    });
    quoteBox.appendChild(subContainer);
  } else {
    if (data.quote) {
      const q = document.createElement("p");
      q.className = "quote-text";
      q.textContent = `"${data.quote}"`;
      quoteBox.appendChild(q);
    }
    if (data.sub) {
      const sub = document.createElement("p");
      sub.className = "sub-text";
      sub.textContent = data.sub;
      quoteBox.appendChild(sub);
    }
  }

  card.appendChild(quoteBox);
  return card;
}

// ==========================================================================
// THREE.JS 3D ENGINE (Dust Particles, 3D Diary Stack, Hearts, Curtains)
// ==========================================================================
let scene, camera, renderer;
let dustParticles;
let diaryGroup, diaryMeshCards = [];
let heartGroup, heartInstancedMesh;
let curtainLeft, curtainRight, curtainGroup;

function initThreeEngine() {
  const canvas = document.getElementById("webgl-canvas");
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050505, 0.035);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 10);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xfff0e6, 0.8);
  scene.add(ambientLight);

  const mainSpotlight = new THREE.SpotLight(0xd4af37, 2.5);
  mainSpotlight.position.set(0, 15, 12);
  mainSpotlight.angle = Math.PI / 4;
  mainSpotlight.penumbra = 0.8;
  mainSpotlight.castShadow = true;
  scene.add(mainSpotlight);

  const redFill = new THREE.PointLight(0x7a121d, 1.5, 30);
  redFill.position.set(-8, -4, 5);
  scene.add(redFill);

  // 1. DUST PARTICLES
  buildDustParticles();

  // 2. 3D DIARY MESH CARDS
  build3DDiaryCards();

  // 3. 3D HEART PARTICLES
  build3DHearts();

  // 4. 3D VELVET CURTAINS
  build3DCurtains();

  window.addEventListener("resize", onWindowResize);
  animateLoop();
}

// Dust Particles
function buildDustParticles() {
  const count = window.innerWidth < 768 ? 150 : 350;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    scales[i] = Math.random() * 0.08 + 0.02;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

  const material = new THREE.PointsMaterial({
    color: 0xf7e7ce,
    size: 0.12,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending
  });

  dustParticles = new THREE.Points(geometry, material);
  scene.add(dustParticles);
}

// 3D Diary Cards
function build3DDiaryCards() {
  diaryGroup = new THREE.Group();
  diaryGroup.position.set(0, 0, -20); // Hidden by default
  scene.add(diaryGroup);

  const textureLoader = new THREE.TextureLoader();

  for (let i = 0; i < CONFIG.diaryPhotoCount; i++) {
    const cardGeom = new THREE.BoxGeometry(3.2, 4.2, 0.04);
    
    // Load texture with fallback handling
    const imgSrc = diaryPhotos[i];
    const texture = textureLoader.load(
      imgSrc,
      undefined,
      undefined,
      function() {
        console.warn("Missing image: " + imgSrc);
        const fallbackSrc = generateFallbackCanvas(`Diary Page #${i + 1}`, 600, 800);
        textureLoader.load(fallbackSrc, (tex) => {
          materials[4].map = tex;
          materials[4].needsUpdate = true;
        });
      }
    );

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x12080a, roughness: 0.8 }), // right
      new THREE.MeshStandardMaterial({ color: 0x12080a, roughness: 0.8 }), // left
      new THREE.MeshStandardMaterial({ color: 0x12080a, roughness: 0.8 }), // top
      new THREE.MeshStandardMaterial({ color: 0x12080a, roughness: 0.8 }), // bottom
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.4 }),    // front
      new THREE.MeshStandardMaterial({ color: 0x0a0406, roughness: 0.9 })  // back
    ];

    const cardMesh = new THREE.Mesh(cardGeom, materials);
    cardMesh.castShadow = true;
    cardMesh.receiveShadow = true;

    // Stack positioning
    cardMesh.position.set(0, 0, -i * 0.6);
    cardMesh.rotation.z = (Math.random() - 0.5) * 0.08;
    cardMesh.visible = false;

    diaryGroup.add(cardMesh);
    diaryMeshCards.push(cardMesh);
  }
}

// 3D Hearts
function build3DHearts() {
  heartGroup = new THREE.Group();
  heartGroup.position.set(0, 0, -50);
  scene.add(heartGroup);

  // Shape for 3D Heart Mesh
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();
  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
  heartShape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
  heartShape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 0.95);
  heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
  heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
  heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

  const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.04, bevelThickness: 0.04 };
  const heartGeom = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  heartGeom.center();

  const heartMat = new THREE.MeshStandardMaterial({
    color: 0x991b24,
    roughness: 0.3,
    metalness: 0.2,
    emissive: 0x4a0e17,
    emissiveIntensity: 0.4
  });

  const count = window.innerWidth < 768 ? 120 : 250;
  heartInstancedMesh = new THREE.InstancedMesh(heartGeom, heartMat, count);

  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    dummy.position.set(
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 25
    );
    dummy.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    const s = Math.random() * 0.8 + 0.3;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    heartInstancedMesh.setMatrixAt(i, dummy.matrix);
  }

  heartGroup.add(heartInstancedMesh);
}

// 3D Velvet Curtains
function build3DCurtains() {
  curtainGroup = new THREE.Group();
  curtainGroup.position.set(0, 0, 4); // In front of main camera view when closed
  curtainGroup.visible = false;
  scene.add(curtainGroup);

  const width = 12;
  const height = 14;
  const geom = new THREE.PlaneGeometry(width, height, 32, 32);

  // Add realistic curtain cloth waves to geometry vertices
  const pos = geom.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const vx = pos.getX(i);
    const vy = pos.getY(i);
    const wave = Math.sin(vx * 2.5) * 0.4 + Math.cos(vy * 1.5) * 0.15;
    pos.setZ(i, wave);
  }
  geom.computeVertexNormals();

  const curtainMat = new THREE.MeshStandardMaterial({
    color: 0x3d070d,
    roughness: 0.6,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  curtainLeft = new THREE.Mesh(geom, curtainMat);
  curtainLeft.position.set(-width / 2 - 4, 0, 0); // Open position

  curtainRight = new THREE.Mesh(geom, curtainMat);
  curtainRight.position.set(width / 2 + 4, 0, 0); // Open position

  curtainGroup.add(curtainLeft);
  curtainGroup.add(curtainRight);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animateLoop() {
  requestAnimationFrame(animateLoop);

  // Slow ambient rotation of dust
  if (dustParticles) {
    dustParticles.rotation.y += 0.0005;
    dustParticles.rotation.x += 0.0002;
  }

  // Slow ambient movement of hearts
  if (heartGroup && heartGroup.visible) {
    heartGroup.rotation.y += 0.002;
  }

  renderer.render(scene, camera);
}

// ==========================================================================
// GSAP & SCROLLTRIGGER TIMELINE
// ==========================================================================
function initScrollTimeline() {
  gsap.registerPlugin(ScrollTrigger);

  // SCENE 1: TYPEWRITER OPENING
  runOpeningTypewriter();

  // SCENE 2: FOZIYA HERO TITLE SCALING
  gsap.to("#hero-title", {
    scrollTrigger: {
      trigger: "#scene-intro",
      start: "top top",
      end: "bottom top",
      scrub: 1
    },
    scale: 3.5,
    opacity: 0,
    ease: "power2.inOut"
  });

  // SCENE 3 & 6: HER PHOTO CARDS ANIMATIONS
  herPhotosData.forEach((data, idx) => {
    const cardNum = idx + 1;
    const cardEl = document.getElementById(`her-card-${cardNum}`);
    if (!cardEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardEl,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play reverse play reverse"
      }
    });

    tl.to(cardEl, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Special effects per card type
    if (data.type === "flash") {
      const flashEl = cardEl.querySelector(".flash-effect");
      tl.to(flashEl, { opacity: 1, duration: 0.08 }, 0.2)
        .to(flashEl, { opacity: 0, duration: 0.6 }, 0.3);
    } else if (data.type === "blur") {
      const imgEl = cardEl.querySelector(".her-img");
      tl.to(imgEl, { filter: "blur(0px) brightness(1)", duration: 1.2 }, 0.2);
    } else if (data.type === "childhood") {
      const lines = cardEl.querySelectorAll(".childhood-line");
      lines.forEach((line, lIdx) => {
        tl.to(line, { opacity: 1, y: 0, duration: 0.8 }, 0.5 + lIdx * 0.7);
      });
    }
  });

  // SCENE 4: DIARY INTRO TEXT LINES
  gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-diary-intro",
      start: "top 60%",
      end: "bottom 40%",
      scrub: 1
    }
  })
  .to(".diary-intro-text.line-1", { opacity: 1, y: 0, duration: 1 })
  .to(".diary-intro-text.line-2", { opacity: 1, y: 0, duration: 1 }, "+=0.5")
  .to(".diary-intro-text.line-3", { opacity: 1, y: 0, duration: 1 }, "+=0.5");

  // SCENE 5: 3D DIARY INTERACTIVE SCROLL
  const diaryTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-diary",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onEnter: () => {
        diaryGroup.position.set(0, 0, 0);
        document.getElementById("diary-counter").parentNode.style.opacity = "1";
      },
      onLeave: () => {
        document.getElementById("diary-counter").parentNode.style.opacity = "0";
      },
      onEnterBack: () => {
        document.getElementById("diary-counter").parentNode.style.opacity = "1";
      },
      onLeaveBack: () => {
        document.getElementById("diary-counter").parentNode.style.opacity = "0";
      }
    }
  });

  const hudCounter = document.getElementById("diary-counter");

  // Cycle through 18 physical 3D cards
  diaryMeshCards.forEach((cardMesh, i) => {
    diaryTL.to(cardMesh, {
      onStart: () => {
        cardMesh.visible = true;
        const numStr = (i + 1).toString().padStart(2, '0');
        if (hudCounter) hudCounter.textContent = `${numStr} / 18`;
      },
      z: 5, // Bring card forward towards camera
      rotationY: (i % 2 === 0 ? 0.3 : -0.3),
      rotationX: (i % 3 === 0 ? 0.15 : -0.1),
      opacity: 0,
      duration: 1,
      ease: "power1.inOut"
    });
  });

  // Outro text at end of diary
  diaryTL.to("#diary-outro-box", { opacity: 1, duration: 1.5 })
         .to("#diary-outro-box", { opacity: 0, duration: 1 }, "+=1");

  // SCENE 7: LOVE LETTER SENTENCE REVEAL
  const letterParagraphs = document.querySelectorAll("#letter-content p");
  letterParagraphs.forEach((p) => {
    gsap.to(p, {
      scrollTrigger: {
        trigger: p,
        start: "top 75%",
        end: "bottom 35%",
        toggleClass: "active-line"
      }
    });
  });

  // SCENE 8: OUR PHOTOS MERGE
  const usTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-us-photos",
      start: "top 40%",
      end: "bottom 60%",
      scrub: 1
    }
  });

  usTL.to("#card-my", { x: -30, rotate: 0, duration: 2 })
      .to("#card-her", { x: 30, rotate: 0, duration: 2 }, 0)
      .to("#card-my", { x: 0, scale: 1.05, duration: 1 }, 2)
      .to("#card-her", { x: 0, scale: 1.05, duration: 1 }, 2)
      .to("#us-merged-title", { opacity: 1, scale: 1, duration: 1.2 }, 3);

  // SCENE 9 & 10: CLIMAX TYPEWRITER, EXTREME ZOOM & 3D HEARTS
  const climaxText = document.getElementById("climax-text");
  const fullText = "I LOVE YOU";
  
  const climaxTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-love-climax",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });

  // Typewriter step progression
  for (let i = 1; i <= fullText.length; i++) {
    const subStr = fullText.substring(0, i);
    climaxTL.to({}, {
      duration: 0.5,
      onStart: () => {
        if (climaxText) climaxText.textContent = subStr;
      }
    });
  }

  // Extreme Zoom into screen
  climaxTL.to("#climax-container", {
    scale: 18,
    opacity: 0,
    duration: 3,
    ease: "power3.in"
  });

  // 3D Hearts & Curtains Closing (Scene 11 & 12)
  const finaleTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-finale",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onEnter: () => {
        if (heartGroup) heartGroup.position.set(0, 0, 0);
        if (curtainGroup) curtainGroup.visible = true;
      }
    }
  });

  finaleTL.to("#hearts-center-message", { opacity: 1, duration: 1.5 })
         .to("#hearts-center-message", { opacity: 0, duration: 1 }, "+=1")
         // Close 3D Curtains
         .to(curtainLeft.position, { x: -3, duration: 3, ease: "power2.inOut" }, 3)
         .to(curtainRight.position, { x: 3, duration: 3, ease: "power2.inOut" }, 3)
         .to("#curtains-message", { opacity: 1, duration: 2 }, 6);
}

// Typewriter sequence for Opening Scene
function runOpeningTypewriter() {
  const line1 = document.getElementById("tw-1");
  const line2 = document.getElementById("tw-2");
  const line3 = document.getElementById("tw-3");
  const enterBtn = document.getElementById("enter-btn");

  const tl = gsap.timeline({ delay: 0.5 });

  tl.to(line1, { opacity: 1, duration: 0.4 })
    .to({}, { duration: 0.6, onStart: () => { line1.textContent = "hey..."; } })
    .to(line2, { opacity: 1, duration: 0.4 }, "+=0.8")
    .to({}, { duration: 0.8, onStart: () => { line2.textContent = "HEY GORGEOUS BABY"; } })
    .to(line3, { opacity: 1, duration: 0.4 }, "+=0.8")
    .to({}, { duration: 0.8, onStart: () => { line3.textContent = "this little world is for you."; } })
    .to(enterBtn, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "+=0.5");
}

// ==========================================================================
// AUDIO ENGINE & USER INTERACTION UNLOCK
// ==========================================================================
let audioContext, audioSynthOsc, bgAudioEl;

function initAudioSystem() {
  bgAudioEl = document.getElementById("bg-audio");
  const musicBtn = document.getElementById("music-btn");
  const enterBtn = document.getElementById("enter-btn");

  enterBtn.addEventListener("click", () => {
    // Smooth scroll to intro scene
    gsap.to(window, {
      scrollTo: "#scene-intro",
      duration: 1.5,
      ease: "power2.inOut"
    });

    // Start audio
    playAudioTrack();
  });

  musicBtn.addEventListener("click", () => {
    if (bgAudioEl && !bgAudioEl.paused) {
      bgAudioEl.pause();
      musicBtn.classList.add("paused");
    } else {
      playAudioTrack();
      musicBtn.classList.remove("paused");
    }
  });
}

function playAudioTrack() {
  const musicBtn = document.getElementById("music-btn");
  if (!bgAudioEl) return;

  bgAudioEl.play().then(() => {
    musicBtn.classList.remove("paused");
  }).catch(() => {
    // If audio file is missing or blocked, initialize WebAudio synthesized romantic ambient chord loop fallback!
    console.warn("Audio play blocked or file missing. Using synthesized romantic ambient pad.");
    playSynthesizedPad();
    musicBtn.classList.remove("paused");
  });
}

// WebAudio Romantic Ambient Synth Fallback
function playSynthesizedPad() {
  if (audioContext) return;
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [261.63, 329.63, 392.00, 493.88]; // C, E, G, B soft romantic chord

    notes.forEach((freq) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);

      gain.gain.setValueAtTime(0.02, audioContext.currentTime);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
    });
  } catch(e) {
    console.warn("Synthesizer error:", e);
  }
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initDomElements();
  initThreeEngine();
  initScrollTimeline();
  initAudioSystem();
});
