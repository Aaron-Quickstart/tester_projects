import { Link } from "react-router-dom";




export default function PlayerTurn()
{




    return(
        <>
            <div className="activeWord">
                <p>Display Current Word Here</p>
                <p>Display rule reminder here</p>
            </div>
            <button>correct!</button>
            <div className="turnTimer" onTimerRunout="Link to EndOfTurn">Timer</div>
            <button>view next word</button>
            <br/>
            <Link to="/EndOfTurn"><button>Next Page --Delete before build--</button></Link>
           {/* if(turnCount == playercount)
            {
                <p>Link to EndOfRound</p>
            }
            */}

            
        </>
    );
}

// track number of turns to know when to link to EndOfRound instead of EndOfTurn