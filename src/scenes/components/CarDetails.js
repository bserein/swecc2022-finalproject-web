import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Rate, Button, message } from "antd";


export default function CarDetail() {
  const [car, setCar] = useState({});
  const [rating, setRating] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const handleRating = () => {
    if(rating === 0){
      message.error("uh oh looks like you forgot to put a rating")
      return
    }

    fetch(`https://final-project-bas.uk.r.appspot.com/cars/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: rating }),
    })
    .then((response) => response.json())
    // .then(() => setRating())
    .then(navigate('/cars'))
    .then(success => message.success('Thank you for your rating'))
    .catch(error => message.error("uh oh looks like you forgot to put a rating"))
  }

  useEffect(() => {
    fetch(`https://final-project-bas.uk.r.appspot.com/cars/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch(alert);
  }, []);

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
      <Button onClick={handleRating} type="primary" size={"large"} style={{marginTop: '20px'}}
      > Submit Rating</Button>
      </div>
      </div>
    </section>
  );
}