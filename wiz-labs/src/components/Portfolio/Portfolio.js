import React, {useEffect} from 'react';
import { Box, Flex, Text, Heading, Image,
  GridItem, 
  useBreakpointValue} from '@chakra-ui/react';
import Deck from './Deck';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Portfolio.css';

export default function Portfolio(props) {
  const portfolioData = props.data;
  const navigate = useNavigate();
  const assets = ['artist_tears_4.jpg', 'NFT_1.jpg', 'Custom_1.jpg', 'Banner_1.jpg'];
  const isMobile = useBreakpointValue({base: true, sm: true, md: false, xl: false});

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  const handleGridClick = (value) => {
    navigate(`/portfolio/${value}`);
  }

  const handleOnMouseHover = (e) => {

  }

  const handleOnMouseLeave = (e) => {
    
  }

  return (
    <Box 
      ref={props.innerRef}
      data-aos='fade-up' 
      background='secondary'
      zIndex={'25'}
      position="relative"
      height={['3xl','4xl','5xl','5xl','5xl',]}
      max-width='2000px'
      alignItems='center'>
      <Flex 
        display='flex' 
        justifyContent="space-evenly" 
        w={['100%', '2xl', '4xl', '6xl', '8xl']}
        flexDirection={'column'} 
        alignItems='center'
        h='100%'
        p={'4rem 0'}
        margin='0 auto'
        overflowX={'auto'}>
        <Heading 
          fontSize={['xl', 'xl', '2xl', '3xl', '4xl']}
          align={'left'} 
          color='primary'
          mb={4}>
            Our Work
        </Heading>
        <Flex
          overflowX='auto'
          height='80%'
          m='auto 1rem'
          gap={3}
          display='flex' 
          flexWrap='nowrap'
          whiteSpace='nowrap'
        >
          {assets.map((asset, i) => (
          <Box 
              key={i}
              minWidth={['100%','75%','50%','25%','25%',]}
              onClick={() => handleGridClick(portfolioData.workCategories[i])}
              onMouseOver={handleOnMouseHover}
              onMouseLeave={handleOnMouseLeave}
              cursor='pointer'>
            <Box 
              className='image-container' 
              height='100%'
              position='relative' 
              overflow='hidden'>
              <Image
                opacity={'1'}
                height='100%'
                src={require(`../../assets/${asset}`)}
                objectFit="cover"
                className='image'
                transition={'.5s ease'}
                />
              <Text 
                className='shrink-border'
                fontSize={['sm', 'md', 'xl', 'xl', '2xl']}
                position="absolute"
                left="50%"
                bottom="0"
                width='80%'
                opacity="0"
                color='black'
                text-align='center'
                transform = 'translate(-50%, -50%)'
                animation='slidein 7s'
                backgroundColor='white'
                padding='1.5rem'
                >
                {portfolioData.workCategories[i]}
              </Text>
            </Box>
          </Box>
          ))}
        </Flex>
      </Flex>
      <Deck/>
    </Box>
    // <div id='deck-root'>
    //   <Deck />
    // </div>
  );
};
