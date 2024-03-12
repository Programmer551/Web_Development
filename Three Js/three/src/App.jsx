import { useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDiscardMaterial,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;

    ref.current.position.z = Math.cos(state.clock.elapsedTime) * 5;
  });
  return (
    <mesh
      position={position}
      ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
const Torus = ({ position, size, color }) => {
  // const ref = useRef();

  // useFrame((state, delta) => {
  //   // ref.current.rotation.x += delta * 0.2;
  //   // ref.current.rotation.y += delta;
  //   // ref.current.position.z = Math.cos(state.clock.elapsedTime) * 2;
  // });
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      <MeshDistortMaterial
        factor={22}
        // speed={20}
        color={"blue"}
        wireframe
      />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta * 0.2;
  //   // ref.current.rotation.y += delta;
  // });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}>
      <sphereGeometry args={size} />
      <meshStandardMaterial
        color={isHovered ? "red" : "blue"}
        wireframe
      />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <directionalLight
        position={[0, 0, 2]}
        // intensity={2}
      />
      {/* <ambientLight /> */}

      {/* <Sphere
        position={[0, 0, 0]}
        color={"blue"}
        size={[2, 20, 20]}
      /> */}
      <Torus
        position={[0, 0, 0]}
        color={"red"}
        size={[1, 0.1, 1000, 50]}
      />
      <OrbitControls enableZoom={true} />
      {/* <Torus
        position={[0, 0, 0]}
        color={"blue"}
        size={[1, 1, 1]}
      /> */}
      {/* <Cube
        position={[-1, 0, 0]}
        color='red'
        size={[1, 1, 1]}
      />
      <Cube
        position={[1, 0, 0]}
        color='green'
        size={[1, 1, 1]}
      />
      <Cube
        position={[-1, 2, 0]}
        color='blue'
        size={[1, 1, 1]}
      />
      <Cube
        position={[1, 2, 0]}
        color='orange'
        size={[1, 1, 1]}
      /> */}
    </Canvas>
  );
}

export default App;
