import { useTheme } from 'next-themes'

export function SetAppTheme(theme: string) {
  const { setTheme } = useTheme()
  setTheme(theme)
  // Ideally we should emit an event to notify the theme change when we add Socket.io
}
