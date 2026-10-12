import { ProductType } from "@/types/products";
import Product from "@/components/Product";
import { Suspense } from "react";

const ProductList = async () => {
  const res = await fetch("http://localhost:3006/products");


  const data = await res.json();
  const products = data?.data as ProductType[];

  return (
 
      <div className="flex p-1 gap-2 m-2 flex-wrap ">
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
 
  );
};

const ProductPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center ">
          <p className="text-xl font-semibold">
            LOADING PRODUCTS.....
          </p>
        </div>
      }
    >
      <ProductList />
    </Suspense>
  );
};

export default ProductPage;