import Home from "./components/Home/Home";
import GetStarted from "./pages/Auth/GetStarted/GetStarted";
import Login from "./pages/Auth/Login/Login";

const routes = [
  {
    route: "*",
    component: <Home />,
  },
  {
    route: "/get-started",
    component: <GetStarted />,
  },
  {
    route: "/login",
    component: <Login />,
  },
];

export default routes;
