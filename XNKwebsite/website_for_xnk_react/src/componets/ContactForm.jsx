import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





export default function ContactForm()
{

    return(

        <Container className='justify-content-center align-items-center' style={{width: '40%'}}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Your Name
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </Container>
    )
}

/*



    <form>
        <input placeholder="email" required ref={contactEmail}/>

        <button id='contactBtn'>Send</button>
    </form>
*/