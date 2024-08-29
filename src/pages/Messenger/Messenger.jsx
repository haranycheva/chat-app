import "./Messenger.css"
import { Outlet } from "react-router-dom"
import TopMenu from "../../components/TopMenu/TopMenu"
import ChatList from "../../components/ChatList/ChatList"
import { useAuth, UserButton, useUser } from "@clerk/clerk-react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { signIn } from "../../fetch"
import { selectLoading } from "../../redux/selectors"
import Loader from "../../components/Loader.jsx/Loader"
function Messenger({setModalName, setModalValues}) {
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
    <>
      <div className="messenger">
          <div className="user-nav-wrapp">
            <TopMenu setModalName={setModalName} userName={user.firstName}/>
            <ChatList setModalValues={setModalValues} setModalName={setModalName}/>
          </div>
          <Outlet/>
      </div>
    </>
  )
}

export default Messenger
