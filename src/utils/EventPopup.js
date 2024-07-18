import { v4 as uuidv4 } from 'uuid'
import EventRegister, { EVENT_RENDER_POPUP } from './EventRegister'
export default class EventPopup {
  static sectionRef = {}
  static popupList = {
    count: 0,
    refs: {}
  }

  static init = (ref) => {
    this.sectionRef = ref
    return this.popupList
  }

  static open({ component }, callback) {
    const key = uuidv4()
    EventPopup.popupList.count += 1
    const eventId = `l${key}`
    EventPopup.popupList.refs[eventId] = {
      name: eventId,
      component: component,
      callback,
      close: () => {
        EventPopup.removePopup(eventId)
      }
    }
    EventRegister.emit(EVENT_RENDER_POPUP)
    return eventId
  }

  static replace({ component }, callback) {
    const lastPopup = Object.keys(EventPopup.popupList.refs).pop()
    const key = uuidv4()
    EventPopup.popupList.count += 1
    const eventId = `l${key}`
    EventPopup.popupList.refs[eventId] = {
      name: eventId,
      component: component,
      callback,
      close: () => {
        EventPopup.removePopup(eventId)
      }
    }
    delete EventPopup.popupList.refs[lastPopup]
    EventRegister.emit(EVENT_RENDER_POPUP)
    return eventId
  }

  static removePopup(id) {
    if (typeof id === 'string') {
      return delete EventPopup.popupList.refs[id]
    }
    return false
  }

  static removeLastPopup() {
    const last = Object.keys(EventPopup.popupList.refs).pop()
    const rs = delete EventPopup.popupList.refs[last]
    EventRegister.emit(EVENT_RENDER_POPUP)
    return rs
  }

  static removeAllPopup() {
    let removeError = false
    Object.keys(EventPopup.popupList.refs).forEach((id) => {
      const removed = delete EventPopup.popupList.refs[id]
      removeError = !removeError ? !removed : removeError
    })
    return !removeError
  }
}
