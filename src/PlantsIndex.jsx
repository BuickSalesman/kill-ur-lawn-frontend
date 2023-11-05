import React, { useState } from "react";

export function PlantsIndex(props) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (plantId) => {
    if (favorites.includes(plantId)) {
      setFavorites(favorites.filter((id) => id !== plantId));
    } else {
      setFavorites([...favorites, plantId]);
    }
  };

  return (
    <div className="bg-green-100 p-4">
      <h1 className="text-3xl font-bold mb-4">All plants</h1>
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
            onClick={() => toggleFavorite(plant.id)}
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
