'use client';

import { forwardRef } from 'react';
import type { Mesh } from 'three';

import type { MeshProperties } from '@/types/MeshProperties';

const Box = forwardRef<Mesh, MeshProperties>(({ position, roughness, metalness, color, size }, reference) => {
  return (
    <mesh castShadow receiveShadow position={position} ref={reference}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial roughness={roughness} metalness={metalness} color={color ?? 'white'} />
    </mesh>
  );
});

Box.displayName = 'Box';

export default Box;
