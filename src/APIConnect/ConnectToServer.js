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
    getUser(id) {
        return instance.get("get_user.php?userID=" + id).then(response => response.data);
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
    },
    deleteApplication(id) {
        return instance.delete('delete_application.php?id=' + id)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    deleteUser(id) {
        return instance.delete('delete_user.php?id=' + id)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    putPayment(obj) {
        return instance.put('update_payment.php', obj)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    putUser(obj) {
        return instance.put('update_user.php', obj)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    addNewUser(obj) {
        return instance.post('add_user.php', obj)
            .then(response => response.data)
            .catch(error => console.log(error))
    }

}

export default ConnectToServer;