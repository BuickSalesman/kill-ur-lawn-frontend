import { PlantsIndex } from "./PlantsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { FavoritedPlantsIndex } from "./FavoritedPlantsIndex.jsx";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [plantsLoading, setPlantsLoading] = useState(false);

  const handleIndexPlants = (query) => {
    console.log("handleIndexPlants", query);
    setPlantsLoading(true);
    axios.get("http://localhost:3000/plants.json?query=" + query).then((response) => {
      console.log(response.data);
      setPlants(response.data);
      setPlantsLoading(false);
    });
  };

  const [favorited_plants, setFavoritedPlants] = useState([]);

  const handleIndexPhotos = () => {
    console.log("yo whaddup");
    axios.get("http://localhost:3000/favorited_plants.json").then((response) => {
      console.log(response.data);
      setFavoritedPlants(response.data);
    });
  };

  useEffect(handleIndexPhotos, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/favorited_plants" element={<FavoritedPlantsIndex favorited_plants={favorited_plants} />} />
        <Route
          path="/plants"
          element={
            plantsLoading ? <p>Loading...</p> : <PlantsIndex plants={plants} onIndexPlants={handleIndexPlants} />
          }
        />
      </Routes>
    </div>
  );
}
