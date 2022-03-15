import React, { useState, useEffect } from "react";
import { Card, Rate, Col, Row, Select } from 'antd';
import { Link } from "react-router-dom";


const { Meta } = Card;
const { Option } = Select;
export default function CarList(){
  const [cars, setCars] = useState([])
  const [carType,setCarType] = useState();
  const [seats, setSeats] = useState();
  const [stars,setStars] = useState();
  const [carsList, setCarsList] = useState()

  useEffect(() => {
    let filteredList = cars
    if(carType){
      filteredList = filteredList.filter((cars) => cars.make === carType)
    } if (stars){
      filteredList = filteredList.filter((cars) => cars.averageRating >= stars)
    } if (seats){
      filteredList = filteredList.filter((cars) => cars.seatingCapacity === seats)
    }
    setCarsList(filteredList)
  }, [carType, stars, seats, cars])

  
    useEffect(() => {
        fetch("https://final-project-bas.uk.r.appspot.com/cars")
          .then((response) => response.json())
          .then((data) => setCars(data))
          .catch(alert);
      }, []);

    return ( 
        <>
      <span style={{marginTop: "70px" }}>make:</span>
     <Select defaultValue="make" style={{ width: 120, marginTop: "70px" }} onChange={setCarType}>
      <Option value="">All</Option>
      <Option value="Audi">Audi</Option>
      <Option value="BMW">BMW</Option>
      <Option value="Chevrolet">Chevrolet</Option>
      <Option value="Dodge">Dodge</Option>
      <Option value="Ford">Ford</Option>
      <Option value="Honda">Honda</Option>
      <Option value="Hyundai">Hyundai</Option>
      <Option value="Jeep">Jeep</Option>
      <Option value="Mazda">Mazda</Option>
      <Option value="Mercedes-Benz">Mercedes-Benz</Option>
      <Option value="Nissan">Nissan</Option>
      <Option value="Porsche">Porsche</Option>
      <Option value="Tesla">Tesla</Option>
      <Option value="Toyota">Toyota</Option>
      </Select>
      <span style={{marginTop: "70px" }}>seats</span>
      <Select defaultValue="seats" style={{ width: 120, marginTop: "70px" }} onChange={setSeats}>
      <Option value="">All</Option>
      <Option value="2">2</Option>
      <Option value="4">4</Option>
      <Option value="5">5</Option>
      <Option value="6-7">6-7</Option>
      <Option value="7-8">7-8</Option>
      <Option value="8">8</Option>
      </Select>
      <span style={{marginTop: "70px" }}>Ratings</span>
      <Select defaultValue="Ratings" style={{ width: 120, marginTop: "70px" }} onChange={setStars}>
      <Option value="">All</Option>
      <Option value={1}>⭐️</Option>
      <Option value={2}>⭐️⭐️</Option>
      <Option value={3}>⭐️⭐️⭐️</Option>
      <Option value={4}>⭐️⭐️⭐️⭐️</Option>
      <Option value={5}>⭐️⭐️⭐️⭐️⭐️</Option>
      </Select>
        <div className="cards-wrapper" style={{marginTop: 20}}>
      <Row gutter={16}>
        {!carsList
        ? <p>loading </p>
        : carsList.map((car) => {
          return (
            <Col key={car.id}>
                <Link to={`/cars/${car.id}`}>
              <Card
                hoverable
                cover={<img alt={`pictures of ${car.description}`} src={car.photo}/>}
              >
                <Meta title={`${car.make} ${car.model}` } />
                <Rate disabled defaultValue={car.averageRating} />
              </Card>
              </Link>
            </Col>
          );
        })
        }
      </Row>
    </div>
    </>
    )
}