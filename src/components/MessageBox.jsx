const styles = {
  note: 'border-l-bone/30 bg-ink-800/60 text-fog',
  warning: 'border-l-blood bg-blood/10 ring-1 ring-inset ring-blood/30 text-bone/90',
  quote: 'border-l-bruise bg-ink-800/60 italic text-bone/90',
}

export default function MessageBox({ variant = 'note', source, children }) {
  return (
    <aside className={`my-6 rounded-r-lg border-l-4 p-5 text-sm leading-relaxed ${styles[variant]}`}>
      {variant === 'warning' && (
        <p className="mb-2 font-semibold text-bone">⚠ Content note</p>
      )}
      <div>{children}</div>
      {source && <p className="mt-3 text-xs not-italic tracking-wide text-fog">— {source}</p>}
    </aside>
  )
}
