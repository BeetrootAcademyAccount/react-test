import {
  createBrowserRouter,
  BrowserRouter,
  Link,
  NavLink,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RouterLayout from "./pages/RouterLayout";
import Detail from "./pages/Detail";
import Table, { fetchProducts } from "./pages/Table";
import Error404 from "./pages/Error404";
import { fetchProductDetails } from "./pages/Detail";
import ProductError from "./pages/ProductError";
import Breadcrumb from "./components/Breadcrumb";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="table" loader={fetchProducts} element={<Table />}>
        <Route
          path=":id"
          element={<Detail />}
          loader={fetchProductDetails}
          errorElement={<ProductError />}
        />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

/*

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout></RouterLayout>,
    children:[]
  }
]);
*/

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
