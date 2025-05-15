import Container from "react-bootstrap/esm/Container";



export default function VideoLightMyFire()
{



    return(

    <Container className="my-5">
      <h2 className="text-center mb-4">Watch "Light My Fire" now</h2>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe 
            width="800" height="454" src="https://www.youtube.com/embed/HUQPxl-53XE" 
            title="&quot;Light My Fire&quot; - XNK" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
            <h3>Arthouse Production crew presents:</h3>
        </div>
    </Container>
    )
}