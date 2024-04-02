import { Link } from "react-router-dom";

const ProductCard = ({ product: { id, image, category, title, price } }) => {
  return (
    <div
      className="w-full border-2 border-transparent p-4 hover:cursor-pointer 
      hover:border-slate-100 md:w-1/2 
    lg:w-1/4"
    >
      <Link
        to={`/products/${id}`}
        className="relative block h-48 overflow-hidden rounded"
      >
        <img
          alt="ecommerce"
          className="block h-full w-full object-contain object-center"
          src={image}
        />
      </Link>
      <div className="mt-4">
        <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
          {category.toUpperCase()}
        </h3>
        <h2 className="title-font overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-medium text-gray-900">
          {title}
        </h2>
        <p className="mt-1">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
