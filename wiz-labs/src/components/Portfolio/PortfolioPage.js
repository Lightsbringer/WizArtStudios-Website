import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MasonryComponent from './MasonryComponent';
import { flipAnimation } from '../LoadingComponent/LoadingComponent';
import '../LoadingComponent/LoadingComponent.css';

export default function PortfolioPage(props) {
    const portfolioData = props.data;
    const urlProps = useParams();
    const [currentProjects, setCurrentProjects] = useState([]);
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const isMobile = useBreakpointValue({base: true, sm: true, md: true, lg: false, xl: false});
    const galleries = ['illustrations', 'hiddengems'];
    const projects = ['1of1art', 'fanart'];

    useEffect(() => {
        console.log(urlProps.name);
        if(projects.includes(urlProps.name)) {
            const projects = portfolioData.portfolio.projects[`${urlProps.name}`];
            setCurrentProjects(projects);
        } else if(galleries.includes(urlProps.name)) {
            const images = portfolioData.portfolio.galleries[`${urlProps.name}`];
            setGalleryItems(images.map((image, index) => {
                return {
                    id: index,
                    name: image.header,
                    src: require(`../../assets/${image.imgurl}`),
                    originalSrc: require(`../../assets/Originals/${image.imgurl}`)
                }
            }));
        }
    }, [urlProps])

    
    useEffect(() => {
        if(loading) {
            // this simulates an async action, after which the component will render the content
            demoAsyncCall().then(() => setLoading(false));
        }
    }, [loading])

    const demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    const getRouteFullName = () => {
        const value = portfolioData.workCategories.find((category) => category.trim().toLowerCase().replace(/\s/g, "") === urlProps.name);
        return value ? value : '';
    }

    // const returnRandomImage = () => {
    //     const number = Math.floor(Math.random() * (currentProjects.length - 1 + 1) + 1);

    //     return currentProjects[number].imgurl;
    // }

    return (
        <Box
            w={['100%', '100%', '3xl', '6xl', '8xl']}
            margin='0 auto'
            minHeight={'90vh'}
            background='secondary'
            variant='div'>
            {currentProjects.map((project, index) => (
                <Flex
                    key={index}
                    display='flex'
                    flexDirection={isMobile ? 'column-reverse' : index % 2 === 0 ? 'row' : 'row-reverse'}
                    justifyContent='center'
                    alignItems='center'
                    flexWrap={'wrap'}
                    gap={10}
                    pt={'3rem'}
                    pb={'3rem'}>
                    <Box width={isMobile ? '80%' : '45%'}>
                        <Text 
                            textAlign={index % 2 === 0 ? 'right' : 'left'}
                            fontSize={['lg', 'lg', '2xl', '3xl', '4xl']}
                            align={'center'} 
                            color='primary'>
                            {project.name}
                        </Text>
                        <Text
                            textAlign={index % 2 === 0 ? 'right' : 'left'}
                            fontSize={['md', 'md', 'xl', 'xl', '2xl']}
                            color='white'>
                            {project.description}
                        </Text>
                    </Box>
                    <Image
                        alt={`portfolio_page_${index}`}
                        width={isMobile ? '65%' : '40%'}
                        height='100%'
                        cursor={'pointer'}
                        objectFit='contain'
                        src={require(`../../assets/${project.imgurl}`)}
                    />
                </Flex>
            ))}

            {galleryItems.length > 0 ?
                <Box 
                    w={['100%', '100%', '3xl', '6xl', '8xl']}
                    variant='div'>
                    <Box 
                        h={['80%', '85%', '75%', '81%', '84%']}
                        w={['100%', '100%', '3xl', '6xl', '8xl']}
                        visibility={loading ? 'visible' : 'hidden'}
                        position="absolute"
                        background={'secondary'} 
                        display="flex"
                        justifyContent="center" 
                        zIndex={'9999'}>
                        <Box
                            as={motion.div}
                            animation={flipAnimation}
                            padding={2}
                            bgGradient="linear(to-l, primary, secondary)"
                            position="fixed"
                            bottom={'40%'}
                            width={["5rem", "7.5rem", "10rem", "10rem", "10rem"]}
                            height={["5rem", "7.5rem", "10rem", "10rem", "10rem"]}
                        >
                            <Image 
                                alt='logo_image'
                                height='auto' 
                                width='200px' 
                                objectFit='contain' 
                                priority={'true'}
                                borderRadius='100px' 
                                src={require(`../../assets/${portfolioData.logo_image}`)}/>
                        </Box>
                    </Box>
                    <Heading 
                        fontSize={['3xl', '3xl', '4xl', '4xl', '5xl']}
                        align={'center'} 
                        color='primary'
                        p={4}>
                            {getRouteFullName()}
                    </Heading>
                    <Box margin='0.6rem'>
                        <MasonryComponent images={galleryItems}/>
                    </Box>
                </Box>
            : null}
        </Box>
    )
}