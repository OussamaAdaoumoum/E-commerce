import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import "./App.css";
import Mens from './routes/Category/Mens/Mens';
import Womens from './routes/Category/Womens/Womens';
import Bags from './routes/Category/Bags/Bags';
import Shoes from './routes/Category/Shoes/Shoes';
import LogIn from './routes/LogIn/LogIn';
import SignUp from './routes/SignUp/SignUp';
import ItemStock from "./components/Item-Stock/Item-Stock.component";
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Home />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Bags" element={<Bags />} />
          <Route path="/Shoes" element={<Shoes />} />
          
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ItemStock" element={<ItemStock />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
    </>
  );
}

export default App;
