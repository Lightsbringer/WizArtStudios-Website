import React, { useEffect, useState } from 'react';
import { Text, 
    Box, 
    Image, 
    Heading, 
    Flex, 
    useBreakpointValue} from '@chakra-ui/react';
import Aos from 'aos';
import Floating from '../Animations/Floating';
import 'aos/dist/aos.css';

export default function Services(props) {
  const portfolioData = props.data;
  const [imageHovered, setImageHovered] = useState(null);
  const isMobile = useBreakpointValue({base: true, sm: true, md: false, xl: false});

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <Box 
      ref={props.innerRef}
      data-aos="fade-up" 
      zIndex={'22'}
      position="relative"
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
              fontSize={['md', '2xl', '3xl', '3xl', '4xl']}
              align={'center'} 
              color='primary'
              mb={4}>
                Our Services
            </Heading>
            <Text 
              fontSize={['sm', 'xl', '2xl', '2xl', '2xl']}
              color='secondary'
              width='80%'
              m='0 auto'
              textAlign='left'>
                {portfolioData.skills_description}
            </Text>
            <Flex
              display='flex'
              alignItems={'center'}
              justifyContent={'space-between'}
              flexWrap={'wrap'}
              flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                {portfolioData.services.map((service, i) => (
                  <Box 
                    width='45%' 
                    key={i}
                    mb={'3rem'}>
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
                    <Text fontSize={['sm', 'xl', '2xl', '2xl', '2xl']} align={'center'} color='primary' p='1rem'>{service.type}</Text>
                    <Text fontSize={['sm', 'xl', 'xl', 'xl', 'xl']}  align={'left'} color='secondary'>{service.description}</Text>
                  </Box>
                ))}
            </Flex>
        </Flex>
    </Box>
  )
}
