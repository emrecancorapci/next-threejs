'use client';

import { useKeyboardControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { type RapierRigidBody } from '@react-three/rapier';
import { type MutableRefObject, useEffect } from 'react';
import { Euler, type PerspectiveCamera, type Quaternion, Vector3 } from 'three';

const cameraRotationEuler = new Euler();
const cameraNextPosition = new Vector3();

export default function Camera({
  cameraRotationQuat,
  boxReference,
}: {
  cameraRotationQuat: Quaternion;
  boxReference: MutableRefObject<RapierRigidBody | undefined>;
}) {
  const [, get] = useKeyboardControls();
  const three = useThree();
  const camera = three.camera as PerspectiveCamera;

  useEffect(() => {
    camera.position.set(0, 5, 5);
    camera.fov = 45;
  }, [camera]);

  useFrame(() => {
    const box = boxReference.current;
    const boxPosition = box?.translation();
    const { forward, backward, left, right } = get();
    // @ts-expect-error - Ts doesn't like the fact that we extract booleans. But who cares? I won't take orders from a computer.
    const [horizontalScalar, verticalScalar] = [left - right, backward - forward];
    cameraNextPosition.set(boxPosition.x, boxPosition.y + 5, boxPosition.z + 5);

    camera.getWorldQuaternion(cameraRotationQuat);
    cameraRotationEuler.setFromQuaternion(cameraRotationQuat, 'YXZ');
    cameraRotationEuler.x = 0;
    cameraRotationQuat.setFromEuler(cameraRotationEuler);

    camera.position.set(cameraNextPosition.x, cameraNextPosition.y, cameraNextPosition.z);
    camera.lookAt(boxPosition.x, boxPosition.y, boxPosition.z);
  });

  // eslint-disable-next-line unicorn/no-useless-undefined
  return undefined;
}
