import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import NextShow from "../componets/NextShow";
import SignUpForm from "../componets/SignupForm";




export default function Shows()
{



    return(
    <>
        <NavigationLinks/>
        <h1>This is the Shows Page</h1>
        <NextShow/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}