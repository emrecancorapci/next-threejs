'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

import type { MeshProperties } from '@/types/MeshProperties';

export default function Box(properties: MeshProperties) {
  const reference = useRef<Mesh>();

  useFrame((state, delta) => {
    // @ts-expect-error - No reference.current won't be undefined. You're undefined.
    return (reference.current.rotation.x += delta);
  });

  return (
    // @ts-expect-error - It is the true type, but ts likes to complain about it.
    <mesh castShadow receiveShadow {...properties} ref={reference}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial roughness={0.5} metalness={0.3} color="red" />
    </mesh>
  );
}
