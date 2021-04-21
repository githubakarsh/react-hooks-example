
/***
 * Example of useEffect for fetching data
 */


import { useState, useEffect } from 'react';



/**
 * 
 * use effect example with empty array
 */
const Example2 = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(resp => resp.json())
        .then(setData);
    }, []);

    return <section style={{border: '1px solid black'}}>
        <h3>useEffect without a value in array is passed: Example 2</h3>
        fetching Data
        <article>   
            {data ?
            <ol>{data.map(user => {
                return <li key={user.id}>{user.login}</li>
            })}</ol> 
            :<p>No users</p>}
        </article>
    </section>
}

export default Example2;