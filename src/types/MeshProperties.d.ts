import type { MeshProps } from '@react-three/fiber';

export interface MeshProperties extends MeshProps {
  size?: [
    width?: number | undefined,
    height?: number | undefined,
    depth?: number | undefined,
    widthSegments?: number | undefined,
    heightSegments?: number | undefined,
    depthSegments?: number | undefined,
  ];
  roughness?: number;
  metalness?: number;
  color?: Color | string;
}
