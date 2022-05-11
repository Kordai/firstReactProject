import axios from 'axios';

const instance = axios.create({
    baseURL: "https://hotcoffee.kz/",
    withCredentials: true

});

const ConnectToServer = {
    getUsers() {
        return instance.get("get_users.php").then(response => response.data);
    },
    getPayments(currentPage, pageSize) {
        return instance.get(`get_payments.php?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getApplications() {
        return instance.get("get_applications.php").then(response => response.data);
    }
}

export default ConnectToServer;