'use client';

import { useKeyboardControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { type RapierRigidBody, RigidBody } from '@react-three/rapier';
import { type MutableRefObject, useEffect } from 'react';
import { type PerspectiveCamera, type Quaternion, Vector3 } from 'three';

import Box from '@/components/box';

const SPEED = 5;
const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();

export default function Player({
  boxReference,
  cameraRotationQuat,
}: {
  boxReference: MutableRefObject<RapierRigidBody | undefined>;
  cameraRotationQuat: Quaternion;
}) {
  const three = useThree();
  const [, get] = useKeyboardControls();
  const cam = three.camera as PerspectiveCamera;

  useEffect(() => {
    cam.position.set(0, 5, 5);
    cam.fov = 45;
  }, [cam]);

  useFrame(() => {
    const { forward, backward, left, right } = get();
    // @ts-expect-error - Ts doesn't like the fact that we extract booleans. But who cares? I won't take orders from a computer.
    const [horizontalScalar, verticalScalar] = [left - right, backward - forward];

    sideVector.set(horizontalScalar, 0, 0);
    frontVector.set(0, 0, verticalScalar);
    direction
      .subVectors(frontVector, sideVector)
      .applyQuaternion(cameraRotationQuat.normalize())
      .normalize()
      .multiplyScalar(SPEED);
    direction.y = boxReference.current?.linvel().y ?? 0;

    boxReference.current?.setEnabledRotations(false, true, false, true);
    boxReference.current?.setRotation(cameraRotationQuat, true);
    boxReference.current?.setLinvel(direction, true);
  });

  return (
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
  );
}
