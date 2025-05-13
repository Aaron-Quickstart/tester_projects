import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_weightless from './../assets/cover_art_weightless.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function MusicWeightless()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
            <Row>
                <Col>
                    <Card.Img src={cover_art_weightless} style={{height: '200px', width: '200px'}} />
                </Col>
                <Col>
                <Card.Body>
                    <Card.Title>Weightless out now!</Card.Title>
                    <Card.Text>
                        "I'm just dealing with some <br/>
                        old shit I don't want to get into."
                    </Card.Text>
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/album/2dOTm04GUqIHgswAAnA9mH?go=1&sp_cid=d77fd4101b11ca40f4df4c78e62d295e&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=beaf89b3732c4c17'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}