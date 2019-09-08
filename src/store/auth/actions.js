import Api from "../../Services/Api"

export const setAuth = (data) => {
    return {
        type: 'set_auth' ,
        payload: data
    }
}

export const setCurrentUser = (data) => {
    return {
        type: 'set_current_user',
        payload: data
    }
}

export const setIsLoggedIn = (data) => {
    return {
        type: 'set_is_logged_in',
        payload: data
    }
}

export const checkIfUserIsLoggedIn = () => async dispatch => {
    const token = localStorage.getItem("token")
    try {
        const response = await Api.get('auth/profile', {token})

        const {data} = response.data

        dispatch(setCurrentUser(data))
        dispatch(setIsLoggedIn(true))
    } catch(e) {
        dispatch(setIsLoggedIn(false))
    }
}

export const attemptLogin = (credentials, onSuccess, onError) => async dispatch => {
    try {
        const response = await Api.post('auth/login', credentials)
        const { data } = response.data

        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("token", data.token)

        dispatch(setAuth({
            isLoggedIn: true,
            currentUser: data.user,
            token: data.token
        }))

        onSuccess()

    } catch (e) {
        if (e.response.status === 422) {
            return onError(e.response.data.errors)
        }

        console.log(e)
    }
}
