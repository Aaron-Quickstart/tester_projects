import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import NextShow from "../componets/NextShow";
import SignUpForm from "../componets/SignupForm";
import UpcomingShow from "../componets/UpcomingShows";




export default function Shows()
{



    return(
    <>
        <NavigationLinks/>
        <br/>
        <NextShow/>
        <UpcomingShow/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}