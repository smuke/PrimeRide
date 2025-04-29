import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { NavLink } from "react-router";

function Header() {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.headerLayout}>
                    <Logo redirect={true} />
                    <NavLink to={"/profile"}>
                        <p>Profile</p>
                    </NavLink>
                </div>
            </Container>
        </div>
    )
}

export default Header;