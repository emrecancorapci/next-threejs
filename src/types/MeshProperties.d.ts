import type { Color, Euler, Vector3 } from 'three';

export interface MeshProperties {
  rotation?: Euler | [x, y, z];
  position?: Vector3 | [x, y, z] | scalar;
  color?: Color | string;
}
