import './ChatInformation.css'
import UserIcon from "../UserIcon/UserIcon";
import UserAvatar from "../../assets/user.png";
import { NavLink } from 'react-router-dom';

function ChatInformation({chat}) {
  
  return (
    <li>
      <NavLink className="chat-inf__link" to={chat.id}>
        <div className='chat-inf__wrapp'>
          <UserIcon imgPath={UserAvatar} isOnline={false}/>
          <div className='chat-inf__details'>
            <div>
                <h3 className='chat-inf__name'>Alice Freeman</h3>
                <p className='chat-inf__last-message'>How was your meeting?</p>
            </div>
            <p className='chat-inf__date'>Aug, 17, 2022</p>
          </div>
        </div>
      </NavLink>
    </li>
  )
}

export default ChatInformation
