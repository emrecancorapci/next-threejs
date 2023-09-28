'use client';

import { Sky } from '@react-three/drei';
import { Physics, type RapierRigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { Quaternion } from 'three';

import Camera from './_components/camera';
import Ground from './_components/ground';
import Player from './_components/player';

const cameraRotationQuat = new Quaternion();

export default function Keyboard() {
  const boxReference = useRef<RapierRigidBody>();

  return (
    <>
      <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.3} />

      <Physics>
        <Player boxReference={boxReference} cameraRotationQuat={cameraRotationQuat} />
        <Ground />
      </Physics>
      <Camera boxReference={boxReference} cameraRotationQuat={cameraRotationQuat} />

      {/* <OrbitControls enablePan={false} enableZoom={true} /> */}
    </>
  );
}
