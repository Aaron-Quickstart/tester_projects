import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import VideoLightMyFire from "../componets/VideoLightMyFire";
import VideoLoud from "../componets/VideoLoud";
import VideoZombie from "../componets/VideoZombie";




export default function Video()
{



    return(
    <>
        <NavigationLinks/>
        <h1>Music Videos</h1>
        <VideoLoud/><br/>
        <VideoLightMyFire/><br/>
        <VideoZombie/><br/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}