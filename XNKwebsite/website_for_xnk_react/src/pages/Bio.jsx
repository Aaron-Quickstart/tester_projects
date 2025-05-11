import Ryan from "./../assets/personality_ryan.png";
import Petre from "./../assets/personality_petre.png";
import Riana from "./../assets/personality_riana.png";
import John from "./../assets/personality_john.png";
import Lina from "./../assets/personality_lina.png";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/esm/Carousel";
import NavigationLinks from "../componets/NavigationLinks";
import FooterNote from "../componets/FooterNote";
import SignUpForm from "../componets/SignupForm";


export default function Bio()
{



    return(
    <>
        <NavigationLinks/>
        <br/>
        <h1>Meet the Band</h1>
        <Container className='flex-column d-flex nav align-items-center'>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <Card className='bg-transparent border-white' text='white' style={{ height: '60rem', width: '35rem' }}>
                        <Card.Img variant="top" src={Ryan} />
                        <Card.Body>
                            <Card.Title><h2>Ryan</h2></Card.Title>
                            <Card.Subtitle className="mb-2" style={{color: "grey"}}><h4>Lead Vox | Rhythm Guitar</h4></Card.Subtitle>
                            <Card.Text>
                                Ryan is a songwriter, entertainer, and artist newly based in Los Angeles. Originally from East TN.
                                He is a groove and lyric based writer with a volcanic passion for dramatic rock n' roll. 
                                However, he pulls influences from all over including blues, jazz, pop, gospel, and latin music.
                            <br/><br/>
                                "...simply put; I'm here to make people feel good. I love music, playing, singing,and writing. 
                                I want to share it and take care of people. and if I positively influence someone then I'm succeeding."
                            </Card.Text>
                        </Card.Body>
                        <br/>
                    </Card>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                        <Card className='bg-transparent border-white' text='white' style={{ height: '60rem', width: '35rem' }}>
                        <Card.Img variant="top" src={Petre} />
                        <Card.Body>
                            <Card.Title><h2>Petre</h2></Card.Title>
                            <Card.Subtitle className="mb-2" style={{color: "grey"}}><h4>Lead Guitar</h4></Card.Subtitle>
                            <Card.Text>
                                Petre is a multi-instrumentalist from Bucharest, Romania.<br/> 
                                But don't let that eastern european sense of humor scare you. 
                                Petre specializes in film scoring, production, the best schnitzel you've ever eaten, and face-melting guitar.
                            </Card.Text>
                        </Card.Body>
                        <br/>
                    </Card>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                        <Card className='bg-transparent border-white' text='white' style={{ height: '60rem', width: '35rem' }}>
                        <Card.Img variant="top" src={Riana} />
                        <Card.Body>
                            <Card.Title><h2>Riana</h2></Card.Title>
                            <Card.Subtitle className="mb-2" style={{ color: "grey" }}><h4>Keytar | Synth</h4></Card.Subtitle>
                            <Card.Text>
                                Riana is a Los Angeles native who's classical piano prowess has few rivals. 
                                That combined with the attitude and delivery of a rock n' roller it's just as much fun to watch as to listen.
                            </Card.Text>
                        </Card.Body>
                        <br/>
                    </Card>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                        <Card className='bg-transparent border-white' text='white' style={{ height: '60rem', width: '30rem' }}>
                        <Card.Img variant="top" src={John} />
                        <Card.Body>
                            <Card.Title><h2>John</h2></Card.Title>
                            <Card.Subtitle className="mb-2" style={{ color: "grey" }}><h4>Drums</h4></Card.Subtitle>
                            <Card.Text>
                                John is a wicked good drummer from Massachusetts.
                                Boasting incredible chops in all styles from gospel, and jazz to metal, and latin.  He lives drums... and coffee.
                            </Card.Text>
                        </Card.Body>
                        <br/>
                    </Card>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                        <Card className='bg-transparent border-white' text='white' style={{ height: '60rem', width: '30rem' }}>
                        <Card.Img variant="top" src={Lina} />
                        <Card.Body>
                            <Card.Title><h2>Lina Cooper</h2></Card.Title>
                            <Card.Subtitle className="mb-2" style={{ color: "grey" }}><h4>Bass Guitar | Backing Vox</h4></Card.Subtitle>
                            <Card.Text>
                                Miss Lina Cooper is a singer/songwriter/popstar originally from Ukraine.
                                We kidnapped her and turns out she is a phenomenal bass player.
                                Her arranging and writing skills are unmatched.
                                Do not cross her; she will write a song about you.
                                <br /><br />
                                "Music and songwriting have been my favorite things to do ever since I was about 8 years old.
                                I still can't believe I get to do it as a job.
                                And also dress up like I'm a rock star and make people gasp. dream job"
                            </Card.Text>
                        </Card.Body>
                        <br/>
                    </Card>
                </Carousel.Item>

            </Carousel>
        </Container>
        <br/><br/>
        <br/><br/>
        <SignUpForm/>
        <FooterNote/>
    </>
    )
}

/*




*/