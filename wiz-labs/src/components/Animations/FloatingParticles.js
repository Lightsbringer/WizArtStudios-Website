import React, { useEffect, useState } from "react";
import { Image } from '@chakra-ui/react';
import "./Floating.css";

function FloatingParticle(props) {
    const portfolioData = props.data;
    const [rendered, isRendered] = useState(false);
    const [currentParticle, setCurrentParticle] = useState(null);

    useEffect(() => {
        isRendered(true);
        getFloatingItem();
    }, [rendered])

    setInterval(() => {
        getFloatingItem();
    }, 121000);

    const getFloatingItem = () => {
        const item = portfolioData.floatingParticleImages[Math.floor(Math.random()*portfolioData.floatingParticleImages.length)];
        setCurrentParticle(item);
    }

    return (
        <React.Fragment>
            {currentParticle ? 
                <div className='particle'>
                    <Image
                        boxSize={['100px', '130px', '170px', '200px', '220px']}
                        m='0 auto'
                        objectFit='contain'
                        src={require(`../../assets/${currentParticle}`)}
                        alt='Landing Page Wiz'
                    />
                </div>
            : null}
        </React.Fragment>
    )
}

export default FloatingParticle;