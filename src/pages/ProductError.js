import { useRouteError } from "react-router-dom";

function ProductError() {
  const error = useRouteError();

  return <div>{error.message}</div>;
}

export default ProductError;
