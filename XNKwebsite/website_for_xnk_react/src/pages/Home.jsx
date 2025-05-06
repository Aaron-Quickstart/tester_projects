import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import SocialLinks from "../componets/SocialLinks";
import Background from "./../assets/XnkBackground.png";


export default function Home()
{



    return(
    <>
        <NavigationLinks/>
        <img src={Background} alt="Background"/>
        <SocialLinks/>
        <FooterNote />
    </>
    )
}