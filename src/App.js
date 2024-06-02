import { Route,Routes,BrowserRouter } from "react-router-dom";
import Actionpage from "./pages/Actionpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Actionpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
