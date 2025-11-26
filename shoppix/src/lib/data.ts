import { axiosInstance } from "./axios.config";
import { Product } from "./types";

export async function GetProductDetails(
  id: string
): Promise<Product | undefined> {
  try {
    const response = await axiosInstance.get(`/api/products/details/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export async function GetAllProductDetails(): Promise<Product[] | undefined> {
  try {
    const response = await axiosInstance.get("/api/products/all");
    return response.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

// categories
export const getCategories = async (
  slug: string
): Promise<Product[] | undefined> => {
  try {
    const response = await axiosInstance.get(`/api/categories/${slug}/`);
    return response.data;
  } catch {
    return undefined;
  }
};