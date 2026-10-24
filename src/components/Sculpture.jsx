import { useEffect, useRef, useState } from "react";

// Keep the page usable while the independent WebGL bundle loads.
export default function Sculpture({ mode, paused }) {
  const host = useRef(null);
  const wakeFrame = useRef(() => {});
  const settings = useRef({ mode, paused });
  const [state, setState] = useState("loading");
  useEffect(() => {
    settings.current = { mode, paused };
    wakeFrame.current();
  }, [mode, paused]);
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};
    async function init() {
      let renderer;
      try {
        const [THREE, { OrbitControls }, { RoomEnvironment }] =
          await Promise.all([
            import("three"),
            import("three/addons/controls/OrbitControls.js"),
            import("three/addons/environments/RoomEnvironment.js"),
          ]);
        if (cancelled || !host.current) return;
        const element = host.current;
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.domElement.setAttribute("aria-hidden", "true");
        element.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.set(0, 0.15, 9.8);
        const environment = new RoomEnvironment();
        const pmrem = new THREE.PMREMGenerator(renderer);
        const environmentTarget = pmrem.fromScene(environment, 0.04);
        scene.environment = environmentTarget.texture;
        environment.dispose();
        pmrem.dispose();
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.rotateSpeed = 0.65;
        controls.autoRotateSpeed = 1.15;
        renderer.domElement.style.touchAction = "pan-y";
        const sculpture = new THREE.Group();
        scene.add(sculpture);
        const metal = new THREE.MeshPhysicalMaterial({
          color: 0xd6f59a,
          metalness: 0.93,
          roughness: 0.2,
          clearcoat: 1,
          clearcoatRoughness: 0.12,
          envMapIntensity: 1.7,
        });
        const darkMetal = new THREE.MeshPhysicalMaterial({
          color: 0x51604b,
          metalness: 0.95,
          roughness: 0.22,
          clearcoat: 1,
          envMapIntensity: 2,
        });
        const chrome = new THREE.MeshPhysicalMaterial({
          color: 0xdfe4dc,
          metalness: 1,
          roughness: 0.17,
          envMapIntensity: 1.6,
        });
        const knotGeometry = new THREE.TorusKnotGeometry(
          1.18,
          0.37,
          160,
          24,
          2,
          3,
        );
        const knot = new THREE.Mesh(knotGeometry, metal);
        knot.rotation.set(0.35, -0.4, -0.35);
        sculpture.add(knot);
        const orbit = new THREE.Group();
        const sphereGeometry = new THREE.IcosahedronGeometry(0.95, 3);
        orbit.add(new THREE.Mesh(sphereGeometry, darkMetal));
        const ringGeometry = new THREE.TorusGeometry(1.5, 0.09, 14, 100);
        for (let i = 0; i < 3; i++) {
          const ring = new THREE.Mesh(ringGeometry, i === 1 ? chrome : metal);
          ring.rotation.set((i * Math.PI) / 3, Math.PI / 3, (i * Math.PI) / 4);
          orbit.add(ring);
        }
        sculpture.add(orbit);
        const blocks = new THREE.Group();
        const cubeGeometry = new THREE.BoxGeometry(0.67, 0.67, 0.67);
        for (let x = -1; x <= 1; x++)
          for (let y = -1; y <= 1; y++)
            for (let z = -1; z <= 1; z++) {
              if (x === 0 && y === 0 && z === 0) continue;
              const cube = new THREE.Mesh(
                cubeGeometry,
                (x + y + z) % 3 === 0 ? metal : chrome,
              );
              cube.position.set(x * 0.78, y * 0.78, z * 0.78);
              blocks.add(cube);
            }
        blocks.rotation.set(0.5, 0.7, 0.2);
        sculpture.add(blocks);
        const satelliteGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const satellites = new THREE.Group();
        for (let i = 0; i < 5; i++) {
          const ball = new THREE.Mesh(
            satelliteGeometry,
            i % 2 ? chrome : metal,
          );
          ball.position.set(
            Math.cos(i * 1.26) * 2.25,
            Math.sin(i * 1.26) * 1.9,
            Math.sin(i * 2) * 0.8,
          );
          satellites.add(ball);
        }
        scene.add(satellites);
        const key = new THREE.DirectionalLight(0xf2ffe0, 4);
        key.position.set(3, 4, 5);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xc2f766, 3);
        rim.position.set(-4, 1, -2);
        scene.add(rim);
        scene.add(new THREE.AmbientLight(0xffffff, 0.35));
        let frame = 0,
          visible = true,
          previous = 0,
          elapsed = 0,
          currentMode = -1,
          lost = false;
        const objects = [knot, orbit, blocks];
        const resize = () => {
          const { width, height } = element.getBoundingClientRect();
          if (!width || !height) return;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
          if (!frame) frame = requestAnimationFrame(render);
        };
        const observer = new ResizeObserver(resize);
        observer.observe(element);
        const inView = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !frame && !document.hidden)
            frame = requestAnimationFrame(render);
        });
        inView.observe(element);
        function render(now) {
          frame = 0;
          if (cancelled || lost || !visible || document.hidden) {
            previous = 0;
            return;
          }
          const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
          previous = now;
          const { mode: activeMode, paused: isPaused } = settings.current;
          controls.autoRotate = !isPaused;
          controls.enabled = !isPaused;
          if (currentMode !== activeMode) {
            objects.forEach((object, i) => {
              object.visible = i === activeMode;
            });
            currentMode = activeMode;
          }
          if (!isPaused) {
            elapsed += delta;
            sculpture.position.y = Math.sin(elapsed * 0.8) * 0.13;
            knot.rotation.y += delta * 0.16;
            knot.rotation.z += delta * 0.07;
            orbit.rotation.y += delta * 0.2;
            orbit.rotation.z = Math.sin(elapsed * 0.3) * 0.18;
            blocks.rotation.y += delta * 0.13;
            const spread = 0.78 + (Math.sin(elapsed * 0.7) + 1) * 0.12;
            blocks.children.forEach((cube) =>
              cube.position.set(
                Math.sign(cube.position.x) * spread,
                Math.sign(cube.position.y) * spread,
                Math.sign(cube.position.z) * spread,
              ),
            );
            satellites.rotation.z = elapsed * 0.09;
            satellites.rotation.y = elapsed * 0.12;
          }
          controls.update(delta);
          renderer.render(scene, camera);
          if (!isPaused) frame = requestAnimationFrame(render);
          else previous = 0;
        }
        const wake = () => {
          if (!document.hidden && visible && !frame)
            frame = requestAnimationFrame(render);
        };
        wakeFrame.current = wake;
        const contextLost = (event) => {
          lost = true;
          event.preventDefault();
          setState("fallback");
          cancelAnimationFrame(frame);
          frame = 0;
        };
        renderer.domElement.addEventListener("webglcontextlost", contextLost);
        document.addEventListener("visibilitychange", wake);
        resize();
        frame = requestAnimationFrame(render);
        setState("ready");
        cleanup = () => {
          wakeFrame.current = () => {};
          cancelAnimationFrame(frame);
          observer.disconnect();
          inView.disconnect();
          document.removeEventListener("visibilitychange", wake);
          renderer.domElement.removeEventListener(
            "webglcontextlost",
            contextLost,
          );
          controls.dispose();
          [
            knotGeometry,
            sphereGeometry,
            ringGeometry,
            cubeGeometry,
            satelliteGeometry,
          ].forEach((geometry) => geometry.dispose());
          [metal, darkMetal, chrome].forEach((material) => material.dispose());
          environmentTarget.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch {
        renderer?.dispose();
        renderer?.domElement.remove();
        if (!cancelled) setState("fallback");
      }
    }
    init();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);
  return (
    <div
      className={"sculpture-canvas is-" + state}
      ref={host}
      role="img"
      aria-label="Interactive metallic 3D sculpture. Select Create, Connect, or Build to change its form."
    >
      {state !== "ready" && (
        <div className="sculpture-fallback" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>✳</span>
        </div>
      )}
    </div>
  );
}
