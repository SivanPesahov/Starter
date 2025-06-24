import { useEffect, useState } from "react";
import api from "../services/api.service";
import type { User } from "../types/userType";

function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    async function getAllUsers() {
      try {
        const { data } = await api.get("/Auth/getAllUsers");
        setUsers(data);
      } catch (error: any) {
        console.log(error);
      }
    }
    getAllUsers();
  }, []);
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user: User, index: number) => (
          <li key={index}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
