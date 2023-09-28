'use client';

import { Text } from '@react-three/drei';
import { Interactive } from '@react-three/xr';
import React, { Suspense, useState } from 'react';
import { type Vector3 } from 'three';

import Box from '@/components/box';

export default function Model({ position }: { position: Vector3 }) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState<string | number>('blue');

  const onSelect = () => {
    setColor(Math.trunc(Math.random() * 0xff_ff_ff));
  };

  return (
    <Interactive
      onHover={() => {
        setHover(true);
      }}
      onBlur={() => {
        setHover(false);
      }}
      onSelect={onSelect}
    >
      <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} position={position}>
        <Suspense fallback={undefined}>
          <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
            Hello react-xr!
          </Text>
        </Suspense>
      </Box>
    </Interactive>
  );
}
