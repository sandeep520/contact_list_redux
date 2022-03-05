import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AddContact from "./component/AddContact";
import EditContact from "./component/EditContact";

function App() {
  return (
    <>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/add" element={<AddContact/>}/>
        <Route exact path="/edit/:id" element={<EditContact/>} />



        
      </Routes>
    </div>
    </>
  );
}

export default App;
