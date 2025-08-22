'use client'

export default function Text({ heading, content }) {
  const hasHeading = heading && heading.trim() !== ''
  const hasContent = content && content.length > 0

  if (!hasHeading && !hasContent) return null // nothing to show

  return (
    <section className="w-full py-20 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {hasHeading && (
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            {heading}
          </h2>
        )}

        {hasContent && (
          <div className="text-lg leading-relaxed tracking-wide space-y-6">
            {content.map((paragraph, idx) => (
              <div key={idx}>{paragraph}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
