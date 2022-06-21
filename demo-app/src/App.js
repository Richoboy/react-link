// import logo from './logo.svg';
import './App.css';
import Nav from './Componets/Nav';
// import Button from './Componets/Button';
// import {Bar} from "./Componets/comp"
// import {Btn} from "./Componets/comp"
// import {Reg} from "./Componets/comp"
// import {Header} from "./Componets/comp"
// import {Body} from "./Componets/comp"
// import {Footer} from "./Componets/comp"
// import {ParentComp} from "./Componets/comp"
import Navbar from "./Componets/Navbar"
// import Navdom from "./Componets/Navdom";
import Home from "./Componets/pages/home";
import Contact from "./Componets/pages/contact";
import Services from "./Componets/pages/services";
import { Routes, Route} from "react-router-dom"

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Button />
//       <Bar text = "Mike"/>
//       <Btn text = "Rich"/>
//       <Reg text = "Deb"/>
//     </div>
//   );
// }

// export default App; 
 
function App() {
  return (
    <div className="App">
        <Navbar /> 
        {/* <Navdom /> */}
       <div>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/services" element={<Services />} />
         </Routes>
       </div>
       
      {/* <div>
        <p>Hello</p>
      </div>
      <ParentComp />
      <Header />
      <Body />
      <Footer /> */}
      
    </div>
  );
}

export default App; 

