import { RoleCreate, Roles } from "@/screens/Dashboard/Roles";

const RolesRouter = () => {
  const routes = [
    { path: "/dashboard/roles", element: Roles() },
    { path: "/dashboard/roles/create", element: RoleCreate() },
  ];
  return routes;
}

export default RolesRouter;