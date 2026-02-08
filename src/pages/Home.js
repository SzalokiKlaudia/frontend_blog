import useAuthContext from "../context/AuthContext";

function Home() {
  const { user } = useAuthContext();

  if (!user) {
    return <div>Loading...</div>;
  }
  return <div>{user.name}</div>;
}

export default Home;
