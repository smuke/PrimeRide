import Container from "../Container/Container";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Line from "../Line/Line";

function Footer() {
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