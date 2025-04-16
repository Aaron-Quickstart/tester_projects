import { Link } from "react-router-dom";





export default function howToPlay()
{




    return(
        <>
            <div className="howToPlayScreenDiv">
                <Link to="/"><button>🔙</button></Link>
                <h2>How To Play:</h2>
                <div className="ruleBook">
                    
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
                            Each round will have its own rule for how the actors can communicate, breaking the rule means losing that word for that turn.  
                            Every player will have a turn for each round.  Turns last 60 seconds.  
                            Awarded points increase for each round.  Fishbowl isn’t just a game—it’s a 
                            test of how long you can stand your friends before someone flips a table. 
                            Play hard, laugh harder, and may the best team (or the loudest) reign supreme.
                        </p>
                        <h3>Rules for life</h3>
                        <p>
                        1. The “No Fun” Rule: If you’re the jerk who writes “antidisestablishmentarianism,” you’re banned from snacks.
                        2. The Drama Queen Clause: Overacting in charades gets you bonus style points but zero real ones. Calm down, Meryl Streep.
                        3. The “I Swear I Said That” Lie: If your team guesses wrong and you insist “I totally meant that,” you lose a point for bad sportsmanship. We all heard you, Chad.
                        4. The Timer Tyrant: Whoever’s on timer duty must cackle maniacally when it hits zero. It’s law.
                        5. The “Fishbowl Is Life” Pact: Argue about rules for at least 10 minutes before starting. It’s tradition.

                        </p>
                    </div>
                    <div className="round1rules">
                        <h3>Round 1:</h3>
                        <p>
                            Basically "Taboo".  The actor can describe the key word/phrase in any way.  
                            The actor also may not try "it ryhmes with".  
                            Example:  the word on screen says “pizza.” You say, “Circular food of the gods, 
                            often ruined by pineapple.” Not, “It’s, uh, piz—uh, crap.”
                        </p>
                    </div>
                    <div className="round2rules">
                        <h3>Round 2:</h3>
                        <p>
                            It is time for Charades!  
                        </p>
                    </div>
                </div>
                <Link to="/RoundStartScreen"><button>Start First Round</button></Link>
            </div>
        </>
    );
}