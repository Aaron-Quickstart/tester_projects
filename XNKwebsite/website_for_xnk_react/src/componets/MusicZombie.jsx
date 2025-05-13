import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_zombie from './../assets/cover_art_zombie.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function MusicZombie()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
            <Row>
                <Col>
                    <Card.Img src={cover_art_zombie} style={{height: '350px', width: '350px'}} />
                </Col>
                <Col>
                <br/><br/>
                <Card.Body className='mt-4'>
                    <Card.Title>Zombie out now!</Card.Title>
                    <Card.Text>
                        We made this version of "Zombie" to be a call to action against all of the hate that has spread like a virus causing disease in us all.
                    </Card.Text>
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/track/4A5s1Nqt94a58rSAmBIo21?go=1&sp_cid=d77fd4101b11ca40f4df4c78e62d295e&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=8d7bedb4d00e42df'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}