import React, { useEffect, useState } from "react";
import { Image } from '@chakra-ui/react';
import "./Floating.css";

function FloatingParticle(props) {
    const portfolioData = props.data;
    const { particle, indexAnimation } = props;
    const [rendered, isRendered] = useState(false);
    const [currentParticle, setCurrentParticle] = useState(null);

    useEffect(() => {
        isRendered(true);
        setCurrentParticle(particle);
    }, [rendered]);

    return (
        <React.Fragment>
            {currentParticle ? 
                <div className={`particle animation-${indexAnimation}`}>
                    <Image
                        boxSize={['100px', '130px', '170px', '200px', '220px']}
                        m='0 auto'
                        objectFit='contain'
                        src={`images/${currentParticle}`}
                    />
                </div>
            : null}
        </React.Fragment>
    )
}

export default FloatingParticle;