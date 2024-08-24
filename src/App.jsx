import "./css/reset.css"
import "./css/variables.css";
import "./index.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/Registration";
import Messenger from "./pages/Messenger/Messenger";
import ChatElement from "./components/ChatElement/ChatElement";
import PleaseSelectChat from "./pages/PleaseSelectChat/PleaseSelectChat";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <>
      <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Registration/>}/>
          <Route path="mychats" element={<Messenger/>}>
            <Route index element={<PleaseSelectChat/>}/>
            <Route path=":chatId" element={<ChatElement/>}/>
          </Route>
          <Route path="*" element={<Error404/>} />
      </Routes>
    </>
  );
}

export default App;
