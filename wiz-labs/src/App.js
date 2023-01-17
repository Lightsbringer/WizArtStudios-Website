import React, { useRef, useState, useEffect } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './components/theme/theme';
import PortfolioPage from './components/Portfolio/PortfolioPage';
import Portfolio from './components/Portfolio/Portfolio';
import Navigation from './components/Navigation/Navigation';
import Team from './components/Team/Team';
import portfolioData from './portfolio_data';
import ImageContextProvider from './services/imageContext';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/Scrollbar/ScrollToTop';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import NotFoundPage from './components/NotFound/NotFoundPage';
import Services from './components/Services/Services';
import ContactUs from './components/Contacts/ContactUs';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import Home from './components/Home';
import './App.css';

export const App = () => {
  const [loading, setLoading] = useState(true);
  // const [loaderError, setLoaderError] = useState(false);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const { pathname } = useLocation();
  // const [images, setImages] = useState([]);

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
  //       preloadImages() 
  //         .then((response) => setLoading(false))
  //         .catch((error) => setLoaderError(true));
  //       setLoading(false);
  //     }, 2000)
  //   }
  // }, [loading]);

  // const preloadImages = async () => {
  //   const imagePromises = websiteMedia.websiteMedia.map((fileUrl) => {
  //     return new Promise((resolve, reject) => {
  //       // <Image
  //       //   width={'auto'}
  //       //   objectFit='contain'
  //       //   src={require(`./assets/${fileUrl}`)}
  //       //   onLoad={() => resolve(fileUrl)}
  //       //   onError={() => reject(fileUrl)}
  //       // />
  //       const image = new Image();

  //       image.src = `./assets/${fileUrl}`;
  //       image.crossOrigin='anonymous';
  //       image.onload = resolve(image);
  //       image.onerror = reject();
  //   })
  //   });

  //   await Promise.all(imagePromises)
  //     .then((images) => {
  //       setImages(images);
  //     }).catch((err) => {
  //       setImages([]);
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
    // <ImageContextProvider value={images}>
      // <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>
                <LoadingComponent data={portfolioData} loading={loading}/>
                <Navigation data={portfolioData} scrollTo={scrollTo}/>
                <Home innerRef={homeRef} scrollTo={scrollTo} data={portfolioData}/>
                <Services innerRef={servicesRef} data={portfolioData}/>
                <Team innerRef={teamRef} data={portfolioData}/>
                <Portfolio innerRef={portfolioRef} data={portfolioData}/>
                <ContactUs innerRef={contactRef} data={portfolioData}/>
                <ScrollToTop/>
            </React.Fragment>
          }/>
          {/* <Route exact path='/team-member/:name' element={<TeamMemberPage data={portfolioData}/>}/> */}
          <Route exact path='/portfolio/:name' element={
            <>
              <Navigation data={portfolioData} scrollTo={scrollTo}/>
              <PortfolioPage data={portfolioData}/>
            </>
          }/>
          <Route exact path='/privacy-policy' element={
            <>
              <Navigation data={portfolioData} scrollTo={scrollTo}/>
              <PrivacyPolicy/>
            </>
          }/>          
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        {
          <Footer data={portfolioData} scrollTo={scrollTo}/>
        }
      </div>
    // </ImageContextProvider>
  );
}
