import { useRoutes } from "react-router-dom";
import Auth from "@/screens/Auth/Auth";

const PublicRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Auth />, index: true },
  ]);
  return routes;
}

export default PublicRouter;