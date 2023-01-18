import React, { useState } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Image,
    Flex,
    VStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Drawer,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton,
    DrawerOverlay,
    extendTheme,
    ChakraProvider
  } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

const theme = extendTheme({
    components:{
      Drawer:{
        parts: ['dialog', 'header', 'body'],
        variants: {
          primary: {
            dialog: {
              background: '#ecc49c', 
            }
          }
        },
      }
    }
  })
  
export default function Navigation(props) {
    const { data , scrollTo} = props;
    const { pathname } = useLocation();
    const isDesktop = useBreakpointValue({ base: false, lg: true , xl: true });
    const isTablet = useBreakpointValue({base: false, md: true});
    const isMobile = useBreakpointValue({base: true, sm: true});
    // const { colorMode, toggleColorMode } = useColorMode();
    const [showDrawer, setShowDrawer] = useState(false);
    const isHome = pathname === '/';
    const navigate = useNavigate();
    const environment = process.env.NODE_ENV;
    const baseUrl = environment === 'production' ? process.env.REACT_APP_API_PROD_URL : process.env.REACT_APP_API_DEV_URL;

    const handleOpenDrawer = () => {
        setShowDrawer(true);
    }

    const handleDrawerClose = () => {
        setShowDrawer(false);
    }

    const handleDrawerClick = (event) => {
        event.preventDefault();

        handleDrawerClose();

        setTimeout(() => {
            if(isHome) {
                scrollTo(event);
            } else {
                navigateToHomeSection(event);
            }
        }, 700);
    }

    const navigateToHomeSection = (e) => {
        setTimeout(() => {
            scrollTo(e);
        }, 700);
        navigate('/'); 
    }

    return (
        <Box as="nav"
            display="flex"
            flexDirection="row"
            alignItems={"center"}
            justifyContent="center" 
            zIndex={'20'}
            position="relative"
            background={"darkBackground"}
            p={{base: '5', md: '6', lg: '8', xl: '10'}}
            boxShadow={useColorModeValue('sm', 'sm-dark')}>
            {isDesktop ? (
                <Flex
                    height="100%" 
                    width={'6xl'} 
                    justifyContent="space-between"
                    alignItems="center">
                    <Image
                        alt='logo_image'
                        width={'100px'}
                        height={'100%'}
                        borderRadius={'50px'}
                        cursor={'pointer'}
                        objectFit='contain'
                        onClick={() => navigate('/')}
                        src={require(`../../assets/${data.logo_image}`)}
                    />
                        <ButtonGroup variant="link" spacing="8">
                            {data.navLinks.map((item) => (
                                <Button 
                                    size='lg' 
                                    key={item} 
                                    onClick={(e) => isHome ? scrollTo(e) : navigateToHomeSection(e)} 
                                    value={item} 
                                    color='white'>
                                        {item}
                                </Button>
                            ))}
                            <a href={data.calendly} target="_blank" rel="noopener noreferrer">
                                <Button 
                                    color='white' 
                                    size='lg'
                                    variant='solid' 
                                    background={"primary"} 
                                    _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                        Let's chat
                                </Button>
                            </a>
                        </ButtonGroup>
                        {/* <IconButton
                            variant="outline"
                            onClick={toggleColorMode}
                            icon={
                                colorMode === 'light' 
                                ? 
                                <BsFillMoonStarsFill fontSize={'1.25 rem'}/> 
                                :
                                <BsFillSunFill fontSize={'1.25 rem'} />
                            }
                            aria-label="Open Menu"
                            /> */}
                </Flex>
            ) : isTablet ? (
                <Flex
                    height="100%" 
                    width={'3xl'} 
                    justifyContent="space-between"
                    alignItems="center">
                    <Image
                        alt='logo_image'
                        width={'100px'}
                        height={'100px'}
                        borderRadius={'50px'}
                        cursor={'pointer'}
                        objectFit='contain'
                        onClick={() => navigate('/')}
                        src={require(`../../assets/${data.logo_image}`)}
                    />
                    {/* <IconButton
                        variant="outline"
                        onClick={toggleColorMode}
                        icon={
                            colorMode === 'light' 
                            ? 
                            <BsFillMoonStarsFill fontSize={'1.25 rem'}/> 
                            :
                            <BsFillSunFill fontSize={'1.25 rem'} />
                        }
                        aria-label="Open Menu"
                        /> */}
                    <ButtonGroup variant="link" spacing="8">
                        {data.navLinks.map((item) => (
                            <Button 
                                size='lg' 
                                key={item} 
                                onClick={(e) => isHome ? scrollTo(e) : navigateToHomeSection(e)} 
                                value={item} 
                                color='white'>
                                    {item}
                            </Button>
                        ))}
                        <a href={data.calendly} target="_blank" rel="noopener noreferrer">
                            <Button 
                                color='white' 
                                size='lg'
                                variant='solid' 
                                background={"primary"} 
                                _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                        Let's chat
                            </Button>
                        </a>
                    </ButtonGroup>
                </Flex>
            ) : isMobile ? (
                <Flex
                    height="100%"  
                    width={'100%'}
                    m={'auto 0.5rem'}
                    justifyContent="space-between"
                    alignItems="center">
                    <Image
                        alt='logo_image'
                        width={'70px'}
                        height={'70px'}
                        borderRadius={'50px'}
                        cursor={'pointer'}
                        objectFit='contain'
                        onClick={() => navigate('/')}
                        src={require(`../../assets/${data.logo_image}`)}
                    />
                    {/* <IconButton
                        variant="ghost"
                        onClick={toggleColorMode}
                        icon={
                            colorMode === 'light' 
                            ? 
                            <BsFillMoonStarsFill fontSize={'1.25 rem'}/> 
                            :
                            <BsFillSunFill fontSize={'1.25 rem'} />
                        }
                        aria-label="Open Menu"
                        /> */}
                    <ButtonGroup variant="link" spacing="8" alignItems='center'>
                        <a href={data.calendly} target="_blank" rel="noopener noreferrer">
                            <Button 
                                size='md'
                                color='white' 
                                variant='solid' 
                                background={"primary"} 
                                _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                        Let's chat
                            </Button>
                        </a>
                        <IconButton
                            variant="ghost"
                            color='white'
                            onClick={handleOpenDrawer}
                            icon={<FiMenu fontSize="2.25rem" />}
                            aria-label="Open Menu"
                            />
                    </ButtonGroup>
                </Flex>
            ) : null}

            <ChakraProvider theme={theme}>
                <Drawer 
                    isOpen={showDrawer} 
                    placement='right'
                    isFullHeight 
                    size='full'
                    scrollBehavior='inside' 
                    closeOnEsc
                    variant={"primary"}
                    closeOnOverlayClick
                    motionPreset='slideInTop'>
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton onClick={handleDrawerClose}/>
                        <DrawerBody>
                            <Image
                                alt='logo_image'
                                width={'120px'}
                                height={'120px'}
                                m='5rem auto'
                                onClick={() => navigate('/')}
                                borderRadius={'50px'}
                                cursor={'pointer'}
                                objectFit='contain'
                                src={require(`../../assets/${data.logo_image}`)}
                            />
                            <VStack spacing="10" justify="center" align="stretch" display="flex">
                                {data.navLinks.map((item) => (
                                    <Button key={item} fontSize={'xl'} value={item} onClick={handleDrawerClick} 
                                    variant='link' color='#25675d' _hover={{background: 'white', transition: '0.4s', color: 'black'}}>{item}</Button>
                                ))}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </ChakraProvider>
        </Box>        
    )
}