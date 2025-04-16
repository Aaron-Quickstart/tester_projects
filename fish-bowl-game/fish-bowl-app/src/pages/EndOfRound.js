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
                <Link to="/RoundStartScreen">Start Game</Link>
                <p>once roundCount == round# LInk to FinalScore</p>
                <Link to="/RoundStartScreen">Start Game</Link>
                <Link to="/FinalScore">next page DEV BTN</Link>
            </div>
        </>
    );
}