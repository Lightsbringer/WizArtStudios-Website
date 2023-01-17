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
    Heading,
    Slide,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaInstagram, FaTiktok, FaBehance } from 'react-icons/fa';
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
            data-aos="fade-bottom" 
            zIndex={'20'}
            background='background'
            position="relative"
            variant='div'>
            <Flex 
                display='flex' 
                w={['90%','80%','70%','60%','50%']}
                h='100%'
                m={'4rem auto'}
                justifyContent="space-evenly" 
                alignItems="center"
                flexDirection={'column'}>
                <VStack>
                    <Heading fontSize={['3xl', '3xl', '4xl', '4xl', '5xl']} align={'center'} color='primary'>{portfolioData.contact_us_heading}</Heading>
                    <Text fontSize={['md', 'xl', '2xl', '2xl', '2xl']}  align={'left'} color='secondary'>{portfolioData.contact_us_description}</Text>
                </VStack>
                <HStack display='flex' 
                    justifyContent="space-between" 
                    flexDirection={['column', 'column', 'row', 'row', 'row']} 
                    alignItems='center'>
                    <Flex 
                        w={[ '80%', '70%', '50%', '40%', '40%' ]}
                        display='flex'
                        justifyContent="center" 
                        flexDirection={'column'} 
                        alignItems='center'>
                        {isMobile ? 
                            <Image 
                            alt='scroll_image'
                            height='200px' 
                            width='auto' 
                            loading='lazy'
                            objectFit='contain'
                            position='relative'
                            src={require(`../../assets/scroll.jpeg`)}/>
                        : null}
                        <form onSubmit={submitEmail}>
                            <FormControl isRequired>
                                <FormLabel mt='1rem' color='white'>First name</FormLabel>
                                <Input 
                                    background='secondary' 
                                    fontSize={'md'}
                                    outline='none'
                                    aria-label='name-field'
                                    border='none'
                                    placeholder='Enter name' 
                                    type='text' 
                                    onChange={event => setName(event.currentTarget.value)}
                                />

                                <FormLabel mt='1rem' color='white'>Email</FormLabel>
                                <Input 
                                    background='secondary' 
                                    placeholder='Enter email' 
                                    fontSize={'md'}
                                    aria-label='email-field'
                                    outline='none'
                                    border='none'
                                    type='email' 
                                    onChange={event => setEmail(event.currentTarget.value)}
                                />

                                <FormLabel mt='1rem' color='white'>How can we help?</FormLabel>
                                <Textarea      
                                    background='secondary'   
                                    resize={'none'}     
                                    fontSize={'md'}  
                                    aria-label='description-field'
                                    outline='none'
                                    border='none'
                                    placeholder='Tell us a bit about your inquiry'
                                    size='lg'
                                    onChange={event => setDescription(event.currentTarget.value)}
                                />

                                <Button 
                                    type='submit' 
                                    width='100%' 
                                    outline='none'
                                    border='none'
                                    mt={'2rem'} 
                                    background='primary' 
                                    color='white'
                                    _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                        {isSendingEmail ? <Spinner/> : 'SUBMIT'}
                                </Button>
                            </FormControl>
                        </form>
                    </Flex>
                    <Box 
                        w={[ '80%', '70%', '50%', '40%', '40%' ]}
                        display='flex' 
                        flexDirection='column' 
                        alignItems='center'
                        gap={5}
                        justifyContent={'space-evenly'}>
                        {!isMobile ?
                            <Image 
                                alt='scroll_image'
                                height='300px' 
                                width='auto' 
                                objectFit='contain'
                                loading='lazy'
                                position='relative'
                                src={require(`../../assets/scroll.jpeg`)}/>
                        : null}
                        <Text width={'auto'} fontSize={['md', 'xl', '2xl', '2xl', '2xl']} mt={10} align={'left'} color='secondary'>Book an appointment with our team through Calendly. We will inform you when your request is successfully processed on our side and accepted</Text>
                        <Box alignContent='center' width='100%'>
                        <a href={portfolioData.calendly} target="_blank" rel="noopener noreferrer">
                            <Button 
                                background='primary' 
                                size={'lg'}
                                color='white' 
                                whiteSpace={'wrap'}
                                _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                    Let's create together
                            </Button>
                        </a>
                        </Box>
                        <Box pt={3}>
                            <Text fontSize={['md', 'lg', 'lg', 'xl', 'xl']} align={'center'} mb={3} color='secondary'>Check out our social media</Text>
                            <ButtonGroup>
                                <IconButton
                                    variant="link"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.behance)}
                                    icon={<FaBehance fontSize="lg" color='white'/>}
                                    aria-label="Open Behance"/>
                                <IconButton
                                    variant="link"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.twitter)}
                                    icon={<FaTwitter fontSize="lg" color='white'/>}
                                    aria-label="Open Twitter"/>
                                <IconButton
                                    variant="link"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.linkedin)}
                                    icon={<FaLinkedin fontSize="lg" color='white'/>}
                                    aria-label="Open Linkedin"/>
                                <IconButton
                                    variant="link"
                                    fontSize="large"
                                    onClick={() => handleSocialMediaClick(portfolioData.officialLinks.instagram)}
                                    icon={<FaInstagram fontSize="lg" color='white'/>}
                                    aria-label="Open Instagram"/>
                                <IconButton
                                    variant="link"
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