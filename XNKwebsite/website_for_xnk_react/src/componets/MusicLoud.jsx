import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_loud from './../assets/cover_art_loud.jpeg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function LoudMusic()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
            <Row>
                <Col>
                    <Card.Img src={cover_art_loud} style={{height: '350px', width: '350px'}} />
                </Col>
                <Col>
                <br/><br/>
                <Card.Body className='mt-4'>
                    <Card.Title>Loud is out now!</Card.Title>
                    <Card.Text>
                        No such thing as a quiet place.
                    </Card.Text>
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/album/1qPe1ecfC1VyY1qqbAN0Hp?go=1&sp_cid=f1c935aa-352b-4096-863d-c1fa7379b612&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=de4635e922ee4a06'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}
