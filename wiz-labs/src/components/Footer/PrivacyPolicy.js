import React from 'react';
import { Box, Link, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { VscDebugBreakpointLog } from 'react-icons/vsc';

export default function PrivacyPolicy(props) {
    return (
        <Box 
            w={['90%', 'xl', '3xl', '5xl', '6xl']}
            position="relative"
            zIndex={'23'}
            m={'5rem auto'}>
            <Heading color='primary' size='xl' pt={5} pb={3}>Privacy Policy for WizArt Studios</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>At WizArt Studios, accessible at <Link color='primary' href={'https://wizartstudios.io/'}>https://wizartstudios.io/</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by WizArt Studios and how we use it.
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <Link color='primary' href = "mailto: studiosofwizart@gmail.com">studiosofwizart@gmail.com</Link>
                <br/>
                <br/>
                This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in WizArt Studios. 
                This policy is not applicable to any information collected offline or via channels other than this website.
                <br/>
                <br/>
            </Text>

            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>Consent</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </Text>
            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>Information we collect</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, 
            and any other information you may choose to provide.
            </Text>
            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>How we use your information</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                We use the information we collect in various ways, including to:
                <br/>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Improve, personalize, and expand our website
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Provide, operate, and maintain our website
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Understand and analyze how you use our website
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Develop new products, services, features, and functionality
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Send you emails
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Find and prevent fraud
                    </ListItem>
                </List>
            </Text>
            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>Log Files</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                WizArt Studios follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. 
                The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, 
                and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, 
                administering the site, tracking users' movement on the website, and gathering demographic information.
            </Text>
            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>Cookies and Web Beacons</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                Like any other website, WizArt Studios uses ‘cookies'. These cookies are used to store information including visitors' preferences, 
                nd the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our 
                web page content based on visitors' browser type and/or other information.
            </Text>
            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>DoubleClick DART Cookie</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their 
                visit to <Link color='primary' href={"https://wizartstudios.io/"}>https://wizartstudios.io/</Link> and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content 
                network Privacy Policy at the following URL: <Link color='primary' href={'https://policies.google.com/technologies/ads'}>https://policies.google.com/technologies/ads</Link>.
                Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own 
                Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
                Google
                <br/>
                <Link color='primary' href={'https://policies.google.com/technologies/ads'}>https://policies.google.com/technologies/ads</Link>
            </Text>

            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>Advertising Partners Privacy Policies</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                You may consult this list to find the Privacy Policy for each of the advertising partners of WizArt Studios.
                Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on WizArt Studios, 
                which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                Note that WizArt Studios has no access to or control over these cookies that are used by third-party advertisers.
            </Text>
            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>Third-Party Privacy Policies</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, 
                it can be found at the browsers' respective websites. 
            </Text>
            
            <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>What Are Cookies?</Heading>
            <Text color='secondary' textAlign='left' lineHeight={7} fontSize={['sm', 'md', 'lg', 'xl', 'xl']}>
                CCPA Privacy Policy (Do Not Sell My Personal Information)<br/>
                Under the CCPA, among other rights, California consumers have the right to:
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Request that a business delete any personal data about the consumer that a business has collected.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </ListItem>
                </List>

                <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>GDPR Privacy Policy (Data Protection Rights)</Heading>
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={VscDebugBreakpointLog} color='#ecc49c'/>
                        The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                    </ListItem>
                </List>
                <br/>
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

                <Heading color='primary' size='lg' textAlign='left' pt={5} pb={3}>Children's Information</Heading>
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, 
                participate in, and/or monitor and guide their online activity.
                WizArt Studios does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
                If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we 
                will do our best efforts to promptly remove such information from our records.
            </Text>
        </Box>
    )
}