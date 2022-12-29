import React from 'react'

export const useScrollLock = () => {
  let scrollPosition = 0

  const lockScroll = React.useCallback(() => {
    scrollPosition = window.scrollY
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.paddingRight = `${scrollBarCompensation}px`
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
  }, [])

  const unlockScroll = React.useCallback(() => {
    document.body.style.paddingRight = ''
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('position')
    document.body.style.removeProperty('top')
    document.body.style.removeProperty('width')
    window.scrollTo(0, scrollPosition)
  }, [])

  return {
    lockScroll,
    unlockScroll,
  }
}
