import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import MusicHotelCafe from "../componets/MusicHotelCafe";
import MusicLoud from "../componets/MusicLoud";
import MusicVampires from "../componets/MusicVampire";
import MusicRaincloud from "../componets/MusicRainCloud";




export default function Music()
{



    return(
    <>
        <NavigationLinks/>
        <br/>
        <MusicHotelCafe/>
        <MusicLoud/>
        <MusicVampires/>
        <MusicRaincloud/>
        <br/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}