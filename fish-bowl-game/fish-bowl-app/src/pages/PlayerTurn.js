




export default function PlayerTurn()
{




    return(
        <>
            <div className="activeWord">
                <p>Display Current Word Here</p>
            </div>
            <button>correct!</button>
            <div className="turnTimer" onTimerRunout="Link to EndOfTurn"></div>
            <button>pass</button>
           {/* if(turnCount == playercount)
            {
                <p>Link to EndOfRound</p>
            }
            */}

            
        </>
    );
}

// track number of turns to know when to link to EndOfRound instead of EndOfTurn