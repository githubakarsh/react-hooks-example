import { useReducer } from 'react';

export const Example1 = () => {
    const [checked, setChecked] = useReducer((checked) => !checked, false);
    return <article>
       Are you over 18 years :  <input type="checkbox" value={checked} onChange={() => setChecked(!checked)}/>
    </article>
}
