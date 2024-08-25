import "./css/reset.css"
import "./css/variables.css";
import "./css/repeated.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/Registration";
import Messenger from "./pages/Messenger/Messenger";
import ChatElement from "./components/ChatElement/ChatElement";
import PleaseSelectChat from "./pages/PleaseSelectChat/PleaseSelectChat";
import Error404 from "./pages/Error404/Error404";
import ModalSelector from "./components/modals/ModalSelector";
import { useState } from "react";

function App() {
  const [modalName, setModalName] = useState("");
  return (
    <>
      <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Registration/>}/>
          <Route path="mychats" element={<Messenger setModalName={setModalName}/>}>
            <Route index element={<PleaseSelectChat/>}/>
            <Route path=":chatId" element={<ChatElement/>}/>
          </Route>
          <Route path="*" element={<Error404/>} />
      </Routes>
      <ModalSelector
        modalName={modalName}
        closeModal={() => {
          setModalName("");
        }}
      />
    </>
  );
}

export default App;
