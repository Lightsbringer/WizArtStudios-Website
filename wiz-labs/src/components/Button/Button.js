import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import './Button.css';

export default function WizButton(props) {
  const { text, hyperlinkTo, handleButtonClick, handleButtonEnter, handleButtonLeave} = props;

  const handleOnMouseLeave = (event) => {
    event.preventDefault();
    console.log('mouse leave', event);
    handleButtonLeave(hyperlinkTo);
  }

  const handleOnMouseEnter = (event) => {
    event.preventDefault();
    console.log('mouse enter', event);
    handleButtonEnter(hyperlinkTo);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log('click', event);
    handleButtonClick(hyperlinkTo);
  }

  const determineButtonPosition = () => {
    switch(hyperlinkTo) {
      case '/our-services':
        return 'button-services';
      case '/team':
        return 'button-team';
      case '/portfolio':
        return 'button-portfolio';
      case '/contact-us':
        return 'button-contact-us';
      default:
        return '';
    }
  }

  return (
    <Button 
      className={`button-container ${determineButtonPosition()}`} 
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave} 
      onClick={handleClick}>
        {text}
    </Button>
  )
};
