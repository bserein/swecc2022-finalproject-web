import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Rate, Button, message, Carousel, Spin, Space } from "antd";


export default function CarDetail() {
  const [car, setCar] = useState({});
  const [rating, setRating] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const handleRating = () => {
    if(rating === 0){
      message.error("Uh Oh Looks Like You Forgot To Put A Rating")
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
    .then(navigate('/cars'))
    .then(success => message.success('Thank You For Your Rating'))
  }

  const goBackHandle = () => {
    navigate('/cars')
  }

  useEffect(() => {
    fetch(`https://final-project-bas.uk.r.appspot.com/cars/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch(alert);
  }, []);

  if (!car.photo) {
    return <Space style={{textAlign: "center", marginTop: 80, marginLeft: 200}}>
    <Spin size="large" />
  </Space>;
  }

  return (
    <>
    <button onClick={goBackHandle} style={{marginTop: "70px" }}> Back to Home</button>
    <section className="detail-wrapper" style={{marginTop: 20}}>
      <Carousel autoplay>
    <div>
      <img src={car.photo} alt={`This shows a ${car.description}`} />
    </div>
    <div>
    <img src={car.photo2} alt={`This shows a ${car.description2}`} />
    </div>
    <div>
    <img src={car.photo3} alt={`This shows a ${car.description3}`} />
    </div>
    <div>
    <img src={car.photo4} alt={`This shows a ${car.description4}`} />
    </div>
  </Carousel>
      <div className="car-detail-wrapper">
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 0}}>
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
      <h3> {`MPG City ${car.mpg} Highway`}</h3>
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
    </>
  );
}