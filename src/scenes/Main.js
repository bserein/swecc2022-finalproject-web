import { Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetails";
import AddNewCar from './components/AddNewCar'
import Header from "./Header";
import Footer from "./Footer";

export default function Main({setToken}){
  
  
    return (
        <div style={{backgroundColor: "WhiteSmoke"}}>
       <Header setToken={setToken}/>
            <Routes>
              <Route path="/" element={<CarList />} />
              <Route path="/:id" element={<CarDetail />} />
              <Route path="/addcar" element={<AddNewCar />} />
            </Routes>
         <Footer />
      </div>
    )
}
