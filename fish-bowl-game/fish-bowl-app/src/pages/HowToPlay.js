import { Link } from "react-router-dom";
import RuleBook from "./componets/RuleBook";





export default function howToPlay()
{




    return(
        <>
            <Link to="/"><button>🔙</button></Link>
            <div className="ruleBook">
                <h2>How To Play:</h2>
                <ul>
                    <li>Playes will separate into teams.  Larger teams are more fun</li>
                    <li>Like Charades, teams will take turns guessing what their actor is trying to communicate.</li>
                    <li>Before each turn, the actor will have a chance to read the communication rules before starting the 60 second timer.</li>
                    <li>The word will appear on screen once the timer has been started.  If the actor is unable to successfully communicate the word / phrase, there is a pass button</li>
                    <li>The pass button will skip the term temporarily, effectively putting it on the bottom of the deck.</li>
                    <li>Once the 60 seconds has expired, pass the device to the other team. This repeats until all players have acted with that rule set.</li>
                </ul>
                <RuleBook />
            </div>
            <Link to="/RoundStartScreen"><button>Start First Round</button></Link>
        </>
    );
}