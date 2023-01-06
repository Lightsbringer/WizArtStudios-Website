import React, { useEffect } from 'react';
import TeamMember from './TeamMember';
import { Image, Box, Text, Heading, Flex, IconButton, Container } from '@chakra-ui/react';
import { FaDiscord, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Floating from '../Animations/Floating';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Team.css';

const styles = {
  card: {
    border: '2px solid #ecc49c',
  }
};

export default function Team(props) {
  const portfolioData = props.data;
  // const circleDegressArray = ['270', '315', '0', '45', '90', '135', '180', '225'];
  const circleDegressArray = ['0', '60', '120', '180', '240', '300'];
  const windowHeight = window.innerHeight;

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])
  
  return (
    <Box 
      ref={props.innerRef}
      data-aos="fade-up" 
      w={'100%'}
      height={'7xl'}
      m={'0 auto'}>
        <Flex 
          display='flex' 
          w={['md', 'xl', '3xl', '5xl', '6xl']}
          justifyContent="space-between" 
          flexDirection={'column'} 
          alignItems='center'
          m={'3rem auto'}>
          <Box>
            <Heading fontSize={['md', 'lg', '2xl', '3xl', '4xl']} align={'center'} color='primary' mb={4} >Meet Our Team</Heading>
              <Text 
                fontSize={{sm: 'md', md:'lg', lg: 'lg'}} 
                align={'left'} 
                color='secondary'>
                  {portfolioData.team_description}
              </Text>
              <div className='circle-wrapper'>
                <div className='circle'>
                  <Floating enabled={true}>
                    <Image
                      height={['md', 'lg', 'lg', 'xl', 'xl']}
                      m={'-150px auto'}
                      objectFit='contain' 
                      borderRadius='100px' 
                      src={require(`../../assets/tower.png`)}/>
                  </Floating>
                </div>
                {portfolioData.theTeam.map((teamMember, index) => (
                  <div key={index} className={`circle deg-${circleDegressArray[index]}`}>
                    <TeamMember value={teamMember.name}>
                      <Box borderRadius='100px'>
                        <Image 
                          height='auto' w={['150px', '175px', '200px', '225px', '250px']} 
                          objectFit='contain' 
                          borderRadius='51%' 
                          src={require(`../../assets/${teamMember.photoUrl}`)}/>
                      </Box>

                      <Box sx={styles.card} 
                        h={['150px', '175px', '200px', '225px', '250px']}
                        w={['150px', '175px', '200px', '225px', '250px']}
                        borderRadius='51%' 
                        borderColor='primary' 
                        display='flex' 
                        flexDirection='column' 
                        justifyContent='center' 
                        alignItems={'center'}>
                        <Heading as='h4' size='md' color='primary'>{teamMember.name}</Heading>
                        <Text fontSize='xs' p='0 0.5rem' color='secondary'>{teamMember.short_description}</Text>
                        <Text fontSize='xs' p='0 0.5rem' color='secondary'>{teamMember.role}</Text>
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
          </Box>
      </Flex>
    </Box>
  )
}
