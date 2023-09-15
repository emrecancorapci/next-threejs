'use client';

import { Canvas } from '@react-three/fiber';

interface Properties {
  children: React.ReactNode;
}

export default function Page({ children }: Properties) {
  return (
    <Canvas shadows={true} camera={{ position: [0, 5, 7] }} className="h-screen w-screen bg-white">
      {children}
    </Canvas>
  );
}
