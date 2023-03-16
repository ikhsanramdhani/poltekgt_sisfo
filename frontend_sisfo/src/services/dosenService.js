import http from '../http-common'

class userService {

    login(data) {
        return http.post ("/dosen/login", data);
    }
}

export default new userService();