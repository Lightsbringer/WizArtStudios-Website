import React, {useEffect, useState} from 'react';
import { Box, Flex, Text, Heading, Image,
  GridItem, 
  useBreakpointValue} from '@chakra-ui/react';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Portfolio.css';

export default function Portfolio(props) {
  const portfolioData = props.data;
  const navigate = useNavigate();
  const assets = ['Gem3.jpeg', 'NFT_3.jpeg', 'Custom_1.jpeg', 'Illustration_15.jpeg'];
  const isMobile = useBreakpointValue({base: true, sm: true, md: false, xl: false});

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  const handleGridClick = (value) => {
    const trimmedValue = value.trim().toLowerCase().replace(/\s/g, "");
    navigate(`/portfolio/${trimmedValue}`);
  }

  return (
    <Box 
      ref={props.innerRef}
      data-aos='fade-up' 
      background='secondary'
      zIndex={'25'}
      position="relative"
      height={['xl','3xl','4xl','5xl','6xl',]}
      max-width='2000px'
      alignItems='center'
      _after={{content:`""`, 
        position: 'absolute',
        display: 'block',
        bottom: '-1px',
        left: '0',
        right: '0',
        paddingBottom: '7%',
        background: '#522336',
        clipPath: 'polygon(0 30%,0 100%,100% 100%)'
      }}>
      <Flex 
        display='flex' 
        justifyContent="space-evenly" 
        w={['100%', '100%', '3xl', '6xl', '9xl']}
        flexDirection={'column'} 
        alignItems='center'
        h='100%'
        p={'4rem 0'}
        margin='0 auto'
        overflowX={'auto'}>
        <Heading 
          fontSize={['3xl', '3xl', '4xl', '4xl', '5xl']}
          align={'left'} 
          color='primary'
          mb={4}>
            Our Work
        </Heading>
        <Flex
          overflowX='auto'
          m='auto 1rem'
          height={['60%', '60%', '60%','80%','80%']}
          display='flex' 
          flexWrap='nowrap'
          whiteSpace='nowrap'
        >
          {assets.map((asset, i) => (
          <Box 
              key={i}
              minWidth={['50%','50%','50%','25%','25%',]}
              cursor='pointer'>
            <Box 
              className='image-container' 
              height='100%'
              position='relative'
              onClick={() => handleGridClick(portfolioData.workCategories[i])}
              m='0 0.5rem' 
              overflow='hidden'>
              <Image
                alt={`portfolio_${i}`}
                height='100%'
                margin={'0 auto'}
                loading='lazy'
                src={require(`../../assets/${asset}`)}
                objectFit="cover"
                className='image'
                transition={'.5s ease'}
                />
              <Text 
                className='shrink-border'
                fontSize={['md', 'lg', 'xl', 'xl', '2xl']}
                position="absolute"
                left="50%"
                bottom="0"
                width={isMobile ? '130px' : '60%'}
                color='black'
                text-align='center'
                transform = 'translate(-50%, -50%)'
                backgroundColor='white'
                padding={isMobile ? '0.5rem' : '1rem'}
                >
                {portfolioData.workCategories[i]}
              </Text>
            </Box>
          </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
