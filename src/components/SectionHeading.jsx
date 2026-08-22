export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-blood">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-fog">{subtitle}</p>}
    </div>
  )
}
