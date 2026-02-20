import logo from "./logo.svg";
import "./App.css";
import useAuthContext from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import UserLayout from "./layouts/UserLayout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route element={user ? <UserLayout /> : <GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {!user && (
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
