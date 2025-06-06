
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AnimatedSphereProps {
  color: string;
  size: number;
  position: [number, number, number];
  distort: number;
}

const AnimatedSphere = ({ color, size, position, distort }: AnimatedSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
      
      // Add some distortion effect using time
      const time = state.clock.getElapsedTime();
      meshRef.current.scale.setScalar(1 + Math.sin(time * (hovered ? 3 : 1)) * (hovered ? distort * 1.5 : distort) * 0.1);
    }

    // Animate position when hovered
    if (groupRef.current) {
      const targetY = hovered ? position[1] + 0.3 : position[1];
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          opacity={0.8}
          transparent={true}
        />
      </mesh>
    </group>
  );
};

export default AnimatedSphere;
