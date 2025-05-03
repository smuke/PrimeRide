import classes from "./Login.module.css";
import Logo from "../../components/Logo/Logo";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const nav = useNavigate()

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response = await axios.get(
                'https://68040a6779cb28fb3f5a3db8.mockapi.io/api/v1/login?email=' + encodeURIComponent(email))
            console.log(response)

            if (response.status === 200 && response.data.length > 0) {
                const user = response.data[0]
                if (user.password === password) {
                    localStorage.setItem("authToken", response.data.token)
                    setSuccess(true);
                    setTimeout(() => {
                        nav('/');
                    }, 1000)
                } else {
                    setError("Login failed. Please try again.")
                }
            } else {
                setError("Invalid response from the stupid api.");
            }
        } catch (err) {
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false)
        }

    }
    return (
        <>
            <div className={classes.loginGrid}>

                <div className={classes.imgSide}>
                    {/* <img src="src\images\login-img.png" className={classes.loginImg}></img> */}
                </div>
                <div className={classes.textSide}>
                    <div className={classes.logoSection}>
                        <Logo redirect={true} />
                    </div>
                    <h1>Welcome Back</h1>
                    <p className={classes.loginText}>Log in to access your account</p>
                    <form onSubmit={handleLogin}>
                        <div className={classes.input}>
                        <input 
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <div className={classes.input}>
                        <input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>
                        <button className={classes.loginButton} type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </form>
                    <div className={classes.outcome}>
                    {error && (
                            <div className={classes.errorMsg}>{error}</div>
                    )}
                    {success && (
                            <div className={classes.successMsg}>Login successful!</div>
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;