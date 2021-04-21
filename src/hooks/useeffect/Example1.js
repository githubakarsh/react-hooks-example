import { useState, useEffect } from 'react';

const Example1 = () => {
    /**
     * here the useEffect is passed with only one argument that is function.
     * it will always be called when ever a page re renders.
     * this example shows how it works
     */
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(5);

    /**
     * Observation 1

    useEffect(() => {
        console.log("incremet use Effect");
    });

    useEffect(() => {
        console.log("decrement use Effect");
    })
    */


    /**
     * Observation 2. 
     * 
     * useEffect(() => {
        console.log("incremet use Effect");
    }, []);

    useEffect(() => {
        console.log("decrement use Effect");
    }, [])
     */


    /** */
    useEffect(() => {
        console.log("incremet use Effect");
    }, [increment]);

    useEffect(() => {
        console.log("decrement use Effect");
        if(decrement === 0) {
            setDecrement(5);
        }
    }, [decrement])


    return <section>
        <article>
        <p>Increment Here</p>
        <button onClick={() => {setIncrement(increment + 1)}}>increase</button>
        <p>{increment}</p>
    </article>

    <article>
        <p>Decrement Here</p>
        <button onClick={() => {setDecrement(decrement - 1)}}>decrease</button>
        <p>{decrement}</p>
    </article>
    </section>
}

export default Example1;
