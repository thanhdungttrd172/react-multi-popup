import React from 'react'
import CustomDialog from './CustomDialog'
import EventPopup from '../utils/EventPopup'

const CommonPopup = (props) => {
  const { type, payload, config, option, defaultOptions } = props

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
  let backdropClass = ''
  if (defaultOptions && 'defaultBackdropClass' in defaultOptions) {
    backdropClass = defaultOptions.defaultBackdropClass
  }
  if (option && 'backdropClass' in option) {
    backdropClass = option.backdropClass
  }

  let showBackdrop = true
  if (defaultOptions && 'defaultShowBackdrop' in defaultOptions) {
    showBackdrop = defaultOptions.defaultShowBackdrop
  }
  if (option && 'showBackdrop' in option) {
    showBackdrop = option.showBackdrop
  }
  return (
    <CustomDialog
      payload={payload}
      hiddenPopup={hiddenPopup}
      getType={getType()}
      backdropCallback={backdropCallback}
      backdropClass={backdropClass}
      showBackdrop={showBackdrop}
    />
  )
}

export default CommonPopup
