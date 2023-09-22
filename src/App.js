import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function getAllUsers() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://first-site-3a9d7-default-rtdb.firebaseio.com/products.json"
      );
      console.log(response);
      const { data } = response;

      const keyArray = Object.keys(data);

      const dataArray = keyArray.map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log(dataArray);
      setUsers(dataArray);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    console.log("HEllo");
    getAllUsers();
  }, []);
  console.log(users);
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Products users={users} isLoading={isLoading} />}
        />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
