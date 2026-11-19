import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const names = ["Anil", "Ravi", "Kiran", "Arjun", "Sai"];

  const cities = [
    "Hyderabad",
    "Vizag",
    "Vijayanagaram",
    "Chennai",
    "Bangalore",
  ];

  const emails = [
    "anil@gmail.com",
    "ravi@gmail.com",
    "kiran@gmail.com",
    "arjun@gmail.com",
    "sai@gmail.com",
  ];

  const numbers = [
    "1234567890",
    "2345678901",
    "3456789012",
    "4567890123",
    "5678901234",
  ];

  return (
    <div className="app">
      <h1>User List</h1>

      {users.slice(0, 5).map((user, index) => (
        <div className="card" key={user.id}>
          <h2>{names[index]}</h2>
          <p>Email: {emails[index]}</p>
          <p>City: {cities[index]}</p>
          <p>Phone: {numbers[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default App;