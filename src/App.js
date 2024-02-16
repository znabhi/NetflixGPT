import Main from "./components/Main";
import appStore from "./components/utils/appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
