import React from 'react';
import { Box, VStack, IconButton, Link, Heading, ButtonGroup, Text } from '@chakra-ui/react';
import { FaRegCopyright } from 'react-icons/fa'
import './Footer.css';

export default function Footer(props) {
  const portfolioData = props.data;

  return (
    <footer>
      <Box
        display='flex' 
        background='darkBackground'
        justifyContent='space-evenly'
        height='200px' 
        alignItems='center'
        flexDirection='column'
        width={'100%'}
        margin={'0 auto'}>
        <Box 
          display='flex' 
          flexDirection='row'
          width='800px'
          justifyContent='space-between' 
          alignItems='flex-start'>
          <VStack verticalAlign={'top'}>
            <Heading fontFamily='heading' fontSize='lg' color='primary'>
              Get Started
            </Heading>
            <Link color='secondary' fontFamily='body' fontSize='md'>
              {portfolioData.footerLinks[0]}
            </Link>
            <Link color='secondary' fontFamily='body' fontSize='md'>
              {portfolioData.footerLinks[1]}
            </Link>
          </VStack>
          <VStack verticalAlign={'top'}>
            <Heading fontFamily='heading' fontSize='lg' color='primary'>
              Company
            </Heading>
            <Link color='secondary' fontFamily='body' fontSize='md'>
              {portfolioData.footerLinks[2]}
            </Link>
            <Link color='secondary' fontFamily='body' fontSize='md'>
              {portfolioData.footerLinks[3]}
            </Link>
          </VStack>
          <VStack verticalAlign={'top'}>
            <Heading fontFamily='heading' fontSize='lg' color='primary'>
              Socials
            </Heading>
            <Link color='secondary' fontFamily='body' fontSize='md'>
              {portfolioData.footerLinks[4]}
            </Link>
          </VStack>
        </Box>
        <Box 
          display='flex' 
          flexDirection='row'
          justifyContent='space-between' 
          alignItems='flex-start'>
            <Text fontSize={'sm'} align={'left'} color='secondary'><FaRegCopyright style={{display: 'inline'}}/> WizArt Studios. All Rights Reserved.</Text>
            <Link fontSize={'sm'}  align={'left'} color='secondary'>Privacy Policy</Link>
        </Box>
      </Box>
    </footer>
  );
}
