import "./Messenger.css"
import { Outlet } from "react-router-dom"
import TopMenu from "../../components/TopMenu/TopMenu"
import ChatList from "../../components/ChatList/ChatList"
import { useAuth, UserButton, useUser } from "@clerk/clerk-react"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { signIn } from "../../fetch"

function Messenger({setModalName}) {
  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken();
      if (!!token && isLoaded) {
        dispatch(
          signIn({
            email: user.primaryEmailAddress.emailAddress,
            token,
            userName: user.fullName,
          })
        );
      }
    };
    fetchUser();
  });
  return (
    <div className="messenger">
        <div className="user-nav-wrapp">
          <TopMenu setModalName={setModalName}/>
          <ChatList setModalName={setModalName}/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Messenger
