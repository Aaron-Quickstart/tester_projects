import { Link } from "react-router-dom";





export default function EndOfTurn()
{




    return(
        <>
            <div className="EndOfTurn">
                <h2>Your Turn Has Ended</h2>
                <p>Pass the device to the other team</p>
            </div>
            <Link to="/PlayerTurn">Start Next Turn</Link>
            <Link to="/EndOfRound">Round End  --delete after build--</Link>
        </>
    );
}