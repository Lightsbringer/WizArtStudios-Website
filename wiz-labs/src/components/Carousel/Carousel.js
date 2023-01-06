import React from 'react';
import './Carousel.css';
import { Heading, Text } from '@chakra-ui/react'

export default function Carousel(props) {
  let portfolioData = props.data;

  return (
    <React.Fragment>
      <Heading>{portfolioData.name}</Heading>
      <Text>{portfolioData.motto}</Text>
    </React.Fragment>
  );
}
