import Container from "react-bootstrap/esm/Container";



export default function VideoZombie()
{



    return(

    <Container className="my-5">
      <h2 className="text-center mb-4">Watch "Zombie" now</h2>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe 
            width="800" height="454" src="https://www.youtube.com/embed/mE5Ia0GL3t4" 
            title="Lina Cooper &amp; XNK - Zombie (Official Video)" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
            <h3>One camera. Zero budget. A true indy production.</h3>
        </div>
    </Container>
    )
}

