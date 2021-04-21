import { useEffect } from 'react';
import Example1 from './Example1';

const UseEffectHookExample = () => {
    useEffect(() => {
        document.title = 'Use Effect Example';
    }, []);
    return <div>
        <section>
            <article>
                <p>Use Effect Example Here</p>
                <Example1 />
            </article>
        </section>
    </div>
}

export default UseEffectHookExample;
