import classes from "./Login.module.css";
import Logo from "../../components/Logo/Logo";

function Login() {
    return (
        <>
            <div className={classes.loginGrid}>

                <div className={classes.imgSide}>
                    {/* <img src="src\images\login-img.png" className={classes.loginImg}></img> */}
                </div>
                <div className={classes.textSide}>
                    <div className={classes.logoSection}>
                        <Logo/>
                    </div>
                    <h1>Welcome Back</h1>
                    <p className={classes.loginText}>Log in to access your account</p>
                    <div className={classes.input}>
                        <input placeholder="Email Address"/>
                    </div>
                    <div className={classes.input}>
                        <input placeholder="Password"/>
                    </div>
                    <button className={classes.loginButton}>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Login;