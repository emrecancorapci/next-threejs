'use client';

import { AccumulativeShadows, Environment, OrbitControls, RandomizedLight, RoundedBox } from '@react-three/drei';
import { useControls } from 'leva';

import Box from '@/components/box';

export default function Controls() {
  const { roughness } = useControls({ roughness: { value: 0.2, min: 0, max: 1, step: 0.01 } });
  const { metalness } = useControls({ metalness: { value: 0.5, min: 0, max: 1, step: 0.01 } });
  return (
    <>
      <group>
        <AccumulativeShadows
          temporal
          frames={200}
          color="black"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight amount={10} radius={5} ambient={0.5} position={[5, 2, 2]} bias={0.001} />
        </AccumulativeShadows>

        <Box position={[0, 0.5, 0]} />
        <RoundedBox castShadow receiveShadow position={[1, 0.5, 1]} args={[1, 1, 1]} radius={0.1} smoothness={4}>
          <meshPhysicalMaterial roughness={roughness} metalness={metalness} color="red" />
        </RoundedBox>
      </group>

      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enablePan={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.1}
      />

      <Environment preset="warehouse" />
    </>
  );
}
