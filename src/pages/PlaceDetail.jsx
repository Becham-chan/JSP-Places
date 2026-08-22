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

      <Link to="/places" className="text-sm text-fog hover:text-bone">
        {t.detail.backToPlaces}
      </Link>

      <header className="mt-6 border-b border-bone/10 pb-8">
        <h1 className="font-display text-4xl leading-tight">{c.title}</h1>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-widest text-fog">{t.detail.location}</dt>
            <dd className="mt-1">{c.location} · {regions[place.region][lang]}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-fog">{t.detail.era}</dt>
            <dd className="mt-1">{place.year}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-fog">{t.detail.category}</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {place.categories.map((cat) => (
                <span key={cat} className="rounded-full border border-bone/15 px-2.5 py-0.5 text-xs text-fog">
                  {t.categories[cat]}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <div className="mt-8">
        {c.sections.map((s, i) => {
          if (s.type === 'paragraph') {
            return (
              <Reveal key={i}>
                <p className="my-5 leading-8 text-bone/90">{s.text}</p>
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
                aspect={s.aspect}
              />
            )
          }
          return null
        })}
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-bone/10 pt-8">
          <h2 className="mb-4 font-display text-2xl">{t.detail.related}</h2>
          <ul className="flex flex-wrap gap-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/places/${r.slug}`}
                  className="inline-block rounded border border-bone/15 px-4 py-2 text-sm text-fog hover:border-blood hover:text-bone"
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
