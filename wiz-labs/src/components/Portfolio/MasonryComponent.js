import React from 'react';
import { Masonry } from "masonic";
import ImageCard from './ImageCard';
import { useBreakpointValue } from '@chakra-ui/react';


const MasonryComponent = (props) => {
  const images = props.images;
  const isMobile = useBreakpointValue({base: true, sm: true, md: false, xl: false});

  return (
      <Masonry
        items={images}
        columnGutter={10}
        columnCount={isMobile ? 2 : 3}
        // Pre-renders 5 windows worth of content
        overscanBy={5}
        render={ImageCard}
      />
  )
};

export default MasonryComponent;