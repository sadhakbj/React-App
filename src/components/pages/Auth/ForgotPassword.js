import React, { useState } from "react"
import { Link }            from "react-router-dom"

const ForgotPassword = (props) => {
    const [email, setEmail] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const { loading, setLoading } = useState(false)
    const handleChange = e => {
        e.persist()
        setEmail(e.target.value)
    }
    const requestPasswordChange = async (e) => {
        e.preventDefault()

    }
    return (
        <div className="container flex items-center mx-auto h-full justify-center">
            <div className="w-1/3 p-4">
                <h1 className="text-center">Forgot your password ?</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={requestPasswordChange}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        {
                            formErrors.email ?
                                <p className="text-red-500 text-xs italic">{formErrors.email}</p> : ""
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={loading}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Request password change
                        </button>
                        <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ForgotPassword
