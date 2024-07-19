import React from 'react'

import { ExampleComponent, MultiPopupArea, useMultiPopup } from 'react-multi-popup'
import 'react-multi-popup/dist/index.css'
import TestPopup from './TestPopup'

const App = () => {
  const { open: openPopup } = useMultiPopup()
  // Declare your popup here
  const popupConfig = {
    "TEST": TestPopup,
    "TEST2": TestPopup,
    // add more
  }
  // Option config for popup
  const popupOption = {
    defaultBackdropClass: "",
    defaultContainerClass: "",
    defaultShowBackdrop: true,
    defaultCanResize: false, // future function
    defaultCanMove: false, // future function
  }
  const handleOpenPopup = () => {
    const singleOption = {
      backdropClass: "test_backdrop_class"
    }
    openPopup("TEST",{data: "ok"}, singleOption);
  }
  return <div>
    <ExampleComponent text="Create React Library Example 😄" />
    <button onClick={handleOpenPopup}>Open Popup</button>
    <MultiPopupArea config={popupConfig} option={popupOption} />
  </div>
}

export default App
