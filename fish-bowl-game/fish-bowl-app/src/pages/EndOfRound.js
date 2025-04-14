import { Link } from "react-router-dom";





export default function EndOfRound()
{




    return(
        <>
            <div className="EndOfRound">
                <h2>Round # has ended</h2>
                <div className="scoreboard">
                    <p>import scoreboard here</p>
                </div>
                <Link to="/RoundStartScreen"><button>Start Game</button></Link>
                <p>once roundCount == round# LInk to FinalScore</p>
                <Link to="/RoundStartScreen"><button>Start Game</button></Link>
                <Link to="/FinalScore"><button>next page DEV BTN</button></Link>
            </div>
        </>
    );
}