import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import MusicHotelCafe from "../componets/MusicHotelCafe";
import MusicLoud from "../componets/MusicLoud";
import MusicVampires from "../componets/MusicVampire";
import MusicRaincloud from "../componets/MusicRainCloud";
import MusicWeightless from "../componets/MusicWeightless";
import MusicCurrents from "../componets/MusicCurrents";
import MusicLightMyFire from "../componets/MusicLightMyFire";
import MusicZombie from "../componets/MusicZombie";
import MusicChasingRain from "../componets/MusicChasingRain";




export default function Music()
{



    return(
    <>
        <NavigationLinks/>
        <div>
            <MusicHotelCafe/>
            <MusicLoud/>
            <MusicVampires/>
            <MusicRaincloud/>
            <MusicWeightless/>
            <MusicCurrents/>
            <MusicLightMyFire/>
            <MusicZombie/>
            <MusicChasingRain/>
        </div>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}