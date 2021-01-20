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

  const onFontClick = (increaseFont) => {
    const actionType = increaseFont ? "INCREASE_FONT" : "DECREASE_FONT";
    dispatch({ type: actionType })
  };

  return (
    <div id="header" role="banner" aria-label="Primary Header"
      style={{
        padding: ".5em",
        height: "1.5em",
        color: "white",
        backgroundColor: "darkblue"
      }}
    >
      simple react app
      { isAuthenticated
        && (
          <>
            <span style={{ padding: "0 .5em" }}>
              { username }
            </span>
            <button  
              style={{ paddingRight: ".5em" }}
              onClick={() => onLogoutClick()}
            >
                click to logout
            </button>
          </>
      )}
      { !isAuthenticated
        && (
          <>
            <span style={{ padding: "0 .5em" }}>
              <label>
                <span style={{ paddingRight: ".5em" }}>
                  Type username to login
                </span>
                <input 
                  ref={usernameRef} 
                  type="text"
                />
              </label>
            </span>
            <button onClick={() => onLoginClick()}>
              Click to login
            </button>
          </>
      )}
      <>
        <button  
          style={{ paddingRight: ".5em" }}
          onClick={() => onFontClick(true)}
        >
            Increase font size
        </button>
      </>
      <>
        <button  
          style={{ paddingRight: ".5em" }}
          onClick={() => onFontClick(false)}
        >
            Descrease font size
        </button>
      </>
    </div>
  );
};
