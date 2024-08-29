import "./MessageToast.css"

const MessageToast = ({message, user}) => {
    const messageToToast =
    message.text.length > 40
      ? message.text.slice(0, 40) + "..."
      : message.text;
  return (
    <div className="toast__wrapp">
      <h3 className="toast__title title">{user}</h3>
      <p className="toast__text">{messageToToast}</p>
    </div>
  )
}

export default MessageToast
