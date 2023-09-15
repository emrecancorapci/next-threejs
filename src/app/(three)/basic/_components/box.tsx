'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

import type { MeshProperties } from '@/types/MeshProperties';

export default function Box(properties: MeshProperties) {
  const reference = useRef<Mesh>();

  useFrame((state, delta) => {
    return (reference.current.rotation.x += delta);
  });

  return (
    <mesh {...properties} ref={reference}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color="red" />
    </mesh>
  );
}
