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
    DrawerOverlay
  } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';
  
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

    const handleOpenDrawer = () => {
        setShowDrawer(true);
    }

    const handleDrawerClose = () => {
        setShowDrawer(false);
    }

    const navigateToHomeSection = (e) => {
        setTimeout(() => {
            scrollTo(e);
        }, 500);
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
            p={{base: '2', md: '4', lg: '6', xl: '6'}}
            boxShadow={useColorModeValue('sm', 'sm-dark')}>
            {isDesktop ? (
                <Flex
                    height="100%" 
                    width={'6xl'} 
                    justifyContent="space-between"
                    alignItems="center">
                    <Image
                        maxWidth={'100px'}
                        height={'100%'}
                        borderRadius={'50px'}
                        cursor={'pointer'}
                        objectFit='contain'
                        onClick={() => navigate('/')}
                        src={`images/${data.logo_image}`}
                        alt='WizArts logo'
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
                            <Button 
                                color='white' 
                                variant='solid' 
                                background={"primary"} 
                                _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                    Enquire Now
                            </Button>
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
                        maxWidth={'100px'}
                        maxHeight={'100px'}
                        borderRadius={'50px'}
                        cursor={'pointer'}
                        objectFit='contain'
                        onClick={() => navigate('/')}
                        src={`images/${data.logo_image}`}
                        alt='WizArts logo'
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
                                size='sm' 
                                key={item} 
                                onClick={(e) => isHome ? scrollTo(e) : navigateToHomeSection(e)} 
                                value={item} 
                                color='white'>
                                    {item}
                            </Button>
                        ))}
                        <Button 
                            color='white' 
                            variant='solid' 
                            background={"primary"} 
                            _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                Enquire Now
                        </Button>
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
                        maxWidth={'100px'}
                        maxHeight={'100px'}
                        borderRadius={'50px'}
                        cursor={'pointer'}
                        objectFit='contain'
                        onClick={() => navigate('/')}
                        src={`images/${data.logo_image}`}
                        alt='WizArts logo'
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
                        <Button 
                            size='sm'
                            color='white' 
                            variant='solid' 
                            background={"primary"} 
                            _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                                Enquire Now
                        </Button>
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

            <Drawer 
                isOpen={showDrawer} 
                placement='right'
                isFullHeight 
                size='full'
                scrollBehavior='inside' 
                closeOnEsc
                closeOnOverlayClick
                motionPreset='slideInTop'>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton onClick={handleDrawerClose}/>
                    <DrawerBody>
                        <Image
                            maxWidth={'200px'}
                            maxHeight={'200px'}
                            m='5rem auto'
                            onClick={() => navigate('/')}
                            borderRadius={'50px'}
                            cursor={'pointer'}
                            objectFit='contain'
                            src={`images/${data.logo_image}`}
                            alt='WizArts logo'
                        />
                        <VStack spacing="10" justify="center" align="stretch" display="flex">
                            {data.navLinks.map((item) => (
                                <Button key={item} size='lg' value={item} onClick={(e) => isHome ? scrollTo(e) : navigateToHomeSection(e)} 
                                variant='link' color='secondary' _hover={{background: 'white', transition: '0.4s', color: 'black'}}>{item}</Button>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>        
    )
}