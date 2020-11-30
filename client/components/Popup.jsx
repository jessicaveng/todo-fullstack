import React from 'react'

const Popup = (props) => {
  return (
    <div className='popup'>
      <div className= 'popup-interior'>
        <p>{props.text}</p>
        <button className='popup-interior-button' onClick={() => props.confirm()}>Delete</button>
        <button className='popup-interior-button' onClick={() => props.cancel()}>Cancel</button>
      </div>
    </div>
  )
}

export default Popup
