import React from 'react'

function CustomDialog(props) {
  const { payload, footer, getType, backdropCallback } = props
  const customStyle = {}

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        <div
          style={{
            maxHeight: 'calc(100vh - 50px)',
            overflow: 'auto',
            ...payload?.customStyle,
            borderRadius: 10,
            ...customStyle
          }}
        >
          {getType ?? <></>}
        </div>
        {footer && <div>{footer}</div>}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#0000005e',
          zIndex: -1
        }}
        onClick={() => {
          backdropCallback()
        }}
      />
    </div>
  )
}
export default CustomDialog
