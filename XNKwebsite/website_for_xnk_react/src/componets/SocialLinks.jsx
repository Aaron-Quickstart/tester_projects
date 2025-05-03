import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InstaLogo from './../assets/';

export default function SocialLinks() 
{


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Nav className="me-auto">
            <Nav.Link 
                href="https://www.instagram.com/xnkmusicofficial/"
                target="_blank" rel="noopener noreferrer">
                  <img src={InstaLogo} alt="Instagram" />
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

