import { useEffect, useState } from 'react'

export function useCounter(target, inView, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || typeof target !== 'number') return
    let frame = 0
    const totalFrames = Math.round(duration / 16)
    const timer = setInterval(() => {
      frame++
      setCount(Math.min(Math.round((target * frame) / totalFrames), target))
      if (frame >= totalFrames) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}
