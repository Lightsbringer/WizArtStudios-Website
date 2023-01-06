import React, {useState, useEffect} from 'react';
import { Box, HStack, Image, IconButton} from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import Carousel from 'react-grid-carousel'
import { MdArrowBackIosNew } from 'react-icons/md';

export default function PhotoSlider(props) {
    const portfolioData = props.data;

    return (
        <Box></Box>
    //     <Box 
    //         boxSize='xl' 
    //         display='flex' 
    //         justifyContent='center' 
    //         alignItems='center' 
    //         width='100%'>
    //         <IconButton
    //         variant="ghost"
    //         width='5%'
    //         onClick={handleLeft}
    //         icon={<MdArrowBackIosNew fontSize="1.25rem" />}
    //         aria-label="Left"/>
    //         <HStack w={{sm: '80%', md:'70%', lg: '60%'}} height='100%' justifyContent={{sm: 'center', md: 'space-between', lg: 'space-between'}}>
    //             {currentProjects.map((project, index) => (
    //                 <Box position="relative" 
    //                 key={project.index}
    //                 height={'md'}

    //                 pt={`${index === 1 ? '45px': '0px'}`}
    //                 display={index !== 1 ? {sm: 'none', md: 'flex', lg: 'flex'} : 'flex'}
    //                 width={index === 1 ? {sm: '80%', md:'35%', lg: '35%'} : {sm: '80%', md:'25%', lg: '25%'}} 
    //                 _hover={{
    //                     transformStyle: "preserve-3d",
    //                     transition: 'transform 200ms ease 0s',
    //                     transitionProperty: 'transform',
    //                     transitionDuration: '800ms',
    //                     transitionTimingFunction: 'ease',
    //                     transitionDelay: '0s',
    //                     transform: "translateX(0px) translateY(-25px) translateZ(0px)",
    //                 }}>
    //                     <Image
    //                         src={require(`../../assets/${project.imgurl}`)}
    //                         rounded="lg"
    //                         objectFit="cover"
    //                         pt={`${index === 1 ? '45px': '0px'}`}
    //                         position="absolute"
    //                         inset={0}
    //                         filter="blur(15px)"
    //                         zIndex={0}
    //                         transform="scale(1.1, 1.1)"
    //                     />
    //                     <Image
    //                         zIndex={100}
    //                         position="relative"
    //                         src={require(`../../assets/${project.imgurl}`)}
    //                         rounded="lg"
    //                         objectFit="cover"
    //                     />
    //                 </Box>
    //             )
    //             )}
    //         </HStack>
    //         <IconButton
    //         variant="ghost"
    //         width='5%'
    //         onClick={handleRight}
    //         icon={<MdArrowBackIosNew fontSize="xl" style={{transform: 'rotate(180deg)'}}/>}
    //         aria-label="Right"/>
    //   </Box>

    // <Carousel cols={3} rows={1} gap={10} loop>
    //     {portfolioData.portfolio.map((project, index) => (
    //         <Carousel.Item>
    //             <Box position="relative" 
    //                 key={project.index}
    //                 height={'md'}
    //                 _hover={{
    //                     transformStyle: "preserve-3d",
    //                     transition: 'transform 200ms ease 0s',
    //                     transitionProperty: 'transform',
    //                     transitionDuration: '800ms',
    //                     transitionTimingFunction: 'ease',
    //                     transitionDelay: '0s',
    //                     transform: "translateX(0px) translateY(-25px) translateZ(0px)",
    //                 }}>
    //                     <Image
    //                         src={require(`../../assets/${project.imgurl}`)}
    //                         rounded="lg"
    //                         objectFit="cover"
    //                         pt={`${index === 1 ? '45px': '0px'}`}
    //                         position="absolute"
    //                         height={'90%'}
    //                         inset={0}
    //                         filter="blur(15px)"
    //                         zIndex={0}
    //                         transform="scale(1.1, 1.1)"
    //                     />
    //                     <Image
    //                         zIndex={100}
    //                         position="relative"
    //                         height={'90%'}
    //                         src={require(`../../assets/${project.imgurl}`)}
    //                         rounded="lg"
    //                         objectFit="cover"
    //                     />
    //             </Box>
    //         </Carousel.Item>
    //         )
    //     )}
    // </Carousel>
)
}