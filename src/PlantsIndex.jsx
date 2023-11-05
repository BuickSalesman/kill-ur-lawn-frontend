export function PlantsIndex(props) {
  return (
    <div>
      <h1>All plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h1>{plant.scientific_name}</h1>
          <img src={plant.default_image ? plant.default_image.small_url : ""} alt="" />
          <p>{plant.watering}</p>
          <p>{plant.sunlight}</p>
        </div>
      ))}
    </div>
  );
}
