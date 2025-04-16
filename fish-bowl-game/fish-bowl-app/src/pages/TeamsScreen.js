import { Link } from "react-router-dom";
import {useState} from "react";


export default function TeamsScreen()
{

    const [playerCount, setPlayerCount] = useState(0);
    const [teamCount, setTeamCount] = useState(0);
    



    return(
        <>
            <Link to="/" id="backBtn">🔙</Link>
            <div className="teamsScreenInputs">
                <input 
                    type="number" 
                    placeholder="Player Count" 
                    id="playerCountInput"
                    onChange={(e) => setPlayerCount(e.target.value)}
                />
                <label htmlFor="playerCountInput" id="playerCountInputLbl">Player Count</label>

                <input 
                    type="number" 
                    placeholder="Number of Teams" 
                    id="teamNumberInput"
                />
                <label htmlFor="teamNumberInput"id="teamNumberInputLbl">Team Number</label>

            </div>
            <Link to="/RoundStartScreen" id="startGameBtn">Start Game</Link>
        </>
    );
}