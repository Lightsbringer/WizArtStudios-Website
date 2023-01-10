import React, { useState, useEffect } from 'react';
import { Text, 
    Box, 
    Image, 
    Button, 
    Flex, 
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    IconButton,
    ButtonGroup,
    Spinner,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Slide,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaDiscord, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../../emailkey';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs(props) {
    const portfolioData = props.data;
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const isMobile = useBreakpointValue({base: true, sm: true, md: false, xl: false});

    const [displaySuccess, setDisplaySuccess] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    
    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    const handleSocialMediaClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');

    }

    const submitEmail = (event) => {
        event.preventDefault(); // Prevents default refresh by the browser
        setIsSendingEmail(true);

        console.log(`Event form ->  Name: ${name}, Email: ${email}, Description: ${description}`);

        emailjs.send(emailJSConfig.SERVICE_ID, emailJSConfig.TEMPLATE_ID, {name, sender: email, description}, emailJSConfig.PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);
                setIsSendingEmail(false);
                setDisplaySuccess(true);
                setTimeout(() => setDisplaySuccess(false), 5000)
            }).catch((error) => {
                alert("An error occurred, Please try again", error.text);
                setIsSendingEmail(false);
                setDisplayError(true);
                setTimeout(() => setDisplayError(false), 5000);
            }).finally(() => {
                setName('');
                setEmail('');
                setDescription('');
            });
    }

    return (
    <React.Fragment>
        <Box 
            ref={props.innerRef}
            data-aos="fade-left" 
            zIndex={'20'}
            background='background'
            position="relative"
            variant='div'
            height={['7xl','6xl','4xl','4xl','4xl']}>
            <Flex 
                display='flex' 
                w={['90%','80%','70%','60%','50%']}
                h='100%'
                m={'0 auto'}
                justifyContent="space-evenly" 
                alignItems="center"
                flexDirection={'column'}>
                <VStack>
                    <Text fontSize={['md', 'lg', '3xl', '3xl', '3xl']}align={'left'} color='primary'>{portfolioData.contact_us_heading}</Text>
                    <Text fontSize={['md', 'lg', 'xl', 'xl', 'xl']}  align={'left'} color='secondary'>{portfolioData.contact_us_description}</Text>
                </VStack>
                <HStack display='flex' 
                    justifyContent="space-between" 
                    flexDirection={['column', 'column', 'row', 'row', 'row']} 
                    alignItems='center'>
                    <Flex 
                        w={{sm: '90%', md:'40%', lg: '40%'}}
                        display='flex'
                        justifyContent="center" 
                        flexDirection={'column'} 
                        alignItems='center'>
                        <form onSubmit={submitEmail}>
                            <FormControl isRequired>
                                <FormLabel mt='1rem' color='white'>First name</FormLabel>
                                <Input 
                                    background='secondary' 
                                    placeholder='First name' 
                                    type='text' 
                                    onChange={event => setName(event.currentTarget.value)}
                                />

                                <FormLabel mt='1rem' color='white'>Email</FormLabel>
                                <Input 
                                    background='secondary' 
                                    placeholder='Email' 
                                    type='email' 
                                    onChange={event => setEmail(event.currentTarget.value)}
                                />

                                <FormLabel mt='1rem' color='white'>Description</FormLabel>
                                <Textarea      
                                    background='secondary'   
                                    resize={'none'}                   
                                    placeholder='Tell us a bit about your inquiry'
                                    size='lg'
                                    onChange={event => setDescription(event.currentTarget.value)}
                                />

                                <Button 
                                    type='submit' 
                                    width='100%' 
                                    mt={'2rem'} 
                                    background='primary' 
                                    color='white'
                                    _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                        {isSendingEmail ? <Spinner/> : 'Submit'}
                                </Button>
                            </FormControl>
                        </form>
                    </Flex>
                    <Box 
                        w={{sm: '60%', md:'40%', lg: '40%'}}
                        display='flex' 
                        flexDirection='column' 
                        gap={5}
                        justifyContent={'space-evenly'}>
                        <Image 
                            height='300px' 
                            width='auto' 
                            objectFit='contain'
                            position='relative  '
                            borderRadius='100px' src={require(`../../assets/scroll.png`)}/>
                        <Text fontSize={{sm: 'xl', md:'xl', lg: 'xl', xl: '3xl'}} align={'center'} color='primary'>Schedule a call NOW</Text>
                        <Text fontSize={{sm: 'md', md:'md', lg: 'md', xl: 'xl'}}  align={'left'} color='secondary'>Book an appointment with our team through Calendly. We will inform you when your request is successfully processed on our side and accepted</Text>
                        <Box alignContent='center' width='100%'>
                            <Button 
                                fontSize='sm' 
                                background='primary' 
                                color='white' 
                                whiteSpace={'wrap'}
                                _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                <a href='https://calendly.com/wizard_/'>{`Book an appointment with Calendly`}</a>
                            </Button>
                        </Box>
                        <Box>
                            <Text fontSize={'md'}  align={'center'} color='secondary'>Follow us on social media</Text>
                            <ButtonGroup>
                                <IconButton
                                    variant="ghost"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.discord)}
                                    icon={<FaDiscord fontSize="lg" color='white'/>}
                                    aria-label="Open Discord"/>
                                <IconButton
                                    variant="ghost"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.twitter)}
                                    icon={<FaTwitter fontSize="lg" color='white'/>}
                                    aria-label="Open Twitter"/>
                                <IconButton
                                    variant="ghost"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.linkedin)}
                                    icon={<FaLinkedin fontSize="lg" color='white'/>}
                                    aria-label="Open Linkedin"/>
                                <IconButton
                                    variant="ghost"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.instagram)}
                                    icon={<FaInstagram fontSize="lg" color='white'/>}
                                    aria-label="Open Instagram"/>
                                <IconButton
                                    variant="ghost"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.tiktok)}
                                    icon={<FaTiktok fontSize="lg" color='white'/>}
                                    aria-label="Open TikTok"/>
                            </ButtonGroup>
                        </Box>
                    </Box>
                </HStack>
            </Flex>
        </Box>
        {displaySuccess ? 
            <Slide direction='bottom' in={displaySuccess} style={{ zIndex: 10 }}>
                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Message submitted to WizArt!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Thanks for sending your email. Our team will get back to you soon.
                    </AlertDescription>
                </Alert>
            </Slide>
        : null}
        {displayError ? 
            <Slide direction='bottom' in={displayError} style={{ zIndex: 10 }}>
                <Alert
                    status='error'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Something unexpected happened!
                    </AlertTitle>
                    <AlertDescription maxWidth='md'>
                        Failed to send email to WizArt. Please report a problem to the first magician seen.
                    </AlertDescription>
                </Alert>
            </Slide>
        : null}
    </React.Fragment>
    )
}