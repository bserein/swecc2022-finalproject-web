import React, { useEffect } from "react";
import { Card, Rate, Col, Row, Select } from 'antd';
import { Link } from "react-router-dom";


const { Meta } = Card;
const { Option, OptGroup } = Select;


export default function CarList({cars, setCars}){
  
    useEffect(() => {
        fetch("https://final-project-bas.uk.r.appspot.com/cars")
          .then((response) => response.json())
          .then((data) => setCars(data))
          .catch(alert);
      }, []);

      function handleChange(value) {

        console.log(`selected ${cars.make}`)
      }

    return ( 
        <>
        <button style={{marginTop: 70}}>I am Here</button>
        <Select defaultValue="make" style={{ width: 120 }} onChange={handleChange}>
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
      <Select defaultValue="make" style={{ width: 200 }} onChange={handleChange}>
    <OptGroup label="Audi">
      <Option value="A8">A8</Option>
      <Option value="Q5">Q5</Option>
      <Option value="R8">R8</Option>
    </OptGroup>
    <OptGroup label="BMW">
      <Option value="i8">i8</Option>
      <Option value="M7">M7</Option>
      <Option value="X5">X5</Option>
    </OptGroup>
    <OptGroup label="Chevrolet">
      <Option value="Equinox">Equinox</Option>
      <Option value="Malibu">Malibu</Option>
      <Option value="Spark">Spark</Option>
    </OptGroup>
    <OptGroup label="Dodge">
      <Option value="Challenger">Challenger</Option>
      <Option value="Charger">Charger</Option>
      <Option value="Durango">Durango</Option>
    </OptGroup>
    <OptGroup label="Ford">
      <Option value="F150">F150</Option>
      <Option value="Maverick">Maverick</Option>
      <Option value="Mustang">Mustang</Option>
    </OptGroup>
    <OptGroup label="Honda">
      <Option value="Civic">Civic</Option>
      <Option value="Insight">Insight</Option>
      <Option value="Odyssey">Odyssey</Option>
      <Option value="Pilot">Pilot</Option>
    </OptGroup>
    <OptGroup label="Hyundai">
      <Option value="Elantra">Elantra</Option>
      <Option value="Tucson">Tucson</Option>
      <Option value="Veloster">Veloster</Option>
    </OptGroup>
    <OptGroup label="Jeep">
      <Option value="Gladiator">Gladiator</Option>
      <Option value="Grand Cherokee">Grand Cherokee</Option>
      <Option value="Wrangler">Wrangler</Option>
    </OptGroup>
    <OptGroup label="Mazda">
      <Option value="3">3</Option>
      <Option value="CX5">CX5</Option>
      <Option value="Miata">Miata</Option>
    </OptGroup>
    <OptGroup label="Mercedes-Benz">
      <Option value="E350">E350</Option>
      <Option value="GLC 450">GLC 450</Option>
      <Option value="S450">S450</Option>
    </OptGroup>
    <OptGroup label="Nissan">
      <Option value="Altima">Altima</Option>
      <Option value="GTR">GTR</Option>
      <Option value="Rogue">Rogue</Option>
    </OptGroup>
    <OptGroup label="Porsche">
      <Option value="911">911</Option>
      <Option value="Cayenne">Cayenne</Option>
      <Option value="Panamera">Panamera</Option>
    </OptGroup>
    <OptGroup label="Tesla">
      <Option value="Model 3">Model 3</Option>
      <Option value="Model S">Model S</Option>
      <Option value="Model X">Model X</Option>
    </OptGroup>
    <OptGroup label="Toyota">
      <Option value="Camry">Camry</Option>
      <Option value="Corolla">Corolla</Option>
      <Option value="Supra">Supra</Option>
    </OptGroup>
  </Select>,
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one or multiple makes"
    defaultValue={[]}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="Audi" label="Audi">
      <div className="demo-option-label-item">
        Audi
      </div>
    </Option>
    <Option value="BMW" label="BMW">
      <div className="demo-option-label-item">
        BMW
      </div>
    </Option>
    <Option value="Chevrolet" label="Chevrolet">
      <div className="demo-option-label-item">
        Chevrolet
      </div>
    </Option>
    <Option value="Dodge" label="Dodge">
      <div className="demo-option-label-item">
        Dodge
      </div>
    </Option>
    <Option value="Ford" label="Ford">
      <div className="demo-option-label-item">
        Ford
      </div>
    </Option>
    <Option value="Honda" label="Honda">
      <div className="demo-option-label-item">
        Honda
      </div>
    </Option>
    <Option value="Hyundai" label="Hyundai">
      <div className="demo-option-label-item">
        Hyundai
      </div>
    </Option>
    <Option value="Jeep" label="Jeep">
      <div className="demo-option-label-item">
        Jeep
      </div>
    </Option>
    <Option value="Mazda" label="Mazda">
      <div className="demo-option-label-item">
        Mazda
      </div>
    </Option>
    <Option value="Mercedes-Benz" label="Mercedes-Benz">
      <div className="demo-option-label-item">
        Mercedes-Benz
      </div>
    </Option>
    <Option value="Nissan" label="Nissan">
      <div className="demo-option-label-item">
        Nissan
      </div>
    </Option>
    <Option value="Porsche" label="Porsche">
      <div className="demo-option-label-item">
        Porsche
      </div>
    </Option>
    <Option value="Tesla" label="Tesla">
      <div className="demo-option-label-item">
        Tesla
      </div>
    </Option>
    <Option value="Toyota" label="Toyota">
      <div className="demo-option-label-item">
        Toyota
      </div>
    </Option>
  </Select>
        <div className="cards-wrapper" style={{marginTop: 20}}>
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