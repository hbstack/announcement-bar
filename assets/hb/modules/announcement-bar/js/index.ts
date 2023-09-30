import * as params from '@params'

(() => {
  let activeItem = 0
  let timer = 0
  let expandTimeout = 0

  const clearTimer = (): void => {
    clearInterval(timer)
  }

  const clearExpandTimeout = (): void => {
    clearTimeout(expandTimeout)
  }

  document.addEventListener('DOMContentLoaded', () => {
    const announcements = document.querySelectorAll('.hb-announcement')
    if (announcements.length < 2) {
      return
    }

    const setTimer = (): void => {
      clearTimer()
      timer = setInterval(() => {
        announcements[activeItem].classList.add('inactivating')
        setTimeout(() => {
          announcements[activeItem].classList.remove('active', 'inactivating')
          activeItem = ++activeItem
          activeItem = activeItem < announcements.length ? activeItem : activeItem % announcements.length
          announcements[activeItem].classList.add('active')
        }, 200)
      }, params.announcement_bar.interval ?? 5000)
    }

    const expanding = (): void => {
      clearExpandTimeout()
      expandTimeout = setTimeout(() => {
        bar.classList.add('active')
      }, params.announcement_bar.expand_stall_threshold ?? 1000)
    }

    setTimer()

    const bar = document.querySelector('.hb-announcement-bar') as HTMLElement
    bar.addEventListener('mouseenter', () => {
      clearTimer()
      expanding()
    })
    bar.addEventListener('mouseleave', () => {
      setTimer()
      clearExpandTimeout()
      bar.classList.remove('active')
    })
  })
})()
