import React, { useEffect } from 'react';
import TeamMember from './TeamMember';
import { Image, Box, Text, Heading, Flex, IconButton, useBreakpointValue, Grid, Button } from '@chakra-ui/react';
import { FaDiscord, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Floating from '../Animations/Floating';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Team.css';

const styles = {
  card: {
    border: '3px solid #ecc49c',
  }
};

export default function Team(props) {
  const portfolioData = props.data;
  // const circleDegressArray = ['270', '315', '0', '45', '90', '135', '180', '225'];
  const circleDegressArray = ['0', '60', '120', '180', '240', '300'];
  const avatarIconTranslationValue = useBreakpointValue({ base: '140px', sm: '250px', md: '300px', lg: '400px' , xl: '400px' });
  const circleContainerWidth = useBreakpointValue({ base: '100px', sm: '125px', md: '175px', lg: '225px' , xl: '250px' });
  const isMobileDevice = useBreakpointValue({base: true, sm: true, md: false, lg: false, xl: false});

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
  
  return (
    <Box 
      ref={props.innerRef}
      data-aos="fade-up" 
      w={'100%'}
      position="relative"
      zIndex={'23'}
      height={['5xl','5xl','8xl','8xl','8xl']}
      m={'0 auto'}>
        <Flex 
          display='flex' 
          w={['100%', 'xl', '3xl', '5xl', '6xl']}
          justifyContent="space-between" 
          flexDirection={'column'} 
          alignItems='center'
          m={'3rem auto'}>
          <Box>
            <Heading fontSize={['3xl', '3xl', '4xl', '4xl', '5xl']} align={'center'} color='primary' mb={4} >Meet Our Team</Heading>
              <Text 
                fontSize={['md', 'lg', 'xl', 'xl', 'xl']}
                align={'left'} 
                width='80%'
                m='0 auto'
                color='secondary'>
                  {portfolioData.team_description}
              </Text>
              {!isMobileDevice 
                ? 
                <div className='circle-wrapper' style={{ margin: '400px auto'}}>
                  <div className='circle'>
                    <Floating enabled={true}>
                      <Image
                        alt='tower_image'
                        height={['200px', 'sm', 'md', 'xl', 'xl']}
                        m={'-150px auto'}
                        loading='lazy'
                        objectFit='contain' 
                        borderRadius='100px' 
                        src={require(`../../assets/tower.jpeg`)}/>
                    </Floating>
                  </div>
                  {portfolioData.theTeam.map((teamMember, index) => (
                    <div key={index} className={`circle deg-${circleDegressArray[index]}`}
                      style={{
                        transform: `rotate(${circleDegressArray[index]}deg) translate(${avatarIconTranslationValue}) rotate(-${circleDegressArray[index]}deg)`,
                        width: circleContainerWidth
                      }}>
                      <TeamMember value={teamMember.name}>
                        <Box borderRadius='100px'>
                          <Image
                            alt={`team_member_${index}`}
                            h={['80px', '125px', '175px', '225px', '250px']}
                            w={['80px', '125px', '175px', '225px', '250px']} 
                            objectFit='contain' 
                            borderRadius='50%' 
                            loading='lazy'
                            src={require(`../../assets/${teamMember.photoUrl}`)}/>
                        </Box>

                        <Box sx={styles.card} 
                          h={['80px', '125px', '175px', '225px', '250px']}
                          w={['80px', '125px', '175px', '225px', '250px']}
                          borderRadius='51%' 
                          borderColor='primary' 
                          display='flex' 
                          flexDirection='column' 
                          justifyContent='center' 
                          alignItems={'center'}>
                          {/* <Heading as='h4' size='md' color='white'>{teamMember.name}</Heading> */}
                          <Text fontSize={['md', 'md', 'lg', 'lg', 'xl']} p='0 0.5rem' color='white'>{teamMember.role}</Text>
                          {!isMobileDevice ? <Text fontSize={['sm', 'sm', 'md', 'md', 'lg']} p='0 1rem' color='secondary'>{teamMember.short_description}</Text> : null}
                          <Flex direction='row' align='center' justify='center' gap='2'>
                            {
                              teamMember.discord ? 
                              <IconButton aria-label='discord' size='sm' icon={<FaDiscord />} />
                              : null
                            }
                            {
                              teamMember.twitter ? 
                              <IconButton aria-label='twitter' size='sm' icon={<FaTwitter />} />
                              : null
                            }
                            {
                              teamMember.linkedin ? 
                              <IconButton aria-label='linkedin' size='sm' icon={<FaLinkedin />} />
                              : null
                            }
                            {
                              teamMember.instagram ? 
                              <IconButton aria-label='instagram' size='sm' icon={<FaInstagram />} />
                              : null
                            }
                          </Flex>
                        </Box>
                      </TeamMember>
                    </div>
                  ))}
                  </div>
                :
                  <Grid templateColumns='repeat(2, 125px)' gap={5} justifyContent='center' mt={'50px'}>
                    {portfolioData.theTeam.map((teamMember, index) => (
                        <TeamMember value={teamMember.name} key={index}>
                          <Box borderRadius='100px'>
                            <Image 
                              alt={`team_member_${index}`}
                              h={'125px'}
                              w={'125px'} 
                              objectFit='contain' 
                              loading='lazy'
                              borderRadius='50%' 
                              src={require(`../../assets/${teamMember.photoUrl}`)}/>
                          </Box>

                          <Box sx={styles.card} 
                            h={['125', '125px', '175px', '225px', '250px']}
                            w={['125', '125px', '175px', '225px', '250px']}
                            borderRadius='51%' 
                            borderColor='primary' 
                            display='flex' 
                            flexDirection='column' 
                            justifyContent='center' 
                            alignItems={'center'}>
                            <Heading as='h4' size='xs' color='white'>{teamMember.name}</Heading>
                            <Text fontSize='xs' p='0 0.5rem' color='white'>{teamMember.role}</Text>
                            {!isMobileDevice ? <Text fontSize='sm' p='0 1rem' color='secondary'>{teamMember.short_description}</Text> : null}
                            <Flex direction='row' align='center' justify='center' gap='2'>
                              {
                                teamMember.discord ? 
                                <IconButton aria-label='discord' size='sm' icon={<FaDiscord />} />
                                : null
                              }
                              {
                                teamMember.twitter ? 
                                <IconButton aria-label='twitter' size='sm' icon={<FaTwitter />} />
                                : null
                              }
                              {
                                teamMember.linkedin ? 
                                <IconButton aria-label='linkedin' size='sm' icon={<FaLinkedin />} />
                                : null
                              }
                              {
                                teamMember.instagram ? 
                                <IconButton aria-label='instagram' size='sm' icon={<FaInstagram />} />
                                : null
                              }
                            </Flex>
                          </Box>
                        </TeamMember>
                    ))}
                  </Grid>
                }
              <a href={portfolioData.calendly} target="_blank" rel="noopener noreferrer">
                <Button 
                  color='white' 
                  mt={5}
                  size="lg"
                  variant='solid' 
                  background={"primary"} 
                  _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                      Book a Call
                </Button>
              </a>
          </Box>
      </Flex>
    </Box>
  )
}
