import { Outlet } from "react-router-dom"
import TopMenu from "../components/TopMenu/TopMenu"

function Messenger() {
  return (
    <div>
        <div>
          <TopMenu/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Messenger
