'use client';

/* eslint-disable react/no-unknown-property */
import Box from './_components/box';
import Floor from './_components/floor';

export default function Basic() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Floor />
      <Box position={[1, 1, 0]} />
    </>
  );
}
