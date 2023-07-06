import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NewBlog from "../pages/NewBlog";
import Followed from "../pages/Follewed";
import Followers from "../pages/Follewers";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Favorites from "../pages/Favorites"
import MyBlog from "../pages/MyBlogs"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="blog" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="followed" element={<Followed />} />
            <Route path="myblog" element={<MyBlog />} />
            <Route path="followers" element={<Followers />} />
            <Route path="newblog" element={<NewBlog />} />
            <Route path="notfound" element={<NotFound />} />
            <Route path="favorite" element={<Favorites />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
