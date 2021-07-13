import axios from "axios";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/users/3")
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        }}
      >
        id="1"のユーザー
      </button>
    </div>
  );
}
