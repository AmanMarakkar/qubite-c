import { useEffect, useState } from 'react'

/**
 * Animates from 0 to the numeric part of `value` once `start` becomes true,
 * preserving any non-numeric formatting (e.g. "1,500+ PH", "98.7%").
 */
export function useCountUp(value: string, start: boolean, duration = 1400) {
  const [display, setDisplay] = useState(() => formatWith(value, 0))

  useEffect(() => {
    if (!start) return

    const match = value.match(/[\d,]+(?:\.\d+)?/)
    if (!match) {
      setDisplay(value)
      return
    }

    const target = Number.parseFloat(match[0].replace(/,/g, ''))
    const decimals = match[0].includes('.') ? match[0].split('.')[1].length : 0
    const startTime = performance.now()
    let frame: number

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(formatWith(value, target * eased, decimals))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, start, duration])

  return display
}

function formatWith(template: string, num: number, decimals = 0) {
  const match = template.match(/[\d,]+(?:\.\d+)?/)
  if (!match) return template
  const formatted =
    decimals > 0
      ? num.toFixed(decimals)
      : Math.round(num).toLocaleString('en-US')
  return template.replace(match[0], formatted)
}
