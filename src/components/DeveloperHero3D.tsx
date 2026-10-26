import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Code2, TrendingUp, Cpu, HeartHandshake } from 'lucide-react';

export const DeveloperHero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3.2, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Master Group for Mouse Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 1.8);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const blueRimLight = new THREE.PointLight(0x3b82f6, 3, 15);
    blueRimLight.position.set(-4, 3, 1);
    scene.add(blueRimLight);

    const warmAccentLight = new THREE.PointLight(0xf59e0b, 2.5, 12);
    warmAccentLight.position.set(3, 4, 2);
    scene.add(warmAccentLight);

    // Dynamic Code Texture for Monitor
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d')!;
    const codeTexture = new THREE.CanvasTexture(canvas);

    // Materials
    const deskMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 });
    const chairAccentMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.3 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 });
    const hoodieMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 });
    const techMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2 });
    const glowScreenMat = new THREE.MeshBasicMaterial({ map: codeTexture });

    // 1. Desk
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.12, 2.2), woodMat);
    deskTop.position.set(0, 1.6, 0);
    deskTop.receiveShadow = true;
    masterGroup.add(deskTop);

    // Desk Legs (Minimalist Metal)
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 16);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
    const leg1 = new THREE.Mesh(legGeo, legMat);
    leg1.position.set(-2.1, 0.8, 0.9);
    masterGroup.add(leg1);
    const leg2 = leg1.clone();
    leg2.position.set(2.1, 0.8, 0.9);
    masterGroup.add(leg2);
    const leg3 = leg1.clone();
    leg3.position.set(-2.1, 0.8, -0.9);
    masterGroup.add(leg3);
    const leg4 = leg1.clone();
    leg4.position.set(2.1, 0.8, -0.9);
    masterGroup.add(leg4);

    // Desk Mat
    const deskPad = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.02, 1.2), deskMat);
    deskPad.position.set(0, 1.67, 0.2);
    masterGroup.add(deskPad);

    // 2. Monitors
    // Main Curved Monitor Frame
    const monitorFrame = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.3, 0.08), chairMat);
    monitorFrame.position.set(0, 2.5, -0.4);
    masterGroup.add(monitorFrame);

    // Main Screen Glowing Surface
    const monitorScreen = new THREE.Mesh(new THREE.PlaneGeometry(2.46, 1.18), glowScreenMat);
    monitorScreen.position.set(0, 2.5, -0.35);
    masterGroup.add(monitorScreen);

    // Monitor Stand
    const standPole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 16), legMat);
    standPole.position.set(0, 2.05, -0.5);
    masterGroup.add(standPole);
    const standBase = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 0.03, 24), legMat);
    standBase.position.set(0, 1.68, -0.4);
    masterGroup.add(standBase);

    // Secondary Vertical Monitor
    const sideMonitor = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.4, 0.06), chairMat);
    sideMonitor.position.set(1.7, 2.55, -0.2);
    sideMonitor.rotation.y = -0.35;
    masterGroup.add(sideMonitor);

    const sideScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.72, 1.3),
      new THREE.MeshBasicMaterial({ color: 0x064e3b })
    );
    sideScreen.position.set(1.68, 2.55, -0.16);
    sideScreen.rotation.y = -0.35;
    masterGroup.add(sideScreen);

    // 3. Ergonomic Office Chair
    const chairGroup = new THREE.Group();
    chairGroup.position.set(0, 0, 1.1);
    masterGroup.add(chairGroup);

    // Chair Seat Cushion
    const seat = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.16, 1.1), chairMat);
    seat.position.set(0, 1.25, 0);
    chairGroup.add(seat);

    // Chair Curved Backrest
    const backrest = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.4, 0.12), chairMat);
    backrest.position.set(0, 2.0, 0.5);
    backrest.rotation.x = -0.12;
    chairGroup.add(backrest);

    // Lumbar Accent Strip
    const lumbar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.25, 0.05), chairAccentMat);
    lumbar.position.set(0, 1.8, 0.45);
    chairGroup.add(lumbar);

    // Headrest
    const headrest = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.35, 0.1), chairMat);
    headrest.position.set(0, 2.8, 0.62);
    chairGroup.add(headrest);

    // Armrests
    const armGeo = new THREE.BoxGeometry(0.12, 0.08, 0.6);
    const armL = new THREE.Mesh(armGeo, chairMat);
    armL.position.set(-0.65, 1.6, 0.05);
    chairGroup.add(armL);
    const armR = armL.clone();
    armR.position.set(0.65, 1.6, 0.05);
    chairGroup.add(armR);

    // Chair Piston & Base
    const piston = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 16), legMat);
    piston.position.set(0, 0.65, 0);
    chairGroup.add(piston);

    // Star Base 5-legs
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5;
      const legMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.6), legMat);
      legMesh.position.set(Math.sin(angle) * 0.35, 0.2, Math.cos(angle) * 0.35);
      legMesh.rotation.y = angle;
      chairGroup.add(legMesh);
    }

    // 4. Developer Character
    const devGroup = new THREE.Group();
    devGroup.position.set(0, 1.25, 1.0);
    masterGroup.add(devGroup);

    // Torso / Stylish Hoodie
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.95, 0.6), hoodieMat);
    torso.position.set(0, 0.65, 0.1);
    devGroup.add(torso);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.45, 0.1);
    devGroup.add(headGroup);

    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 24), skinMat);
    headGroup.add(headMesh);

    // Headphones
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.04, 12, 24, Math.PI), chairMat);
    band.position.set(0, 0.08, 0);
    band.rotation.x = Math.PI / 2;
    headGroup.add(band);

    const cupL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16), chairAccentMat);
    cupL.position.set(-0.35, 0, 0);
    cupL.rotation.z = Math.PI / 2;
    headGroup.add(cupL);
    const cupR = cupL.clone();
    cupR.position.set(0.35, 0, 0);
    headGroup.add(cupR);

    // Stylish Visor / Glasses
    const glasses = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.09, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.9 })
    );
    glasses.position.set(0, 0.02, -0.28);
    headGroup.add(glasses);

    // Arms Typing
    const armLMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.7, 16), hoodieMat);
    armLMesh.position.set(-0.45, 0.45, -0.3);
    armLMesh.rotation.x = -Math.PI / 3;
    devGroup.add(armLMesh);

    const armRMesh = armLMesh.clone();
    armRMesh.position.set(0.45, 0.45, -0.3);
    devGroup.add(armRMesh);

    // Hands on Keyboard
    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), skinMat);
    handL.position.set(-0.32, 0.42, -0.65);
    devGroup.add(handL);

    const handR = handL.clone();
    handR.position.set(0.32, 0.42, -0.65);
    devGroup.add(handR);

    // Keyboard (RGB Glow)
    const keyboard = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.03, 0.3), techMat);
    keyboard.position.set(0, 1.68, 0.25);
    masterGroup.add(keyboard);

    // Mouse
    const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.16), chairMat);
    mouse.position.set(0.7, 1.68, 0.25);
    masterGroup.add(mouse);

    // Coffee Mug with Steam
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.22, 16), woodMat);
    mug.position.set(-0.85, 1.77, 0.2);
    masterGroup.add(mug);

    // Floor Soft Shadow Disk
    const floorDisk = new THREE.Mesh(
      new THREE.CircleGeometry(2.8, 32),
      new THREE.MeshBasicMaterial({
        color: 0xe2e8f0,
        transparent: true,
        opacity: 0.6,
      })
    );
    floorDisk.rotation.x = -Math.PI / 2;
    floorDisk.position.y = 0.01;
    scene.add(floorDisk);

    // Animation & Code Typing Loop
    let clock = new THREE.Clock();
    let codeIndex = 0;
    const codeLines = [
      '// TRIO CRAFT DIGITAL ENGINE',
      'import { TrioCraft } from "@triocraft/agency";',
      'const studio = new TrioCraft({',
      '  mode: "EXTRAORDINARY_DESIGN",',
      '  services: ["Web", "AI", "Marketing"],',
      '  deliverySpeed: "3X_FASTER"',
      '});',
      '',
      'async function launchProject() {',
      '  const portal = await studio.buildPortal();',
      '  await studio.deployHospitalHMS();',
      '  await studio.runInfluencerGrowth();',
      '  console.log("ROI Scaled 10X 🚀");',
      '}',
      'launchProject();'
    ];

    let typingTimer = 0;
    let typedLines: string[] = [];

    const updateCodeTexture = () => {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Window Header
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, canvas.width, 34);
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(20, 17, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(38, 17, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(56, 17, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '13px monospace';
      ctx.fillText('triocraft-core.tsx — Visual Studio Code', 80, 22);

      // Code text
      ctx.font = '15px "Courier New", monospace';
      typedLines.forEach((line, i) => {
        if (line.startsWith('//')) {
          ctx.fillStyle = '#64748b';
        } else if (line.includes('import') || line.includes('const') || line.includes('function')) {
          ctx.fillStyle = '#f43f5e';
        } else if (line.includes('"')) {
          ctx.fillStyle = '#10b981';
        } else {
          ctx.fillStyle = '#38bdf8';
        }
        ctx.fillText(line, 24, 65 + i * 20);
      });

      // Cursor
      if (Math.floor(clock.getElapsedTime() * 2) % 2 === 0) {
        const lastY = 65 + typedLines.length * 20;
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(24, lastY - 14, 10, 16);
      }

      codeTexture.needsUpdate = true;
    };

    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.25;
      targetRotX = -y * 0.12;
    };

    // Instant touch support without long-press
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.4;
      targetRotX = -y * 0.2;
    };

    const handleTouchEnd = () => {
      targetRotY = 0;
      targetRotX = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchstart', handleTouchMove, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth Mouse & Touch Parallax with dynamic 3/4 isometric baseline
      masterGroup.rotation.y += ((0.42 + targetRotY) - masterGroup.rotation.y) * 0.06;
      masterGroup.rotation.x += ((0.04 + targetRotX) - masterGroup.rotation.x) * 0.06;

      // Character Typing Micro-Motion
      handL.position.y = 0.42 + Math.sin(elapsed * 18) * 0.015;
      handR.position.y = 0.42 + Math.cos(elapsed * 20) * 0.015;
      headGroup.rotation.x = Math.sin(elapsed * 2) * 0.03;
      headGroup.rotation.y = masterGroup.rotation.y * 0.3;

      // Code line typer interval
      typingTimer += delta;
      if (typingTimer > 0.4) {
        typingTimer = 0;
        if (codeIndex < codeLines.length) {
          typedLines.push(codeLines[codeIndex]);
          codeIndex++;
        } else {
          typedLines = [];
          codeIndex = 0;
        }
        updateCodeTexture();
      }

      renderer.render(scene, camera);
    };

    updateCodeTexture();
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchstart', handleTouchMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container with immediate touch support */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
      />

      {/* Floating Modern Skill Badges with Framer Motion (Responsive phone scaling) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-2 sm:top-8 sm:left-8 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2 z-20 pointer-events-none scale-90 sm:scale-100 origin-top-left"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
          <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] sm:text-xs font-bold text-[#1a1f22]">Full-Stack Web &amp; Apps</div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono">React 19 • Next.js • Node</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-16 right-2 sm:top-24 sm:right-6 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2 z-20 pointer-events-none scale-90 sm:scale-100 origin-top-right"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
          <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] sm:text-xs font-bold text-[#1a1f22]">Digital Growth &amp; ROI</div>
          <div className="text-[9px] sm:text-[10px] text-emerald-600 font-bold">▲ 10X Reach</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute bottom-12 left-6 sm:left-12 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/80 items-center gap-2.5 z-20 pointer-events-none"
      >
        <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600">
          <HeartHandshake className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-[#1a1f22]">Influencer Marketing</div>
          <div className="text-[10px] text-slate-500 font-mono">Viral Social Campaigns</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-4 right-2 sm:bottom-16 sm:right-10 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2 z-20 pointer-events-none scale-90 sm:scale-100 origin-bottom-right"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
          <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] sm:text-xs font-bold text-[#1a1f22]">AI &amp; Hospital Systems</div>
          <div className="text-[9px] sm:text-[10px] text-indigo-600 font-mono">24/7 Smart Triage</div>
        </div>
      </motion.div>
    </div>
  );
};
