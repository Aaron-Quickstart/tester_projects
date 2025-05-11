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
        {/*  Add a "News Ticker" to add a feeling of inter activity on the homepage  */}
        <Container>
            <Row className='d-flex align-items-center vh-100'>
                <Col className='z-1' xs={1}><SocialLinks/></Col>
                <Col className='z-0' xs={11}><img src={Background} alt="Background" style={{width: '100%'}}/></Col>
            </Row>
        </Container>
        <SignUpForm/>
        <FooterNote />

    </>
    )
}