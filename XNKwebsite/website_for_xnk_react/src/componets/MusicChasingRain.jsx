import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_chasingrain from './../assets/cover_art_chasingrain.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function MusicChasingRain()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
            <Row>
                <Col>
                    <Card.Img src={cover_art_chasingrain} style={{height: '350px', width: '350px'}} />
                </Col>
                <Col>
                <br/><br/>
                <Card.Body>
                    <Card.Title>Chasing Rain out now!</Card.Title>
                    <Card.Text>
                        My first ep: 'chasing rain' is me searching for me, for reason, for healing, for forgiveness, and for redemption.
                        "Runaways" and "Behind These Eyes" may be my personal favorites.
                    </Card.Text>
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/album/39r3Jl6UI4C5GWLqwWcSl6'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}