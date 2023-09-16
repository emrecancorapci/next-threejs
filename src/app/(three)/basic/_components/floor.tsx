import { type MeshProperties } from '@/types/MeshProperties';

export default function Floor(properties: MeshProperties) {
  return (
    <mesh castShadow receiveShadow {...properties}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <boxGeometry args={[5, 0.1, 5]} />
      <meshPhysicalMaterial roughness={0.2} metalness={0.5} color="green" />
    </mesh>
  );
}
