import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUsers from "./users/AddUsers"
import EditUser from './users/EditUsers';
import ViewUsers from './users/ViewUsers';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adduser" element={<AddUsers/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewusers/:id" element={<ViewUsers/>}/>

        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
