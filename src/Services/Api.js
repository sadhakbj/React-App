import Axios from "axios"

const http = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
});

class Api {
    get(endpoint, query = {}) {
        this.setAuthToken()
        return http.get(endpoint,{
            params: query
        })
    }

    post(endpoint, data) {
        this.setAuthToken()
        return http.post(endpoint, data)
    }

    setAuthToken() {
        http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
}

export default new Api()
