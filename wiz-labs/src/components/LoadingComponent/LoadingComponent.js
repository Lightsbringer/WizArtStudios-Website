import React from 'react';
import { Box, Container, keyframes, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './LoadingComponent.css';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.5) rotate(0); border-radius: 20%; }
  50% { transform: scale(1.5) rotate(90deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(360deg); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2.5s ease-in-out infinite`;

export default function LoadingComponent(props) {
    const portfolioData = props.data;

    return (
        <Container h="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection={'column'}>
            <Box
                as={motion.div}
                animation={animation}
                padding="2"
                bgGradient="linear(to-l, primary, secondary)"
                width="10rem"
                height="10rem"
                display="flex"
            >
                <Image 
                    height='auto' 
                    width='200px' 
                    objectFit='contain' 
                    borderRadius='100px' 
                    src={`images/${portfolioData.logo_image}`}/>
            </Box>
            <Text fontSize="xl" pt='75px' color='secondary'>Entering {portfolioData.name}...</Text>
        </Container>
    )
}
