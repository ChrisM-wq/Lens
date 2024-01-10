import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import ArticlesPage from "./pages/ArticlesPage";

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
      },
    ],
  },
]);

export default router;