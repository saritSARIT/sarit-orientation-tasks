import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import CreateUserPage from "./pages/CreateUserPage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import DeletePostPage  from "./pages/DeletePostPage";
import PostsPage from "./pages/PostsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Users" element={<UserPage />} />
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/create" element={<CreatePostPage />} />
        <Route path="/posts/edit/:id" element={<EditPostPage />} />
        <Route path="/posts/delete/:id" element={<DeletePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
