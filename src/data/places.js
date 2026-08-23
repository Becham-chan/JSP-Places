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
    image: 'https://cdn.goope.jp/203593/230801162558-64c8b38639110.jpg',
    i18n: {
      th: {
        title: 'โรงพยาบาลสัตว์ K ชิโกะกุ',
        location: 'ชิโกะกุ',
        excerpt:
          'โรงพยาบาลสัตว์ที่ปิดตัวแล้วบนเกาะชิโกะกุ ปัจจุบันคาดว่าอยู่ในการดูแลของ Annyaobake — แฟ้มคดี (ยังจัดทำต่อ)',
        sections: [
          {
            type: 'paragraph',
            segments: [
              { text: 'โรงพยาบาลสัตว์ K หรือ ' },
              { text: 'k 動物病院 (K Doubutsu Byoin)', href: null, verbatim: true },
              { text: ' ที่ว่านี้เป็นโรงพยาบาลสัตว์ที่ปิดทำการในปัจจุบัน อยู่บริเวณเกาะชิโกกุ ประเทศญี่ปุ่น ซึ่งปัจจุบันคาดการณ์น่าจะอยู่ภายใต้การดูแลของ ' },
              { text: 'Annyaobake หรือ Annya (暗夜)', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' ซึ่งน่าจะเป็นองค์กรที่ดูแลเกี่ยวอสังหาริมทรัพย์ บ้านที่มีประวัติเกี่ยวกับสิ่งลี้ลับ หรือเหตุโศกอนาถตกรรมที่ทำให้มีผู้เสียชีวิตในอสังหาริมทรัพย์นั้น ๆ' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ผู้จัดทำบล็อคนี้ขอให้สถานที่นี้เป็นสถานที่ที่มีความแปลกและน่ากลัวที่สุด ซึ่งก็ได้ยูทูปเบอร์ญี่ปุ่นหลายคนหลายทีมได้ไปล่า ทดสอบความกล้า สำรวจโรงพยาบาลนี้ มีทั้งเบื้องหลังเลืองลือว่าก่อนที่โรงพยาบาลจะถูกรับการดูแลโดย ' },
              { text: 'Annyaobake', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' เคยพนักงานถูกฆาตกรรมโดยที่ไม่สามารถตาตัวฆาตกรได้เนื่องจากปัญหาเรื่องหลักฐานการชี้ตัว หรือคู่ S&M (หาเองแล้วกันว่าคืออะไร) ที่มีชาย M และ หญิง S ลักลอบเข้ามาหลังโรงพยาบาลปิดตัวไป โดยหญิง S ได้ปรนนิบัติเหมือนกับว่าฝ่ายชาย M เป็นสุนัข แล้วเหมือนสัปดาห์ผ่านไป ฝ่ายชาย M น่าจะสลิ้งแตกเลยลงมือปลิดชีพฝ่ายหญิง S ในสถานที่เกิดเหตุแล้วฝ่ายชาย M ก็ได้ตัดสินใจหนีไปปลิดชีพตัวเองที่อื่นในเวลาต่อไป' },
            ],
          },
          {
            type: 'paragraph',
            text: 'เข้าใจไม่ผิดครับ ถ้าได้เล่นหรือดูคนเล่นเกม Japan Stigmatized Property ภาค 2 แล้วเหตุ Accident Scene หรือกล้องที่แสดงให้เห็นถึงห้องที่มีกรงขังเหมือนคุก นั่นแหละยูทูปเบอร์บางคนเข้าไปในห้องในสุดแล้วถ่ายที่พื้น มีหลักฐานที่คาดว่าน่าจะเป็นเลือดที่แผ่บนพื้นเป็นคาบเหมือนกับว่ามีคนนอนทับกองเลือด และข้าง ๆ ลอยเลือดนั่นเองมีชามที่เหมือนชามใส่อาหารสุนัขด้วย ฉะนั้นทั้งชื่อกล้อง Anomaly ที่เป็นคน คิดว่าน่าจะอิงจากเหตุการณ์ที่เกิดขึ้นจริง แต่พวก Anomaly น่าจะใช้เอไอสร้างขึ้นมา',
          },
          {
            type: 'paragraph',
            text: 'อีกทั้งยังมีเหตุการณ์แปลกประหลาดที่เกิดขึ้นตอนที่ยูทูปเบอร์ไปทดสอบความกล้า ที่... ถ้าเจ้าของบล็อคไปเจอเอง วันต่อมาน่าจะตั้งคำถามชีวิตไม่ก็ Reality Check ว่าฉันคิดไปเองมั้ยเนี่ย เดี๋ยวเล่าให้ เนื้อหาน่าจะเยอะใช้ย่อย',
          },
          {
            type: 'attachment',
            atype: 'image',
            src: 'https://cdn.goope.jp/203593/230801162558-64c8b38639110.jpg',
            caption: 'ภาพจากโรงพยาบาลสัตว์ K ชิโกกุ https://cdn.goope.jp/203593/230801162558-64c8b38639110.jpg',
            aspect: 'aspect-[4/3]',
          },
        ],
      },
      en: {
        title: 'Animal Hospital K, Shikoku',
        location: 'Shikoku',
        excerpt:
          'A closed animal hospital on Shikoku Island, Japan — now believed to be under the care of Annyaobake. Case file (still in preparation).',
        sections: [
          {
            type: 'paragraph',
            segments: [
              { text: 'Animal Hospital K, or ' },
              { text: 'k 動物病院 (K Doubutsu Byoin)', verbatim: true },
              { text: ', is an animal hospital that has closed down, located on Shikoku Island, Japan. It is currently believed to be under the care of ' },
              { text: 'Annyaobake หรือ Annya (暗夜)', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' — likely an organization that looks after real estate with histories of the unexplained, or tragedies in which lives were lost on the property.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: "The author of this blog regards it as the strangest and most frightening place of all. Many Japanese YouTubers and teams have gone hunting there — courage tests, explorations of the hospital. Behind the scenes, rumor has it that before the hospital came under the care of " },
              { text: 'Annyaobake', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ', a staff member was murdered, but the killer could never be identified due to problems with identification evidence. There is also the S&M couple (go find out what that means yourselves): a man M and a woman S who sneaked in after the hospital closed. The woman S waited on the man M as if he were a dog — then, weeks later, man M seemingly snapped, killed woman S on the spot, fled, and later took his own life elsewhere.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'Yes, you understood that right. If you have played — or watched someone play — Japan Stigmatized Property 2, the "Accident Scene" event, or the camera showing a room with cage-like prison cells: that is where some YouTubers entered the innermost room and filmed the floor. There was evidence believed to be blood spread across the floor, as if someone had lain on top of the pool of blood — and beside the pool of blood sat a bowl that looked like a dog food bowl. So both the names of the human "Anomaly" cameras are thought to be based on real events — though the Anomalies themselves were likely created with AI.',
          },
          {
            type: 'paragraph',
            text: 'There are also strange incidents that occurred while YouTubers were doing courage tests there — things that, had the blog owner encountered them himself, would have left him questioning his life, or at least doing a reality check the next day ("did I imagine that?"). That story will be told later — there is a lot of content to get through.',
          },
          {
            type: 'attachment',
            atype: 'image',
            src: 'https://cdn.goope.jp/203593/230801162558-64c8b38639110.jpg',
            caption: 'Photo from Animal Hospital K, Shikoku — https://cdn.goope.jp/203593/230801162558-64c8b38639110.jpg',
            aspect: 'aspect-[4/3]',
          },
        ],
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
