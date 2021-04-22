import { useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const Example2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <article>
        <p>Example 2 using Dispatch</p>
       <p>Welcome : {state.name}</p>
       <p>
           <input value={state.inputValue} onChange={(e) => {
               console.log(e.target.value);
               dispatch({type: 'change_name', value: e.target.value});
               }
               }/>
       </p>
    </article>
}

