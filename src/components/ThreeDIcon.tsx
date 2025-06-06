
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./AnimatedSphere";
import { Suspense } from "react";

interface ThreeDIconProps {
  color?: string;
  size?: number;
  position?: [number, number, number];
  distort?: number;
}

const ThreeDIcon = ({
  color = "#00f0ff",
  size = 1,
  position = [0, 0, 0],
  distort = 0.4,
}: ThreeDIconProps) => {
  return (
    <div className="w-32 h-32">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <AnimatedSphere 
            color={color}
            size={size}
            position={position}
            distort={distort}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDIcon;
