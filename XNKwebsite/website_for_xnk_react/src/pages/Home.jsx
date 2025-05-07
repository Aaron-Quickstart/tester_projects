import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import SocialLinks from "../componets/SocialLinks";
import Background from "./../assets/XnkBackground.png";


export default function Home()
{



    return(
    <>
        <NavigationLinks/>
        <Container>
            <Row>
                <Col xs={2}><SocialLinks/></Col>
                <Col xs={10}><img src={Background} alt="Background"/></Col>
            </Row>
        </Container>
        
        
        <SignUpForm/>
        <FooterNote />
    </>
    )
}