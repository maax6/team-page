import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./sass/App.scss";

function App() {
 const [count, setCount] = useState(0);

 return (
  <div className="App">
   <header className="header">
    <h1 className="header__h1" style={{ fontFamily: "PT Serif", color: "#000000" }}>
     The creative crew
    </h1>
    <div className=" header__texts">
     <h3 className="header__texts__h3" style={{ fontFamily: "Poppins" }}>
      WHO WE ARE
     </h3>
     <p className="header__texts__p">
      We are team of creatively diverse. driven. innovative individuals working
      in various locations from the world.
     </p>
    </div>
   </header>
  </div>
 );
}

export default App;
