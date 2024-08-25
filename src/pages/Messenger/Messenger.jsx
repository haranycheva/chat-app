import "./Messenger.css"
import { Outlet } from "react-router-dom"
import TopMenu from "../../components/TopMenu/TopMenu"
import ChatList from "../../components/ChatList/ChatList"

function Messenger({setModalName}) {
  return (
    <div className="messenger">
        <div className="user-nav-wrapp">
          <TopMenu/>
          <ChatList setModalName={setModalName}/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Messenger
