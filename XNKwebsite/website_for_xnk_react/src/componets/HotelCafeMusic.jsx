import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_liveHotelCafe from './../assets/cover_art_liveHotelCafe.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function HotelCafeMusic()
{




  return (
    <div>
        <Card className='bg-transparent' text='white'>
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
                    <Button variant="secondary" target='_blank' href='https://open.spotify.com/album/7iXjYeuwtvbDkWbdJnk7YJ?go=1&sp_cid=f1c935aa-352b-4096-863d-c1fa7379b612&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=b189fec74e7a4707'>Listen Here</Button>
                </Card.Body>                
                </Col>
            </Row>
        </Card>
        <br/>
    </div>

  );
}


/*

*/