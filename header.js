import React from 'react'
import './App.css'
import img from './meTube.png'

function Header(){
    return(
        <div>
          <header className="App-header">
            <img src={img} className="App-logo" alt="meTube" />
            <h4>meTube Videos</h4>
          </header>
        </div>
    )
}
export default Header