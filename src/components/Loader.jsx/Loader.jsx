import { useEffect } from "react";
import "./Loader.css";
import { ClipLoader } from "react-spinners";

function Loader() {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);
  return (
    <div className="loader__wrapp">
      <ClipLoader color="#00CECB" size={100} />
    </div>
  );
}

export default Loader;
