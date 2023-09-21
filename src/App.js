import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import AddUser from "./pages/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  async function getAllUsers() {
    try {
      const response = await axios.get(
        "https://first-site-3a9d7-default-rtdb.firebaseio.com/users.json"
      );
      const { data } = response;

      const keyArray = Object.keys(data);

      const dataArray = keyArray.map((key) => ({
        id: key,
        ...data[key],
      }));

      setUsers(dataArray);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(users);
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<User users={users} />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
