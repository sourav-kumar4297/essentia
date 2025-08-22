'use client'

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaRegClock, FaGlobe, FaUser } from "react-icons/fa"

const stats = [
  { label: "Years Experience", value: 25, icon: <FaRegClock size={42} /> },
  { label: "Projects Globally", value: 1000, icon: <FaGlobe size={42} /> },
  { label: "Team Members", value: 750, icon: <FaUser size={42} /> },
]

export default function Presence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: false })
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isInView) {
      setCounters(stats.map(() => 0))
      return
    }

    const interval = setInterval(() => {
      setCounters(prev =>
        prev.map((count, i) => {
          const target = stats[i].value
          const increment = Math.ceil(target / 30)
          return count < target ? Math.min(count + increment, target) : count
        })
      )
    }, 40)

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-background text-foreground overflow-hidden"
    >
      {/* Glowy blur background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-16"
        >
          Our Global Presence
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="border border-border bg-card text-card-foreground p-10 flex flex-col items-center justify-center rounded-xl shadow-md dark:shadow-amber-500/20 transition-all"
            >
              <div className="mb-4 text-amber-500">{item.icon}</div>
              <div className="text-5xl font-bold tracking-wide mb-2">
                {counters[i]}
                <span className="text-amber-500">+</span>
              </div>
              <p className="text-muted-foreground uppercase tracking-widest text-xs text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
