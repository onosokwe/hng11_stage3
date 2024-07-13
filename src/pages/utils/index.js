import instance from "./instance";

const APP_ID='0PTJ898HF8AZ25O'
const ORG_ID='cfca8ee892834448a9eedfb238201304'
const API_KEY = 'e31c92eb6e7640d28f5abd7ec4f8747520240713130002474132' 

const getAllProducts = async (page) => {
    const response = await instance.get(`/products?organization_id=${ORG_ID}&APP_ID=${APP_ID}&API_KEY=${API_KEY}`, {
        params: {
            organization_id: ORG_ID,
            reverse_sort: true,
            page: page,
            size: 12,
            Appid: APP_ID,
            Apikey: API_KEY,
        },
    });
    return response;
};

const getOneProduct = async (id) => {
    const response = await instance.get(`/products?organization_id=${ORG_ID}&APP_ID=${APP_ID}&API_KEY=${API_KEY}`, {
        params: {
            organization_id: ORG_ID,
            Appid: APP_ID,
            Apikey: API_KEY,
            product_id: id,
        },
    });
    return response;
};

const formatAmount = (amount, format = "en-NG") => {
    return new Intl.NumberFormat(format, { minimumFractionDigits: 2 }).format(
      amount
    );
  };

export {
    getAllProducts,
    getOneProduct,
    formatAmount,
};
