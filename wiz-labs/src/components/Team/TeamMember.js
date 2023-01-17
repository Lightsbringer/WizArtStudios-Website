import React, {useState, useMemo} from 'react';
import { useNavigate } from "react-router-dom";
import { Text } from '@chakra-ui/react';

export default function TeamMember(props) {
    const {
        cardStyles: {
          back,
          front,
        },
        cardZIndex,
        containerStyle,
        containerClassName,
        value
      } = props;
    const [isFlipped, setFlipped] = useState(false);
    const navigate = useNavigate();

    const frontRotateY = `rotateY(${isFlipped ? 180 : 0}deg)`;
    const backRotateY = `rotateY(${isFlipped ? 0 : -180}deg)`;

    const styles = {
        back: {
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          height: '100%',
          left: '0',
          position: isFlipped ? 'relative' : 'absolute',
          top: '0',
          transform: backRotateY,
          transformStyle: 'preserve-3d',
          transitionDelay: '0.1s',
          transition: '0.6s',
          ...back,
        },
        container: {
          perspective: '1000px',
          zIndex: `${cardZIndex}`,
        },
        flipper: {
          position: 'relative',
          width: '100%',
        },
        front: {
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          height: '100%',
          left: '0',
          position: isFlipped ? 'absolute' : 'relative',
          top: '0',
          transform: frontRotateY,
          transformStyle: 'preserve-3d',
          transition: '0.6s',
          transitionDelay: '0.1s',
          zIndex: '2',
          border: 'none',
          ...front,
        },
      };

    const onMouseHover = (event) => {
        event.preventDefault();
        setFlipped(true);
    }

    const onMouseUnhover = (event) => {
        event.preventDefault();
        setFlipped(false);
    }

    const handleTeamMemberClick = (value) => {
      navigate(`/team-member/${value}`);
    }

    const getContainerClassName = useMemo(() => {
        let className = 'react-card-flip';
        if (containerClassName) {
          className += ` ${containerClassName}`;
        }
        return className;
    }, [containerClassName]);

    const getComponent = (key) => {
        if (props.children.length !== 2) {
          throw new Error('Component ReactCardFlip requires 2 children to function',);
        }
        return props.children[key];
      };
    
    return (
        <React.Fragment>
            <div className={getContainerClassName} style={{ ...styles.container, ...containerStyle }}
                onMouseEnter={onMouseHover} onMouseLeave={onMouseUnhover} >
                <div className="react-card-flipper" onClick={() => handleTeamMemberClick(value)} style={styles.flipper}>
                    <div className="react-card-front" style={styles.front}>
                        {getComponent(0)}
                    </div>
                    <div className="react-card-back" style={styles.back}>
                        {getComponent(1)}
                    </div>
                </div>
                <Text 
                  fontSize={['md', 'md', 'lg', 'lg', 'xl']} 
                  p='0.5rem' 
                  color='secondary' 
                  fontStyle={'italic; bold;'} 
                  _hover={{textDecoration: 'underline'}}>{value}</Text>
            </div>
        </React.Fragment>
    )
}

TeamMember.defaultProps = {
    cardStyles: {
      back: {},
      front: {},
    },
    cardZIndex: 'auto',
    containerStyle: {},
    isFlipped: false,
  };
