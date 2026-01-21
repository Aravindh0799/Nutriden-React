import { useEffect, useRef, useState } from 'react'
import styles from '../styles/login.module.css'
import { useAuth } from "../context/authProvider";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const login = () => {
    const { auth, setAuth, persist, setPersist } = useAuth();
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [err, setErr] = useState('')
    const userRef = useRef<HTMLInputElement | null>(null);
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPrivate = useAxiosPrivate()
    const from = location?.state?.from?.pathname || "/"

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axiosPrivate.post("/login", JSON.stringify({ email: user, password: pwd }))

            setAuth({
                user: response.data.email,
                roles: response.data.roles,
                accessToken: response.data.access_token
            })

            setSuccess(true)
            setErr("")
            navigate(from, {
                replace: true
            })

        } catch (err: unknown) {
            setSuccess(false)
            if (axios.isAxiosError(err)) {
                setErr(err.response?.data?.detail ?? "Request failed");
            } else if (err instanceof Error) {
                setErr(err.message);
            } else {
                setErr("Something went wrong");
            }
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev)
    }

    useEffect(() => {
        localStorage.setItem("persist", persist.toString())
    }, [persist])

    return (
        <div className={styles.loginContainer}>

            <form onSubmit={handleSubmit} className={`${styles.loginForm} glassCard `}>
                <h1 className={styles.title}>Login Page</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" ref={userRef} name="username" onChange={(e) => setUser(e.target.value)} required />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPwd(e.target.value)} required />
                <br />
                <div className={styles.checkboxContainer}>
                    <input type='checkbox' id="persist" checked={persist} onChange={togglePersist} />
                    <label>Trust this device</label>
                </div>
                <br />
                <button type="submit">Login</button>
                <br />
                <div className={styles.links}>
                    <a href=''>Forgot Password?</a>
                    <a href=''>Register Now</a>
                </div>
            </form>
            <>
                {success ? (
                    <div>Logged in successfully</div>
                ) : <> </>}
                {err ? (
                    <div>{err}</div>
                ) : (<> </>)
                }
            </>
        </div >
    )
}

export default login