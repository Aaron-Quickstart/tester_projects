import { Link } from "react-router-dom";




export default function StartScreen()
{



    return(
        <>
            <div className="startTitles">
            <h1 className="gameTitle">Hook Line and Thinker</h1>
            <h3 className="gameSubtitle">A mobile way to play Fish Bowl</h3>
            </div>
            <div className="startScreenButtons">
                <Link to="/teamsScreen" className="steamsScreenBtn"><button>Start Playing</button></Link>
                <Link to="/HowToPlay" className="howToPlayBtn"><button>Learn the Game</button></Link>
            </div>
        </>
    );
}