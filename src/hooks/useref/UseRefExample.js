import {useEffect} from 'react';
import { Example1 } from './Example1';

const UseRefExample = () => {
    useEffect(() => {
        document.title = 'UseRef Hook Example';
    }, []);

    return <div style={{padding: '30px'}}>
        <section>
            <article>
                <h1>Use Ref Example</h1>
            </article>
        </section>
        <section>
            <Example1 />
        </section>
    </div>
}

export default UseRefExample;
