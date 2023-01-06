import React, { useState } from 'react';
import {GiThornedArrow} from 'react-icons/gi';
import { IconButton } from '@chakra-ui/react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <IconButton
            display={visible ? 'block' : 'none'}
            position="fixed"
            background='secondary'
            border='2px solid black'
            right='3%'
            bottom='3%'
            fontSize='3rem'
            height='85px'
            >
            <GiThornedArrow onClick={scrollToTop} 
            style={{transform: 'rotate(225deg)', 
                animation: 'fade 1s ease-in'}} />
        </IconButton>
    );
};

export default ScrollToTop;
