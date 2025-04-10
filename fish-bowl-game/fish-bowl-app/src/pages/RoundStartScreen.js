import { Link } from "react-router-dom";




export default function RoundStartScreen()
{




    return(
        <>
            <Link to="/HowToPlay"><button>🔙</button></Link>
            <div className="roundRule">
                <p>inport round rules here</p>
            </div>
            <button>link to PlayerTurn</button>
        </>
    );
}