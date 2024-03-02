
import Home from "../Page/Home/Home";
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
    }
]);
export default router; 