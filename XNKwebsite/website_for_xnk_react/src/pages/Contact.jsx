import FullBand from './../assets/photo_fullBAnd.jpg';
import FooterNote from "../componets/FooterNote";
import NavigationLinks from "../componets/NavigationLinks";
import ContactInfo from '../componets/ContactInfo';




export default function Contact()
{



    return(
    <>
    <NavigationLinks/>
    <section>
        <h1>Want us to come rock for you?</h1>
        <img src={FullBand} className='mb-5' style={{borderRadius: '1.5rem'}}/>
        <h3>Call or email to have us spread some joy at your next event.</h3>
    </section>
    <ContactInfo/>
        <FooterNote/>
    </>
        
    
    )
}