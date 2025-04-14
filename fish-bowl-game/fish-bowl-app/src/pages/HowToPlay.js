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
                    <p></p>
                </div>
            </div>
            <Link to="/RoundStartScreen"><button>Start First Round</button></Link>
        </>
    );
}