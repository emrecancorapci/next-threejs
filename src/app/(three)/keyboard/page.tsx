'use client';

import { OrbitControls, Sky } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { useEffect } from 'react';

import Box from '@/components/box';

import Ground from './_component/ground';

export default function Keyboard() {
  return (
    <>
      <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.3} />

      <Physics>
        <Box position={[0, 1, 0]} />
        <Ground />
      </Physics>

      <OrbitControls autoRotate autoRotateSpeed={4} enablePan={false} enableZoom={true} />

      {/* <Environment preset="warehouse" /> */}
    </>
  );
}
