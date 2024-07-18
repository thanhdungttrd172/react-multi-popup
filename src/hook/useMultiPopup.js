import EventPopup from '../utils/EventPopup'
import EventRegister, { EVENT_SHOW_POPUP } from '../utils/EventRegister'

export default function useMultiPopup() {
  const open = (
    type,
    payload = {},
    option = { preventBackdropClosePopup: false }
  ) => {
    EventRegister.emit(EVENT_SHOW_POPUP, {
      open: true,
      newWindow: true,
      type: type,
      payload: payload,
      option: option
    })
  }
  const replace = (
    type,
    payload = {},
    option = { preventBackdropClosePopup: false }
  ) => {
    EventRegister.emit(EVENT_SHOW_POPUP, {
      open: true,
      newWindow: false,
      type: type,
      payload: payload,
      option: option
    })
  }
  const pop = () => {
    EventPopup.removeLastPopup()
  }

  return { open, pop, replace }
}
