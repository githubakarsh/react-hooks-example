import UseStateHookExample from "./hooks/usestate/UseStateHookExample";
import Star from './starComponent/Star';
import UseEffectHookExample from './hooks/useeffect/UseEffectHookExample';
import UseReducerExample from "./hooks/usereducer/UseReducerExample";



function App() {
  return (
    <div >
      {/* <Star totalStars={5}/>
      <UseEffectHookExample />
      <UseStateHookExample /> */}
      <UseReducerExample />
    </div>
  );
}

export default App;
