import "./Error404.css"
import Cat from "../../assets/gray-cat.jpg";

function Error404() {
  return (
    <div className="error__wrapp">
      <h1 className="error__title"> 404 ERROR</h1>
      <img src={Cat} alt="cutie" width="500px" height="500px"/>
    </div>
  )
}

export default Error404
