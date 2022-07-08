import React, { useEffect } from 'react'

const Alert = ({ type, msg, onClickEvent, items }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClickEvent()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [items])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
