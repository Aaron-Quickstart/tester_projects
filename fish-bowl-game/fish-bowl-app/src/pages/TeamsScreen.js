import { Link } from "react-router-dom";


export default function TeamsScreen()
{




    return(
        <>
            <Link to="/" id="backBtn">🔙</Link>
            <div className="teamsScreenInputs">
                <input type="number" placeholder="Player Count" id="playerCountInput"/>
                <label htmlFor="playerCountInput" id="playerCountInputLbl">Player Count</label>
                <input type="number" placeholder="Number of Teams" id="teamNumberInput"/>
                <label htmlFor="teamNumberInput"id="teamNumberInputLbl">Team Number</label>
            </div>
            <Link to="/RoundStartScreen" id="startGameBtn"><button>Start Game</button></Link>
        </>
    );
}