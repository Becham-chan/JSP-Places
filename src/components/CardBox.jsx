import { Link } from 'react-router-dom'

// Tone-driven gradient "thumbnail" — avoids external imagery entirely.
const toneGradients = {
  blood: 'from-[#2a0d12] via-[#12100f] to-[#0b0b0d]',
  bruise: 'from-[#1c1030] via-[#12101a] to-[#0b0b0d]',
}

export default function CardBox({ to, title, location, excerpt, tags, year, tone = 'blood', badge, image }) {
  return (
    <Link
      to={to}
      className="group block rounded-xl bg-ink-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover border border-bone/10 hover:border-bone/20"
    >
      <div
        className={`relative h-44 overflow-hidden rounded-t-xl bg-gradient-to-br ${
          toneGradients[tone] || toneGradients.blood
        }`}
      >
        {image && (
          <img
            src={
              image.startsWith('http://') || image.startsWith('https://') || image.startsWith('data:')
                ? image
                : `${import.meta.env.BASE_URL}${image.replace(/^\/+/, '')}`
            }
            alt=""
            loading="lazy"
            className="duotone absolute inset-0 h-full w-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="vignette absolute inset-0" />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full border border-bone/30 bg-black/60 px-3 py-1 text-xs sm:text-sm uppercase tracking-widest text-bone">
            {badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2.5 py-0.5 font-display text-sm sm:text-base text-fog">
          {year}
        </span>
      </div>
      <div className="p-6">
        <p className="mb-1.5 text-xs sm:text-sm uppercase tracking-wider text-fog">{location}</p>
        <h3 className="font-display text-2xl leading-snug text-bone transition-opacity duration-300 group-hover:opacity-80">
          {title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-base leading-relaxed text-fog">{excerpt}</p>
        {tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-bone/15 px-3 py-0.5 text-xs sm:text-sm text-fog"
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

