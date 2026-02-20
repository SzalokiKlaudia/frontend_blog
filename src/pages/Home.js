import { useEffect, useState } from "react";
import useAuthContext from "../context/AuthContext";
import { myAxios } from "../api/axios";
import Posts from "../components/Posts";

function Home() {
  const { user } = useAuthContext();
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const { data } = await myAxios.get("/api/posts");
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export default Home;
