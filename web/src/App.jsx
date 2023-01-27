import { Provider } from "./Providers/GlobalProvider";
import { CameraControl } from "./components/Doc/CameraControl";
function App() {
  return (
    <Provider>
      <CameraControl />
    </Provider>
  );
}

export default App;
