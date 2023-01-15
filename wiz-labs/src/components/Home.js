import React from 'react';
import { 
    Text, 
    Stack, 
    Flex,
    Image,
    Box,
    Button,
    Heading,
    useBreakpointValue
} from '@chakra-ui/react';
import Floating from './Animations/Floating';
import './Home.css';

export default function Home(props) {
    const { scrollTo } = props;
    const portfolioData = props.data;
    const windowHeight = window.innerHeight;
    const isMobile = useBreakpointValue({base: true, sm: true, md: false, xl: false});

    return (
        <Box 
            variant='div'
            ref={props.innerRef}
            display={'flex'}
            zIndex={21}
            position="relative"
            height={80 * windowHeight / 100}
            alignItems={'center'}
            justifyContent='space-evenly'>
            <Flex 
                display='flex' 
                w={['100%', 'xl', '3xl', '5xl', '6xl']}
                m={'0 auto'}
                justifyContent="space-between" 
                flexDirection={isMobile ? 'column-reverse' : 'row'}
                alignItems='center'>
                <Stack spacing={isMobile ? 5 : 10} width={isMobile ? '80%' : '60%'} m='0 auto'>
                    <Heading fontSize={['md', 'lg', '2xl', '3xl', '4xl']} align={'left'} color='primary' mb={4}>{portfolioData.motto}</Heading>
                    <Text fontSize={['sm', 'md', 'xl', 'xl', '2xl']}  align={'left'} color='secondary'>{portfolioData.hook}</Text>
                    <Box alignContent={'left'}>
                        <Button 
                            background='primary' 
                            color='white'
                            onClick={(e) => scrollTo(e, 'services')}
                            _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                Learn More
                        </Button>
                    </Box>
                </Stack>
                <Stack width={isMobile ? '80%' : '40%'} m='0 auto'>
                    <Floating enabled={true}>
                        <Image
                            width={'auto'}
                            objectFit='contain'
                            src={`images/wiz.png`}
                        />
                    </Floating>
                </Stack>
                
            </Flex>
            
        </Box>

    )
}
