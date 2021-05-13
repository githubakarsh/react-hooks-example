
/***
 * Example of useEffect for fetching data
 */
import { useState, useEffect } from 'react';
/**
 * 
 * use effect example with empty array
 */
const HookUseEffectFetchExample = () => {
    const [data, setData] = useState([]);
    const [counter, onIncrement] = useState(0);
    useEffect(() => {
        console.log("Calling this functions ...... ");
        fetch('https://api.github.com/users')
        .then(resp => resp.json())
        .then(setData);
    }, []);


    return <section style={{border: '1px solid black'}}>
        <h3>useEffect without a value in array is passed:</h3>
        fetching Data

        <button onClick={() =>  onIncrement(counter + 1)}>Increment</button>

        {counter}
        <article>   
            {data ?
            <ol>{data.map(user => {
                return <li key={user.id}>{user.login}</li>
            })}</ol> 
            :<p>No users</p>}
        </article>
    </section>
}

export default HookUseEffectFetchExample;