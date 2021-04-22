import {useState, useRef} from 'react';

export const Example1 = () => {
    const [state, setState] = useState({email: '', password : '', errorField: ''});
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitForm = (e) => {
        e.preventDefault();
        console.log('submit form');
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        if(!emailValue || !passwordValue) {
            if(!emailValue) {
                emailRef.current.focus();
                setState({...state, errorField: 'email'})    
            }

            if(!passwordValue) {
                passwordRef.current.focus();
                setState({...state, errorField: 'password'})
            }
            console.log(state)
            setState({...state, hasError: true})
        }else {
            setState({...state, hasError: false})
        }
    }

    return <div>
        <article>
           {state.hasError && <p style={{color : 'red'}}>You missed {state.errorField} please enter </p>} 
            <form onSubmit={(e) => submitForm(e)}>
                <div>
                    <label>Your Email</label>
                    <input type="email" onChange={(e) =>setState(
                        {...state, email : e.target.value}
                    )}
                    value={state.email}
                    ref={emailRef}
                    />
                </div>
                <div>
                    <label>Your Password</label>
                    <input type="password" onChange={(e) =>setState(
                        {...state, password : e.target.value}
                    )}
                    value={state.password}
                    ref={passwordRef}
                    />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </article>
    </div>
}