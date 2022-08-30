import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef, FC } from 'react';

const RenderWelcome = () => {
  const { viewport } = useThree();
  const ref = useRef<any>();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    ref.current.position.set(x, y, 0);
    ref.current.rotation.set(-y, x, 0);
  });

  return (
    <mesh ref={ref} castShadow>
      <Text
        scale={[10, 10, 10]}
        color='#0cc7ab'
        anchorX='center'
        anchorY='middle'
      >
        Welcome!
      </Text>
    </mesh>
  );
};

const RenderHello = () => {
  const ref = useRef<any>();
  useFrame(
    (state, delta) => (ref.current.rotation.x = ref.current.rotation.y += 0.01)
  );

  return (
    <mesh ref={ref} castShadow>
      <Text
        scale={[15, 15, 10]}
        color='#0cc7ab'
        anchorX='center'
        anchorY='middle'
      >
        Hellooo!
      </Text>
    </mesh>
  );
};

const RenderDragMe = () => {
  return (
    <Text
      scale={[10, 10, 10]}
      color='#ff533d'
      anchorX='center'
      anchorY='top-baseline'
    >
      Drag me
    </Text>
  );
};

const Hero3D: FC = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <RenderDragMe />
        <RenderWelcome />
        <RenderHello />
      </Canvas>
    </>
  );
};

export default Hero3D;
