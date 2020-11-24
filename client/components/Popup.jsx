import React from 'react'

const Popup = (props) => {
  return (
    <div className="popup">
      <p>{props.text}</p>
      <button onClick={() => props.confirm()}>Cancel</button>
      <button onClick={() => props.cancel()}>Cancel</button>
    </div>
  )
}

export default Popup