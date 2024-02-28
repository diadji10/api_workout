import "./App.css";
// import listOfUser from "./UserList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h2>hello world !</h2>
      <ul>
        {listOfUser.map((user) => {
          <li>{user.id}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
