import React from "react"
import ReactDOM from "react-dom/client"

/**
 *  Header
 *   -Logo
 *   -Nav-bar
 * 
 *  Body
 *   -Search
 *   -Res-continer
 *   -Res-card
 * 
 *  Footer
 *   - Copyright
 *   - Links
 *   - Adress 
 *   - Contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
       <img className="logo-items" src="https://logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}



const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
      
   