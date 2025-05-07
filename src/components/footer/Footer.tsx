import Container from "../Container/Container";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import users from "../../data/users.json";
import Line from "../Line/Line";

function Footer() {
    const {userId, setUserId} = useContext(UserContext);
    const user = users.find(user => user.id === userId);
    const navigate = useNavigate();

    return (
        <div className={styles.footer}>
            <Container>
            <Line />
            <Logo />
            <p>&copy; PrimeRide</p>
                <div className={styles.footerLayout}>
                    <div>
                        <ul>
                            <li><a href="mailto:mail@example.com">Contact</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            {/* <li onClick={() => navigate(`/login`)}>Log in</li> */}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;