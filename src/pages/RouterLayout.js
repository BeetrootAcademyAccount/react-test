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
  useNavigation,
} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function RouterLayout() {
  const navigation = useNavigation();

  console.log(navigation.state);

  return (
    <div>
      <header>
        <Link to="register">Register</Link>
        <NavLink to="login">Login</NavLink>
        <NavLink to="table">Table</NavLink>
      </header>
      <Breadcrumb></Breadcrumb>

      <main>
        {navigation.state === "loading" && <h1>Loading...</h1>}
        {navigation.state === "idle" && <Outlet></Outlet>}
      </main>
    </div>
  );
}

export default RouterLayout;
