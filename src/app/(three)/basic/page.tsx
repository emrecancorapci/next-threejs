'use client';

/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';

import Box from '@/components/box';

import Floor from './_components/floor';

export default function Basic() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight castShadow position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={50} />
      <pointLight castShadow position={[-5, 5, -5]} color="blue" intensity={50} />

      <Floor />
      <Box size={[1, 1, 1]} position={[0, 1, 0]} roughness={0.5} metalness={0.3} color="red" />

      <OrbitControls />
    </>
  );
}
