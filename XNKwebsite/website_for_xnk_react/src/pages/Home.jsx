import NavigationLinks from "../componets/NavigationLinks";
import SocialLinks from "../componets/SocialLinks";
import Background from "./../assets/XnkBackground.png";


export default function Home()
{



    return(
    <>
        <NavigationLinks/>
        <h1>This is the Home Page</h1>
        <img src={Background} alt="Background"/>
        <SocialLinks/>
    </>
    )
}