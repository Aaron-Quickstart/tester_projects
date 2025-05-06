import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InstaLogo from './../assets/LogoInsta.png';
import TikTokLogo from './../assets/LogoTikTok.png';
import SpotifyLogo from './../assets/LogoSpotify.png';
import AppleMusicLogo from './../assets/LogoAppleMusic.png';
import YtLogo from './../assets/LogoYT.png';
import FbLogo from './../assets/LogoFB.png';

export default function SocialLinks() 
{


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Nav className="me-auto">
            <Nav.Link 
                href="https://www.instagram.com/xnkmusicofficial/"
                target="_blank" rel="noopener noreferrer">
                <img src={InstaLogo} alt="Instagram" height="50"/>
            </Nav.Link>
            <Nav.Link 
                href="https://www.tiktok.com/@xnkmusic"
                target="_blank" rel="noopener noreferrer">
                <img src={TikTokLogo} alt="TikTok" height="50"/>
            </Nav.Link>
            <Nav.Link 
                href="https://open.spotify.com/artist/7opUU7bwmoMoQUFnhVvpsR?si=ysGKJ6e3R_iiXg9rNVAu5w"
                target="_blank" rel="noopener noreferrer">
                <img src={SpotifyLogo} alt="Spotify" height="50"/>
            </Nav.Link>
            <Nav.Link 
                href="https://music.apple.com/us/artist/xnk/1565392874"
                target="_blank" rel="noopener noreferrer">
                <img src={AppleMusicLogo} alt="Apple Music" height="50"/>
            </Nav.Link>
            <Nav.Link 
                href="https://www.youtube.com/channel/UCwb98FPbrnq4flzhA1UwFtw/playlists"
                target="_blank" rel="noopener noreferrer">
                <img src={YtLogo} alt="You Tube" height="50"/>
            </Nav.Link>
            <Nav.Link 
                href="https://www.facebook.com/xnkmusicofficial"
                target="_blank" rel="noopener noreferrer">
                <img src={FbLogo} alt="You Tube" height="50"/>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

