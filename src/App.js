import UseStateHookExample from "./hooks/UseStateHookExample";
import Star from './starComponent/Star';


function App() {
  return (
    <div >
      <Star totalStars={10}/>
     <UseStateHookExample />
    </div>
  );
}

export default App;
