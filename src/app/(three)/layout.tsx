'use client';

import { ResizeObserver } from '@juggle/resize-observer';
import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ARButton } from '@react-three/xr';
import { Leva } from 'leva';

interface Properties {
  children: React.ReactNode;
}

export default function Page({ children }: Properties) {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
      ]}
    >
      <ARButton />
      <Canvas
        shadows={true}
        resize={{ polyfill: ResizeObserver }}
        camera={{ position: [0, 5, 7] }}
        className="h-screen w-screen bg-zinc-700"
      >
        {children}
      </Canvas>
      <Leva collapsed={true} />
    </KeyboardControls>
  );
}
