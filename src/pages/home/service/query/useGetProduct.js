import { request } from "../../../../config/request/request";
import { useQuery } from "@tanstack/react-query";

const useGetProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => request.get("/products").then((res) => res.data),
  });
};

export default useGetProduct;
