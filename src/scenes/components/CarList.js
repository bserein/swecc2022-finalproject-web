import React, { useEffect } from "react";
import { Card, Rate, Col, Row } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;


export default function CarList({cars, setCars}){
  
    useEffect(() => {
        fetch("http://localhost:4325/cars")
          .then((response) => response.json())
          .then((data) => setCars(data))
          .catch(alert);
      }, []);

    return ( 
        <>
       
        <div className="cards-wrapper">
      <Row gutter={16}>
        {cars.map((car) => {
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