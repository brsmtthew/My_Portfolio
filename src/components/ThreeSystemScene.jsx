import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeSystemScene({ variant = "hero", label = "Animated 3D system model" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(variant === "history" ? 0.2 : -0.2, variant === "history" ? 1.1 : 0.85, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.domElement.setAttribute("aria-hidden", "true");
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.x = variant === "history" ? -0.24 : -0.16;
    root.rotation.y = variant === "history" ? -0.34 : 0.28;
    scene.add(root);

    const ambient = new THREE.AmbientLight(0x8fb8ff, 1.65);
    const key = new THREE.PointLight(0x65e9c2, 35, 18);
    key.position.set(-3, 3.2, 4);
    const rim = new THREE.PointLight(0x6da8ff, 28, 18);
    rim.position.set(3.4, -1.8, 3);
    scene.add(ambient, key, rim);

    const blue = new THREE.Color("#62a8ff");
    const green = new THREE.Color("#30e59a");
    const violet = new THREE.Color("#8b5cf6");
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xdbeafe,
      roughness: 0.18,
      metalness: 0.12,
      transmission: 0.35,
      thickness: 0.7,
      transparent: true,
      opacity: 0.24,
      emissive: blue,
      emissiveIntensity: 0.12,
    });
    const coreWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x9ec5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const blueLine = new THREE.MeshBasicMaterial({ color: blue, transparent: true, opacity: 0.42 });
    const greenLine = new THREE.MeshBasicMaterial({ color: green, transparent: true, opacity: 0.36 });
    const violetLine = new THREE.MeshBasicMaterial({ color: violet, transparent: true, opacity: 0.28 });
    const nodeMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0x9ec5ff,
        emissive: 0x62a8ff,
        emissiveIntensity: 1.4,
        roughness: 0.36,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8ff7cc,
        emissive: 0x30e59a,
        emissiveIntensity: 1.25,
        roughness: 0.34,
      }),
    ];

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.88, 1), glassMaterial);
    const wireCore = new THREE.Mesh(new THREE.IcosahedronGeometry(1.18, 1), coreWireMaterial);
    root.add(core, wireCore);

    const ringGroup = new THREE.Group();
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.26, 0.012, 8, 144), blueLine);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.68, 0.012, 8, 144), greenLine);
    const ringC = new THREE.Mesh(new THREE.TorusGeometry(2.92, 0.009, 8, 144), violetLine);
    ringA.rotation.x = Math.PI / 2.7;
    ringB.rotation.x = Math.PI / 2.15;
    ringB.rotation.y = Math.PI / 5;
    ringC.rotation.x = Math.PI / 2.95;
    ringC.rotation.z = Math.PI / 4;
    ringGroup.add(ringA, ringB, ringC);
    root.add(ringGroup);

    const nodeGroup = new THREE.Group();
    const nodeGeometry = new THREE.SphereGeometry(0.09, 20, 20);
    const nodeCount = variant === "history" ? 11 : 9;
    for (let index = 0; index < nodeCount; index += 1) {
      const angle = (index / nodeCount) * Math.PI * 2;
      const radius = index % 3 === 0 ? 2.52 : 2.04;
      const node = new THREE.Mesh(nodeGeometry, nodeMaterials[index % nodeMaterials.length]);
      node.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.8) * 0.28, Math.sin(angle) * radius * 0.34);
      node.scale.setScalar(index % 4 === 0 ? 1.35 : 1);
      nodeGroup.add(node);
    }
    root.add(nodeGroup);

    const moduleGroup = new THREE.Group();
    const moduleGeometry = new THREE.BoxGeometry(0.36, 0.36, 0.36);
    for (let index = 0; index < 7; index += 1) {
      const module = new THREE.Mesh(
        moduleGeometry,
        new THREE.MeshStandardMaterial({
          color: index % 2 ? 0x142133 : 0x12291f,
          emissive: index % 2 ? 0x315f91 : 0x1f7652,
          emissiveIntensity: 0.5,
          roughness: 0.28,
          metalness: 0.42,
        }),
      );
      const side = index % 2 === 0 ? -1 : 1;
      module.position.set(side * (1.35 + index * 0.1), -1.2 + index * 0.24, -0.44 + index * 0.08);
      module.rotation.set(index * 0.22, index * 0.32, index * 0.16);
      moduleGroup.add(module);
    }
    root.add(moduleGroup);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = variant === "history" ? 95 : 70;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 7.2;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 4.4;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 4.2;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: variant === "history" ? 0x8ff7cc : 0x9ec5ff,
        size: 0.028,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      }),
    );
    root.add(particles);

    let frameId = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(Math.max(width, 1), Math.max(height, 1), false);
      camera.aspect = Math.max(width, 1) / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const render = () => {
      const elapsed = clock.getElapsedTime();
      if (!reduceMotion) {
        root.rotation.y += variant === "history" ? 0.0022 : 0.0018;
        ringGroup.rotation.z = elapsed * (variant === "history" ? 0.16 : 0.13);
        ringA.rotation.z = elapsed * 0.28;
        ringB.rotation.z = -elapsed * 0.22;
        core.rotation.y = elapsed * 0.36;
        core.rotation.x = elapsed * 0.2;
        wireCore.rotation.y = -elapsed * 0.2;
        nodeGroup.children.forEach((node, index) => {
          node.position.y += Math.sin(elapsed * 1.4 + index) * 0.0009;
        });
        moduleGroup.rotation.y = Math.sin(elapsed * 0.7) * 0.12;
        particles.rotation.y = -elapsed * 0.028;
      }
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    resize();
    render();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      mount.removeChild(renderer.domElement);
      particleGeometry.dispose();
      nodeGeometry.dispose();
      moduleGeometry.dispose();
      core.geometry.dispose();
      wireCore.geometry.dispose();
      ringA.geometry.dispose();
      ringB.geometry.dispose();
      ringC.geometry.dispose();
      glassMaterial.dispose();
      coreWireMaterial.dispose();
      blueLine.dispose();
      greenLine.dispose();
      violetLine.dispose();
      nodeMaterials.forEach((material) => material.dispose());
      moduleGroup.children.forEach((module) => module.material.dispose());
      particles.material.dispose();
      renderer.dispose();
    };
  }, [variant]);

  return <div className={`three-scene three-scene-${variant}`} ref={mountRef} role="img" aria-label={label} />;
}
