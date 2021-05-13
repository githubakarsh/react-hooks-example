

import { useReducer } from 'react';

const initialState = {
    checked: false,
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'IS_MIDDLE_NAME':
            return {...state, checked: !state.checked};
        default:
            return state;
    }
}

export const Example1 = () => {

    /**
     * @variable checked is of boolean type, and can be updated by reducer function
     * This Component can help customer to add middle name.
     */
    const [state, dispatch] = useReducer(reducer, initialState);
    return <article>
        <p>Example 1</p>
       Do you have Middle name :  <input type="checkbox" value={state.checked} onChange={() => dispatch({type: 'IS_MIDDLE_NAME'})}/><br/>
        {state.checked && <div><input placeholder="Enter your middle name"/></div>}.
    </article>
}

