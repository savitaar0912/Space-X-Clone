import React from 'react'
import '../css/home.css'

export default function Home() {


  return (
    <>
      <div className="section2">
        <div className="in">
          RECENT LAUNCH
          <p>
            CR-28 MISSION
          </p>
          <button type="button" className="btn btn-outline-light"><a href="https://www.spacex.com/launches/mission/?missionId=crs-28">REWATCH</a></button>
        </div>
      </div>
      <div className="section3">
        <div className="in">
          COMPLETED LAUNCH
          <p>
            AX-2 MISSION
          </p>
          <button type="button" className="btn btn-outline-light"><a href="https://www.spacex.com/launches/mission/?missionId=ax-2">REWATCH</a></button>
        </div>
      </div>
      <div className="section4">
        <div className="in">
          <p>
            STARSHIP FLIGHT TEST
          </p>
          <button type="button" className="btn btn-outline-light"><a href="https://www.spacex.com/launches/mission/?missionId=starship-flight-test">REWATCH</a></button>
        </div>
      </div>
    </>
  )
}
