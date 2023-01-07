import React, { useState, useEffect } from 'react';
import { Image, Box, Flex, VStack, Text, List, ListItem, ListIcon, Button, ButtonGroup, IconButton, Heading } from '@chakra-ui/react';
import { FaDiscord, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { GiCrystalWand } from 'react-icons/gi';
import { useParams } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function TeamMemberPage(props) {
    const portfolioData = props.data;
    const [currentTeamMember, setMember] = useState(null);
    const urlProps = useParams();

    useEffect(() => {
        const namesArray = portfolioData.theTeam.map((teamMember) => { return teamMember.name; });
        const nameIsValid = namesArray.find((name) => name === urlProps.name);
        if(urlProps.name && nameIsValid) {
            setMember(portfolioData.theTeam.find((teamMember) => teamMember.name === nameIsValid));
            console.log(nameIsValid)
        }
        // make validation for route and decide on this
        // method 1: create protected route/default not found page
        // method 2: redirect to home immediately
    }, [urlProps])

    useEffect(() => {
        Aos.init({duration: 1500});
      }, [])

    const handleSocialMediaClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const handleScheduleMeetingClick = (e) => {
        window.open(currentTeamMember.calendly, '_blank', 'noopener,noreferrer');
    }

    // TODO Replace VStack with Flex to solve responsiveness
    return (
        <Box
            data-aos="fade-up" 
            w={['md', '3xl', '5xl', '7xl', '9xl']}
            minHeight={'90vh'}
            margin='3rem auto'
            background='background'
            variant='div'>
            {currentTeamMember ? 
                <Flex
                    display='flex'
                    height='100%'
                    flex-direction='column'
                    justifyContent='space-evenly'
                    m='3rem auto'
                    alignItems={{base: 'center', sm: 'center', md: 'center', lg: 'top', xl: 'top'}}
                    flexWrap={'wrap'}
                    flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                    <VStack width={{base: '70%', lg: '30%'}} justifyContent='space-evenly'>
                        <Image
                            m={'0 auto'}
                            borderRadius={'50px'}
                            cursor={'pointer'}
                            objectFit='contain'
                            src={require(`../../assets/${currentTeamMember.photoUrl}`)}
                            alt='WizArts logo'
                            mb={'3rem'}
                        />
                        <Button color='white' variant='solid' background={"primary"} onClick={handleScheduleMeetingClick} _hover={{background: 'white', transition: '0.4s', color: 'black'}}>Schedule a meeting</Button>
                        <Box>
                            <ButtonGroup>
                                {currentTeamMember.discord ? 
                                    <IconButton
                                        variant="ghost"
                                        fontSize="large"
                                        onClick={() => handleSocialMediaClick(currentTeamMember.discord)}
                                        icon={<FaDiscord fontSize="lg" color='white'/>}
                                        aria-label="Open Discord"/>
                                : null}
                                {currentTeamMember.twitter ? 
                                    <IconButton
                                        variant="ghost"
                                        fontSize="large"
                                        onClick={() => handleSocialMediaClick(currentTeamMember.twitter)}
                                        icon={<FaTwitter fontSize="lg" color='white'/>}
                                        aria-label="Open Twitter"/>
                                : null}
                                {currentTeamMember.linkedin ? 
                                    <IconButton
                                        variant="ghost"
                                        fontSize="large"
                                        onClick={() => handleSocialMediaClick(currentTeamMember.linkedin)}
                                        icon={<FaLinkedin fontSize="lg" color='white'/>}
                                        aria-label="Open Linkedin"/>
                                : null}
                                {currentTeamMember.instagram ? 
                                    <IconButton
                                        variant="ghost"
                                        fontSize="large"
                                        onClick={() => handleSocialMediaClick(currentTeamMember.instagram)}
                                        icon={<FaInstagram fontSize="lg" color='white'/>}
                                        aria-label="Open Instagram"/>
                                : null}
                                {currentTeamMember.tiktok ?
                                    <IconButton
                                        variant="ghost"
                                        fontSize="large"
                                        onClick={() => handleSocialMediaClick(currentTeamMember.tiktok)}
                                        icon={<FaTiktok fontSize="lg" color='white'/>}
                                        aria-label="Open TikTok"/>
                                : null}
                            </ButtonGroup>
                        </Box>
                    </VStack>
                    <VStack width={{base: '70%', lg: '30%'}}>
                        <Heading 
                            as='h4' 
                            textAlign='left'
                            fontSize={['md', 'lg', '2xl', '3xl', '4xl']}
                            color='primary'>
                                {currentTeamMember.name}
                        </Heading>
                        <Text 
                            textAlign={'left'}
                            fontSize={['sm', 'md', 'xl', 'xl', '2xl']}
                            align={'center'} 
                            color='primary'>
                            {currentTeamMember.role}
                        </Text>
                        <Text
                            textAlign={'left'}
                            fontSize={['sm', 'md', 'xl', 'xl', '2xl']}
                            color='white'>
                            {currentTeamMember.description}
                        </Text>
                    </VStack>
                    <VStack width={{base: '70%', lg: '50%', xl: '50%'}}>
                        <Text 
                            textAlign={'center'}
                            fontSize={['md', 'lg', '2xl', '2xl', '2xl']}
                            align={'center'} 
                            color='primary'>
                            Skills
                        </Text>
                        <List>
                            {currentTeamMember.skills.split(';').map((skill, i) => (
                                <ListItem
                                    key={i}
                                    textAlign={'left'}
                                    width='70%'
                                    m='0 auto'
                                    fontSize={['sm', 'md', 'lg', 'xl', 'xl']}
                                    color='white'>
                                    <ListIcon as={GiCrystalWand}/>
                                    {/* <ListIcon as={FaHatWizard}/> */}
                                    {skill.trim()}
                                </ListItem>
                            ))}
                        </List>
                    </VStack>
                </Flex>
            : null}
        </Box>
    )
}