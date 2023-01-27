import React, { useContext, useState } from "react";
import io from "socket.io-client";
const MyContext = React.createContext({});

export function Context() {
  return useContext(MyContext);
}

export function Provider({ children }) {
  const [socket, setSocket] = useState(
    io(import.meta.env.REACT_APP_SOCKET_URL)
  );

  const [constraints, setConstraints] = useState({});
  console.log(
    "process.env.REACT_APP_SOCKET_URL",
    import.meta.env.REACT_APP_SOCKET_URL
  );
  return (
    <MyContext.Provider
      value={{ socket, setSocket, constraints, setConstraints }}
    >
      {children}
    </MyContext.Provider>
  );
}
