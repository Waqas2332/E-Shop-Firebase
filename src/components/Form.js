import { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://first-site-3a9d7-default-rtdb.firebaseio.com/users.json",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <input
        type="text"
        placeholder="Enter Your Name ..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Enter You Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter Your Password ..."
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
