import UseStateHookExample from "./hooks/usestate/UseStateHookExample";
import Star from './starComponent/Star';
import UseEffectHookExample from './hooks/useeffect/UseEffectHookExample';


function App() {
  return (
    <div >
      {/* <Star totalStars={5}/>
      <UseStateHookExample /> */}
      <UseEffectHookExample />
    </div>
  );
}

export default App;
