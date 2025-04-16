import { Link } from "react-router-dom";




export default function RoundStartScreen()
{




    return(
        <>
            <Link to="/TeamsScreen" id="backBtn"><button>🔙</button></Link>
            <div className="roundRule">
                <p>import round rules here.  Figure out how to display the rules dependant upon the round number.</p>
            </div>
            <Link to="/PlayerTurn" id="startGameBtn"><button>Start Turn</button></Link>
        </>
    );
}