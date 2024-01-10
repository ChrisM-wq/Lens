import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import ArticlesPage from "./pages/ArticlesPage";
import Profile from "./pages/Profile";

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
      // {
      //   path: "articles",
      //   element: <ArticlesPage />,
      // },
      {
        // New route for displaying a specific article by ID
        path: "article/:articleId", // Use a dynamic parameter ":articleId"
        element: <ArticlesPage />,
      },{
        // New route for displaying a specific article by ID
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;