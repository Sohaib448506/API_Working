import React, { useEffect, useContext } from "react";
import { getUser } from "../api/apiBasicAuth";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function useLogin(loginCreds, setLoginCreds, setError) {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);
  useEffect(() => {
    const source = CancelToken.source();

    if (loginCreds.email && loginCreds.password) {
      const login = async (cancelToken, loginCreds) => {
        const response = await getUser(
          loginCreds.email,
          loginCreds.password,
          cancelToken
        );
        console.log(response);
        if (response.user?.token) {
          console.log("logged in");
          setUser(response.user);
          setLoginCreds({});
          navigate("/");
        } // navigate to the home page
        setError(response.error);
      };
      login(source.token, loginCreds);
    }
    return () => {
      source.cancel();
    };
  }, [loginCreds, setLoginCreds, setError, navigate]);
}
