import { Link } from "react-router-dom";





export default function FinalScore()
{




    return(
        <>
            <div className="EndGame">
                <h2>Winners!</h2>
                <div className="winningTeam">
                    <p>import winning team here</p>
                </div>
                <Link to="/TeamsScreen"><button>Play Again</button></Link>
                <Link to="/GameStartScreen"><button>Main Menu</button></Link>
            </div>
        </>
    );
}