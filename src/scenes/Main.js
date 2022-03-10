import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetails";
import { useState } from "react";
import AddNewCar from './components/AddNewCar'

const { Header, Footer, Content } = Layout;

export default function Main(){
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});
  const navigate = useNavigate();

  const AddNew = () => {
    navigate('/cars/addcar')
  }
    return (
        <>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 999, width: "100%" }}>
            <Link to={`/cars`}>

            </Link>
              <Link to="/cars/addcar">
              </Link>
              <button onClick={AddNew}>Add New Car</button>
            
          </Header>
          <Content>
            <Routes>
              <Route path="/cars" element={<CarList cars={cars} setCars={setCars} />} />
              <Route path="/cars/:id" element={<CarDetail car={car} setCar={setCar}/>} />
              <Route path="/cars/addcar" element={<AddNewCar />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            &copy; 2022, Car Hopper
          </Footer>
        </Layout>
      </>
    )
}