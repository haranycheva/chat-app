import "./TopMenu.css";
import UserAvatar from "../../assets/user.png";
import UserIcon from "../UserIcon/UserIcon";

function TopMenu() {
  return (
    <div className="top-menu__container">
      <div className="top-menu__user-inf-wrapper">
        <div className="top-menu__about-user">
          <UserIcon imgPath={UserAvatar} isOnline={true} />
          <h2 className="title top-menu__user-name">User Name</h2>
        </div>
        <button className="btn">Log Out</button>
      </div>
      <label className="top-menu__input-wrapp" htmlFor="chat-search">
        <input
          className="top-menu__input"
          type="text"
          id="chat-search"
          placeholder="Search or start a new chat"
        />
      </label>
    </div>
  );
}

export default TopMenu;
