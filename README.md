# react-multi-popup

> Multi popup

[![NPM](https://img.shields.io/npm/v/react-multi-popup.svg)](https://www.npmjs.com/package/react-multi-popup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @thanhdungttrd172/react-multi-popup
```

## Usage

```jsx
import { ExampleComponent, MultiPopupArea, useMultiPopup } from '@thanhdungttrd172/react-multi-popup'
import '@thanhdungttrd172/react-multi-popup/dist/index.css'
import TestPopup from './TestPopup'

const App = () => {
  const { open: openPopup } = useMultiPopup()
  const popupConfig = {
    "TEST": TestPopup
  }
  const handleOpenPopup = () => {
    openPopup("TEST",{data: "ok"});
  }
  return <div>
    <MultiPopupArea config={popupConfig} />
    <ExampleComponent text="Create React Library Example 😄" />
    <button onClick={handleOpenPopup}>Open Popup</button>
  </div>
}

```

## License

MIT © [thanhdungttrd172](https://github.com/thanhdungttrd172)
