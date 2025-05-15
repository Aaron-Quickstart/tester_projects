import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";




export default function ContactInfo()
{



    return(
        <div className='justify-content-center align-items-center'>
            <section className='mx-auto' id='contactInfo' style={{width: '25rem'}}>
                <Row>
                    <Col>
                        <p>Phone:</p>
                    </Col>
                    <Col>
                        <p>1-865-292-5779</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>Email:</p>
                    </Col>
                    <Col>
                        <p>xnk.ryanclure@gmail.com</p>
                    </Col>
                </Row>
            </section>
        </div>
    )
}