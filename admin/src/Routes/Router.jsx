import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Admin from "../Pages/Admin/Admin";
import ListProduct from "../Components/ListProduct/ListProduct";
import AddProduct from "../Components/AddProduct/AddProduct";
import Login from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "addproduct",
            element: <AddProduct />,
          },
          {
            path: "listproduct",
            element: <ListProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <h1>No Page Found</h1>,
  },
]);

export default AppRouter;
