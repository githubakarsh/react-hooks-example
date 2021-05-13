
import { useState } from 'react';

const GreetingsComponent = (props) => {
    /**
     * Default @variable Counter value is 0
     * variable can be updated by setCounter 
     */
    const [counter, setCounter] = useState(0);
    
    /**
     *  onIncrement function is a synthetic event - onClick , built across the native onclick event
     */
    const onIncrement = () => {
        setCounter(counter + 1);
    }

    /**
     *  Greetings component by default displays Counter value 0
     *  upon button clicks increments the value
     */
    return <div >
        Welcome {props.name} <br />
        <button onClick={onIncrement}>Increment</button> <br />
        counter - {counter} 
        </div>
}

export default GreetingsComponent;
