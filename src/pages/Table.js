import Error from "./Error";
import Detail from "./Detail";
import {
  createBrowserRouter,
  BrowserRouter,
  Link,
  NavLink,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

function Table() {
  const resp = useLoaderData();

  return (
    <div>
      Table page
      <Link to="error">Error</Link>
      <NavLink to="detail">Detail</NavLink>
      <Outlet></Outlet>
      {resp.products.map((product) => (
        <div key={product.id}>
          <Link to={product.id.toString()}>
            {product.id}.{product.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  // console.log(data);
  return data;
};

export default Table;
