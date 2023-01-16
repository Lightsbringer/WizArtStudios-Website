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
import FloatingParticle from './Animations/FloatingParticles';
import './Home.css';

export default function Home(props) {
    const { scrollTo } = props;
    const portfolioData = props.data;
    const windowHeight = window.innerHeight;
    const isMobile = useBreakpointValue({base: true, sm: true, md: true, lg:false, xl: false});
    const floatingParticles = portfolioData.floatingParticleImages;

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    return (
        <Box 
            variant='div'
            ref={props.innerRef}
            display={'flex'}
            zIndex={21}
            position="relative"
            height={isMobile ? 80 * windowHeight / 100 : 85 * windowHeight / 100}
            alignItems={'center'}
            justifyContent='space-evenly'
            _after={{content:`""`, 
                position: 'absolute',
                display: 'block',
                bottom: '-1px',
                left: '0',
                right: '0',
                paddingBottom: '7%',
                background: '#351B25',
                clipPath: 'polygon(0 30%,0 100%,100% 100%)'
            }}>
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
            {shuffle(floatingParticles).map((particle, index) => (
                <FloatingParticle key={index} data={portfolioData} particle={particle} indexAnimation={index+1}/>
            ))}
        </Box>

    )
}
