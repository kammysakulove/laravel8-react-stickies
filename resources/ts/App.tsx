import { Button, Flex, Input } from "@chakra-ui/react";
import AppProvider from "./providers/app.tsx";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const http = axios.create({
    baseURL: "http://localhost:8080/laravel8-react-stickies",
    withCredentials: true,
  });

  const login = () => {
    http.get("/sanctum/csrf-cookie").then((res) => {
      http.post("/api/login", { email, password }).then((res) => {
        console.log(res);
        //setUsers(res);
      });
    });
  };
  const getUsers = () => {
    http.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  };
  return (
    <AppProvider>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.50" p={12} rounded={6}>
          <Input
            placeholder="user@test.jp"
            variant="outline"
            mb={3}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="*******"
            variant="outline"
            mb={6}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button colorScheme="teal" onClick={login}>
            ログイン
          </Button>
        </Flex>
      </Flex>
      <Button colorScheme="teal" onClick={getUsers}>
        一覧表示
      </Button>
      <div>
        {users.map((user) => {
          return <p key={user.id}>{user.email}</p>;
        })}
      </div>
    </AppProvider>
  );
};

export default App;
