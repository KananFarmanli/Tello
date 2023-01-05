import { axiosInstance } from "./axios";

export const getProducts =(limit=20, page=1)=>axiosInstance(

    `/products?category_slug_samsung`

    );

/* 
`/products?category_slug=Samsung`
`/products?sortBy=price&sortDirection=asc`
`/products?sortBy=created_at` */