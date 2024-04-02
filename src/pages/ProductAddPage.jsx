import { Form, redirect, useNavigation } from "react-router-dom";
import Input from "../components/Input";

export async function action({ request }) {
  const formData = await request.formData();
  const product = Object.fromEntries(formData);
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  return redirect("/products");
}

const ProductAddPage = () => {
  const navigation = useNavigation();
  const submitting = navigation.state === "loading";
  return (
    <Form method="post">
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-4 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Add Product
            </h1>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <Input label="Title" name={"title"} />
              <Input label="Description" name={"description"} />
              <Input label="Category" name={"category"} />
              <Input label="Price" name={"price"} />
              <Input label="Image" name={"image"} className={"w-full p-2"} />

              <div className="w-full p-2">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  {submitting ? "Adding..." : "Add Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Form>
  );
};

export default ProductAddPage;
