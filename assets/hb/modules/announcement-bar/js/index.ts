import * as params from '@params'

(() => {
  let timer = 0

  const clearTimer = (): void => {
    clearInterval(timer)
  }

  document.addEventListener('DOMContentLoaded', () => {
    const announcements = document.querySelectorAll('.hb-announcement')
    if (announcements.length < 2) {
      return
    }

    const setTimer = (): void => {
      clearTimer()
      let i = 0
      timer = setInterval(() => {
        announcements[i].classList.add('inactivating')
        setTimeout(() => {
          announcements[i].classList.remove('active', 'inactivating')
          i = ++i
          i = i < announcements.length ? i : i % announcements.length
          announcements[i].classList.add('active')
        }, 200)
      }, params.announcement_bar.interval ?? 5000)
    }

    setTimer()

    const bar = document.querySelector('.hb-announcement-bar') as HTMLElement
    bar.addEventListener('mouseover', () => {
      clearTimer()
    })
    bar.addEventListener('mouseout', () => {
      setTimer()
    })
  })
})()
