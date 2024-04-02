import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { products };
}

const ProductsPage = () => {
  const { products } = useLoaderData();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
