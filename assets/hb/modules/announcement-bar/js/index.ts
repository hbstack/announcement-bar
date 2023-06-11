import * as params from '@params'

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const announcements = document.querySelectorAll('.hb-announcement')
    if (announcements.length < 2) {
      return
    }

    let i = 0
    setInterval(() => {
      announcements[i].classList.add('inactivating')
      setTimeout(() => {
        announcements[i].classList.remove('active', 'inactivating')
        i = ++i
        i = i < announcements.length ? i : i % announcements.length
        announcements[i].classList.add('active')
      }, 200)
    }, params.announcement_bar.interval ?? 5000)
  })
})()
