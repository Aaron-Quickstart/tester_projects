import InstaLogo from './../assets/LogoInsta.png';
import TikTokLogo from './../assets/LogoTikTok.png';
import SpotifyLogo from './../assets/LogoSpotify.png';
import AppleMusicLogo from './../assets/LogoAppleMusic.png';
import YtLogo from './../assets/LogoYT.png';
import FbLogo from './../assets/LogoFB.png';

export default function SocialLinks() 
{


  return (
    <>
    <div className='d-flex justify-content-right align-items-center vh-100'>
      <nav className='flex-column nav d-flex align-items-center gap-4'>
        <a
          href="https://www.instagram.com/xnkmusicofficial/"
          target="_blank" rel="noopener noreferrer">
          <img src={InstaLogo} alt="Instagram" style={{width: '250%'}}/>
        </a>
        <br/>
        <a
          href="https://www.tiktok.com/@xnkmusic"
          target="_blank" rel="noopener noreferrer">
          <img src={TikTokLogo} alt="TikTok" style={{width: '250%'}}/>
        </a>
        <br/>
        <a
          href="https://open.spotify.com/artist/7opUU7bwmoMoQUFnhVvpsR?si=ysGKJ6e3R_iiXg9rNVAu5w"
          target="_blank" rel="noopener noreferrer">
          <img src={SpotifyLogo} alt="Spotify" style={{width: '250%'}}/>
        </a>
        <br/>
        <a 
          href="https://music.apple.com/us/artist/xnk/1565392874"
          target="_blank" rel="noopener noreferrer">
          <img src={AppleMusicLogo} alt="Apple Music" style={{width: '250%'}}/>
        </a>
        <br/>
        <a 
          href="https://www.youtube.com/channel/UCwb98FPbrnq4flzhA1UwFtw/playlists"
          target="_blank" rel="noopener noreferrer">
          <img src={YtLogo} alt="You Tube" style={{width: '250%'}}/>
        </a>
        <br/>
        <a 
          href="https://www.facebook.com/xnkmusicofficial"
          target="_blank" rel="noopener noreferrer">
          <img src={FbLogo} alt="You Tube" style={{width: '250%'}}/>
        </a>
      </nav>
    </div>
    </>
  );
}

