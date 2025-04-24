import Container from "../container/Container";
import Logo from "../logo/Logo";
import classes from "./Header.module.css";

function Header() {
    return (
        <div className={classes.header}>
            <Container>
                <div className={classes.headerLayout}>
                    <Logo />
                    Profile
                </div>
            </Container>
        </div>
    )
}

export default Header;