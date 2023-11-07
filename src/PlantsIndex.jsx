/* eslint-disable react/prop-types */
import { useState } from "react";

export function PlantsIndex(props) {
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");

  const toggleFavorite = (plant) => {
    if (favorites.includes(plant.id)) {
      // Send a DELETE request to remove the favorite
      fetch(`http://localhost:3000/favorited_plants/${plant.id}.json`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          setFavorites(favorites.filter((id) => id !== plant.id));
        } else {
          // Handle error if the DELETE request fails
          console.error("Failed to unfavorite the plant");
        }
      });
    } else {
      // Send a POST request to add the favorite
      fetch("http://localhost:3000/favorited_plants.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1, // Replace with the actual user ID
          plant_api_id: plant.id,
          scientific_name: plant.scientific_name,
          image_url: plant.default_image ? plant.default_image.small_url : "",
        }),
      }).then((response) => {
        if (response.ok) {
          setFavorites([...favorites, plant.id]);
        } else {
          // Handle error if the POST request fails
          console.error("Failed to favorite the plant");
        }
      });
    }
  };

  return (
    <div className="bg-green-100 p-4">
      <p>
        Search : <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button onClick={() => props.onIndexPlants(query)}>Submit</button>
      </p>
      {props.plants.map((plant) => (
        <div key={plant.id} className="bg-white rounded-lg p-4 mb-4 shadow-md">
          <h1 className="text-2xl font-semibold mb-2">{plant.scientific_name}</h1>
          <img
            src={plant.default_image ? plant.default_image.small_url : ""}
            alt=""
            className="w-32 h-32 rounded-lg mb-2"
          />
          <p className="text-gray-600 mb-2">Watering: {plant.watering}</p>
          <p className="text-gray-600 mb-2">Sunlight: {plant.sunlight}</p>
          <button
            onClick={() => toggleFavorite(plant)}
            className={`${
              favorites.includes(plant.id) ? "bg-pink-500" : "bg-green-500"
            } text-white rounded-lg px-4 py-2 hover:bg-opacity-80 transition duration-300`}
          >
            {favorites.includes(plant.id) ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      ))}
    </div>
  );
}
