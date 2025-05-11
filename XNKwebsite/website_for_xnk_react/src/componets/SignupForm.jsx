import { useRef } from "react"




export default function SignUpForm()
{

    const emailRef = useRef();

    return(

        <div className='justify-content-center align-items-center'>
            <form>
                <h6>Join the XNK Pool!</h6>
                
                <input placeholder="add your email" required ref={emailRef}/>
                <button>Sign up</button>
                <p>Be among the first to be notified when we book shows and release new music.</p>
            </form>
        </div>
    )
}