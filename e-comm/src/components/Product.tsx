import { ProductType } from "@/types/products";

interface ProductProps {
  data: ProductType;
}

const Product = ({ data }: ProductProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      {data.image && (
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-48 object-cover rounded-md"
        />
      )}

      <h2 className="text-xl font-semibold mt-3">
        {data.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {data.description}
      </p>

      <p className="text-lg font-bold mt-3">
        ${data.price}
      </p>
    </div>
  );
};

export default Product;