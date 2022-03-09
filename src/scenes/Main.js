import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetails";

const { Header, Footer, Content } = Layout;

export default function Main(){
    return (
        <>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 999, width: "100%" }}>
            <Link to={`/cars`}>

            </Link>
          </Header>
          <Content>
            <Routes>
              <Route path="/cars" element={<CarList />} />
              <Route path="/cars/:id" element={<CarDetail />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            &copy; 2022, Car Hopper
          </Footer>
        </Layout>
      </>
    )
}