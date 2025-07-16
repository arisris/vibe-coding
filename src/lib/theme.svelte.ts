import { browser } from "$app/environment";
import { createRawSnippet } from "svelte";

const dark = "dark", light = "light", key = "svelte:theme";
type ThemeMode = typeof dark | typeof light;

export const themeScript = createRawSnippet(() => ({
  render() {
    return `<script>!(function(){t=localStorage.getItem('${key}')||(window.matchMedia('(prefers-color-scheme: ${dark})').matches?'${dark}':'${light}');document.documentElement.className=t,document.documentElement.setAttribute('data-theme',t)})();</script>`
  }
}))

let theme = $derived.by<ThemeMode>(() => {
  if (browser) {
    return (localStorage.getItem(key) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light)) as ThemeMode
  }
  return light
})

export const getTheme = () => theme
export const toggleTheme = () => {
  theme = theme === light ? dark : light
  localStorage.setItem(key, theme)
  document.documentElement.className = theme
  document.documentElement.setAttribute('data-theme', theme)
}