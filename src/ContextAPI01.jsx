import React from "react";
import UserContext from "./state/UserContext";

// Prop Drilling Approach
const LeftSide = () => {
    return (
        <div>Left Side</div>
    )
}

const RightSide = ({ userInfo }) => {
    return (
        <RightSideCard />
    )
}

const RightSideCard = () => {
    const { userInfo } = React.useContext(UserContext);
    return (
        <div>{userInfo} is Logged in.</div>
    )
}

const Dashboard = ({ userInfo }) => {
    return (
        <div style={{ display: "flex", width: "1200px", margin: "auto", justifyContent: "space-between" }}>
            <LeftSide />
            <RightSide />
        </div>
    )
}

const ContextAPI01 = ({ userInfo }) => {
    const [username, setUsername] = React.useState("");
    const { setUserInfo } = React.useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername("");
        setUserInfo(username);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <Dashboard />
        </div>
    )
}

export default ContextAPI01;