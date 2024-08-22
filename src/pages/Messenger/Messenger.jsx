import "./Messenger.css"
import { Outlet } from "react-router-dom"
import TopMenu from "../../components/TopMenu/TopMenu"
import ChatList from "../../components/ChatList/ChatList"

function Messenger() {
  return (
    <div>
        <div className="user-nav-wrapp">
          <TopMenu/>
          <ChatList/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Messenger
