import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const PrivaRoute = ({ redirect, component: Component, setModalName,setModalValues }) => {
  const { user, isLoaded } = useUser();
  return (
    isLoaded &&
    (!!user ? (
      <Component setModalValues={setModalValues} setModalName={setModalName}/>
    ) : (
      <Navigate to={redirect} />
    ))
  );
};
