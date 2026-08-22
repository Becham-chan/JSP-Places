import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <section className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <Helmet>
        <title>{`404 — ${t.notFound.title}`}</title>
      </Helmet>
      <div className="vignette absolute inset-0" aria-hidden="true" />
      <p className="font-display text-7xl text-fog/30">404</p>
      <h1 className="mt-4 font-display text-3xl">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-fog">{t.notFound.body}</p>
      <Link
        to="/"
        className="mt-8 rounded border border-blood bg-blood/20 px-6 py-3 hover:bg-blood/40"
      >
        {t.notFound.cta}
      </Link>
    </section>
  )
}
