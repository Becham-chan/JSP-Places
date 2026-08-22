import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { places, regions } from '../data/places.js'
import CardBox from '../components/CardBox.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Places() {
  const { t, lang } = useLanguage()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('all')
  const [category, setCategory] = useState('all')

  const allCategories = useMemo(
    () => [...new Set(places.flatMap((p) => p.categories))],
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return places.filter((p) => {
      const c = p.i18n[lang]
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.excerpt.toLowerCase().includes(q)
      const matchesRegion = region === 'all' || p.region === region
      const matchesCategory = category === 'all' || p.categories.includes(category)
      return matchesQuery && matchesRegion && matchesCategory
    })
  }, [query, region, category, lang])

  const selectCls =
    'rounded border border-bone/15 bg-ink-900 px-3 py-2 text-sm text-bone focus:border-blood focus:outline-none'

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Helmet>
        <title>{`${t.places.title} — ${t.siteName}`}</title>
        <meta name="description" content={t.places.subtitle} />
      </Helmet>

      <SectionHeading eyebrow="02" title={t.places.title} subtitle={t.places.subtitle} />

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.places.searchPlaceholder}
          aria-label={t.places.searchPlaceholder}
          className="min-w-[220px] flex-1 rounded border border-bone/15 bg-ink-900 px-3 py-2 text-sm text-bone placeholder:text-fog/60 focus:border-blood focus:outline-none"
        />
        <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectCls} aria-label="Region filter">
          <option value="all">{t.places.filterAll}</option>
          {Object.entries(regions).map(([key, r]) => (
            <option key={key} value={key}>{r[lang]}</option>
          ))}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectCls} aria-label={t.places.filterCategory}>
          <option value="all">{t.places.filterCategory}: all</option>
          {allCategories.map((c) => (
            <option key={c} value={c}>{t.categories[c]}</option>
          ))}
        </select>
      </div>

      <p className="mb-6 text-xs uppercase tracking-widest text-fog">
        {t.places.resultsCount(filtered.length)}
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-bone/10 bg-ink-900 p-10 text-center font-display text-lg text-fog">
          {t.places.noResults}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <CardBox
                to={`/places/${p.slug}`}
                title={p.i18n[lang].title}
                location={`${p.i18n[lang].location} · ${regions[p.region][lang]}`}
                excerpt={p.i18n[lang].excerpt}
                tags={p.categories.map((c) => t.categories[c])}
                year={p.year}
                tone={p.tone}
              />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
