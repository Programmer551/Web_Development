import "./App.css";
import { Canvas } from "@react-three/fiber";
function App() {
  return (
    <Canvas>
      <directionalLight position={[2, 2, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </Canvas>
  );
}

export default App;
