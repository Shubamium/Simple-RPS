import React from 'react'

export default function Home() {
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
