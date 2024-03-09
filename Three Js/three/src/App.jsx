import { useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    // ref.current.rotation.z += delta;
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
function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />

      <Cube
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
      />
    </Canvas>
  );
}

export default App;
