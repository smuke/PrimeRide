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
import users from "../../data/users.json"

function UserMenu() {
    const {userId} = useContext(UserContext);
    const user = users.find(user => user.id === userId);
    
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
                        <MyMenuItem id="profile" href="/profile">Profile</MyMenuItem>
                        <MyMenuItem id="current" href="/current">Current Rentals</MyMenuItem>
                        <MyMenuItem id="logout" href="/login">{user ? "Log Out" : "Log In"}</MyMenuItem>
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
