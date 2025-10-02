import { useEffect, useState } from "react";
import axios from "axios";
function GihtubUser(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `https://api.github.com/users/${props.userName}`
      );
      const data = response.data;
      setUser(data);
    }
    fetchUser();
  }, []);
  if (!user) return <p>Loading...</p>;
  return (
    <div>
      {" "}
      <h2>{user.name}</h2> <p>{user.bio}</p>{" "}
      <img src={user.avatar_url} alt={user.name} width="100" />{" "}
    </div>
  );
}
