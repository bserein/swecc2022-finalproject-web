import { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function AddNewCar() {
  const navigate = useNavigate();

  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [topSpeed, setTopSpeed] = useState();
  const [horsepower, setHorsepower] = useState();
  const [msrp, setMsrp] = useState();
  const [mpg, setMpg] = useState();
  const [fuelCapacity, setFuelCapacity] = useState();
  const [seatingCapacity, setSeatingCapacity] = useState();
  

  const addNewCarInfo = (event) => {
    event.preventDefault();
    fetch("https://final-project-bas.uk.r.appspot.com/cars/addcar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make,
        model,
        photo: image,
        description,
        topSpeed,
        horsepower,
        msrp,
        mpg,
        fuelCapacity,
        seatingCapacity,
      }),
    })
          .then(navigate("/cars"))
          .then((success) =>
            message.success("Thank you, an admin will review your information")
          );       
  };


  return (
    <>
      <h1 style={{ marginTop: 60 }}>you made it</h1>
      <Form>
        <Form.Item label="Make">
          <Input
          required
            placeholder="Please input the car make"
            onChange={(event) => setMake(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Model:">
          <Input
          required
            placeholder="Please input the car model"
            onChange={(event) => setModel(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Photo">
          <Input
          required
            placeholder="Please input the cars photo URL"
            type="url"
            onChange={(event) => setImage(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
          required
            placeholder="Please input the car photos description to the best of your abilities"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Top Speed">
          <Input
          required
            placeholder="Please input the cars top speed"
            type="numeric"
            onChange={(event) => setTopSpeed(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Horsepower">
          <Input
          required
            placeholder="Please input the cars estimated horsepower "
            onChange={(event) => setHorsepower(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="MSRP">
          <Input
          required
            placeholder="Please input the cars Manufactured Sale Retail Price"
            onChange={(event) => setMsrp(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="MPG">
          <Input
          required
            placeholder="Please input the cars mpg in city and highway"
            onChange={(event) => setMpg(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Fuel Capacity">
          <Input
          required
            placeholder="Please input the cars fuel tank capacity in gallons"
            type="numeric"
            onChange={(event) => setFuelCapacity(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Seating Capacity">
          <Input
          required
            placeholder="Please input the cars seating capacity"
            type="numeric"
            onChange={(event) => setSeatingCapacity(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="submit"
            onClick={addNewCarInfo}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
