
/***
 * Example of useEffect for fetching data
 */


 import { useState, useEffect } from 'react';



 /**
  * 
  * use effect example with empty array
  */
 const Example3 = () => {
     const [data, setData] = useState([]);
     const [admin, setAdmin] = useState('akarsh');
     
     useEffect(() => {
         if(admin) {
            fetch('https://api.github.com/users')
         .then(resp => resp.json())
         .then(setData);
         }else {
             setData([])
         }
     }, [admin]);
 
     return <section style={{border: '1px solid black'}}>
         <h3>useEffect with a value in array is passed: Example 3</h3>
         fetching Data
         <article>   
             {data.length ?
             <ol>{data.map(user => {
                 return <li key={user.id}>{user.login}</li>
             })}</ol> 
             :<p>You are not authorised to see this data</p>}

             <p>{admin ? `${admin} is the admin` : 'Please login'}</p>

             <button onClick={() => setAdmin(admin ? '' : 'akarsh')}>{admin ? 'Logout' : 'Login'}</button>
         </article>
     </section>
 }
 
 export default Example3;