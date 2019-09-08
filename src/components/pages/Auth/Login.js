import React, { useState, useEffect } from "react"
import {
    useDispatch,
    useSelector,
} from "react-redux"
import { Link }            from "react-router-dom"
import { attemptLogin }     from "../../../store/auth/actions"

const Login = (props) => {
    console.log(props)
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn) {
            props.history.push('/home')
        }
    }, [isLoggedIn])

    const handleChange = e => {
        e.persist()
        setCredentials(credentials => ({ ...credentials, [e.target.name]: e.target.value }))
    }

    const handleOnSuccess = () => {
        setLoading(false)
        props.history.push("/register")
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setFormErrors({})
        dispatch(attemptLogin(credentials, handleOnSuccess, (errors) => {
            setLoading(false)
            setFormErrors(errors)
        }))
    }

    return (
        <div className="container flex items-center mx-auto h-full justify-center">
            <div className="w-1/3 p-4">
                <h1 className="text-center">Login to system</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin} autoComplete="off">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className={`shadow appearance-none
                                    border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline ${formErrors.email ? "border-red-500 mb-1" : ""}`}
                            type="text"
                            name="email"
                            value={credentials.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        {
                            formErrors.email ?
                                <p className="text-red-500 text-xs italic">{formErrors.email}</p> : ""
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className={`shadow appearance-none
                                    border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline ${formErrors.password ? "border-red-500 mb-1" : ""}`}
                            id="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={credentials.password}
                            placeholder="******************"
                        />
                        {
                            formErrors.password ?
                                <p className="text-red-500 text-xs italic">{formErrors.password}</p> : ""
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={loading}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default Login
