import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";
import { NavLink } from "react-router";

function Header() {
    return (
        <div className={classes.header}>
            <Container>
                <div className={classes.headerLayout}>
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