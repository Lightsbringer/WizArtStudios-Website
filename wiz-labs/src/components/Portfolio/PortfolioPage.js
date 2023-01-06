import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

export default function PortfolioPage(props) {
    const portfolioData = props.data;
    const urlProps = useParams();
    const [currentService, setCurrentService] = useState(null);
    const [currentProjects, setCurrentProjects] = useState([]);

    useEffect(() => {
        console.log(urlProps);
        const validService = portfolioData.workCategories.includes(urlProps.name);
        if(validService) {
            const projects = portfolioData.portfolio[`${urlProps.name.trim().toLowerCase()}`];
            setCurrentService(validService);
            setCurrentProjects(projects);
        }
        // make validation for route and decide on this
        // method 1: create protected route/default not found page
        // method 2: redirect to home immediately
    }, [urlProps])

    const returnRandomImage = () => {
        const number = Math.floor(Math.random() * (currentProjects.length - 1 + 1) + 1);

        return currentProjects[number].imgurl;
    }

    return (
        <Box
            w={['md', '3xl', '5xl', '7xl', '9xl']}
            margin='0 auto'
            background='secondary'
            variant='div'>
            {currentProjects.length > 0 ?
                <>
                    {/* <Flex
                        display='flex'
                        flex-direction='column'
                        justifyContent='space-evenly'
                        alignItems='center'
                        flexWrap={'wrap'}
                        flexDirection={['row', 'row', 'column', 'column', 'column']}>
                        <Box>
                            <Text 
                                textAlign={'left'}
                                fontSize={['md', 'lg', '2xl', '3xl', '4xl']}
                                align={'center'} 
                                color='primary'>
                                {currentProject.name}
                            </Text>
                            <Text
                                textAlign={'left'}
                                fontSize={['sm', 'md', 'xl', 'xl', '2xl']}
                                color='white'>
                            </Text>
                        </Box>
                        <Image
                            m={'0 auto'}
                            borderRadius={'50px'}
                            cursor={'pointer'}
                            objectFit='contain'
                            src={require(`../../assets/${returnRandomImage()}`)}
                            alt='WizArts logo'
                        />
                    </Flex> */}
                    {currentProjects.map((project, index) => (
                        <Flex
                            display='flex'
                            flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
                            justifyContent='center'
                            alignItems='center'
                            flexWrap={'wrap'}>
                            <Box width='50%'>
                                <Text 
                                    textAlign={'left'}
                                    fontSize={['md', 'lg', '2xl', '3xl', '4xl']}
                                    align={'center'} 
                                    color='primary'>
                                    {project.name}
                                </Text>
                                <Text
                                    textAlign={'left'}
                                    fontSize={['sm', 'md', 'xl', 'xl', '2xl']}
                                    color='white'>
                                    {project.description}
                                </Text>
                            </Box>
                            <Image
                                width='50%'
                                m={'0 auto'}
                                borderRadius={'50px'}
                                cursor={'pointer'}
                                objectFit='cover'
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