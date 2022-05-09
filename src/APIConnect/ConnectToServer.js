import axios from 'axios';

const instance = axios.create({
    baseURL: "https://hotcoffee.kz/"
});

 const ConnectToServer = {
    getUsers(){
        return instance.get("get_users.php").then(response => response.data);
    }
}

export default ConnectToServer;