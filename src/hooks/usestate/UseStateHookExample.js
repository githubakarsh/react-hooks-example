import { useState } from 'react';
import '../checkbox.css';

const UseStateHookExample = () => {
    /* 
    */
    const [state, setState] = useState({statusMessage : 'Not Delivered', checked : false});
    return <div>
        <p>Is this item delivered : <input className="checkbox-main" type="checkbox" value={state.checked} onChange={() => setState({...state, checked: !state.checked})}/></p>
        <button onClick={() => setState({...state, statusMessage: 'Delivered'})} disabled={!state.checked}>Update the status</button>
        <p>The Package is: {state.statusMessage}.</p>
    </div>;
}

export default UseStateHookExample;
