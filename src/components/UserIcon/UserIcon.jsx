import "./UserIcon.css";

function UserIcon({ imgPath, isOnline }) {
  return (
    <div className={` user-icon-wrapp ${isOnline ? "status-online" : "status-offline" } `}>
      <img src={imgPath} alt="user icon" width="45px" height="45px" />
    </div>
  );
}

export default UserIcon;
