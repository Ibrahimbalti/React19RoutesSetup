import Abouts from "../Abouts";
import Home from "../Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Abouts />,
  },
];

export default routes;
