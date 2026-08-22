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
export default function AttachmentBox({ type = 'map', src, caption, aspect = 'aspect-video' }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const frame = (inner) => (
    <figure className="my-8">
      <div className={`overflow-hidden rounded-lg border border-bone/10 bg-ink-800 ${aspect}`}>
        {inner}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs tracking-wide text-fog">
          {caption}
        </figcaption>
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
            <img src={src} alt={caption || ''} loading="lazy" className="duotone h-full w-full object-cover" />
          </button>,
        )}
        <AnimatePresence>
          {open && (
            <Lightbox onClose={() => setOpen(false)} label={t.lightboxClose}>
              <img src={src} alt={caption || ''} className="max-h-[80vh] w-auto" />
            </Lightbox>
          )}
        </AnimatePresence>
      </>
    )
  }

  if (type === 'video') {
    const yt = src?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)
    return frame(
      yt ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${yt[1]}`}
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
