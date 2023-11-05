import { PlantsIndex } from "./PlantsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

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
      <p>
        Search : <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button onClick={handleIndexPlants}>Submit</button>
      </p>
      <PlantsIndex plants={plants} />
    </div>
  );
}
