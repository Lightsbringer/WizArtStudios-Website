import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {    
    const navigate = useNavigate();

    const backToHome = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <Box 
            variant='div'
            display={'flex'}
            flexDirection='column'
            height={'90vh'}
            alignItems='center'
            justifyContent='center'
            gap={5}>
            <Image
                width={'xl'}
                objectFit='contain'
                src={require(`../../assets/wiz.png`)}
                alt='Landing Page Wiz'
            />
            <Text fontSize={['sm', 'md', 'xl', 'xl', '2xl']}  align={'center'} color='secondary'>Where you heading to? <br/> There's nothing here for a tiny mortal!</Text>
            <Button 
                background='primary' 
                color='white'
                onClick={backToHome}
                _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                    Back to Home
            </Button>
        </Box>
    );
};

export default NotFoundPage;
