import styles from "./Login.module.css";
import Logo from "../../components/Logo/Logo";

function Login() {
    return (
        <>
            <div className={styles.loginGrid}>

                <div className={styles.imgSide}>
                    {/* <img src="src\images\login-img.png" className={styles.loginImg}></img> */}
                </div>
                <div className={styles.textSide}>
                    <div className={styles.logoSection}>
                        <Logo/>
                    </div>
                    <h1>Welcome Back</h1>
                    <p className={styles.loginText}>Log in to access your account</p>
                    <div className={styles.input}>
                        <input placeholder="Email Address"/>
                    </div>
                    <div className={styles.input}>
                        <input placeholder="Password"/>
                    </div>
                    <button className={styles.loginButton}>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Login;