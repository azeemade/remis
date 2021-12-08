import axios from 'axios'
const API_URL = 'http://demodev.remis.ng/';

class AuthService {
  login(data) {
    var config = {
        method: "post",
        url: API_URL + 'Login',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    };
    return axios(config)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();