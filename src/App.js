import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Footer from "./components/Footer";

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
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Products users={users} />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
