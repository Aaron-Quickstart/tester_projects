import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_currents from './../assets/cover_art_currents.png';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function MusicCurrents()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
            <Row>
                <Col>
                    <Card.Img style={{height: '350px', width: '350px'}} />
                </Col>
                <Col>
                <br/><br/>
                <Card.Body>
                    <Card.Title>Currents out now!</Card.Title>
                    <Card.Text>
                        This song is dispair, but beauty lies within everything.
                    </Card.Text>
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/album/1DPZflVR6O2S7Yoh8XMBDg?go=1&sp_cid=d77fd4101b11ca40f4df4c78e62d295e&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=cbd02af5ead34d61'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}