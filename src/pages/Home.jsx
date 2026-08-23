import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { places, regions } from '../data/places.js'
import CardBox from '../components/CardBox.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  const { t, lang } = useLanguage()
  const featured = places.filter((p) => p.featured)
  const title = `${t.siteName} — ${t.siteTagline}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t.home.heroBody.slice(0, 155)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={t.home.heroBody.slice(0, 200)} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="vignette absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-950"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blood">
            {t.home.heroEyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl animate-flicker">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-fog">{t.home.heroBody}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/places"
              className="rounded border border-blood bg-blood/20 px-6 py-3 font-medium text-bone transition-colors hover:bg-blood/40"
            >
              {t.home.ctaBrowse}
            </Link>
            <span className="text-xs text-fog">{t.home.disclaimerShort}</span>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading eyebrow="01" title={t.home.featured} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <CardBox
                to={`/places/${p.slug}`}
                title={p.i18n[lang].title}
                location={`${p.i18n[lang].location} · ${regions[p.region][lang]}`}
                excerpt={p.i18n[lang].excerpt}
                tags={p.categories.map((c) => t.categories[c])}
                year={p.year}
                tone={p.tone}
                image={p.image}
                badge={p.comingSoon ? t.places.comingSoonBadge : undefined}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
