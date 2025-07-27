import axiosClient from "@/apis/axiosClient";

const getProducts = async ()=>{
    const result = await axiosClient.get('/product');
    return result.data;
}

export default getProducts;