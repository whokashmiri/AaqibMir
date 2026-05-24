import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  MeshDistortMaterial
} from "@react-three/drei";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 5]} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={2.2}>
          <MeshDistortMaterial
            color="#915EFF"
            distort={0.4}
            speed={2}
          />
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Scene;