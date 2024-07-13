import instance from "./instance";

// const APP_ID = process.env.APP_ID;
// const ORG_ID = process.env.ORG_ID;
// const API_KEY = process.env.API_KEY;
// console.log(process.env)

const APP_ID='0PTJ898HF8AZ25O'
const ORG_ID='cfca8ee892834448a9eedfb238201304'
const API_KEY = 'e31c92eb6e7640d28f5abd7ec4f8747520240713130002474132' 


const getAllProducts = async () => {
    const response = await instance.get(`/products?organization_id=${ORG_ID}&APP_ID=${APP_ID}&API_KEY=${API_KEY}`, {
        params: {
            organization_id: ORG_ID,
            reverse_sort: true,
            page: 1,
            size: 12,
            Appid: APP_ID,
            Apikey: API_KEY,
        },
    });
    return response;
};

export {
    getAllProducts,
};
