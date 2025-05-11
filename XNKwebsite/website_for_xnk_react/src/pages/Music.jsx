import Container from "react-bootstrap/esm/Container";
import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";




export default function Music()
{



    return(
    <>
        <NavigationLinks/>
        <h1>This is the Music Page</h1>
        <Container>
            <Row>
                <Col>

                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
        <br/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}