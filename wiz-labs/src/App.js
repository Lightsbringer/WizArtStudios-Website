import React, { useRef, useState, useEffect } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './components/theme/theme';
import PortfolioPage from './components/Portfolio/PortfolioPage';
import Portfolio from './components/Portfolio/Portfolio';
import Navigation from './components/Navigation/Navigation';
import Team from './components/Team/Team';
import TeamMemberPage from './components/Team/TeamMemberPage';
import portfolioData from './portfolio_data';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/Scrollbar/ScrollToTop';
import Footer from './components/Footer/Footer';
import NotFoundPage from './components/NotFound/NotFoundPage';
import Services from './components/Services/Services';
import ContactUs from './components/Contacts/ContactUs';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import Home from './components/Home';
import axios from 'axios';
import './App.css';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if(loading) {
      // this simulates an async action, after which the component will render the content
      demoAsyncCall().then(() => setLoading(false));
    }
  }, [loading])

  // useEffect(() => {
  //   if(loading) {
  //     setTimeout(() => {
  //       createImageRepository()
  //       .then((response) => cacheImages(response)) 
  //       .then(() => setLoading(false));
  //     }, 1000);
  //   }
  // }, [loading]);

  // const cacheImages = async (files) => {
  //   const imagePromises = await files.map((file) => {
  //     return new Promise((resolve, reject) => {
  //       const image = new Image();

  //       image.src = `images/${file}`;
  //       image.crossOrigin='anonymous';
  //       image.onload = resolve(image);
  //       image.onerror = reject();
  //     })
  //   });

  //   await Promise.all(imagePromises)
  //     .then((images) => {
  //       setImages(images);
  //     });
  // }

  // const createImageRepository = () => {    
  //   return new Promise((resolve, reject) => {
  //     axios.get(`${baseUrl}/api/getWebsiteMedia`)
  //       .then((response) => {
  //           console.log(response);
  //           resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // }

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  const scrollTo = (event, stringRoute = '') => {
    event.preventDefault();
    let route;
    if(stringRoute) {
      route = stringRoute.toLowerCase().split(' ').join('-');
    } else {
      route = event.target.value.toLowerCase().split(' ').join('-');
    }

    switch(route) {
    case "home":
        homeRef.current.scrollIntoView({behavior: 'smooth'});
        break;
    case "services":
        servicesRef.current.scrollIntoView({behavior: 'smooth'});
        break;
    case "team":
        teamRef.current.scrollIntoView({behavior: 'smooth'});
        break;
    case "contact-us":
        contactRef.current.scrollIntoView({behavior: 'smooth'});
        break;
    case "our-work":
        portfolioRef.current.scrollIntoView({behavior: 'smooth'});
        break;
    default: 
        break;
    }
  }

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div className="App">
        {      
          loading ? 
          <LoadingComponent data={portfolioData}/>
          :
          <Navigation data={portfolioData} scrollTo={scrollTo}/>
        }
        <Routes>
          <Route exact path='/' element={
            <>
              {
                  loading ? 
                    null
                  :
                  <React.Fragment>
                      <Home innerRef={homeRef} scrollTo={scrollTo} data={portfolioData}/>
                      <Services innerRef={servicesRef} data={portfolioData}/>
                      <Team innerRef={teamRef} data={portfolioData}/>
                      <Portfolio innerRef={portfolioRef} data={portfolioData}/>
                      <ContactUs innerRef={contactRef} data={portfolioData}/>
                      <ScrollToTop/>
                  </React.Fragment>
              }
            </>
          }/>
          {/* <Route path='/services' element={<Services data={portfolioData}/>}/> */}
          <Route exact path='/team-member/:name' element={<TeamMemberPage data={portfolioData}/>}/>
          <Route exact path='/portfolio/:name' element={<PortfolioPage data={portfolioData}/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        {
          loading ? 
            null 
          : 
            <Footer data={portfolioData} scrollTo={scrollTo}/>
        }
        {/* 
        ALSO IMPLEMENT THE COLOR-THIEF AND LIVE CHAT
        Add LOADER ON TOP THAT SHOWS HOW MUCH THE USER HAS SCROLLED THROUGH
        MODIFY SCROLLBAR
        <Carousel data={portfolioData}/>
        */}
      </div>
    </>
  );
}
