
import Home from "../Page/Home/Home";
import UpdatePage from "../Page/Update/UpdatePage";
import UserShow from "../Page/UserShow/UserShow";
import {
  createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    },
    {
        path: "/alluser",
        element: <UserShow> </UserShow>,
  },
    {
        path: "/Update/:id",
      element: <UpdatePage></UpdatePage>,
        loader:({params})=>fetch(`http://localhost:4000/users/${params.id}`)
    }
]);
export default router; 