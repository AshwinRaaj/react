import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <div className="banner"></div>
      <div className="menu">
        <div className="menuitem"><a href="index.html">Home</a></div>
        <div className="menuitem"><a href="products.html">Products</a></div>
        <div className="menuitem"><a href="People.html">People</a></div>
        <div className="menuitem"><a href="contactus.html">Contact Us</a></div>
        </div>
      <div className="content">
        <div className="homecontent">
          <h1>About Us</h1>
          <img src="office.jpg" alt="Building" />
          <div className="contenttext">
            Bungie, Inc. is an American video game company based in Bellevue, Washington, and a subsidiary of Sony Interactive Entertainment.
            <br/><br/>
            The company was established in May 1991 by Alex Seropian, who later brought in programmer Jason Jones after publishing Jones's game Minotaur: The Labyrinths of Crete
            <br/><br/>
            Originally based in Chicago, Illinois, the company concentrated on Macintosh games during its early years and created two successful video game franchises called Marathon and Myth.
          </div>
        </div>
      </div>
      <div className="footer">
        Copyright &#169; 2024 Bungie Games, Developed by Ashwin Raaj.
      </div>
    </div>
    </>
  )
}

export default App
