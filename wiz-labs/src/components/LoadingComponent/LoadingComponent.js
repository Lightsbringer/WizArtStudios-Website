import React from 'react';
import { Box, keyframes, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './LoadingComponent.css';

const flipAnimationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.5) rotate(0); border-radius: 20%; }
  50% { transform: scale(1.5) rotate(90deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(360deg); border-radius: 20%; }
`;

export const flipAnimation = `${flipAnimationKeyframes} 2.2s ease-in-out infinite`;

export default function LoadingComponent(props) {
    const portfolioData = props.data;
    const loading = props.loading;

    return (
        <Box 
            h='100vh'
            w='100vw'
            visibility={loading ? 'visible' : 'hidden'}
            position="absolute"
            background={'background'} 
            alignItems="center" 
            display="flex"
            justifyContent="center" 
            flexDirection={'column'} 
            zIndex={'9999'}>
            <Box
                as={motion.div}
                animation={flipAnimation}
                padding="2"
                bgGradient="linear(to-l, primary, secondary)"
                width={["5rem", "7.5rem", "10rem", "10rem", "10rem"]}
                height={["5rem", "7.5rem", "10rem", "10rem", "10rem"]}
                display="flex"
            >
                <Image 
                    alt='logo_image'
                    height='auto' 
                    width='200px' 
                    objectFit='contain' 
                    priority={'true'}
                    borderRadius='100px' 
                    src={require(`../../assets/${portfolioData.logo_image}`)}/>
            </Box>
            <Text fontSize={['md', 'xl', 'xl', 'xl', 'xl']} pt={['35px','45px','55px','65px','75px',]} color='secondary'>Entering {portfolioData.name}...</Text>
        </Box>
    )
}
