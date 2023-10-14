import { createBrowserRouter } from "react-router-dom";
import MenuAppBar from "../Component/Navbar/Navbar";
import Dashboard from "../Component/dashBoard/Dashboard";
import Value from "../Component/Value/Value";
import User from "../Component/User/User";
import Account from "../Component/Account/Account";
import ApiDocs from "../Component/ApiDocs/ApiDocs";
import ApiKey from "../Component/ApiKey/ApiKey";
import TanStackTable from "../Component/TanStackTable/TanStackTable";
import DemoTable from "../Component/TanStackTable/DemoTable";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MenuAppBar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/value",
        element: <Value />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/apiDocs",
        element: <ApiDocs />,
      },
      {
        path: "/apiKey",
        element: <ApiKey />,
      },
      {
        path: "/table",
        element: <TanStackTable />,
      },
      {
        path : '/demoTable',
        element: <DemoTable/>
      }
    ],
  },
]);

export default route;
