'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

const projects = [
  { title: 'Interior Design',      image: '/images/interior.webp',    url: '/interior-and-design' },
  { title: 'Bespoke Furniture',    image: '/images/bespoke.webp',     url: '/bespoke-furniture' },
  { title: 'Decor',                image: '/images/decor.webp',       url: '/decor' },
  { title: 'Exterior Design',      image: '/images/exterior.webp',    url: '/exterior-design' },
  { title: 'Landscaping',          image: '/images/landscaping.webp', url: '/landscaping' },
  { title: 'Commercial Spaces',    image: '/images/commercial.webp',  url: '/commercial-spaces' },
]

export default function Projects() {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10 md:mb-12 text-center">
          Our{' '}
          <span className="text-primary">
            <Typewriter
              words={[
                'Projects',
                'Signature Spaces',
                'Design Story',
                'Bold Visions',
                'Crafted Environments',
                'Built Narratives',
                'Inspired Works',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((proj, index) => (
            <Link
              href={proj.url}
              key={proj.url ?? index}
              className="group block border border-white/10 hover:border-primary-500/70 transition rounded-none"
            >
              <div className="relative overflow-hidden rounded-none">
                {/* Image wrapper with stable aspect ratio */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 md:group-hover:scale-105 will-change-transform"
                    priority={index < 2}
                  />
                </div>

                {/* Corner borders:
                   - Visible by default on mobile (no hover)
                   - Animated on hover for md+ */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  {/* TL */}
                  <span className="absolute top-2 left-2 border-t-2 border-l-2 border-white
                                   w-10 h-10
                                   md:w-0 md:h-0 md:group-hover:w-12 md:group-hover:h-12
                                   transition-all duration-300" />
                  {/* TR */}
                  <span className="absolute top-2 right-2 border-t-2 border-r-2 border-white
                                   w-10 h-10
                                   md:w-0 md:h-0 md:group-hover:w-12 md:group-hover:h-12
                                   transition-all duration-300" />
                  {/* BL */}
                  <span className="absolute bottom-2 left-2 border-b-2 border-l-2 border-white
                                   w-10 h-10
                                   md:w-0 md:h-0 md:group-hover:w-12 md:group-hover:h-12
                                   transition-all duration-300" />
                  {/* BR */}
                  <span className="absolute bottom-2 right-2 border-b-2 border-r-2 border-white
                                   w-10 h-10
                                   md:w-0 md:h-0 md:group-hover:w-12 md:group-hover:h-12
                                   transition-all duration-300" />
                </div>

                {/* Overlay + Title:
                   - Fully visible on mobile (no hover)
                   - Fades in on hover for md+ */}
                <div className="absolute inset-0 flex items-center justify-center
                                bg-black/40 opacity-100
                                md:opacity-0 md:group-hover:opacity-100
                                transition-opacity duration-300">
                  <h3 className="text-white text-lg sm:text-xl font-medium text-center px-3">
                    {proj.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
