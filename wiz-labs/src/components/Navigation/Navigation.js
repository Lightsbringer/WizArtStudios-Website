import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Image,
    Flex,
    HStack,
    VStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    useColorMode,
    Drawer,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton,
    DrawerOverlay
  } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';
  
export default function Navigation(props) {
    const { data , scrollTo} = props;
    const isDesktop = useBreakpointValue({ base: false, lg: true , xl: true });
    const isTablet = useBreakpointValue({base: false, md: true});
    const isMobile = useBreakpointValue({base: false, sm: true});
    const { colorMode, toggleColorMode } = useColorMode();
    const [showDrawer, setShowDrawer] = useState(false);
    const navigate = useNavigate();

    const handleOpenDrawer = () => {
        setShowDrawer(true);
    }

    const handleDrawerClose = () => {
        setShowDrawer(false);
    }

    return (
        <Box as="nav"
            display="flex"
            flexDirection="row"
            alignItems={"center"}
            justifyContent="center" 
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
                        src={require(`../../assets/${data.logo_image}`)}
                        alt='WizArts logo'
                    />
                        <ButtonGroup variant="link" spacing="8">
                            {data.navLinks.map((item) => (
                                <Button size='lg' key={item} onClick={(e) => scrollTo(e)} value={item} color='white'>{item}</Button>
                            ))}
                            <Button color='white' variant='solid' background={"primary"}>Enquire Now</Button>
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
                        src={require(`../../assets/${data.logo_image}`)}
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
                            <Button size='sm' key={item} onClick={(e) => scrollTo(e)} value={item} color='white'>{item}</Button>
                        ))}
                        <Button color='white' variant='solid' background={"primary"}>Enquire Now</Button>
                    </ButtonGroup>
                </Flex>
            ) : (
                <Flex
                    height="100%"  
                    width={'100%'}
                    m={'auto 3rem'}
                    justifyContent="space-between"
                    alignItems="center">
                    <Image
                        maxWidth={'100px'}
                        maxHeight={'100px'}
                        borderRadius={'50px'}
                        cursor={'pointer'}
                        objectFit='contain'
                        onClick={() => navigate('/')}
                        src={require(`../../assets/${data.logo_image}`)}
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
                    <ButtonGroup variant="link" spacing="8">
                        <Button color='white' variant='solid' background={"primary"}>Enquire Now</Button>
                        <IconButton
                        variant="ghost"
                        color='white'
                        onClick={handleOpenDrawer}
                        icon={<FiMenu fontSize="2.25rem" />}
                        aria-label="Open Menu"
                        />
                    </ButtonGroup>
                </Flex>
            )}
            <Drawer 
                isOpen={showDrawer} 
                placement='right'
                isFullHeight 
                size='full'
                scrollBehavior='inside' 
                closeOnEsc
                closeOnOverlayClick
                motionPreset='slideInLeft'>
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
                            src={require(`../../assets/${data.logo_image}`)}
                            alt='WizArts logo'
                        />
                        <VStack spacing="10" justify="center" align="stretch" display="flex">
                            {data.navLinks.map((item) => (
                                <Button key={item} size='lg' value={item} onClick={(e) => {
                                    // handleDrawerClose();
                                    scrollTo(e);
                                }} variant='link' color='secondary'>{item}</Button>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>        
    )
}