import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="mt-20 border-t border-bone/5 bg-ink-900/50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-display text-lg">{t.siteName}</p>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-fog">
          {t.footer.disclaimer}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-bone/5 pt-6 text-xs text-fog">
          <nav aria-label="Footer" className="flex gap-4">
            <Link to="/places" className="hover:text-bone">{t.nav.places}</Link>
            <Link to="/about" className="hover:text-bone">{t.nav.about}</Link>
          </nav>
          <p>{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  )
}
