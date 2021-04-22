import { useReducer } from 'react';

export const Example1 = () => {
    const [checked, setChecked] = useReducer((checked) => !checked, false);
    return <article>
        <p>Example 1</p>
       Are you over 18 years :  <input type="checkbox" value={checked} onChange={() => setChecked(!checked)}/>
    </article>
}

