import React, { useEffect, useState } from 'react';
import { Text, 
    Box, 
    Image, 
    Heading, 
    Flex, 
    VStack} from '@chakra-ui/react';
import Aos from 'aos';
import Floating from '../Animations/Floating';
import 'aos/dist/aos.css';

export default function Services(props) {
  const portfolioData = props.data;
  const [imageHovered, setImageHovered] = useState(null);

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <Box 
      ref={props.innerRef}
      data-aos="fade-up" 
      background='darkBackground'
      variant='div'>
        <Flex 
          display='flex' 
          w={['md', 'xl', '3xl', '5xl', '6xl']}
          justifyContent="space-between" 
          flexDirection={'column'} 
          alignItems='center'
          p='4rem 0'
          margin='0 auto'>
            <Heading 
              fontSize={['md', 'lg', '2xl', '3xl', '4xl']}
              align={'center'} 
              color='primary'
              mb={4}>
                Our Services
            </Heading>
            <Text 
              fontSize={['sm', 'md', 'xl', 'xl', '2xl']}
              color='white'>
                {portfolioData.skills_description}
            </Text>
            <Flex
              display='flex'
              alignItems={'center'}
              justifyContent={'space-between'}
              flexWrap={'wrap'}
              flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                {portfolioData.services.map((service, i) => (
                  <VStack width='45%' key={i}>
                    <Floating enabled={imageHovered !== null && i === imageHovered}>
                      <Image
                        id={`image${i}`}
                        boxSize={'200px'}
                        m='0 auto'
                        objectFit='contain'
                        onMouseOver={() => setImageHovered(i)}
                        onMouseLeave={() => setImageHovered(null)}
                        src={require(`../../assets/${service.image}`)}
                        alt='Landing Page Wiz'
                      />
                    </Floating>
                    <Text fontSize={{sm: 'lg', md:'xl', lg: '2xl'}} align={'center'} color='primary'>{service.type}</Text>
                    <Text fontSize={{sm: 'md', md:'lg', lg: 'xl'}}  align={'left'} color='secondary'>{service.description}</Text>
                  </VStack>
                ))}
            </Flex>
        </Flex>
    </Box>
  )
}
