import Box from '@/components/box';
import { type MeshProperties } from '@/types/MeshProperties';

export default function Floor({ position }: MeshProperties) {
  return <Box position={position} roughness={0.2} metalness={0.5} color="green" size={[5, 0.1, 5]} />;
}
