import { Link } from 'react-router-dom'

// Tone-driven gradient "thumbnail" — avoids external imagery entirely.
const toneGradients = {
  blood: 'from-[#2a0d12] via-[#12100f] to-[#0b0b0d]',
  bruise: 'from-[#1c1030] via-[#12101a] to-[#0b0b0d]',
}

export default function CardBox({ to, title, location, excerpt, tags, year, tone = 'blood', badge }) {
  return (
    <Link
      to={to}
      className="group block rounded-lg bg-ink-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div
        className={`relative h-36 overflow-hidden rounded-t-lg bg-gradient-to-br ${
          toneGradients[tone] || toneGradients.blood
        }`}
      >
        <div className="vignette absolute inset-0" />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full border border-bone/30 bg-black/60 px-2.5 py-0.5 text-xs uppercase tracking-widest text-bone">
            {badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-0.5 font-display text-sm text-fog">
          {year}
        </span>
      </div>
      <div className="p-5">
        <p className="mb-1 text-xs uppercase tracking-widest text-fog">{location}</p>
        <h3 className="font-display text-xl leading-snug text-bone transition-opacity duration-300 group-hover:opacity-80">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-fog">{excerpt}</p>
        {tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-bone/15 px-2.5 py-0.5 text-xs text-fog"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
