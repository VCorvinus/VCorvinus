npm create vite@latest ./ -- --template react

npm install -D tailwindcss

npx tailwindcss init

<!-- npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom -->

<!-- npm install @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom -->

npm install @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom localforage match-sorter sort-by

<!-- npm run dev -->

<!-- STOP! -->

npm install --legacy-peer-deps -D postcss autoprefixer

npx tailwindcss init -p

<!-- npm run dev -->

<!-- STOP! -->

npm install --legacy-peer-deps three

<!-- npm run dev -->

<!-- STOP! -->

<!-- npm uninstall react-tilt --legacy-peer-deps

npm install react-parallax-tilt -->

<!-- npm install @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom -->

npm i @react-three/fiber --force

<!-- Implementing React Router Dom: "Making use of it"

modded
-App.jsx -->

FUCK THIS SHIT!!!

#####################

<!-- H:\DCI\git\VCorvinus\src\constants\index.js
iconBg: "#E6DEDD", #daf0ea
iconBg: "#383E56", #1c6862

H:\DCI\git\VCorvinus\src\styles.js

H:\DCI\git\VCorvinus\tailwind.config.js
colors: {
primary: "#050816", #020c21
secondary: "#aaa6c3", #80d2e1
tertiary: "#151030", #0a1848
"black-100": "#100d25", #081438
"black-200": "#090325", #040538
"white-100": "#f3f3f3", #edf9f9
},
boxShadow: {
card: "0px 35px 120px -15px #211e35", #102d50
}, -->

############

<!--
import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Preload,
  Points,
  PointMaterial,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

import CanvasLoader from "../Loader";

const Jellyfish = ({ isMobile }) => {
  const jellyfish = useGLTF("./jellyfish/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={jellyfish.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, 2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const JellyfishCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      frameLoop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 20,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Jellyfish isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default JellyfishCanvas;


  -->
