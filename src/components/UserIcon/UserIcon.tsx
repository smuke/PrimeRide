import { useContext } from "react";
import styles from "./UserIcon.module.css";
import { NavLink } from "react-router";
import UserContext from "../../context/UserContext";
import users from "../../data/users.json"

function UserIcon() {
    const userId = useContext(UserContext);
    const user = users.find(user => user.id === userId);
    const image = user ? `url(${user?.image})` : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0ONuALFfeKupSwSbEdXsoS8MT4U66WNjiQ&s)";

    return (
        <>
            <NavLink to={"/profile"}>
                <div style={{backgroundImage: image}} className={styles.icon}></div>
            </NavLink>
        </>
    );
}

export default UserIcon;