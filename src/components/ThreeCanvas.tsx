import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, High-Performance WebGL Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfffcf7, 0.0008);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 38;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Vibrant Studio Colorful Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const cobaltLight = new THREE.PointLight(0x3b66f5, 4.0, 95);
    cobaltLight.position.set(20, 20, 20);
    scene.add(cobaltLight);

    const coralLight = new THREE.PointLight(0xff6b6b, 3.5, 95);
    coralLight.position.set(-20, -20, 20);
    scene.add(coralLight);

    const lavenderLight = new THREE.PointLight(0x8b5cf6, 3.0, 85);
    lavenderLight.position.set(0, 30, -10);
    scene.add(lavenderLight);

    // 3. Central Faceted Polyhedron (Cobalt & Lavender Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(11.5, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x3b66f5,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.8,
    });
    const icosahedronMesh = new THREE.Mesh(icoGeo, icoMat);
    scene.add(icosahedronMesh);

    // 4. Inner Concentric Torus Ring (Coral & Peach)
    const ringGeo = new THREE.TorusGeometry(15.5, 0.36, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff6b6b,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const champagneRing = new THREE.Mesh(ringGeo, ringMat);
    champagneRing.rotation.x = Math.PI / 3.2;
    scene.add(champagneRing);

    // 5. Outer Concentric Torus Ring (Cobalt & Mint)
    const outerRingGeo = new THREE.TorusGeometry(21.5, 0.32, 16, 120);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = -Math.PI / 3.5;
    scene.add(outerRing);

    // 6. Colorful Studio Confetti & Stardust Constellation (1,500 particles)
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCobalt = new THREE.Color(0x3b66f5);
    const colorCoral = new THREE.Color(0xff6b6b);
    const colorLavender = new THREE.Color(0x8b5cf6);
    const colorMint = new THREE.Color(0x10b981);
    const colorSunny = new THREE.Color(0xf59e0b);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 160;
      positions[i + 1] = (Math.random() - 0.5) * 160;
      positions[i + 2] = (Math.random() - 0.5) * 160;

      const rand = Math.random();
      let selectedColor = colorCobalt;
      if (rand > 0.8) selectedColor = colorCoral;
      else if (rand > 0.6) selectedColor = colorLavender;
      else if (rand > 0.4) selectedColor = colorMint;
      else if (rand > 0.2) selectedColor = colorSunny;

      colors[i] = selectedColor.r;
      colors[i + 1] = selectedColor.g;
      colors[i + 2] = selectedColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });

    const pointsMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(pointsMesh);

    // 7. Mouse Cursor Parallax & Camera Damping (Lerping)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;

      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${event.clientX}px`;
        cursorGlowRef.current.style.top = `${event.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Dynamic Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // 9. High-Precision 60 FPS Clock & Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      // Bound scroll drift so geometry never exits the camera viewport
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScrollDrift = 7.5;
      const scrollDrift = Math.min(scrollY * 0.0025, maxScrollDrift);

      // Central Polyhedron
      if (icosahedronMesh) {
        icosahedronMesh.rotation.x = elapsedTime * 0.12;
        icosahedronMesh.rotation.y = elapsedTime * 0.18;
        icosahedronMesh.position.x = mouseX * 3.5;
        icosahedronMesh.position.y = -mouseY * 3.5 - scrollDrift;
      }

      // Inner Teal Ring: Open orbital plane tilt + spin (never turns edge-on)
      if (champagneRing) {
        champagneRing.rotation.x = Math.PI / 3.2 + Math.sin(elapsedTime * 0.4) * 0.12;
        champagneRing.rotation.y = Math.cos(elapsedTime * 0.35) * 0.16;
        champagneRing.rotation.z = elapsedTime * 0.22;
        champagneRing.position.x = mouseX * 2.2;
        champagneRing.position.y = -mouseY * 2.2 - scrollDrift * 0.7;
      }

      // Outer Copper Ring: Opposite orbital inclination + spin (always visible and open)
      if (outerRing) {
        outerRing.rotation.x = -Math.PI / 3.5 + Math.cos(elapsedTime * 0.38) * 0.14;
        outerRing.rotation.y = Math.sin(elapsedTime * 0.3) * 0.18;
        outerRing.rotation.z = -elapsedTime * 0.18;
        outerRing.position.x = mouseX * 1.5;
        outerRing.position.y = -mouseY * 1.5 - scrollDrift * 0.5;
      }

      // Background stardust constellation
      if (pointsMesh) {
        pointsMesh.rotation.y = elapsedTime * 0.03;
        pointsMesh.rotation.x = mouseY * 0.06;
      }

      // Smooth camera parallax
      camera.position.x += (mouseX * 4.5 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 4.5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      icoGeo.dispose();
      icoMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {/* Ambient Cursor Spotlight Glow */}
      <div id="cursor-glow" ref={cursorGlowRef} />

      {/* 3D WebGL Canvas Layer */}
      <div
        id="webgl-container"
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Luxury Subtle 50px Grid Overlay */}
      <div
        className="fixed inset-0 luxury-grid pointer-events-none z-[1] opacity-75"
        aria-hidden="true"
      />
    </>
  );
};
