import React, { useState, useMemo } from 'react';

export const ImageContext = React.createContext();

const ImageContextProvider = ({children}) => {
  const [images, setImages] = useState([]);

  const getImageByURL = (url) => {
    const image = images.find((image) => image.src.includes(url));

    return image ? image : null;
  }

  return (
    <ImageContext.Provider value={{images, setImages, getImageByURL}}>
      {children}
    </ImageContext.Provider>
  )
}

export default ImageContextProvider;

