/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

export function FavoritedPlantsIndex(props) {
  const [buttonColor, setButtonColor] = useState("bg-blue-500");

  const handleButtonClick = () => {
    setButtonColor((prevColor) => (prevColor === "bg-blue-500" ? "bg-red-500" : "bg-red-500"));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props.favorited_plants.map((favorited_plant) => (
        <div key={favorited_plant.id} className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">{favorited_plant.scientific_name}</h2>
          <img
            src={favorited_plant.image_url}
            alt={favorited_plant.scientific_name}
            className="w-full h-48 object-cover mb-4"
          />

          <div className="flex justify-between">
            <button
              className={`px-4 py-2 rounded-md ${
                favorited_plant.isFavorited ? "bg-red-500 text-white" : "bg-blue-500 text-white"
              } hover:bg-blue-600 focus:outline-none`}
              onClick={() => {
                favorited_plant.isFavorited = !favorited_plant.isFavorited;
                console.log("Changed favorite status");
              }}
            >
              {favorited_plant.isFavorited ? "Unfavorite" : "Favorite"}
            </button>

            <button
              className={`px-4 py-2 rounded-md ${
                favorited_plant.isDrinking ? "bg-green-500 text-white" : "bg-blue-500 text-white"
              }hover:bg-green-600 focus:outline-none`}
              onClick={() => {
                favorited_plant.isDrinking = !favorited_plant.isDrinking;
                axios
                  .post("http://localhost:3000/plants_scheduler.json", {
                    id: favorited_plant.id,
                    isDrinking: favorited_plant.isDrinking,
                  })
                  .then((response) => {
                    console.log(response.data);
                  })
                  .catch((error) => {
                    console.error("Error fetching data:", error);
                  });

                console.log("You have watered the plant!");
              }}
            >
              {favorited_plant.isDrinking ? "Drinking" : "Water"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
