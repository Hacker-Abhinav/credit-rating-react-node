import Users from "@/screens/Dashboard/Users/Users";
import UserCreate from "@/screens/Dashboard/Users/UserCreate";

const UsersRouter = () => {
  const routes = [
    { path: "/dashboard/users", element: Users() },
    { path: "/dashboard/users/create", element: UserCreate() },
  ];
  return routes;
}

export default UsersRouter;