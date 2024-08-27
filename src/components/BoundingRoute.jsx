import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { signIn, signUp } from "../fetch";

export const BoundingRoute = ({ redirectSuccess, redirectFailure }) => {
  const dispatch = useDispatch();
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken();
      if (!!token && !!user) {
        if (Date.parse(user.createdAt) === Date.parse(user.lastSignInAt)) {
          dispatch(
            signUp({
              email: user.primaryEmailAddress.emailAddress,
              token,
              userName: user.fullName,
            })
          );
          return;
        }
        dispatch(
          signIn({
            email: user.primaryEmailAddress.emailAddress,
            token,
            userName: user.fullName,
          })
        );
      }
    };
    fetchUser();
  });
  return (
    isLoaded &&
    (!!user ? (
      <Navigate to={redirectSuccess} />
    ) : (
      <Navigate to={redirectFailure} />
    ))
  );
};
