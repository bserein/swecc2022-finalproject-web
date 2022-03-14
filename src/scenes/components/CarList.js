import React, { useState, useEffect } from "react";
import { Card, Rate, Col, Row, Select } from 'antd';
import { Link } from "react-router-dom";


const { Meta } = Card;
const { Option } = Select;
export default function CarList(){
  const [cars, setCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([]);
  const [carType,setCarType] = useState();

const carModels = [
  {label: 'Audi', value: 'Audi'},
  {label: 'BMW', value: 'BMW'},
  {label: 'Chevrolet', value: 'Chevrolet'},
  {label: 'Dodge', value: 'Dodge'},
  {label: 'Ford', value: 'Ford'},
  {label: 'Honda', value: 'Honda'},
  {label: 'Hyundai', value: 'Hyundai'},
  {label: 'Jeep', value: 'Jeep'},
  {label: 'Mazda', value: 'Mazda'},
  {label: 'Mercedes-Benz', value: 'Mercedes-Benz'},
  {label: 'Nissan', value: 'Nissan'},
  {label: 'Porsche', value: 'Porsche'},
  {label: 'Tesla', value: 'Tesla'},
  {label: 'Toyota', value: 'Toyota'},
]

  useEffect(() => {
    // filter cars here;
    console.log(`${carType} type changed`);
    const filtered = !carModels
    ? cars
    : cars.filter((carType) =>
        carType.make.includes(cars.make)
      );
  }, [carModels,])
  
    useEffect(() => {
        fetch("https://final-project-bas.uk.r.appspot.com/cars")
          .then((response) => response.json())
          .then((data) => setCars(data))
          .catch(alert);
      }, []);

      function handleChange(event) {
        const value = event.target.value;
        console.log(`selected ${value}`)
        setCarType(value);
      }

    return ( 
        <>
     <Select defaultValue="make" style={{ width: 120, marginTop: "70px" }} onChange={handleChange}>
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
        {filteredCars?.map((car) => {
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