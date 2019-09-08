import React, { useEffect }      from "react"
import { BrowserRouter as Router, Route }                 from "react-router-dom"
import Header                    from "./App"
import ForgotPassword            from "./components/pages/Auth/ForgotPassword"
import Login                     from "./components/pages/Auth/Login"
import Register                  from "./components/pages/Auth/Register"

const AppRouter = () => {

    return (
        <>
            <Router>
                <div>
                    <Header/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                </div>
            </Router>
        </>
    )
}

export default AppRouter
