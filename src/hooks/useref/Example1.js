import {useState, useRef} from 'react';

export const Example1 = () => {
    const [state, setState] = useState({email: '', password : '', hasError: false});
    const emailRef = useRef();
    const passwordRef = useRef();

    /**
     * 
     * @param {ref} ref - this the ref that is created for email and password, Example : emailRef, passwordRef
     * this function set focus this there are no inputs for those fields
     */
    const isValueEntered = (ref) => {
        if(!ref.current.value) {
            ref.current.focus();
        }
    }

    /**
     * 
     * @param {*} e, 
     * here the submi function checks whether email and password fields are not empty, 
     * else it set focus on missing fields and throws error.
     */
    const submitForm = (e) => {
        e.preventDefault();
        if(!emailRef.current.value || !passwordRef.current.value) {
            isValueEntered(emailRef);
            isValueEntered(passwordRef);
            setState({...state, hasError: true });
        } if(!emailRef.current.value && !passwordRef.current.value) {
            emailRef.current.focus();
            setState({...state, hasError: true });
        } else {
            setState({...state, hasError: false })
        }
    }

    return <div>
        <article>
           {state.hasError && <p style={{color : 'red'}}>Please enter the missing values </p>} 
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