import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_liveHotelCafe from './../assets/cover_art_liveHotelCafe.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function MusicHotelCafe()
{




  return (
    <div>
        <Card>
            <Row>
                <Col>
                    <Card.Img src={cover_art_liveHotelCafe} style={{height: '200px', width: '200px'}} />
                </Col>
                <Col>
                <Card.Body>
                    <Card.Title>Live at Hotel Cafe is out now!</Card.Title>
                    <Card.Text>
                    We are bringing back live albums.  Pretty groovy, eh?
                    </Card.Text>
                    <Button variant="primary">Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
    </div>

  );
}