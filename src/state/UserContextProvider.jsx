import React from "react";
// UserContext
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = React.useState("");
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;