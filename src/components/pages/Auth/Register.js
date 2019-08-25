import React, { useState } from "react"
import { Link }            from "react-router-dom"

function Register() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        name: "",
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        e.persist()
        setUserInfo(userInfo => ({ ...userInfo, [e.target.name]: e.target.value }))
    }

    const handleRegistration = e => {
        e.preventDefault()
        alert("I will register you.")
    }
    return (
        <div className="container flex items-center mx-auto h-full justify-center">
            <div className="w-1/3 p-4">
                <h1 className="text-center">Create new account</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleRegistration} autoComplete="off">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className={`shadow appearance-none
                                    border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500 mb-1" : ""}`}
                            type="text"
                            name="email"
                            value={userInfo.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        {
                            errors.email ?
                                <p className="text-red-500 text-xs italic">{errors.email}</p> : ""
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className={`shadow appearance-none
                                    border rounded w-full py-2 px-3 text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500 mb-1" : ""}`}
                            id="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={userInfo.password}
                            placeholder="******************"
                        />
                        {
                            errors.password ?
                                <p className="text-red-500 text-xs italic">{errors.password}</p> : ""
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={loading}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>
                        <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
