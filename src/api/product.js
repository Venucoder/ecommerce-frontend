import apiClient from "./apiClient";

export const getAllProducts = async () => {
    try {
        const products = await apiClient.get("/products");
        return products.data;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
