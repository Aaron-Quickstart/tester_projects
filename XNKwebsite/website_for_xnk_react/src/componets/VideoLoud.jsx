import Container from "react-bootstrap/esm/Container";



export default function VideoLoud()
{



    return(

    <Container className="my-5">
      <h2 className="text-center mb-4">Watch "LOUD" now</h2>
        <div className="embed-responsive embed-responsive-16by9">
            <iframe 
                width="800" height="454"
                src="https://www.youtube.com/embed/cMmBd9xspJ8" 
                title="Lina Cooper &amp; XNK - LOUD (Official Music Video)" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>    
            </iframe>
            <h3>XNK teaming up with Lina Cooper to create a few noise complaints!</h3>
        </div>
    </Container>
    )
}