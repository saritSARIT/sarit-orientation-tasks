import { Outlet, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@components/Router/consts";
import { Navbar } from "@components/Navbar/Navbar";
import UserPage from "@pages/UserPage";
import CreateUserPage from "@pages/CreateUserPage";
import CreatePostPage from "@pages/CreatePostPage";
import EditPostPage from "@pages/EditPostPage";
import DeletePostPage from "@pages/DeletePostPage";
import PostsPage from "@pages/PostsPage";
import HomePage from "@pages/HomePage";

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.USERS.ROOT,
        children: [
          { index: true, element: <UserPage /> },
          { path: ROUTES.USERS.CREATE, element: <CreateUserPage /> },
        ],
      },
      {
        path: ROUTES.POSTS.ROOT,
        children: [
          { index: true, element: <PostsPage /> },
          { path: ROUTES.POSTS.CREATE, element: <CreatePostPage /> },
          { path: ROUTES.POSTS.EDIT, element: <EditPostPage /> },
          { path: ROUTES.POSTS.DELETE, element: <DeletePostPage /> },
        ],
      },
    ],
  },
]);