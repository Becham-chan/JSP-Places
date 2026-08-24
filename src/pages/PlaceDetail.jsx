import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getPlace, places, regions } from '../data/places.js'
import MessageBox from '../components/MessageBox.jsx'
import AttachmentBox from '../components/AttachmentBox.jsx'
import Reveal from '../components/Reveal.jsx'
import NotFound from './NotFound.jsx'

export default function PlaceDetail() {
  const { slug } = useParams()
  const { t, lang } = useLanguage()
  const place = getPlace(slug)

  if (!place) return <NotFound />

  const c = place.i18n[lang]
  const title = `${c.title} — ${t.siteName}`
  const related = places.filter((p) => p.slug !== slug && p.categories.some((x) => place.categories.includes(x))).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.excerpt,
    about: {
      '@type': 'Place',
      name: c.title,
      containedInPlace: { '@type': 'Place', name: c.location },
    },
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', name: t.siteName },
  }

  const renderSegments = (segments) => {
    return segments.map((seg, j) =>
      seg.href ? (
        <a
          key={j}
          href={seg.href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-bone underline decoration-blood/60 underline-offset-4 hover:text-white hover:decoration-blood transition-colors"
        >
          {seg.text}
        </a>
      ) : (
        <span key={j}>{seg.text}</span>
      ),
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={c.excerpt.slice(0, 155)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={c.excerpt.slice(0, 200)} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Link to="/places" className="text-base text-fog hover:text-bone transition-colors">
        {t.detail.backToPlaces}
      </Link>

      <header className="mt-6 border-b border-bone/10 pb-8">
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-bone">{c.title}</h1>
        <dl className="mt-6 grid gap-4 text-sm sm:text-base sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-widest text-fog">{t.detail.location}</dt>
            <dd className="mt-1 font-medium">{c.location} · {regions[place.region][lang]}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-fog">{t.detail.era}</dt>
            <dd className="mt-1 font-medium">{place.year}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-fog">{t.detail.category}</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {place.categories.map((cat) => (
                <span key={cat} className="rounded-full border border-bone/15 px-2.5 py-0.5 text-xs sm:text-sm text-fog">
                  {t.categories[cat]}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <div className="mt-8 space-y-6">
        {place.comingSoon && (
          <Reveal>
            <div className="my-8 rounded-lg border border-bone/10 bg-ink-900 p-10 text-center">
              <p className="font-display text-3xl tracking-wide text-fog">{t.detail.comingSoonTitle}</p>
              <p className="mt-3 text-base text-fog">{t.detail.comingSoonBody}</p>
            </div>
          </Reveal>
        )}
        {(c.sections ?? []).map((s, i) => {
          if (s.type === 'hook') {
            return (
              <Reveal key={i}>
                <div className="my-8 rounded-xl border-l-4 border-blood bg-gradient-to-r from-blood/20 via-ink-900/90 to-ink-900/60 p-6 sm:p-8 shadow-lg shadow-blood/10">
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-bone leading-snug">
                    {s.segments ? renderSegments(s.segments) : s.text}
                  </p>
                </div>
              </Reveal>
            )
          }
          if (s.type === 'paragraph') {
            return (
              <Reveal key={i}>
                <p className="my-6 text-lg sm:text-xl leading-relaxed sm:leading-9 text-bone/90 font-normal">
                  {s.segments ? renderSegments(s.segments) : s.text}
                </p>
              </Reveal>
            )
          }
          if (s.type === 'message') {
            return (
              <MessageBox key={i} variant={s.variant} source={s.source}>
                {s.text}
              </MessageBox>
            )
          }
          if (s.type === 'attachment') {
            return (
              <AttachmentBox
                key={i}
                type={s.atype}
                src={s.src}
                caption={s.caption}
                link={s.link}
                aspect={s.aspect}
              />
            )
          }
          return null
        })}
      </div>

      <div className="mt-10">
        <MessageBox variant="note" title={t.detail.accuracyTitle}>
          {t.detail.accuracyNote}
        </MessageBox>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-bone/10 pt-8">
          <h2 className="mb-4 font-display text-2xl sm:text-3xl">{t.detail.related}</h2>
          <ul className="flex flex-wrap gap-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/places/${r.slug}`}
                  className="inline-block rounded border border-bone/15 px-4 py-2 text-base text-fog hover:border-blood hover:text-bone transition-colors"
                >
                  {r.i18n[lang].title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}

