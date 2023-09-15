import { type MeshProperties } from '@/types/MeshProperties';

export default function Floor(properties: MeshProperties) {
  return (
    <mesh {...properties}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <boxGeometry args={[5, 0.1, 5]} />
      <meshPhysicalMaterial color="green" />
    </mesh>
  );
}
