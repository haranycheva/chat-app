import "./Error404.css";
import Cat from "../../assets/gray-cat.jpg";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Error404() {
  const [shouldThePageChange, setShouldThePageChange] = useState(false);
  useEffect(() => {
    setTimeout(() => setShouldThePageChange(true), 10000);
  });
  return shouldThePageChange ? (
    <Navigate to="/mychats" />
  ) : (
    <div className="error__wrapp">
      <h1 className="error__title"> 404 ERROR</h1>
      <img src={Cat} alt="cutie" width="500px" height="500px" />
    </div>
  );
}

export default Error404;
