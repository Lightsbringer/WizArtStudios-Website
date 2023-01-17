import React from 'react';
import { Box, Image, Text} from '@chakra-ui/react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Portfolio.css';

const ImageCard = (props) => {
    const { id, name, src, originalSrc } = props.data;

    // const handlePhotoVisibleChange = (visible, index, state) => {
    //     if(visible) {
    //         document.addEventListener('contextmenu', (e) => {
    //             e.preventDefault();
    //         });
    //     } else {
    //         document.removeEventListener('contextmenu', (e) => {});
    //     }
    // }

    return (
        <PhotoProvider>
            <PhotoView src={originalSrc}>
                <Box className='image-container' cursor={'pointer'}>
                    <Image
                        alt={`portfolio_${name}`}
                        opacity={'1'}
                        width='100%'
                        src={originalSrc}
                        objectFit="cover"
                        className='image'
                        transition={'.5s ease'}
                    />
                    <Text 
                        className='shrink-border'
                        fontSize={['xl', 'xl', 'xl', 'xl', '2xl']}
                        position="absolute"
                        left="50%"
                        bottom="0"
                        width='60%'
                        opacity={'0'}
                        color='black'
                        text-align='center'
                        transform = 'translate(-50%, -50%)'
                        backgroundColor='white'
                        padding='0.5rem'
                    >
                        {name}
                    </Text>
                </Box>
            </PhotoView>
        </PhotoProvider>
    )
}

export default ImageCard;