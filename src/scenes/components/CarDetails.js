import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rate, Button } from "antd";

export default function CarDetail() {
  const [car, setCar] = useState({}); 
  const [rating, setRating] = useState();
  const params = useParams();

  const handleRating = () => {
    fetch(`http://localhost:4325/cars/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: rating }),
    })
    .then(response => response.json())
    .then(() => setRating(0))
    .catch(alert)
  }

  useEffect(() => {
    fetch(`http://localhost:4325/cars/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch(alert);
  }, [rating]);

  if (!car.photo) {
    return <p>Loading</p>;
  }

  return (
    <section className="detail-wrapper">
      <img src={car.photo} alt={`This photo shows a ${car.description}`} />
      <div className="car-detail-wrapper">
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 0 }}>
        {" "}
        {car.make} {' '} 
        {car.model}
      </h1>
      <Rate disabled defaultValue={car.averageRating} />
      <span> ({`${car.numberOfRatings} ratings`})</span>
      <hr />
      <h3>{`MSRP: $${car.msrp}`} </h3>
      <h3> {`Top Speed: ${car.topSpeed} mph`}</h3>
      <h3> {`Horsepower: ${car.horsepower} hp`}</h3>
      <h3> {`Fuel Tank Capacity: ${car.fuelCapacity} gallons`}</h3>
      <h3> {`mpg city ${car.mpg} highway`}</h3>
      <h3> {`Seating Capacity: ${car.seatingCapacity}`}</h3>
      <hr />
      <h2 style={{ marginTop: "10px", fontSize: 28, fontWeight: 700 }}>
        {" "}
        Rate 
        {" "}
        {car.make} {car.model}
      </h2>

      <div className="submit-rating">
          <p> Please Rate Your Opinion On The Selected Vehicles </p>
      <Rate value={rating} onChange={(value) => setRating(value)} />
      <Button onClick={handleRating} type="primary" size={"large"} style={{marginTop: '20px'}}>Submit Rating</Button>
      </div>
      </div>
    </section>
  );
}