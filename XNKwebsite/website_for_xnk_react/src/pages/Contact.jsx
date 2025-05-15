import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';

import FullBand from './../assets/photo_fullBAnd.jpg';
import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import ContactInfo from '../componets/ContactInfo';




export default function Contact()
{



    return(
    <>
    <NavigationLinks/>
        <h1>Want us to come rock for you?</h1>
        <img src={FullBand} className='mb-5' style={{borderRadius: '1.5rem'}}/>
        <ContactInfo/>
        <FooterNote/>
    </>
        
    
    )
}