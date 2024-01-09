import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "write",
        element: <CreatePost />,
      },
    ],
  },
]);

export default router;