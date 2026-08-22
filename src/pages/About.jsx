import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import MessageBox from '../components/MessageBox.jsx'

export default function About() {
  const { t, lang } = useLanguage()

  const content = {
    en: {
      intro:
        'JSP Places began as a reading habit that got out of hand: Oshima Teru’s stigmatized-property map, the "Japan Stigmatized Property" (JSP) game series, local news archives, and the quiet field of research sometimes called "dark tourism studies." This site is my attempt to gather a handful of those places — including places referenced in the JSP games — and treat them the way they deserve — as stories about space, memory, and aftermath.',
      method:
        'Every entry is compiled from publicly available sources: news reporting, municipal records, UNESCO documentation, academic writing on jiko bukken disclosure law, and on-location photography where access is legal and safe. Exact addresses of occupied private residences are never published. Composite entries are labeled as such.',
      methodTitle: 'How entries are researched',
    },
    th: {
      intro:
        'JSP Places เริ่มจากนิสัยอ่านที่ควบคุมไม่อยู่: แผนที่อสังหาริมทรัพย์ต้องห้ามของโอะชิมะ เทะรุ เกมชุด "Japan Stigmatized Property" (JSP) หอเอกสารข่าวท้องถิ่น และสนามวิจัยเงียบ ๆ ที่บางคนเรียกว่า "การศึกษาการท่องเที่ยวมืด" เว็บไซต์นี้คือความพยายามของฉันที่จะรวมสถานที่เหล่านั้น — รวมถึงสถานที่ที่ปรากฏในเกมชุด JSP — ไว้และปฏิบัติกับมันอย่างที่มันสมควรได้รับ ในฐานะเรื่องเล่าว่าด้วยพื้นที่ ความทรงจำ และเรื่องราวหลังจบ',
      method:
        'ทุกแฟ้มคดีรวบรวมจากแหล่งสาธารณะ: งานข่าว เอกสารเทศบาล เอกสาร UNESCO งานวิชาการเรื่องกฎหมายเปิดเผยจิโกะบุกเก็ง และภาพถ่ายถิ่นที่ที่การเข้าถึงถูกกฎหมายและปลอดภัย ไม่เปิดเผยที่อยู่จริงของที่พักอาศัยส่วนบุคคลที่มีผู้อยู่อาศัยเด็ดขาด และแฟ้มเชิงรวมจะถูกระบุไว้ชัดเจน',
      methodTitle: 'วิธีค้นคว้าแต่ละแฟ้ม',
    },
  }[lang]

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <Helmet>
        <title>{`${t.about.title} — ${t.siteName}`}</title>
        <meta name="description" content={content.intro.slice(0, 155)} />
      </Helmet>

      <SectionHeading eyebrow="03" title={t.about.title} />
      <p className="my-5 leading-8 text-bone/90">{content.intro}</p>

      <h2 className="mt-10 font-display text-2xl">{content.methodTitle}</h2>
      <p className="my-5 leading-8 text-bone/90">{content.method}</p>

      <MessageBox variant="note">
        {t.footer.disclaimer}
      </MessageBox>
    </section>
  )
}
