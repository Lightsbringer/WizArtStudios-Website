import React, { useState } from 'react';
import { 
    Text, 
    Stack, 
    Flex,
    Image,
    Box,
    Button,
    Heading
} from '@chakra-ui/react';
import Floating from './Animations/Floating';
import './Home.css';

export default function Home(props) {
    const portfolioData = props.data;
    const windowHeight = window.innerHeight;

    return (
        <Box 
            variant='div'
            display={'flex'}
            height={80 * windowHeight / 100}
            alignItems='center'
            justifyContent='space-evenly'>
            <Flex 
                display='flex' 
                w={['md', 'xl', '3xl', '5xl', '6xl']}
                m={'0 auto'}
                justifyContent="space-between" 
                flexDirection={'row'} 
                alignItems='center'>
                <Stack spacing={10} width='60%'>
                    <Heading fontSize={['md', 'lg', '2xl', '3xl', '4xl']} align={'left'} color='primary' mb={4}>{portfolioData.motto}</Heading>
                    <Text fontSize={['sm', 'md', 'xl', 'xl', '2xl']}  align={'left'} color='secondary'>{portfolioData.hook}</Text>
                    <Box alignContent={'left'}>
                        <Button background='primary' color='white'>Learn More</Button>
                    </Box>
                </Stack>
                <Stack width='40%'>
                    <Floating enabled={true}>
                        <Image
                            width={'auto'}
                            objectFit='contain'
                            src={require(`../assets/wiz.png`)}
                            alt='Landing Page Wiz'
                        />
                    </Floating>
                </Stack>
                
            </Flex>
            
        </Box>

    )
}
