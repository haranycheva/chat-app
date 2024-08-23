import UserIcon from '../UserIcon/UserIcon'
import UserAvatar from "../../assets/user.png";
import './Message.css'

function Message({message}) {
  return (
    message.isFromOtherPerson ? <li className='message'>
    <UserIcon imgPath={UserAvatar} isOnline={false}/>
      <div className='message__inf-wrapp'>
        <p className='message__text'>{message.text}</p>
        <p>{message.date}</p>
      </div>
    </li> : <li className='message my-message'>
      <div className='message__inf-wrapp'>
        <p className='message__text'>{message.text}</p>
        <p>{message.date}</p>
      </div>
    </li>
  )
}

export default Message
