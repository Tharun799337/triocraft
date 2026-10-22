import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface TrioCraft3DLogoProps {
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  className?: string;
  showGlow?: boolean;
}

export const TrioCraft3DLogo: React.FC<TrioCraft3DLogoProps> = ({
  size = 'md',
  interactive = true,
  className = '',
  showGlow = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Pixel dimensions based on size variant
  const pixelDimensions = {
    sm: { width: 44, height: 44, scale: 0.8 },
    md: { width: 140, height: 140, scale: 1.0 },
    lg: { width: 240, height: 240, scale: 1.25 },
  }[size];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = pixelDimensions.width;
    const height = pixelDimensions.height;

    // 1. Scene, Orthographic/Perspective Camera, Transparent WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Main 3D Logo Group
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // 3. Dynamic Specular Lights (Cyan & Copper)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5c9, 3.5, 35);
    cyanLight.position.set(-8, 8, 12);
    scene.add(cyanLight);

    const copperLight = new THREE.PointLight(0xf59e0b, 3.5, 35);
    copperLight.position.set(8, -8, 12);
    scene.add(copperLight);

    const frontSpecular = new THREE.DirectionalLight(0xffffff, 1.2);
    frontSpecular.position.set(0, 0, 20);
    scene.add(frontSpecular);

    // 4. Build Extruded 3D Interlocking Triangular Frames
    // Upward Teal/Cyan Triangle
    const createTriangleFrame = (s: number, pointsUp: boolean) => {
      const shape = new THREE.Shape();
      const dir = pointsUp ? 1 : -1;
      const topY = dir * (s * 0.65);
      const bottomY = -dir * (s * 0.42);
      const halfW = s * 0.6;

      shape.moveTo(0, topY);
      shape.lineTo(halfW, bottomY);
      shape.lineTo(-halfW, bottomY);
      shape.closePath();

      // Inner Cutout Hole
      const hole = new THREE.Path();
      const hs = s * 0.72;
      const hTopY = dir * (hs * 0.58);
      const hBottomY = -dir * (hs * 0.36);
      const hHalfW = hs * 0.52;

      hole.moveTo(0, hTopY);
      hole.lineTo(hHalfW, hBottomY);
      hole.lineTo(-hHalfW, hBottomY);
      hole.closePath();
      shape.holes.push(hole);

      return shape;
    };

    const extrudeSettings = {
      depth: 0.8,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.25,
      bevelThickness: 0.25,
    };

    // Material 1: Metallic Cyan / Teal
    const tealMaterial = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x004e5b,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.15,
    });

    // Material 2: Metallic Copper / Bronze
    const copperMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0x451a03,
      emissiveIntensity: 0.35,
      metalness: 0.92,
      roughness: 0.18,
    });

    // Upward Triangle Mesh (Teal)
    const tealGeo = new THREE.ExtrudeGeometry(createTriangleFrame(8.8, true), extrudeSettings);
    tealGeo.center();
    const tealMesh = new THREE.Mesh(tealGeo, tealMaterial);
    tealMesh.position.set(0, 0.4, 0.3);
    logoGroup.add(tealMesh);

    // Downward Inverted Triangle Mesh (Copper)
    const copperGeo = new THREE.ExtrudeGeometry(createTriangleFrame(8.8, false), extrudeSettings);
    copperGeo.center();
    const copperMesh = new THREE.Mesh(copperGeo, copperMaterial);
    copperMesh.position.set(0, -0.4, -0.3);
    logoGroup.add(copperMesh);

    // Inner Nested Chevrons for Multi-Layer 3D Depth
    const innerTealGeo = new THREE.ExtrudeGeometry(createTriangleFrame(4.6, true), {
      ...extrudeSettings,
      depth: 0.5,
    });
    innerTealGeo.center();
    const innerTealMesh = new THREE.Mesh(innerTealGeo, tealMaterial);
    innerTealMesh.position.set(0, 0.2, 0.7);
    logoGroup.add(innerTealMesh);

    const innerCopperGeo = new THREE.ExtrudeGeometry(createTriangleFrame(4.6, false), {
      ...extrudeSettings,
      depth: 0.5,
    });
    innerCopperGeo.center();
    const innerCopperMesh = new THREE.Mesh(innerCopperGeo, copperMaterial);
    innerCopperMesh.position.set(0, -0.2, -0.7);
    logoGroup.add(innerCopperMesh);

    // 5. High-Resolution Textured Center Emblem Plate
    // Loads the user-provided exact logo graphic onto a floating double-sided metallic disc
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/triocraft-emblem.png',
      (texture) => {
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        const emblemMat = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          alphaTest: 0.05,
          side: THREE.DoubleSide,
          metalness: 0.85,
          roughness: 0.2,
          emissive: 0x05131f,
          emissiveIntensity: 0.4,
        });

        const emblemPlane = new THREE.Mesh(new THREE.PlaneGeometry(8.5, 8.5), emblemMat);
        emblemPlane.position.z = 0.05;
        logoGroup.add(emblemPlane);

        // Backside reverse plane
        const backEmblemPlane = new THREE.Mesh(new THREE.PlaneGeometry(8.5, 8.5), emblemMat);
        backEmblemPlane.position.z = -0.05;
        backEmblemPlane.rotation.y = Math.PI;
        logoGroup.add(backEmblemPlane);
      },
      undefined,
      (err) => console.warn('Emblem texture note:', err)
    );

    // 6. Subtle Ambient Stardust Sparks
    const sparkCount = size === 'sm' ? 12 : 28;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkColors = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      const i3 = i * 3;
      const radius = 6 + Math.random() * 4;
      const angle = Math.random() * Math.PI * 2;
      sparkPositions[i3] = Math.cos(angle) * radius;
      sparkPositions[i3 + 1] = Math.sin(angle) * radius;
      sparkPositions[i3 + 2] = (Math.random() - 0.5) * 4;

      const isTeal = Math.random() > 0.5;
      sparkColors[i3] = isTeal ? 0.0 : 0.98;
      sparkColors[i3 + 1] = isTeal ? 0.85 : 0.62;
      sparkColors[i3 + 2] = isTeal ? 0.8 : 0.05;
    }

    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    sparkGeo.setAttribute('color', new THREE.BufferAttribute(sparkColors, 3));

    const sparkMat = new THREE.PointsMaterial({
      size: size === 'sm' ? 0.2 : 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparks);

    // 7. Interactive Mouse / Pointer Tracking
    let targetRotY = 0;
    let targetRotX = 0;
    let mouseX = 0;
    let mouseY = 0;
    let spinVelocity = 0.015;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = x * 0.8;
      targetRotX = -y * 0.6;
    };

    if (interactive) {
      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('click', () => {
        spinVelocity += 0.06; // Kinetic spin boost on click!
      });
    }

    // 8. 60 FPS Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Dampen spin velocity back to base idle speed
      spinVelocity += (0.012 - spinVelocity) * 0.03;

      // Base smooth 3D kinetic continuous spin
      logoGroup.rotation.y += spinVelocity;

      // Mouse lerp damping
      mouseX += (targetRotY - mouseX) * 0.08;
      mouseY += (targetRotX - mouseY) * 0.08;

      logoGroup.rotation.x = Math.sin(elapsedTime * 1.4) * 0.12 + mouseY;
      logoGroup.rotation.z = Math.cos(elapsedTime * 0.9) * 0.06 + mouseX * 0.3;

      // Floating levitation
      logoGroup.position.y = Math.sin(elapsedTime * 2.0) * 0.3;

      // Orbit point lights for dynamic metallic glints
      cyanLight.position.x = Math.sin(elapsedTime * 1.5) * 12;
      cyanLight.position.y = Math.cos(elapsedTime * 1.5) * 10;
      copperLight.position.x = -Math.sin(elapsedTime * 1.5) * 12;
      copperLight.position.y = -Math.cos(elapsedTime * 1.5) * 10;

      // Rotate stardust sparks
      sparks.rotation.z = elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        container.removeEventListener('mousemove', handlePointerMove);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      tealGeo.dispose();
      tealMaterial.dispose();
      copperGeo.dispose();
      copperMaterial.dispose();
      innerTealGeo.dispose();
      innerCopperGeo.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      renderer.dispose();
    };
  }, [pixelDimensions, interactive, size]);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group/logo ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: pixelDimensions.width,
        height: pixelDimensions.height,
      }}
    >
      {/* Bioluminescent Dual Halo Glow (Cyan & Copper) */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full blur-xl pointer-events-none transition-opacity duration-500 -z-10"
          style={{
            background:
              'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(245, 158, 11, 0.25) 50%, transparent 75%)',
            opacity: isHovered ? 0.9 : 0.55,
            transform: `scale(${isHovered ? 1.3 : 1.1})`,
          }}
        />
      )}

      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center pointer-events-auto"
        title="TrioCraft 3D Interactive Emblem — Click or hover to spin"
      />
    </div>
  );
};
