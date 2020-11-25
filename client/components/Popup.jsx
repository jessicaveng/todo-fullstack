import React from 'react'

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup-inner">

      <p>{props.text}</p>
      <button className="popup-inner-button" onClick={() => props.confirm()}>Destroy</button>
      <button className="popup-inner-button" onClick={() => props.cancel()}>Cancel</button>

      </div>
    </div>
  )
}

export default Popup