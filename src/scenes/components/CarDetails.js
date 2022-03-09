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
      <div className="restaurant-detail-wrapper">
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 0 }}>
        {" "}
        {car.make} 
        {car.model}
      </h1>
      <Rate disabled defaultValue={car.averageRating} />
      <span> ({car.numberOfRatings})</span>
      <hr />
      <h3> {car.make} {car.model}</h3>
      <hr />
      <h2 style={{ marginTop: "20px", fontSize: 28, fontWeight: 700 }}>
        {" "}
        Rate {car.make} {car.model}
      </h2>

      <div className="submit-rating">
          <p>Please Rate Your Experience</p>
      <Rate value={rating} onChange={(value) => setRating(value)} />
      <Button onClick={handleRating} type="primary" size={"large"} style={{marginTop: '20px'}}>Submit Rating</Button>
      </div>
      </div>
    </section>
  );
}