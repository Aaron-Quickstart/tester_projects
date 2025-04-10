import { Link } from "react-router-dom";




export default function TeamsScreen()
{




    return(
        <>
            <Link to="/"><button>🔙</button></Link>
            <div className="teamsScreen">
                <input type="number" placeHolder="Player Count" id="playerCount"/>
                <lable>Player Count</lable>
                <input type="number" placeHolder="Number of Teams" id="teamNumber"/>
                <lable>Team Number</lable>
            </div>
            <Link to="/RoundStart"><button>Start Game</button></Link>
        </>
    );
}