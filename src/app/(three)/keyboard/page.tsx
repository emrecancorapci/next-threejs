'use client';

import { OrbitControls, Sky, useKeyboardControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Physics, type RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useEffect, useRef } from 'react';
import { type PerspectiveCamera, Vector3 } from 'three';

import Box from '@/components/box';

import Ground from './_component/ground';

const SPEED = 5;
const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();

export default function Keyboard() {
  const three = useThree();
  const [, get] = useKeyboardControls();
  const boxReference = useRef<RapierRigidBody>();
  const cam = three.camera as PerspectiveCamera;

  useEffect(() => {
    cam.position.set(0, 5, 5);
    cam.fov = 45;
    console.log('cam', cam);
  }, [cam]);

  useFrame((state) => {
    const { forward, backward, left, right } = get();

    // @ts-expect-error - Ts doesn't like the fact that we extract booleans. But who cares? I won't take orders from a computer.
    const [horizontalScalar, verticalScalar] = [left - right, backward - forward];

    frontVector.set(0, 0, verticalScalar);
    sideVector.set(horizontalScalar, 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED);

    boxReference.current?.setLinvel(direction, true);
  });

  return (
    <>
      <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.3} />

      <Physics>
        <RigidBody
          // @ts-expect-error - Ts doesn't like the reference type.
          ref={boxReference}
          colliders={false}
          mass={1}
          type="dynamic"
          position={[0, 1, 0]}
          enabledRotations={[false, false, false]}
        >
          <Box />
        </RigidBody>
        <Ground />
      </Physics>

      <OrbitControls enablePan={false} enableZoom={true} />

      {/* <Environment preset="warehouse" /> */}
    </>
  );
}
