import { Link } from "react-router-dom";





export default function howToPlay()
{




    return(
        <>
            <Link to="/"><button>🔙</button></Link>
            <div className="ruleBook">
                <h2>How To Play:</h2>
                <div className="gameRules">
                    <h3>Objective:</h3>
                    <p>
                        To win, obviously. Or at least to look less foolish than your friends 
                        while shouting random nonsense and flailing like a caffeinated mime. 
                        The game combines wordplay, acting, and desperation into a glorious mess 
                        where you guess what in the world your friend is trying to communicate.
                    </p>
                    <h3>Getting Ready for the Chaos</h3>
                    <p>
                        Split into two teams. If you’ve got an odd number, someone’s the “referee” 
                        (aka the buzzkill who doesn’t play but judges your terrible acting).
                        Fishbowl has three rounds (plus a tie breaker if needed), each more outrageous than the last.  
                        Each round will have its own rule for how the actors can communicate.  
                        Every player will have a turn for each round.  Turns last 60 seconds.  
                        Awarded points increase for each round.  Fishbowl isn’t just a game—it’s a 
                        test of how long you can stand your friends before someone flips a table. 
                        Play hard, laugh harder, and may the best team (or the loudest) reign supreme.
                    </p>
                </div>
                <div className="round1rules">
                    <h3>Round 1:</h3>
                    <p>

                    </p>
                </div>
            </div>
            <Link to="/RoundStartScreen"><button>Start First Round</button></Link>
        </>
    );
}