import { PlantsIndex } from "./PlantsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");

  const handleIndexPlants = () => {
    console.log("handleIndexPlants", query);
    axios.get("http://localhost:3000/plants.json?query=" + query).then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
      </Routes>
      <p>
        Search : <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button onClick={handleIndexPlants}>Submit</button>
      </p>
      <PlantsIndex plants={plants} />
    </div>
  );
}
