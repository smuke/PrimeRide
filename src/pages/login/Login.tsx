import classes from "./Login.module.css";
import Logo from "../../components/logo/Logo";

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
                    setError("Login failed. Please try again")
                }
            } else {
                setError("Invalid response from the stupid api.");
            }
        } catch (err) {
            setError("Login failed. Please try again");
        } finally {
            setLoading(false)
        }

    }
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