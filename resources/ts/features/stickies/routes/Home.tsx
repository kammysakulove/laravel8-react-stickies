import { useEffect, useState } from "react";
import { http } from "@/lib/http.ts";

export const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    http.get("/api/test").then((res) => {
      setUsers(res);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        {users.map((user) => {
          return <p key={user.id}>{user.email}</p>;
        })}
      </div>
    </>
  );
};
