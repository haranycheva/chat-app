import "./css/reset.css";
import "./css/variables.css";
import "./css/repeated.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
import ChatElement from "./components/ChatElement/ChatElement";
import PleaseSelectChat from "./pages/PleaseSelectChat/PleaseSelectChat";
import Error404 from "./pages/Error404/Error404";
import ModalSelector from "./components/modals/ModalSelector";
import { useState } from "react";
import { BoundingRoute } from "./components/BoundingRoute";
import { PrivaRoute } from "./components/PrivatRoute";

function App() {
  const [modalName, setModalName] = useState("");
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<BoundingRoute redirectSuccess="/mychats" redirectFailure="/login"/>}/>
          <Route path="login" element={<Login />} />
          <Route
            path="mychats"
            element={<PrivaRoute redirect="/login" component={Messenger} setModalName={setModalName}/>}
          >
            <Route index element={<PleaseSelectChat />} />
            <Route path=":chatId" element={<ChatElement />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
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
