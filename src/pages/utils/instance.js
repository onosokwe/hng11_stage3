import axios from "axios";

const instance = axios.create({
    baseURL: 'https://timbu-get-all-products.reavdev.workers.dev',
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
