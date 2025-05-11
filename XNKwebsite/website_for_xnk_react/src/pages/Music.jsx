import Container from "react-bootstrap/esm/Container";
import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HotelCafeMusic from "../componets/HotelCafeMusic";
import LoudMusic from "../componets/LoudMusic";
import VampiresMusic from "../componets/VampireMusic";




export default function Music()
{



    return(
    <>
        <NavigationLinks/>
        <br/>
        <HotelCafeMusic/>
        <LoudMusic/>
        <VampiresMusic/>
        <br/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}

/*
        <Container>
            <Row>
                <Col>

                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
*/