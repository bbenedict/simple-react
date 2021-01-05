import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
  
export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state);
  const usernameRef = useRef(null);

  const onLoginClick = () => {
    dispatch({ type: "LOGIN", payload: usernameRef.current.value })
  };

  const onLogoutClick = () => {
    dispatch({ type: "LOGOUT" })
  };

  return (
    <header 
      style={{
        padding: "10px",
        height: "30px",
        color: "white",
        backgroundColor: "darkblue"
      }}
    >
      simple react app
      { isAuthenticated
        && (
          <>
            <span style={{ padding: "0px 10px" }}>
              { username }
            </span>
            <button  
              style={{ paddingRight: "10px" }}
              onClick={() => onLogoutClick()}
            >
                logout
            </button>
          </>
      )}
      { !isAuthenticated
        && (
          <>
            <span style={{ padding: "0px 10px" }}>
              <label>
                <span style={{ paddingRight: "10px" }}>
                  Login with username or email
                </span>
                <input ref={usernameRef} type="text"/>
              </label>
            </span>
            <button onClick={() => onLoginClick()}>login</button>
          </>
      )}
    </header>
  );
};
