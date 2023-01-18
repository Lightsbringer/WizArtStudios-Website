import React, { useEffect, useState } from 'react';
import { Text, 
    Box, 
    Image, 
    Heading, 
    Flex,
    useBreakpointValue
} from '@chakra-ui/react';
import Floating from '../Animations/Floating';

export default function Services(props) {
  const portfolioData = props.data;
  const [imageHovered, setImageHovered] = useState(null);
  const isMobile = useBreakpointValue({base: true, sm: true, md: false, lg: false, xl: false});

  return (
    <Box 
      ref={props.innerRef}
      zIndex={'22'}
      position="relative"
      background='darkBackground'
      _after={{content:`""`, 
        position: 'absolute',
        display: 'block',
        bottom: '-1px',
        left: '0',
        right: '0',
        paddingBottom: '7%',
        background: '#522336',
        clipPath: 'polygon(0 50%,0 100%,100% 100%)'
      }}
      variant='div'>
        <Flex 
          display='flex' 
          w={['100%', 'xl', '3xl', '5xl', '6xl']}
          justifyContent="space-between" 
          flexDirection={'column'} 
          alignItems='center'
          p='4rem 0'
          margin='0 auto'>
            <Heading 
              fontSize={['3xl', '3xl', '4xl', '4xl', '5xl']}
              align={'center'} 
              color='primary'
              mb={4}>
                Our Services
            </Heading>
            <Text 
              fontSize={['md', 'xl', '2xl', '2xl', '2xl']}
              color='secondary'
              width='80%'
              m='0 auto 1rem auto'
              textAlign='left'>
                {portfolioData.skills_description}
            </Text>
            <Flex
              display='flex'
              alignItems={{base: 'center', lg: 'baseline'}}
              justifyContent={'space-between'}
              flexWrap={'wrap'}
              flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                {portfolioData.services.map((service, i) => (
                  <Box 
                    width={isMobile ? '80%': '45%'} 
                    key={i}
                    mb={'3rem'}>
                    <Floating enabled={i !== imageHovered}>
                      <Image
                        id={`image${i}`}
                        alt={`services_${i}`}
                        boxSize={isMobile ? '150px' : '200px'}
                        borderRadius={'50px'}
                        loading='lazy'
                        m='0 auto'
                        objectFit='contain'
                        onMouseOver={() => setImageHovered(i)}
                        onMouseLeave={() => setImageHovered(null)}
                        _hover={{boxShadow: 'inset 0 0 75px yellow, 0 0 75px yellow', transition: '.5s ease'}}
                        src={require(`../../assets/${service.image}`)}
                      />
                    </Floating>
                    <Heading fontSize={['2xl', '2xl', '3xl', '3xl', '4xl']} align={'center'} color='primary' p={['0.5rem', '1rem']}>{service.type}</Heading>
                    {service.quote 
                      ? 
                        <Text fontSize={['md', 'lg', 'lg', 'lg', 'lg']}  align={'left'} fontStyle='italic' mb='1rem' color='secondary'>{service.quote}</Text>
                    : null}
                    <Text fontSize={['md', 'xl', 'xl', 'xl', 'xl']}  align={'left'} dangerouslySetInnerHTML={{__html: service.description}} color='secondary'/>
                  </Box>
                ))}
            </Flex>
        </Flex>
    </Box>
  )
}
