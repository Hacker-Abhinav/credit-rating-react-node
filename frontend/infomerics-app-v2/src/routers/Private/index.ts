import { useRoutes } from "react-router-dom";
import RolesRouter from "./RolesRouter";
import UsersRouter from "./UsersRouter";

const PrivateRouter = () => {
  const routes = useRoutes([
    { path: "/dashboard/roles", children: RolesRouter() },
    { path: "/dashboard/users", children: UsersRouter() },
  ]);
  return routes;
}

export default PrivateRouter;