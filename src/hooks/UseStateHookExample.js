import { useState } from 'react';
import './checkbox.css';

const UseStateHookExample = () => {
    /* useState array requires the following : 
        at 0 index : it defines a variable to hold a value which can be of any type
        like String, Array, Number, Object, Boolean, etc..,
        at index 1 : it should be a function, that sets / updates the variable value in the page.
    */
    const [state, setState] = useState({statusMessage : 'Not Delivered', checked : false});
    return <div>
        <p>Is this item delivered : <input className="checkbox-main" type="checkbox" value={state.checked} onChange={() => setState({...state, checked: !state.checked})}/></p>
        <button onClick={() => setState({...state, statusMessage: 'Delivered'})} disabled={!state.checked}>Update the status</button>
        <p>The Package is: {state.statusMessage}.</p>
    </div>;
}

export default UseStateHookExample;
