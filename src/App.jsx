import "./css/reset.css"
import "./css/variables.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/Registration";
import Messenger from "./pages/Messenger/Messenger";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Registration/>}/>
          <Route path=":userId" element={<Messenger/>}>
            <Route path=":chatId" />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
