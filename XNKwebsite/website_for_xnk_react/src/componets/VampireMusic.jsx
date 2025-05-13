import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_vampires from './../assets/cover_art_vampires.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function VampiresMusic()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
            <Row>
                <Col>
                    <Card.Img src={cover_art_vampires} style={{height: '200px', width: '200px'}} />
                </Col>
                <Col>
                <Card.Body>
                    <Card.Title>Vampires out now!</Card.Title>
                    <Card.Text>
                        Claws, Teeth, and eyeless.<br/>
                        Listener discretion is advised.
                    </Card.Text>
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/album/38mYJly2lIUCqYvKFUK5y6?go=1&sp_cid=f1c935aa-352b-4096-863d-c1fa7379b612&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=fede29fbe3734043'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}