import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
          <h2>Simple RPS</h2>
          <form>
            <label htmlFor="bestof">Best Of:</label>
            <input type="number" name="bestof" id="bestof" />
            <button type="submit">Start</button>
          </form>

          <h2>Highschore:</h2>
          <p>20</p>
    </div>
  )
}

export default App
