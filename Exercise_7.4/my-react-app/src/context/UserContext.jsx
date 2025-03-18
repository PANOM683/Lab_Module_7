import React, { useContext, useState } from "react";

// 1. Create the context
const UserContext = React.createContext();

// Custom provider component for this context. Uses its own state to keep track of the current user.
// Use it in a top level component such as App.jsx like <UserProvider>...</UserProvider>
export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({}); // default user object
  const [theme, setTheme] = useState({
    background: "white",
    foreground: "black",
  });
  const [darkMode, setDarkMode] = useState(false); // toggle for light/dark mode

  // Update user function
  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider
      value={{ currentUser, handleUpdateUser, theme, darkMode }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

// 2. Use the context. This custom hook allows easy access of this particular context
export const useUserContext = () => {
  return useContext(UserContext);
};
