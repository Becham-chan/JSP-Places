import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Lightbox({ children, onClose, label }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <motion.div
        className="max-h-full max-w-4xl overflow-hidden rounded-lg"
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.92 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded border border-bone/20 bg-ink-900/80 px-3 py-1.5 text-sm text-bone hover:border-blood"
      >
        ✕ {label}
      </button>
    </motion.div>
  )
}

/**
 * Embedded media block for story bodies.
 * type: 'image' | 'video' (responsive embed) | 'map' (placeholder frame — no external calls)
 */
export default function AttachmentBox({ type = 'map', src, caption, link, aspect = 'aspect-video' }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const resolvedSrc =
    src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:'))
      ? src
      : src
        ? `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`
        : ''

  const frame = (inner) => (
    <figure className="my-8">
      <div className={`overflow-hidden rounded-lg border border-bone/10 bg-ink-800 ${aspect}`}>
        {inner}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-sm tracking-wide text-fog">
          {caption}
        </figcaption>
      )}
      {link && (
        <div className="mt-1 text-center">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-fog/90 underline decoration-bone/30 underline-offset-4 hover:text-bone hover:decoration-blood transition-colors"
          >
            <span>🔗 {link}</span>
          </a>
        </div>
      )}
    </figure>
  )

  if (type === 'image') {
    return (
      <>
        {frame(
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="h-full w-full cursor-zoom-in"
            aria-label={caption || 'Expand image'}
          >
            <img src={resolvedSrc} alt={caption || ''} loading="lazy" className="duotone h-full w-full object-cover" />
          </button>,
        )}
        <AnimatePresence>
          {open && (
            <Lightbox onClose={() => setOpen(false)} label={t.lightboxClose}>
              <img src={resolvedSrc} alt={caption || ''} className="max-h-[80vh] w-auto" />
            </Lightbox>
          )}
        </AnimatePresence>
      </>
    )
  }

  if (type === 'video') {
    const ytMatch = src?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)
    const timeMatch = src?.match(/[?&](?:t|start)=(\d+)/)
    const startQuery = timeMatch ? `?start=${timeMatch[1]}` : ''
    const embedUrl = ytMatch ? `https://www.youtube-nocookie.com/embed/${ytMatch[1]}${startQuery}` : null

    return frame(
      embedUrl ? (
        <iframe
          src={embedUrl}
          title={caption || 'Video'}
          loading="lazy"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <a
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          className="flex h-full w-full items-center justify-center text-fog underline hover:text-bone"
        >
          ▶ {src}
        </a>
      ),
    )
  }

  // map placeholder — deliberately no external map calls; keeps the site fully static
  return frame(
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-800 to-ink-900">
      <span className="font-display text-3xl text-fog/50">⌖</span>
      <span className="text-xs uppercase tracking-[0.3em] text-fog/60">map</span>
    </div>,
  )
}

