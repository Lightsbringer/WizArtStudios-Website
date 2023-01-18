import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';

const NotFoundPage = () => {    
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
                alt='home_image'
                width={'xl'}
                objectFit='contain'
                priority={'true'}
                src={require(`../../assets/wiz.jpeg`)}
            />
            <Text fontSize={['sm', 'md', 'xl', 'xl', '2xl']}  align={'center'} color='secondary'>Where you heading to? <br/> There's nothing here for a tiny mortal!</Text>
            <a href={'/'}>
                <Button 
                    background='primary' 
                    color='white'
                    _hover={{background: 'white', transition: '0.4s', color: 'black'}}>
                        Back to Home
                </Button>
            </a>
        </Box>
    );
};

export default NotFoundPage;
