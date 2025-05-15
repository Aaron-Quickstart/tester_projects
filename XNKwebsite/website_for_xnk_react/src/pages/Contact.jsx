import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';

import FullBand from './../assets/photo_fullBAnd.jpg';
import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import ContactForm from '../componets/ContactForm';




export default function Contact()
{



    return(
    <>
    <NavigationLinks/>
        <h1>Want us to come rock for you?</h1>
        <img src={FullBand} className='mb-5' style={{borderRadius: '1.5rem'}}/>


        <ContactForm/>
        <FooterNote/>
    </>
        
    
    )
}

/*

            <Form>
                <Form.Group className="mb-3" controlId="userEmail">
                <Form.Label>Your information will not be shared with anyone.</Form.Label>
                <Form.Control type="email" placeholder="your email here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="userMessage">
                <Form.Label>Tell us a little about how we can help spread smiles.</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button>Send Message</Button>
            </Form>




*/