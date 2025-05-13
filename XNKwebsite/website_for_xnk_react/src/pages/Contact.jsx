import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';

import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";




export default function Contact()
{



    return(
    <>
    <NavigationLinks/>
        <h1>Want us to come rock for you?</h1>
        <Container>
            <Form action=''>
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
        </Container>

        <br/><br/>
        <FooterNote/>
    </>
        
    
    )
}

/*
    <form id="request-form" action="https://formspree.io/f/mbldzzbg" method="POST">
        <label for="fname">*&nbsp;First name:</label><br/>
        <input type="text" id="fname" name="fname" required/><br/>

        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>

        <label for="customer-email">*&nbsp;Email:</label><br/>
        <input type="text" id="customer-email" name="customer-email" required/><br/>

        <label for="recipe-request-field">*&nbsp;Request a recipe here.</label><br/>
        <input id="recipe-request-field" name="recipe-request-field"  size="50" required/><br/>

        <input type="submit" value="Submit">
    <form/>
*/