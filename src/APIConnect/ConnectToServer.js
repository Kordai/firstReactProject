import axios from 'axios';

const instance = axios.create({
    baseURL: "https://hotcoffee.kz/",
    withCredentials: true,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }

});

const ConnectToServer = {
    getUsers() {
        return instance.get("get_users.php").then(response => response.data);
    },
    getPayments(currentPage, pageSize) {
        return instance.get(`get_payments.php?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response?.data; //if return Empty element, this functions return null
            });
    },
    getApplications() {
        return instance.get("get_applications.php").then(response => response.data);
    },
    addNewPayment(obj) {
        return instance.post('add_payment.php', obj)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    deletePayment(id) {
        return instance.delete('delete_payment.php?id=' + id)
            .then(response => response.data)
            .catch(error => console.log(error))
    }

}

export default ConnectToServer;