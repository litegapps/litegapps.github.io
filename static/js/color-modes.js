/*!
 * Color mode toggler for LiteGapps (Material 3)
 * Vanilla JS — no framework dependency.
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
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const themeIcons = { light: 'light_mode', dark: 'dark_mode', auto: 'brightness_auto' }

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active')
    const btnToActive = document.querySelector(`[data-theme-value="${theme}"]`)

    document.querySelectorAll('[data-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
      const chk = element.querySelector('.check')
      if (chk) chk.classList.add('d-none')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    const activeCheck = btnToActive.querySelector('.check')
    if (activeCheck) activeCheck.classList.remove('d-none')
    if (activeThemeIcon) activeThemeIcon.textContent = themeIcons[theme] || 'brightness_auto'
    if (themeSwitcherText) {
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.themeValue})`
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

    document.querySelectorAll('[data-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
