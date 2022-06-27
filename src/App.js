import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CoffeHouse from "./Pages/Home/CoffeHouse/CoffeHouse";
import BarHouse from './Pages/Home/BarHouse/BarHouse';
import HauteCuisine from './Pages/Home/HauteCuisine/HauteCuisine';
import RestaurantHome from './Pages/Home/RestaurantHome/RestaurantHome';
import MainHome from './Pages/Home/MainHome/MainHome';
import NavBar from './Pages/Shared/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/MainHome" element={<MainHome />} />
          <Route path="/CoffeHouse" element={<CoffeHouse />} />
          <Route path="/BarHouse" element={<BarHouse />} />
          <Route path="/HauteCuisine" element={<HauteCuisine />} />
          <Route path="/RestaurantHome" element={<RestaurantHome />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
