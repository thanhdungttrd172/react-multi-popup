import React from 'react'
import CustomDialog from './CustomDialog'
import EventPopup from '../utils/EventPopup'

const CommonPopup = (props) => {
  const { type, payload, config, option } = props

  const hiddenPopup = () => {
    EventPopup.removeLastPopup()
  }

  const getType = () => {
    const Component = config[type]
    return <Component popupProps={{ payload, close: hiddenPopup }} />
  }
  const backdropCallback = () => {
    if (!option.preventBackdropClosePopup) {
      hiddenPopup()
    }
    payload?.backdropCallback && payload.backdropCallback()
  }

  return (
    <CustomDialog
      payload={payload}
      hiddenPopup={hiddenPopup}
      getType={getType()}
      backdropCallback={backdropCallback}
    />
  )
}

export default CommonPopup
