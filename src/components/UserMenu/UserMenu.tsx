import {
    Button,
    composeRenderProps,
    Menu,
    MenuItem,
    MenuTrigger,
    Popover,
    Separator,
    Switch,
} from "react-aria-components";
import type { MenuItemProps, SwitchProps } from "react-aria-components";
import styles from "./UserMenu.module.css";
import UserIcon from "../UserIcon/UserIcon";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import users from "../../data/users.json"

function UserMenu() {
    const {userId, setUserId} = useContext(UserContext);
    const user = users.find(user => user.id === userId);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUserId(null);
        navigate("/login");
    }
    
    return (
        <div className={styles.userMenu}>
            <MenuTrigger>
                <Button aria-label="Account" className={styles.menuButton}>
                    <UserIcon />
                </Button>
                <Popover className={styles.popover} crossOffset={-150}>
                    <div>
                        <UserIcon />
                        <div>
                            <p>{user?.name}</p>
                        </div>
                    </div>
                    <Separator className={styles.separator} />
                    <Menu className={styles.menu}>
                        {user ? <MyMenuItem id="profile" onAction={() => navigate("/profile")}>Profile</MyMenuItem> : ""}
                        {user ? <MyMenuItem id="current" onAction={() => navigate("/current")}>Current Rentals</MyMenuItem> : ""}
                        <MyMenuItem id="logout" onAction={handleLogout}>{user ? "Log Out" : "Log In"}</MyMenuItem>
                    </Menu>
                </Popover>
            </MenuTrigger>
        </div>
    );
}

function MyMenuItem(props: MenuItemProps) {
    return (
        <MenuItem
            {...props}
            className={styles.menuItem}
        />
    );
}

export default UserMenu;
