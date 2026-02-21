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
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profil from "./pages/Profil";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        {/* A közös útvonalak */}
        <Route element={user ? <UserLayout /> : <GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {user && (
          <Route element={<UserLayout />}>
            <Route path="/user/post/{post}/edit" element={<EditPost />} />
            <Route path="/user/post" element={<CreatePost />} />
            <Route path="/user" element={<Profil />} />
          </Route>
        )}

        {/* Ide kerülnek a vendég útvonalak*/}
        {!user && (
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
