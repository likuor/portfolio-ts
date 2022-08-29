import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stats, Text } from '@react-three/drei';

// type Props = {
//   isDarkMode: boolean;
// };

const Hero3D = () => {
  // const Box = () => {
  //   const ref = useRef<any>(null);
  //   const [isHovered, setIsHovered] = useState(false);

  //   useFrame(() => {
  //     ref.current.rotation.x += 0.01;
  //     ref.current.rotation.y += 0.01;
  //   });

  //   return (
  //     <mesh
  //       ref={ref}
  //       onPointerOver={() => setIsHovered(true)}
  //       onPointerOut={() => setIsHovered(false)}
  //     >
  //       <boxGeometry args={isHovered ? [1.2, 1.2, 1.2] : [2, 2, 2]} />
  //       <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x9178e6} />
  //     </mesh>
  //   );
  // };

  return (
    <>
      <Canvas dpr={2}>
        <pointLight position={[15, 15, 15]} />
        <Text
          scale={[10, 10, 10]}
          color='white'
          anchorX='center'
          anchorY='middle'
        >
          HELLOOO!
        </Text>
        <OrbitControls />
        <Stats />
      </Canvas>
    </>
  );
};

export default Hero3D;
