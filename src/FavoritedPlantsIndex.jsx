export function FavoritedPlantsIndex(props) {
  return (
    <div>
      <h1>All photos</h1>
      {props.favorited_plants.map((favorited_plant) => (
        <div key={favorited_plant.id}>
          <h2>{favorited_plant.scientific_name}</h2>
          <img src={favorited_plant.image_url} />
        </div>
      ))}
    </div>
  );
}
