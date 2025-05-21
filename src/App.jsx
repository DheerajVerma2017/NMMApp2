import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Dashboard, Purchase, Inventory, Sales, Billprint,  View, Company, Settings, Login, Signup, Logout,} from "./Components/Pages/Index";
// import { Dashboard } from "./Components/Pages/Dashboard";
// import { Purchase } from "./Components/Pages/Purchase";
// import { Inventory } from "./Components/Pages/Inventory"; Reports
function App () {
 return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/billprint" element={<Billprint/>}/>
        <Route path="/view" element={<View/>}/>
        {/* <Route path="/reports" element={<Reports/>}/> */}
        <Route path="/company" element ={<Company/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/logout" element = {<Logout/>}/>
        {/* Add more routes here */}
      </Routes>
    </div>
    </>
  );
}

export default App;
























