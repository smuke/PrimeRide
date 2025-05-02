import Container from "../Container/Container";
import Logo from "../Logo/Logo";
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