'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const leaders = [
  {
    name: 'Hardesh Chawla',
    role: 'CEO',
    image: '/images/hardesh.webp',
  },
  {
    name: 'Monica Chawla',
    role: 'Creative Head',
    image: '/images/monica.webp',
  },
  {
    name: 'H.S. Chawla',
    role: 'Chairman',
    image: '/images/hs.webp',
  },
]

export default function LeadershipSection() {
  return (
    <section className="w-full py-12 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-wide">
          Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-xl hover:shadow-amber-500/20 transition-shadow"
            >
              <div className="h-84 w-full relative">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
