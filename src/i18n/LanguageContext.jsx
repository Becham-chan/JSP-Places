import { createContext, useContext, useEffect, useState } from 'react'
import { dictionary } from './dictionary.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('knb-lang')
    return saved === 'th' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('knb-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = dictionary[lang]
  const toggle = () => setLang((l) => (l === 'en' ? 'th' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
