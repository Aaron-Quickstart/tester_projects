import Container from "react-bootstrap/esm/Container";
import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SignUpForm from "../componets/SignupForm";
import HotelCafeMusic from "../componets/MusicHotelCafe";




export default function Music()
{



    return(
    <>
        <NavigationLinks/>
        <br/>
        <HotelCafeMusic/>
        <br/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}