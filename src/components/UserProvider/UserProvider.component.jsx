import { useState, createContext, useContext } from "react";

const UserContext = createContext();
 

const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ name: '', auth: true });
  
    // Login updates the user data with a name parameter
    const login = (name, email, uid) => {
      setUser((user) => ({
        name: name,
        email: email,
        uid: uid,
        auth: true,
      }));
    };
  
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        name: '',
        email: '',
        uid: '',
        auth: false,
      }));
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }


  export default UserProvider;