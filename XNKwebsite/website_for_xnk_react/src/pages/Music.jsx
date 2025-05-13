import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import HotelCafeMusic from "../componets/HotelCafeMusic";
import LoudMusic from "../componets/LoudMusic";
import VampiresMusic from "../componets/VampireMusic";
import RaincloudMusic from "../componets/RainCloudMusic";




export default function Music()
{



    return(
    <>
        <NavigationLinks/>
        <br/>
        <HotelCafeMusic/>
        <LoudMusic/>
        <VampiresMusic/>
        <RaincloudMusic/>
        <br/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}