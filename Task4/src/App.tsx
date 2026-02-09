import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import CreateUserPage from "./pages/CreateUserPage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import DeletePostPage from "./pages/DeletePostPage";
import PostsPage from "./pages/PostsPage";
import HomePage from "./pages/HomePage";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {ROUTES} from "@components/Navbar/consts";

function App() {
  
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.USERS} element={<UserPage />} />
          <Route path={ROUTES.CREATE_USER} element={<CreateUserPage />} />
          <Route path={ROUTES.POSTS} element={<PostsPage />} />
          <Route path={ROUTES.CREATE_POST} element={<CreatePostPage />} />
          <Route path={ROUTES.EDIT_POST} element={<EditPostPage />} />
          <Route path={ROUTES.DELETE_POST} element={<DeletePostPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
