import { useLocation } from "react-router-dom";

function Breadcrumb() {
  const breadcrumb = useLocation();
  return <div>Breadcrumb</div>;
}

export default Breadcrumb;
