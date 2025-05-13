import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_raincloud from './../assets/cover_art_raincloud.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function RaincloudMusic()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
            <Row>
                <Col>
                    <Card.Img src={cover_art_raincloud} style={{height: '200px', width: '200px'}} />
                </Col>
                <Col>
                <Card.Body>
                    <Card.Title>Raincloud out now!</Card.Title>
                    <Card.Text>
                        Sticks and stones may break my bones, but self deprication is catharsis.
                    </Card.Text>
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/album/0H3oTAVAETtN1llsQ1gKaS?go=1&sp_cid=f1c935aa-352b-4096-863d-c1fa7379b612&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=e3b0284ca3844183'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}