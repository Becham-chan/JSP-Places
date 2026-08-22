// Bilingual case-file data. Each entry's `i18n` map holds per-language content.
// Section types: paragraph | message (variant: note|warning|quote) | attachment (image|video|map)
// No graphic descriptions — place, history, atmosphere, aftermath only.
//
// Places referenced from the "Japan Stigmatized Property" (JSP) game series are
// marked `comingSoon: true` — full case files have not been written yet.

export const places = [
  {
    slug: 'ibaraki-s-residence',
    region: 'ibaraki',
    year: '—',
    categories: ['stigmatized-property'],
    tone: 'blood',
    featured: true,
    comingSoon: true,
    i18n: {
      en: {
        title: 'Ibaraki S Residence',
        location: 'Ibaraki Prefecture',
        excerpt:
          'A stigmatized residence in Ibaraki Prefecture, known from the Japan Stigmatized Property (JSP) game series. Case file in preparation.',
      },
      th: {
        title: 'บ้านพัก S อิบะระกิ',
        location: 'จังหวัดอิบะระกิ',
        excerpt:
          'ที่พักต้องห้ามในจังหวัดอิบะระกิ ปรากฏในเกมชุด Japan Stigmatized Property (JSP) แฟ้มคดีกำลังจัดทำ',
      },
    },
  },
  {
    slug: 'animal-hospital-k-shikoku',
    region: 'shikoku',
    year: '—',
    categories: ['ruins', 'stigmatized-property'],
    tone: 'bruise',
    featured: true,
    comingSoon: true,
    i18n: {
      en: {
        title: 'Animal Hospital K, Shikoku',
        location: 'Shikoku',
        excerpt:
          'An abandoned animal hospital on Shikoku, known from the Japan Stigmatized Property (JSP) game series. Case file in preparation.',
      },
      th: {
        title: 'โรงพยาบาลสัตว์ K ชิโกะกุ',
        location: 'ชิโกะกุ',
        excerpt:
          'โรงพยาบาลสัตว์ร้างบนเกาะชิโกะกุ ปรากฏในเกมชุด Japan Stigmatized Property (JSP) แฟ้มคดีกำลังจัดทำ',
      },
    },
  },
]

export const regions = {
  ibaraki: { en: 'Ibaraki', th: 'อิบะระกิ' },
  shikoku: { en: 'Shikoku', th: 'ชิโกะกุ' },
}

export function getPlace(slug) {
  return places.find((p) => p.slug === slug)
}
