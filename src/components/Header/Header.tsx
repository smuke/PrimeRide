import Container from "../container/Container";
import Logo from "../logo/Logo";
import UserIcon from "../UserIcon/UserIcon";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.headerLayout}>
                    <Logo redirect={true} />
                    <UserIcon />
                </div>
            </Container>
        </div>
    )
}

export default Header;