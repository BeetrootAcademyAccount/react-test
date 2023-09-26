import { useLoaderData, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const productDetails = useLoaderData();

  return <div>{id}</div>;
}

export default Detail;

export const fetchProductDetails = async ({ params }) => {
  const response = await fetch("https://dummyjson.com/products/" + params.id);
  const data = await response.json();

  if (!response.ok) {
    throw Error("error");
  }
  // console.log(data);
  return data;
};
