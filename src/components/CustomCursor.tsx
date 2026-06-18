import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 120, damping: 18 })
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18 })

  const isHovering = useRef(false)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const enter = () => {
      isHovering.current = true
      ringRef.current?.classList.add('scale-[2.5]', 'opacity-40')
    }
    const leave = () => {
      isHovering.current = false
      ringRef.current?.classList.remove('scale-[2.5]', 'opacity-40')
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [cursorX, cursorY, dotX, dotY])

  return (
    <>
      {/* Ring — follows with spring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-8 h-8 rounded-full border border-primary transition-all duration-200"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Dot — follows instantly */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
