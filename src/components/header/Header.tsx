import Container from "../Container/Container";
import Logo from "../Logo/Logo";
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