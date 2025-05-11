import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cover_art_liveHotelCafe from './../assets/cover_art_liveHotelCafe.jpg';

export default function HotelCafeMusic()
{




  return (
    <Card>
      <Card.Img src={cover_art_liveHotelCafe} />
      <Card.Body>
        <Card.Title>Live at Hotel Cafe is out now!</Card.Title>
        <Card.Text>
          We are bringing back live albums.  Pretty groovy, eh?
        </Card.Text>
        <Button variant="primary">Listen Here</Button>
      </Card.Body>
    </Card>
  );
}