import React, { useEffect, useMemo, useRef, useState } from 'react'
import EventPopup from '../utils/EventPopup'
import EventRegister, {
  EVENT_RENDER_POPUP,
  EVENT_SHOW_POPUP
} from '../utils/EventRegister'
import { v4 as uuidv4 } from 'uuid'
import CommonPopup from './CommonPopup'

export const MultiPopupArea = (props) => {
  const { config } = props
  const ref = useRef(null)
  const [etag, setEtag] = useState(uuidv4())
  useEffect(() => {
    EventPopup.init(ref)
    var event = EventRegister.on(EVENT_RENDER_POPUP, () => {
      setEtag(uuidv4())
      handleScroll()
    })
    return () => {
      EventRegister.off(event)
    }
  }, [])
  const handleScroll = () => {
    if (Object.keys(EventPopup.popupList.refs).length > 0) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px'
    } else {
      document.body.style.overflow = 'visible'
      document.body.style.paddingRight = '0px'
    }
  }
  const handleClose = () => {
    EventPopup.removeLastPopup()
    handleScroll()
  }
  const handleCloseAllPopup = () => {
    EventPopup.removeAllPopup()
  }
  useEffect(() => {
    const eventName = EVENT_SHOW_POPUP
    const reloadEvent = EventRegister.on(eventName, (params) => {
      if (params.newWindow) {
        EventPopup.open(
          {
            component: (
              <CommonPopup
                type={params.type}
                payload={params.payload}
                option={params.option}
                closeAll={handleCloseAllPopup}
                close={handleClose}
                config={config}
              />
            )
          },
          () => {}
        )
      } else {
        EventPopup.replace(
          {
            component: (
              <CommonPopup
                type={params.type}
                payload={params.payload}
                option={params.option}
                closeAll={handleCloseAllPopup}
                close={handleClose}
                config={config}
              />
            )
          },
          () => {}
        )
      }
    })
    return () => {
      EventRegister.off(reloadEvent)
    }
  }, [])
  return useMemo(() => {
    return (
      <div className='MultiPopupArea' ref={ref}>
        {Object.keys(EventPopup.popupList.refs).map((id) => {
          return <div key={id}>{EventPopup.popupList.refs[id]?.component}</div>
        })}
      </div>
    )
  }, [etag])
}
