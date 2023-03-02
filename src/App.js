import { Home } from "./HomePage/Home";
import { Provider } from "react-redux";
import { sliceStore } from "./store/handlestore";

const App = () => {
  return (
    <> 
    <Provider store={sliceStore}> <Home/> </Provider>
    </>
  );
}

export default App;
