import { useLoaderData } from "react-router-dom";
import Star from "../components/Star";
import StarEmpty from "../components/StarEmpty";

export async function loader({ params: { id } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return { product };
}

const ProductDetailPage = () => {
  const {
    product: { image, category, title, price, description, rating },
  } = useLoaderData();

  const filledStarCount = Math.round(rating.rate);

  const emptyStarCount = 5 - filledStarCount;
  return (
    <section className="body-font overflow-hidden text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <img
            alt="ecommerce"
            className="h-64 w-64 rounded object-contain object-center lg:h-[500px] lg:w-1/2"
            src={image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="title-font text-sm tracking-widest text-gray-500">
              {category.toUpperCase()}
            </h2>
            <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
              {title}
            </h1>
            <div className="mb-4 flex">
              <span className="flex items-center">
                {/* Rating */}
                {[...Array(filledStarCount)].map((_, index) => (
                  <Star key={index} />
                ))}
                {[...Array(emptyStarCount)].map((_, index) => (
                  <StarEmpty key={index} />
                ))}
                {/* Rating */}
                <span className="ml-3 text-gray-600">
                  {rating.count} Reviews
                </span>
              </span>
              <span className="space-x-2s ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none" />
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none" />
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none" />
              </div>
              <div className="ml-6 flex items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font text-2xl font-medium text-gray-900">
                ${price}
              </span>
              <button className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                Buy Now
              </button>
              <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
