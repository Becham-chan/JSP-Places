import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function LanguageToggle({ className = '' }) {
  const { lang, toggle } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch language"
      className={`inline-flex items-center rounded-full border border-bone/15 bg-ink-800 px-1 py-1 text-sm font-medium ${className}`}
    >
      <span
        className={`rounded-full px-3 py-0.5 transition-colors ${
          lang === 'en' ? 'bg-blood/70 text-bone' : 'text-fog'
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-3 py-0.5 transition-colors ${
          lang === 'th' ? 'bg-blood/70 text-bone' : 'text-fog'
        }`}
      >
        ไทย
      </span>
    </button>
  )
}

export default function NavDrawer() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    drawerRef.current?.querySelector('a,button')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { to: '/places', label: t.nav.places },
    { to: '/about', label: t.nav.about },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-bone/5 bg-ink-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="font-display text-lg tracking-wide"
          onClick={() => setOpen(false)}
        >
          {t.siteName}
          <span className="ml-2 text-xs font-normal text-fog">{t.siteTagline}</span>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-bone/15 hover:border-blood"
          >
            <span className="h-px w-5 bg-bone" />
            <span className="h-px w-5 bg-bone" />
            <span className="h-px w-5 bg-bone" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="drawer"
              ref={drawerRef}
              aria-label="Main navigation"
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-bone/10 bg-ink-900 p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg">{t.siteName}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.nav.close}
                  className="rounded border border-bone/15 px-3 py-1 text-sm text-fog hover:border-blood hover:text-bone"
                >
                  ✕
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded px-4 py-3 font-display text-xl ${
                          isActive
                            ? 'bg-blood/20 text-bone'
                            : 'text-fog hover:bg-ink-800 hover:text-bone'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <LanguageToggle />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
