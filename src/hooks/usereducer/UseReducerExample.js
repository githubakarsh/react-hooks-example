import { useReducer, useEffect } from "react";
import { Example1} from './Example1';
import { Example2} from './Example2';

const UseReducerExample = () => {
  useEffect(() => {
    document.title = "UseReducer example";
  }, []);
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    1
  );

  return (
    <div style={{ padding: "30px" }}>
      <section>
        <article>
          <h1>Use Reducer example</h1>
          <p onClick={() => setNumber(1)}>{number}</p>
        </article>
      </section>
      <section>
        <Example1 />
      </section>
      <section>
        <Example2 />
      </section>
    </div>
  );
};

export default UseReducerExample;
