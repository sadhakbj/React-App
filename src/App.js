import React from "react"

import { Provider } from "react-redux"
import {
    BrowserRouter as Router,
    Route,
    Switch,
}                   from "react-router-dom"
import "./App.css"

import Header         from "./components/layouts/Header"
import ForgotPassword from "./components/pages/Auth/ForgotPassword"
import Login          from "./components/pages/Auth/Login"
import Register       from "./components/pages/Auth/Register"

import store from "./store/index"

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <Switch>
                    <Route  path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
