import React, { useState, useEffect } from "react";
import { Card, Rate, Col, Row, Select } from 'antd';
import { Link } from "react-router-dom";


const { Meta } = Card;
const { Option } = Select;
export default function CarList(){
  const [cars, setCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([]);
  const [carType,setCarType] = useState();

  useEffect(() => {
    // filter cars here;
    console.log(`${carType} type changed`);
    if(carType && cars) {
        const filtered = cars.filter((car) => {
          return car.make === carType;
        })
        setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  }, [cars, carType])
  
    useEffect(() => {
        fetch("https://final-project-bas.uk.r.appspot.com/cars")
          .then((response) => response.json())
          .then((data) => setCars(data))
          .catch(alert);
      }, []);

      function handleChange(value) {
        console.log(`selected ${value}`)
        setCarType(value);
      }

    return ( 
        <>
     <Select defaultValue="make" style={{ width: 120, marginTop: "70px" }} onChange={handleChange}>
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
        <div className="cards-wrapper" style={{marginTop: 20}}>
      <Row gutter={16}>
        {filteredCars.map((car) => {
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
        })}
      </Row>
    </div>
    </>
    )
}