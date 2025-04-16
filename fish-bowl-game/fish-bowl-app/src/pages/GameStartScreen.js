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
                <Link to="/teamsScreen" className="steamsScreenBtn">Start Playing</Link>
                <Link to="/HowToPlay" className="howToPlayBtn">Learn the Game</Link>
            </div>
        </>
    );
}