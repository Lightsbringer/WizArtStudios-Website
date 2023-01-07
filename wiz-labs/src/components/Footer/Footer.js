import React from 'react';
import { Box, VStack, Link, Heading, Text } from '@chakra-ui/react';
import { FaRegCopyright } from 'react-icons/fa'
import './Footer.css';

export default function Footer(props) {
  const portfolioData = props.data;
  const { scrollTo } = props;

  return (
    <footer>
      <Box
        display='flex' 
        background='darkBackground'
        position='relative'
        zIndex='28'
        justifyContent='space-evenly'
        height='200px' 
        alignItems='center'
        flexDirection='column'
        width={'100%'}
        margin={'0 auto'}>
        <Box 
          display='flex' 
          flexDirection='row'
          w={['md', 'md', '2xl', '3xl', '4xl']}
          justifyContent='space-between' 
          alignItems='flex-start'>
          <VStack verticalAlign={'top'}>
            <Heading fontFamily='heading' fontSize='lg' color='primary'>
              Get Started
            </Heading>
            <Link color='secondary' fontFamily='body' fontSize='md' onClick={(e) => scrollTo(e, portfolioData.footerLinks[0])}>
              {portfolioData.footerLinks[0]}
            </Link>
            <Link color='secondary' fontFamily='body' fontSize='md' onClick={(e) => scrollTo(e, portfolioData.footerLinks[1])}>
              {portfolioData.footerLinks[1]}
            </Link>
          </VStack>
          <VStack verticalAlign={'top'}>
            <Heading fontFamily='heading' fontSize='lg' color='primary'>
              Company
            </Heading>
            <Link color='secondary' fontFamily='body' fontSize='md' onClick={(e) => scrollTo(e, portfolioData.footerLinks[2])}>
              {portfolioData.footerLinks[2]}
            </Link>
            <Link color='secondary' fontFamily='body' fontSize='md' onClick={(e) => scrollTo(e, portfolioData.footerLinks[3])}>
              {portfolioData.footerLinks[3]}
            </Link>
          </VStack>
          <VStack verticalAlign={'top'}>
            <Heading fontFamily='heading' fontSize='lg' color='primary'>
              Socials
            </Heading>
            <Link color='secondary' fontFamily='body' fontSize='md' onClick={(e) => scrollTo(e, portfolioData.footerLinks[4])}>
              {portfolioData.footerLinks[4]}
            </Link>
          </VStack>
        </Box>
        <Box 
          display='flex' 
          flexDirection='row'
          w={['md', 'md', '2xl', '3xl', '4xl']}
          justifyContent='space-between' 
          alignItems='flex-start'>
            <Text fontSize={'sm'} align={'left'} color='secondary'><FaRegCopyright style={{display: 'inline'}}/> WizArt Studios. All Rights Reserved.</Text>
            <Link fontSize={'sm'}  align={'left'} color='secondary'>Privacy Policy</Link>
        </Box>
      </Box>
    </footer>
  );
}
