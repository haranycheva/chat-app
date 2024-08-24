import "./Error404.css"
import Cat from "../../assets/gray-cat.png";

function Error404() {
  return (
    <div className="error__wrapp">
      <h1 className="error__title"> 404 ERROR</h1>
      <img src={Cat} alt="cutie" />
    </div>
  )
}

export default Error404
