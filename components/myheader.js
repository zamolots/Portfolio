import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { Canvas } from '@react-three/fiber'
import { Html, Stars, PerspectiveCamera } from '@react-three/drei'
import { useSpring, a } from 'react-spring/three'

const myBigLogo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [flipped, setFlipped] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { rotation } = useSpring({
    rotation: flipped ? [0, Math.PI, 0] : [0, 0, 0],
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handler = setTimeout(() => setFlipped(state => !state), 2000);
    return () => clearTimeout(handler);
  }, [flipped]);

  return(
    <Box display={{md:'flex'}} mt={{md:6}} >
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6}}
        mr={{md:6}}
        textAlign="center"
      >
        <Canvas style={{ width: '100px', height: '100px' }}>
          <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <Stars />
          <a.mesh rotation={rotation} onClick={() => setFlipped(!flipped)}>
            <boxBufferGeometry attach="geometry" />
            <meshBasicMaterial attach="material" color={useColorModeValue('#553C9A','pink')} />
            <Html position={[0, 0, 0.5]}>
              <Image src="/images/me.jpg" alt="Profile image" borderRadius='full'/>
            </Html>
            <Html position={[0, 0, -0.5]} rotation={[0, Math.PI, 0]}>
              <Image src="/images/me.jpg" alt="Profile image" borderRadius='full'/>
            </Html>
          </a.mesh>
        </Canvas>
      </Box>
      <Box flexGrow alignItems="center">
        <Heading as="h1" align="center" variant="page-title" color={useColorModeValue('#553C9A','pink')} >
            Alex Zamolotskikh
        </Heading>
        <p align="center">ML Developer</p>
      </Box>
    </Box>
  )
}

export default myBigLogo