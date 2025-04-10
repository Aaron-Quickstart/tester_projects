import { Link } from "react-router-dom";




export default function StartScreen()
{



    return(
        <>
            <h1 className="gameTitle">Hook Line and Thinker</h1>
            <h3 className="gameSubtitle">A mobile way to play Fish Bowl</h3>
            <h4 classNAme="titlePageText">Read the rules or jump right into the fun.</h4>
            <Link to="/teamsScreen"><button>Start Playing</button></Link>
            <Link to="/HowToPlay"><button>Learn the Game</button></Link>
        </>
    );
}