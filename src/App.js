import UseStateHookExample from "./hooks/usestate/UseStateHookExample";
import Star from './starComponent/Star';
import UseEffectHookExample from './hooks/useeffect/UseEffectHookExample';
import UseReducerExample from "./hooks/usereducer/UseReducerExample";
import UseRefExample from './hooks/useref/UseRefExample';
import { CustomHook } from './hooks/customhook/CustomHook';
import { UseContextExample } from './hooks/usecontext/UseContextExample';
import { UseFetchExample } from './hooks/usefetch/UseFetchExample';
import GreetingsComponent from './Examples/HookUseStateExample';
import AlertMessage from "./Examples/HookUseEffect";
import HookUseEffectFetchExample from './hooks/useeffect/Example2';
import { Example1 } from "./hooks/usereducer/Example1";




function App() {
  return (
    <div style={{textAlign: 'center', padding: '30px', }}>
      <UseRefExample />
    </div>
  );
}

export default App;


  {/* <Star totalStars={5}/>
      <UseEffectHookExample />
      <UseReducerExample />
      <UseRefExample />
      <UseStateHookExample /> 
      <CustomHook />
      <UseFetchExample />
      <HookUseEffectFetchExample />
    */}