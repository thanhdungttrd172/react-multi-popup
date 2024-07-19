import React from 'react';
import { useMultiPopup } from 'react-multi-popup'
function TestPopup (props) {
  const { popupProps } = props
  const { open } = useMultiPopup()
  const handleClose = () => {
    popupProps.close();
  }
  const handleOpen = () => {
    open("TEST", {}, { showBackdrop: false });
  }
  return (
    <div className="TestPopup" style={{ width: 300, height: 300, background: 'white', border: '1px solid black' }}>
      Test Popup
      <button onClick={handleClose}>Close</button>
      <button onClick={handleOpen}>New Popup</button>
    </div>
  )
}
export default TestPopup;