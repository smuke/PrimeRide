import Container from "../Container/Container";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import users from "../../data/users.json";

function Footer() {
    const {userId, setUserId} = useContext(UserContext);
    const user = users.find(user => user.id === userId);
    const navigate = useNavigate();

    return (
        <div className={styles.footer}>
            <Container>
            <Logo />
                <div className={styles.footerLayout}>
                    <div>
                        <h3>Pages</h3>
                        <ul>
                            <li onClick={() => navigate(`/`)}>Discover</li>
                            <li onClick={() => navigate(`/profile/${userId}`)}>Profile</li>
                            <li onClick={() => navigate(`/current`)}>Rental History</li>
                        </ul>
                    </div>
                    <p>Contact us</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;