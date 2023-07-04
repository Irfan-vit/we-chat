import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

const Modal = ({
  children,
  wrapperId = 'react-portal-wrapper',
  parent = 'modal',
}) => {
  const [wrapperElement, setWrapperElement] = useState(null)
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = createWrapperAndAppendToBody(wrapperId)
  }

  useEffect(() => {
    const modalRoot = document.getElementById(parent)
    modalRoot.appendChild(elRef.current)
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  useEffect(() => {
    const closeOptionsModal = (e) => {
      if (elRef.current && !ref.current.contains(e.target)) {
        setState(false)
      }
    }
    document.addEventListener('mousedown', closeOptionsModal)

    return () => document.removeEventListener('mousedown', closeOptionsModal)
  }, [setState, ref])

  return createPortal(children, elRef.current)
}

export default Modal