// Lightweight bilingual dictionary (TH / EN)
export const dictionary = {
  en: {
    siteName: 'Kioku no Basho',
    siteTagline: 'Places of Memory',
    nav: { places: 'Places', about: 'About Me', menu: 'Open menu', close: 'Close menu' },
    home: {
      heroEyebrow: 'A documentary archive',
      heroTitle: 'Places remember what people try to forget.',
      heroBody:
        'A bilingual archive of Japan’s stigmatized properties and places of dark history — told the way “jiko bukken” maps tell them: as quiet case files of place, atmosphere, and aftermath. Never exploitation.',
      ctaBrowse: 'Browse the archive',
      featured: 'Featured case files',
      disclaimerShort:
        'Documentary project. No graphic content. Handled with respect for the deceased and their families.',
    },
    places: {
      title: 'Places',
      subtitle: 'Case files by region, era, and category.',
      searchPlaceholder: 'Search by name or location…',
      filterAll: 'All regions',
      filterCategory: 'Category',
      noResults: 'No places match your filters. The fog hides them for now.',
      resultsCount: (n) => `${n} place${n === 1 ? '' : 's'} found`,
    },
    detail: {
      backToPlaces: '← Back to all places',
      location: 'Location',
      era: 'Era',
      category: 'Category',
      sources: 'Sources & notes',
      related: 'Related places',
      cwTitle: 'Content note',
    },
    about: {
      title: 'About Me',
    },
    footer: {
      disclaimer:
        'Kioku no Basho is a non-commercial documentary project. Entries are compiled from public records, journalism, and local testimony. No graphic descriptions are included, and nothing here is intended to sensationalize tragedy. If you are struggling, please reach out — in Thailand, call the Samaritans of Thailand at 02-113-6787 (24h).',
      credits: 'Built with React, Vite & Tailwind CSS.',
    },
    notFound: {
      title: 'A lost place',
      body: 'You have wandered somewhere the map does not name. The path behind you has faded.',
      cta: 'Return to the archive',
    },
    categories: {
      'stigmatized-property': 'Stigmatized property',
      forest: 'Forest',
      ruins: 'Ruins',
      'industrial-heritage': 'Industrial heritage',
      tunnel: 'Tunnel',
      legend: 'Urban legend',
    },
    lightboxClose: 'Close image',
  },
  th: {
    siteName: 'คิโอคุ โนะ บาโชะ',
    siteTagline: 'สถานที่แห่งความทรงจำ',
    nav: { places: 'สถานที่', about: 'เกี่ยวกับเรา', menu: 'เปิดเมนู', close: 'ปิดเมนู' },
    home: {
      heroEyebrow: 'หอจดหมายเหตุเชิงสารคดี',
      heroTitle: 'สถานที่จดจำสิ่งที่ผู้คนพยายามลืม',
      heroBody:
        'หอจดหมายเหตุสองภาษาว่าด้วยอสังหาริมทรัพย์ต้องห้ามและสถานที่อันมีประวัติศาสตร์มืดของญี่ปุ่น — เล่าแบบเดียวกับแผนที่ "จิโกะบุกเก็ง": เป็นแฟ้มคดีเงียบ ๆ ของสถานที่ บรรยากาศ และเรื่องราวหลังจากนั้น โดยไม่สร้างกระแสจากโศกนาฏกรรม',
      ctaBrowse: 'เข้าชมหอจดหมายเหตุ',
      featured: 'แฟ้มคดีแนะนำ',
      disclaimerShort:
        'โปรเจกต์สารคดี ไม่มีเนื้อหารุนแรง จัดทำด้วยความเคารพต่อผู้เสียชีวิตและครอบครัว',
    },
    places: {
      title: 'สถานที่',
      subtitle: 'แฟ้มคดีแยกตามภูมิภาค ยุคสมัย และหมวดหมู่',
      searchPlaceholder: 'ค้นหาจากชื่อหรือสถานที่…',
      filterAll: 'ทุกภูมิภาค',
      filterCategory: 'หมวดหมู่',
      noResults: 'ไม่พบสถานที่ที่ตรงกับตัวกรอง หมอกยังปกคลุมอยู่ในตอนนี้',
      resultsCount: (n) => `พบ ${n} สถานที่`,
    },
    detail: {
      backToPlaces: '← กลับไปหน้าสถานที่ทั้งหมด',
      location: 'สถานที่',
      era: 'ยุคสมัย',
      category: 'หมวดหมู่',
      sources: 'แหล่งอ้างอิงและหมายเหตุ',
      related: 'สถานที่ที่เกี่ยวข้อง',
      cwTitle: 'ข้อควรระวัง',
    },
    about: {
      title: 'เกี่ยวกับเรา',
    },
    footer: {
      disclaimer:
        'คิโอคุ โนะ บาโชะเป็นโปรเจกต์สารคดีไม่แสวงหากำไร รวบรวมจากเอกสารสาธารณะ งานข่าว และคำบอกเล่าในท้องถิ่น ไม่มีคำอธิบายที่สะเทือนขวัญ และไม่มีเจตนาเปิดเผยโศกนาฏกรรมเพื่อดึงดูดความสนใจ หากคุณกำลังท้อแท้ โปรดติดต่อขอความช่วยเหลือ — ศูนย์ให้คำปรึกษาของไทย โทร 02-113-6787 (24 ชม.)',
      credits: 'สร้างด้วย React, Vite และ Tailwind CSS',
    },
    notFound: {
      title: 'สถานที่ที่หลงทาง',
      body: 'คุณหลงเข้ามาในที่ที่แผนที่ไม่บันทึกชื่อ เส้นทางข้างหลังคุณจางหายไปแล้ว',
      cta: 'กลับสู่หอจดหมายเหตุ',
    },
    categories: {
      'stigmatized-property': 'อสังหาริมทรัพย์ต้องห้าม',
      forest: 'ป่าไม้',
      ruins: 'ซากปรักหักพัง',
      'industrial-heritage': 'มรดกอุตสาหกรรม',
      tunnel: 'อุโมงค์',
      legend: 'ตำนานเมือง',
    },
    lightboxClose: 'ปิดภาพ',
  },
}
