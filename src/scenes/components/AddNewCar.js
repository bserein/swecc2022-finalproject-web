import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function AddNewCar() {
  const navigate = useNavigate();

  const [make, setMake] = useState();
  const [model, setModel] = useState();
  // const [image, setImage] = useState();
  // const [image2, setImage2] = useState();
  // const [image3, setImage3] = useState();
  // const [image4, setImage4] = useState();
  // const [description, setDescription] = useState();
  // const [description2, setDescription2] = useState();
  // const [description3, setDescription3] = useState();
  // const [description4, setDescription4] = useState();
  const [topSpeed, setTopSpeed] = useState();
  const [horsepower, setHorsepower] = useState();
  const [msrp, setMsrp] = useState();
  const [mpg, setMpg] = useState();
  const [fuelCapacity, setFuelCapacity] = useState();
  const [seatingCapacity, setSeatingCapacity] = useState();
  

  const addNewCarInfo = (event) => {
    if(!make || !model || !topSpeed || !horsepower || !msrp || !mpg || !fuelCapacity || !seatingCapacity){
      message.error("Uh Oh Looks Like You Forgot To Input A Field")
      return
    }
    event.preventDefault();
    fetch("https://final-project-bas.uk.r.appspot.com/cars/addcar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make,
        model,
        // photo: image,
        // photo2: image2,
        // photo3: image3,
        // photo4: image4,
        // description,
        // description2,
        // description3,
        // description4,
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

  const goBackHandle = () => {
    navigate('/cars')
  }

  return (
    <>
      <button onClick={goBackHandle} style={{marginTop: "70px" }}> Back to Home</button>
      <div className="new-car-form">
      <h3 style={{textAlign: "center"}}>Please Be As Accurate As You Can</h3>
      <Form >
        <Form.Item label="Make">
          <Input
          required
            placeholder="Example: Toyota"
            onChange={(event) => setMake(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Model:">
          <Input
          required
            placeholder="Example: Camry"
            onChange={(event) => setModel(event.target.value)}
          />
        </Form.Item>
        {/* <Form.Item label="Photo">
          <Input
          required
            placeholder="Please Input The Car Photos URL of The Front of the Car"
            type="url"
            onChange={(event) => setImage(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
          required
            placeholder="Please Input The Car Photos Description To The Best Of Your Abilities"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Photo">
          <Input
          required
            placeholder="Please Input The Car Photos URL of The Back of the Car"
            type="url"
            onChange={(event) => setImage2(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
          required
            placeholder="Please Input The Car Photos Description To The Best Of Your Abilities"
            onChange={(event) => setDescription2(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Photo">
          <Input
          required
            placeholder="Please Input The Car Photos URL of The Front Interior of the Car"
            type="url"
            onChange={(event) => setImage3(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
          required
            placeholder="Please Input The Car Photos Description To The Best Of Your Abilities"
            onChange={(event) => setDescription3(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Photo">
          <Input
          required
            placeholder="Please Input The Car Photos URL of The Back Interior of the Car"
            type="url"
            onChange={(event) => setImage4(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
          required
            placeholder="Please Input The Car Photos Description To The Best Of Your Abilities"
            onChange={(event) => setDescription4(event.target.value)}
          />
        </Form.Item> */}
        <Form.Item label="Top Speed">
          <Input
          required
            placeholder="Example: 134"
            type="numeric"
            onChange={(event) => setTopSpeed(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Horsepower">
          <Input
          required
            placeholder="Example: 301"
            onChange={(event) => setHorsepower(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="MSRP">
          <Input
          required
            placeholder="Example: 26,320"
            onChange={(event) => setMsrp(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="MPG">
          <Input
          required
            placeholder="Example: 28 / 39"
            onChange={(event) => setMpg(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Fuel Capacity">
          <Input
          required
            placeholder="Example: 15.8"
            type="numeric"
            onChange={(event) => setFuelCapacity(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Seating Capacity">
          <Input
          required
            placeholder="Example: 5"
            type="numeric"
            onChange={(event) => setSeatingCapacity(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="submit"
            onClick={addNewCarInfo}
            style={{padding: "10px 350px", fontSize: "Large", fontWeight: 300}}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
}
