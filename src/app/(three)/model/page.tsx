'use client';

import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei';

export default function Model() {
  const url = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf';
  const { scene: tree } = useGLTF(url);

  return (
    <>
      <group>
        <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <group position={[0, -10, 0]}>
          <primitive object={tree} position={[0, 0.25, 0]} />
          <ContactShadows scale={20} blur={10} far={20} frames={10} />
        </group>
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
