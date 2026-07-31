/*!
 * Color mode toggler for LiteGapps (Material 3 on Bootstrap 5.3)
 * Vanilla JS — drives Bootstrap's native data-bs-theme.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme === 'auto' ? 'light' : theme)
    }
  }

  setTheme(getPreferredTheme())

  // Bootstrap Icon class for each choice, swapped onto .theme-icon-active
  const themeIcons = { light: 'bi-sun', dark: 'bi-moon-stars', auto: 'bi-circle-half' }
  const allThemeIcons = Object.values(themeIcons)

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
      const chk = element.querySelector('.check')
      if (chk) chk.classList.add('d-none')
    })

    if (btnToActive) {
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      const activeCheck = btnToActive.querySelector('.check')
      if (activeCheck) activeCheck.classList.remove('d-none')
    }
    if (activeThemeIcon) {
      activeThemeIcon.classList.remove(...allThemeIcons)
      activeThemeIcon.classList.add(themeIcons[theme] || 'bi-circle-half')
    }
    if (themeSwitcherText && btnToActive) {
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
    }

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
