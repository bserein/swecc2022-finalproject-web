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
              <Route path="/cars" element={<CarList />} />
              <Route path="/cars/:id" element={<CarDetail />} />
              <Route path="/cars/addcar" element={<AddNewCar />} />
            </Routes>
         <Footer />
      </div>
    )
}
