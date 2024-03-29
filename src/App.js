import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import "./App.css";
import Mens from './routes/Category/Mens/Mens';
import Womens from './routes/Category/Womens/Womens';
import Hats from './routes/Category/Hats/Hats';
import Shoes from './routes/Category/Shoes/Shoes';
import LogIn from './routes/LogIn/LogIn';
import Register from './routes/SignUp/SignUp';
import Stock from "./routes/Stock/Stock";
import Switcher from './components/Switcher/Switcher.component'
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Home />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Hats" element={<Hats />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/Stock" element={<Stock />} />          
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<Register />} />
          <Route path="/Switcher" element={<Switcher />} />

          
          <Route path="*" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
