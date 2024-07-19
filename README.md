# react-multi-popup

> Multi popup
- Definition in one file and callable anywhere
- Multiple overlapping popups, no limit

[![NPM](https://img.shields.io/npm/v/react-multi-popup.svg)](https://www.npmjs.com/package/react-multi-popup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @thanhdungttrd172/react-multi-popup
```

## Usage

```jsx
import React from 'react'
import { ExampleComponent, MultiPopupArea, useMultiPopup } from '@thanhdungttrd172/react-multi-popup'
import '@thanhdungttrd172/dist/index.css'
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
    defaultBackdropClass: "", // default ""
    defaultContainerClass: "", // default ""
    defaultShowBackdrop: true, // default true
    defaultCanResize: false, // future function
    defaultCanMove: false, // future function
  }
  const handleOpenPopup = () => {
    const singleOption = {
      backdropClass: "test_backdrop_class", // default ""
      showBackdrop: true, // default true
    }
    openPopup("TEST",{data: "Example"}, singleOption);
  }
  return <div>
    <ExampleComponent text="Create React Library Example 😄" />
    <button onClick={handleOpenPopup}>Open Popup</button>
    <MultiPopupArea config={popupConfig} option={popupOption} />
  </div>
}

export default App


```

## License

MIT © [thanhdungttrd172](https://github.com/thanhdungttrd172)
