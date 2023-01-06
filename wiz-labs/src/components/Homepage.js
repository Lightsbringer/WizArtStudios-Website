import React, { useState, useEffect, useRef } from 'react';
import Portfolio from './Portfolio/Portfolio';
import ScrollToTop from './Scrollbar/ScrollToTop';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Team from './Team/Team';
import ContactUs from './Contacts/ContactUs';
import portfolioData from '../portfolio_data';
import LoadingComponent from './LoadingComponent/LoadingComponent';
import Home from './Home';
import './Home.css';

export default function Homepage(props) {
    const {loading, setLoading, homeRef, servicesRef, teamRef, portfolioRef, contactRef} = props;

    useEffect(() => {
        if(loading) {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => setLoading(false));
        }
    }, [loading])

    const demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2500));
    }

    return (
        <>
            {
                loading ? 
                <LoadingComponent data={portfolioData}/>
                :
                <React.Fragment>
                    <Home innerRef={homeRef} data={portfolioData}/>
                    <Services innerRef={servicesRef} data={portfolioData}/>
                    <Team innerRef={teamRef} data={portfolioData}/>
                    <Portfolio innerRef={portfolioRef} data={portfolioData}/>
                    <ContactUs innerRef={contactRef} data={portfolioData}/>
                    <ScrollToTop/>
                    <Footer data={portfolioData}/>
                </React.Fragment>
            }
        </>
    )
}
