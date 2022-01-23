import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
