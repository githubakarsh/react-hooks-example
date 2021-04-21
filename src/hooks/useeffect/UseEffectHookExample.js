import { useEffect } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';

import Example3 from './Example3';
const UseEffectHookExample = () => {
    useEffect(() => {
        document.title = 'Use Effect Example';
    }, []);
    return <div style={{padding: '25px'}}>
        <section>
            <article style={{border: '1px solid black'}}>
                <p>Use Effect Example 1</p>
                <Example1 />
            </article>
            <Example2/>
            <Example3/>
        </section>
    </div>
}

export default UseEffectHookExample;
