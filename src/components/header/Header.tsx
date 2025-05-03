import Container from "../container/Container";
import Logo from "../logo/Logo";
import UserIcon from "../UserIcon/UserIcon";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.headerLayout}>
                    <Logo redirect={true} />
                    <UserMenu />
                    {/* <UserIcon /> */}
                </div>
            </Container>
        </div>
    )
}

export default Header;