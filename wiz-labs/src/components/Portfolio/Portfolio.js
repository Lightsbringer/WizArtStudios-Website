import React, {useState, useEffect} from 'react';
import { Box, Flex, Text, Heading, Image,
  GridItem, 
  Grid} from '@chakra-ui/react';
import PhotoSlider from '../PhotoSlider/PhotoSlider';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Portfolio.css';

export default function Portfolio(props) {
  const portfolioData = props.data;
  const navigate = useNavigate();

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
      height='4xl'
      max-width='2000px'
      alignItems='center' 
      width='100%'>
      <Flex 
        display='flex' 
        justifyContent="space-evenly" 
        w={['md', '2xl', '4xl', '6xl', '8xl']}
        flexDirection={'column'} 
        alignItems='center'
        h='100%'
        p={'4rem 0'}
        margin='0 auto'>
        <Heading 
          fontSize={['md', 'lg', '2xl', '3xl', '4xl']}
          align={'left'} 
          color='primary'
          mb={4}>
            Our Work
        </Heading>
        <Grid
          h={'90%'}
          templateColumns='repeat(4, 1fr)'
          gap={1}
        >
          <GridItem 
            onClick={() => handleGridClick(portfolioData.workCategories[0])}
            onMouseOver={handleOnMouseHover}
            onMouseLeave={handleOnMouseLeave}>
            {/* <Text fontSize={{sm: 'lg', md:'2xl', lg: '3xl'}} align={'left'} color='primary'>Logos</Text> */}
            <Image
              height='100%'
              src={require(`../../assets/artist_tears_4.jpg`)}
              objectFit="cover"
          />
          </GridItem>
          <GridItem 
            onClick={() => handleGridClick(portfolioData.workCategories[1])}
            onMouseOver={handleOnMouseHover}
            onMouseLeave={handleOnMouseLeave}>
            {/* <Text fontSize={{sm: 'lg', md:'2xl', lg: '3xl'}} align={'left'} color='primary'>NFT Art</Text> */}
            <Image
                height='100%'
                src={require(`../../assets/NFT_1.jpg`)}
                objectFit="cover"
            />
          </GridItem>
          <GridItem 
            onClick={() => handleGridClick(portfolioData.workCategories[2])}
            onMouseOver={handleOnMouseHover}
            onMouseLeave={handleOnMouseLeave}>
            {/* <Text fontSize={{sm: 'lg', md:'2xl', lg: '3xl'}} align={'left'} color='primary'>Fan Art</Text> */}
            <Image
                height='100%'
                src={require(`../../assets/Custom_1.jpg`)}
                objectFit="cover"
            />
          </GridItem>
          <GridItem 
            onClick={() => handleGridClick(portfolioData.workCategories[3])}
            onMouseOver={handleOnMouseHover}
            onMouseLeave={handleOnMouseLeave}>
            {/* <Text fontSize={{sm: 'lg', md:'2xl', lg: '3xl'}} align={'left'} color='primary'>Custom Artworks</Text> */}
            <Image
                height='100%'
                src={require(`../../assets/Banner_1.jpg`)}
                objectFit="cover"
            />
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};
