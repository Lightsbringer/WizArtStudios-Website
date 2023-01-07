import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function PortfolioPage(props) {
    const portfolioData = props.data;
    const urlProps = useParams();
    // const [currentService, setCurrentService] = useState(null);
    const [currentProjects, setCurrentProjects] = useState([]);

    useEffect(() => {
        console.log(urlProps.name.trim().toLowerCase());
        const validService = portfolioData.workCategories.includes(urlProps.name);
        if(validService) {
            const projects = portfolioData.portfolio[`${urlProps.name.replace( /\s/g, '').toLowerCase()}`];
            // setCurrentService(validService);
            setCurrentProjects(projects);
        }
        // make validation for route and decide on this
        // method 1: create protected route/default not found page
        // method 2: redirect to home immediately
    }, [urlProps])

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

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
            {currentProjects.length > 0 ?
                <>
                    {currentProjects.map((project, index) => (
                        <Flex
                            display='flex'
                            flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
                            justifyContent='center'
                            alignItems='center'
                            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                            flexWrap={'wrap'}
                            gap={10}
                            pt={'3rem'}
                            pb={'3rem'}>
                            <Box width='45%'>
                                <Text 
                                    textAlign={index % 2 === 0 ? 'right' : 'left'}
                                    fontSize={['md', 'lg', '2xl', '3xl', '4xl']}
                                    align={'center'} 
                                    color='primary'>
                                    {project.name}
                                </Text>
                                <Text
                                    textAlign={index % 2 === 0 ? 'right' : 'left'}
                                    fontSize={['sm', 'md', 'xl', 'xl', '2xl']}
                                    color='white'>
                                    {project.description}
                                </Text>
                            </Box>
                            <Image
                                id='#image'
                                width='40%'
                                height='100%'
                                cursor={'pointer'}
                                objectFit='contain'
                                src={require(`../../assets/${project.imgurl}`)}
                                alt='WizArts logo'
                            />
                        </Flex>
                    ))}
                </>
            : null}
        </Box>
    )
}