import UseStateHookExample from "./hooks/usestate/UseStateHookExample";
import Star from './starComponent/Star';
import UseEffectHookExample from './hooks/useeffect/UseEffectHookExample';
import UseReducerExample from "./hooks/usereducer/UseReducerExample";
import UseRefExample from './hooks/useref/UseRefExample';
import { CustomHook } from './hooks/customhook/CustomHook';




function App() {
  return (
    <div >
      {/* <Star totalStars={5}/>
      <UseEffectHookExample />
      <UseReducerExample />
      <UseRefExample />
      <UseStateHookExample /> */}
      <CustomHook />
    </div>
  );
}

export default App;
