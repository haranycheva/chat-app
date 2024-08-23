import "./css/reset.css"
import "./css/variables.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/Registration";
import Messenger from "./pages/Messenger/Messenger";
import ChatElement from "./components/ChatElement/ChatElement";

function App() {
  return (
    <>
      <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Registration/>}/>
          <Route path="mychats" element={<Messenger/>}>
            <Route path=":chatId" element={<ChatElement/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
