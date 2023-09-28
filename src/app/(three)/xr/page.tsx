'use client';

import { Controllers, XR } from '@react-three/xr';
import { Vector3 } from 'three';

import Model from './_components/model';

export default function X() {
  return (
    <>
      <XR referenceSpace="local">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model position={new Vector3(0, 0.1, -0.2)} />
        <Controllers />
      </XR>
    </>
  );
}
