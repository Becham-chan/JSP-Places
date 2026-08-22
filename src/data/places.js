// Bilingual case-file data. Each entry's `i18n` map holds per-language content.
// Section types: paragraph | message (variant: note|warning|quote) | attachment (image|video|map)
// No graphic descriptions — place, history, atmosphere, aftermath only.

export const places = [
  {
    slug: 'ikebukuro-apartment-303',
    region: 'tokyo',
    year: '2016',
    categories: ['stigmatized-property'],
    tone: 'blood',
    featured: true,
    i18n: {
      en: {
        title: 'Ikebukuro, Apartment 303',
        location: 'Toshima, Tokyo',
        excerpt:
          'An ordinary one-room apartment in a bright shopping district — and a textbook case of how a jiko bukken is born, priced, and quietly re-let.',
        sections: [
          { type: 'paragraph', text: 'From the street, the building gives nothing away. It sits a seven-minute walk from Ikebukuro Station, between a coin laundry and a demolished pachinko parlor. The rent for its one-room apartments runs noticeably below the neighborhood average, and for years the reason was an open secret among local agents.' },
          { type: 'paragraph', text: 'In 2016, a tenant died alone in unit 303. The death was not a crime; it was the kind of solitary passing that Japanese society increasingly records as "kodokushi" — lonely death. The body was found weeks later. Cleaners replaced the flooring, repainted the walls, and the unit returned to the market.' },
          { type: 'message', variant: 'quote', source: 'Unnamed rental agent, Toshima', text: 'We lower the rent about thirty percent. Someone always takes it. Usually someone very young, or someone who does not ask.' },
          { type: 'paragraph', text: 'Under Japan’s 2021 disclosure rules, a landlord must inform a new tenant when a previous occupant died in the unit of something other than natural causes known in advance. A lonely death discovered weeks later occupies a gray zone — disclosed to some viewers, omitted with others, depending on the agency.' },
          { type: 'attachment', atype: 'map', caption: 'Approximate area only. Exact addresses of occupied residences are never published here.' },
          { type: 'message', variant: 'note', text: 'This entry is a composite case profile based on publicly reported patterns in Toshima ward; details have been generalized to protect past and current residents.' },
        ],
      },
      th: {
        title: 'อิเกบุกุโระ ห้อง 303',
        location: 'โทชิมะ โตเกียว',
        excerpt:
          'อพาร์ตเมนต์ห้องเดียวธรรมดากลางย่านช้อปปิ้งที่สว่างไสว — และเป็นกรณีตัวอย่างของการที่ "จิโกะบุกเก็ง" ถือกำเนิด ถูกกำหนดราคา และถูกปล่อยเช่าเงียบ ๆ',
        sections: [
          { type: 'paragraph', text: 'มองจากถนน ตัวตึกไม่ได้บอกอะไรเลย ตั้งอยู่ห่างจากสถานีอิเกบุกุโระเจ็ดนาที ระหว่างร้านซักรีดกับอาคารพาชิงโกะที่ถูกรื้อไปแล้ว ค่าเช่าห้องชุดห้องเดียวต่ำกว่าค่าเฉลี่ยของย่านอย่างเห็นได้ชัด และเหตุผลก็เป็นความลับที่เปิดเผยกันในหมู่นายหน้าท้องถิ่นมาหลายปี' },
          { type: 'paragraph', text: 'ปี 2016 ผู้เช่าคนหนึ่งเสียชีวิตโดดเดี่ยวในห้อง 303 การเสียชีวิตครั้งนี้ไม่ใช่อาชญากรรม แต่เป็นการจากไปเงียบ ๆ ที่สังคมญี่ปุ่นบันทึกว่า "โคโดกุชิ" — ความตายอันโดดเดี่ยว ศพถูกพบหลังผ่านไปหลายสัปดาห์ บริษัททำความสะอาดเปลี่ยนพื้น ทาสีผนังใหม่ และห้องก็กลับเข้าสู่ตลาด' },
          { type: 'message', variant: 'quote', source: 'นายหน้านิรนาม โทชิมะ', text: 'เราลดค่าเช่าประมาณสามสิบเปอร์เซ็นต์ ก็เสมอมีคนรับเช่า มักเป็นคนอายุน้อยมาก หรือคนที่ไม่ถามอะไร' },
          { type: 'paragraph', text: 'ภายใต้กฎเปิดเผยข้อมูลปี 2021 ของญี่ปุ่น เจ้าของบ้านต้องแจ้งผู้เช่ารายใหม่เมื่อผู้เช่าคนก่อนเสียชีวิตในห้องด้วยสาเหตุที่ไม่ใช่การเสียชีวิตตามธรรมชาติที่รู้ล่วงหน้า การตายอย่างโดดเดี่ยวที่ถูกพบภายหลังหลายสัปดาห์จึงอยู่ในเขตสีเทา — บางครั้งเปิดเผย บางครั้งละเว้น ขึ้นอยู่กับบริษัทนายหน้า' },
          { type: 'attachment', atype: 'map', caption: 'ระบุเพียงพื้นที่โดยประมาณ ที่อยู่จริงของที่พักอาศัยที่มีผู้อยู่อาศัยไม่เปิดเผยที่นี่' },
          { type: 'message', variant: 'note', text: 'แฟ้มคดีนี้เป็นโปรไฟล์เชิงรวมจากรูปแบบที่รายงานสาธารณะในเขตโทชิมะ รายละเอียดถูกทำให้เป็นสามัญเพื่อคุ้มครองผู้อยู่อาศัยเก่าและปัจจุบัน' },
        ],
      },
    },
  },
  {
    slug: 'aokigahara-forest',
    region: 'yamanashi',
    year: '1970s–present',
    categories: ['forest', 'legend'],
    tone: 'bruise',
    featured: true,
    i18n: {
      en: {
        title: 'Aokigahara, the Sea of Trees',
        location: 'Naruzawa, Fujikawaguchiko, Yamanashi',
        excerpt:
          'A dense forest on hardened lava at the foot of Mt. Fuji — silent, easy to get lost in, and burdened by decades of association with solitary death.',
        sections: [
          { type: 'paragraph', text: 'Aokigahara grew over lava flows from Mt. Fuji’s 864 CE eruption. The rock floor absorbs sound; compasses wander near magnetic deposits; the canopy swallows landmarks. Even experienced hikers describe a sensation of the forest gently closing behind them.' },
          { type: 'message', variant: 'warning', text: 'This entry discusses the topic of suicide in historical and social context. It contains no descriptions of methods. If you are in crisis, help exists: in Thailand call 02-113-6787; in Japan call 03-5774-0992 (TELL).' },
          { type: 'paragraph', text: 'The forest’s association with solitary death long predates the internet. Seicho Matsumoto’s 1960 novel "Tower of Waves" is often credited with entwining the place with suicide in the public imagination, and the association deepened through decades of news coverage, patrol volunteers, and folklore about "ubume" — the spirits of mothers said to linger among the trees.' },
          { type: 'paragraph', text: 'Local officials stopped publishing annual counts in the 2010s, recognizing that the numbers themselves fed the legend. Today the trailheads carry quiet signs asking visitors to reconsider, and volunteer patrols walk the unofficial paths. The forest, for its part, remains what it always was: young, dense, and indifferent to the stories placed upon it.' },
          { type: 'attachment', atype: 'map', caption: 'Official hiking trails (Narusawa Ice Cave / Wind Cave area). Off-trail exploration is dangerous and discouraged.' },
        ],
      },
      th: {
        title: 'โอะคิงาฮะระ ทะเะแห่งพฤกษา',
        location: 'นะรุซะวะ ฟุจิคะวะกุชิโกะ ยะมะนะชิ',
        excerpt:
          'ป่าหนาทึบบนลาวาที่แข็งตัวเชิงเขาฟุจิ — เงียบ หลงทางง่าย และแบกภาระของการเชื่อมโยงกับความตายอันโดดเดี่ยวมาหลายทศวรรษ',
        sections: [
          { type: 'paragraph', text: 'โอะคิงาฮะระเติบโตบนกระแสลาวาจากการปะทุของภูเขาไฟฟุจิปี ค.ศ. 864 พื้นหินดูดกลืนเสียง เข็มทิศเอนเอียงใกล้แหล่งแม่เหล็ก และเพดานใบไม้กลืนจุดสังเกตทั้งหมด แม้แต่นักเดินป่าที่ชำนาญยังบรรยายความรู้สึกว่าป่าค่อย ๆ ปิดลงเบื้องหลังตนเอง' },
          { type: 'message', variant: 'warning', text: 'แฟ้มนี้กล่าวถึงประเด็นการฆ่าตัวตายในบริบททางประวัติศาสตร์และสังคม โดยไม่มีคำอธิบายวิธีการใด ๆ หากคุณกำลังตกที่นั่งลำบาก มีทางออก: ในไทยโทร 02-113-6787 ในญี่ปุ่นโทร 03-5774-0992 (TELL)' },
          { type: 'paragraph', text: 'การเชื่อมโยงของป่าแห่งนี้กับความตายอันโดดเดี่ยวมีมาก่อนยุคอินเทอร์เน็ตนาน นวนิยาย "หอคอยคลื่นลม" ปี 1960 ของเซโจ มะตสึโมะโตะ มักได้รับเครดิตว่าผูกพันธ์สถานที่นี้กับการฆ่าตัวตายในจินตนาการสาธารณะ และความเชื่อมโยงก็ลึกขึ้นผ่านทศวรรษของการรายงานข่าว อาสาสมัครลาดตระเวน และความเชื่อพื้นบ้านเรื่อง "อุบุเมะ" — วิญญาณของมารดาที่ว่ากันว่ายังคงอยู่ท่ามกลางต้นไม้' },
          { type: 'paragraph', text: 'เจ้าหน้าที่ท้องถิ่นหยุดเผยแพร่ตัวเลขรายปีในทศวรรษ 2010 โดยตระหนักว่าตัวเลขเองก็หล่อเลี้ยงตำนาน ปัจจุบันทางเข้าส่งมีป้ายเงียบ ๆ ขอให้ผู้มาเยือนไตร่ตรองอีกครั้ง และอาสาสมัครเดินลาดตระเวนตามเส้นทางไม่เป็นทางการ ส่วนป่าเองก็ยังคงเป็นอย่างที่มันเป็นมาตลอด: อ่อนวัย หนาทึบ และเพิกเฉยต่อเรื่องเล่าที่ผู้คนสวมใส่ให้' },
          { type: 'attachment', atype: 'map', caption: 'เส้นทางเดินป่าอย่างเป็นทางการ (ถ้ำน้ำแข็งนะรุซะวะ / ถ้ำลม) การเข้าป่านอกเส้นทางอันตรายและไม่แนะนำ' },
        ],
      },
    },
  },
  {
    slug: 'kiyotaki-tunnel',
    region: 'kyoto',
    year: '1970s–present',
    categories: ['tunnel', 'legend'],
    tone: 'bruise',
    featured: false,
    i18n: {
      en: {
        title: 'Kiyotaki Tunnel',
        location: 'Narutaki, Ukyo, Kyoto',
        excerpt:
          'A 586-meter mountain tunnel on the old road to Arashiyama, where folklore about a mirror-wielding woman overlaps with a documented record of traffic deaths.',
        sections: [
          { type: 'paragraph', text: 'Opened in 1927, Kiyotaki Tunnel cuts through the mountains northwest of Kyoto along the route to the Atago shrine area. By day it is a quiet two-lane road used by tour buses and cyclists heading toward Arashiyama’s back trails.' },
          { type: 'paragraph', text: 'Since the 1970s the tunnel has anchored one of Kyoto’s most repeated modern legends: a woman in a red mask who appears in rearview mirrors, and a set of "rules" — do not look back, do not count the side alcoves, do not drive it at midnight. As with most urban legends, every teller cites a friend of a friend.' },
          { type: 'message', variant: 'note', text: 'Separating legend from record: the tunnel’s sharp approach curves did contribute to real traffic fatalities over the decades, and lighting upgrades were carried out in the 2000s. The folklore and the engineering problem have quietly reinforced each other.' },
          { type: 'paragraph', text: 'What makes Kiyotaki persist, researchers of Japanese urban legends argue, is its location: it sits on a boundary — city to mountain, shrine route to burial ground, daylight tourism to night stillness. Boundaries are where Japanese folklore has always placed its spirits.' },
          { type: 'attachment', atype: 'map', caption: 'The tunnel carries live traffic. View from the Narutaki side approach only; do not stop inside.' },
        ],
      },
      th: {
        title: 'อุโมงค์คิโยทากิ',
        location: 'นะรุทะกิ อุเคียว เกียวโต',
        excerpt:
          'อุโมงค์ภูเขายาว 586 เมตรบนถนนเก่าสู่อะระชิยะมะ ที่ซึ่งความเชื่อเรื่องหญิงสาวถือกระจกซ้อนทับกับบันทึกการเสียชีวิตจากอุบัติเหตุจริง',
        sections: [
          { type: 'paragraph', text: 'เปิดใช้ปี 1927 อุโมงค์คิโยทากิผ่านภูเขาทางตะวันตกเฉียงเหนือของเกียวโตตามเส้นทางสู่เขตศาลเจ้าอะตะโงะ กลางวันเป็นถนนสองเลนเงียบ ๆ ที่รถบัสทัวร์และนักปั่นจักรยานใช้ไปยังเส้นทางหลังอะระชิยะมะ' },
          { type: 'paragraph', text: 'ตั้งแต่ทศวรรษ 1970 อุโมงค์นี้เป็นหมุดหมายของตำนานเมืองที่ถูกเล่าซ้ำมากที่สุดแห่งหนึ่งของเกียวโต: หญิงสาวในหน้ากากแดงที่ปรากฏในกระจกมองหลัง พร้อม "กฎ" มากมาย — ห้ามหันหลัง ห้ามนับช่องข้างทาง ห้ามขี่ผ่านเที่ยงคืน และเหมือนตำนานเมืองส่วนใหญ่ ทุกคนที่เล่าล้วนอ้างถึงเพื่อนของเพื่อน' },
          { type: 'message', variant: 'note', text: 'แยกตำนานออกจากบันทึก: ทางโค้งแคบและคมของอุโมงค์มีส่วนทำให้เกิดการเสียชีวิตจากอุบัติเหตุจริงตลอดหลายทศวรรษ และมีการปรับปรุงแสงสว่างในทศวรรษ 2000 ความเชื่อพื้นบ้านกับปัญหาวิศวกรรมเสริมแรงกันและกันอย่างเงียบ ๆ' },
          { type: 'paragraph', text: 'นักวิจัยตำนานเมืองญี่ปุ่นชี้ว่าเหตุที่คิโยทากิอยู่ยาวคงอยู่ที่ทำเล: มันนั่งบนเส้นแบ่ง — เมืองกับภูเขา เส้นทางศาลเจ้ากับสุสาน แสงวันท่องเที่ยวกับความนิ่งของกลางคืน และเส้นแบ่งคือที่ที่ความเชื่อพื้นบ้านญี่ปุ่นวางวิญญาณไว้เสมอ' },
          { type: 'attachment', atype: 'map', caption: 'อุโมงค์นี้ยังมีการจราจร ชมได้เฉพาะจากทางเข้าฝั่งนะรุทะกิ ห้ามจอดรถภายใน' },
        ],
      },
    },
  },
  {
    slug: 'gunkanjima-island',
    region: 'nagasaki',
    year: '1810–1974',
    categories: ['industrial-heritage', 'ruins'],
    tone: 'blood',
    featured: true,
    i18n: {
      en: {
        title: 'Gunkanjima (Hashima Island)',
        location: 'Nagasaki harbor, Nagasaki',
        excerpt:
          'Once the most densely populated place on earth, now a silent concrete reef — a coal mine island whose brilliance and brutality are both part of the record.',
        sections: [
          { type: 'paragraph', text: 'Hashima — "Battleship Island," from the shape of its concrete towers — was bought by Mitsubishi in 1890 and mined for undersea coal for nearly a century. At its 1959 peak, more than 5,000 people lived on sixteen acres, stacked into Japan’s first high-rise concrete apartment blocks. It was, by density, the most crowded place humanity has ever built.' },
          { type: 'message', variant: 'quote', source: 'Former resident, interviewed in the 2011 documentary "Hashima, the desert island"', text: 'Everyone knew everyone. You heard your neighbor’s radio through the wall, their arguments, their Mahjong tiles at night. When the island emptied, all of that just… stopped.' },
          { type: 'paragraph', text: 'The record is not only nostalgic. During the Second World War, Korean conscripted laborers and Chinese forced laborers worked the undersea shafts; many died. The island’s 2015 UNESCO World Heritage listing was accompanied by controversy over how that history is presented at the site, and a memorial to the laborers was placed at the viewing point in 2021.' },
          { type: 'paragraph', text: 'The mine closed in January 1974. Residents left within weeks. Television sets, school desks, and half-furnished rooms remain behind seawalls that typhoons have been slowly dismantling ever since. Since 2009, a restricted walkway allows visitors to see a fraction of the island; the collapsing blocks remain off-limits.' },
          { type: 'attachment', atype: 'map', caption: 'Public access is by guided tour from Nagasaki port, via a raised walkway on the south side.' },
        ],
      },
      th: {
        title: 'กุนกันจิมะ (เกาะฮะชิมะ)',
        location: 'อ่าวนะงะซะกิ นะงะซะกิ',
        excerpt:
          'ครั้งเคยเป็นพื้นที่ที่มีประชากรหนาแน่นที่สุดในโลก บัดนี้เป็นแนวปะการังคอนกรีตเงียบงัน — เกาะเหมืองถ่านหินที่ความรุ่งเรืองและความโหดร้ายล้วนเป็นส่วนหนึ่งของบันทึกประวัติศาสตร์',
        sections: [
          { type: 'paragraph', text: 'ฮะชิมะ — "เกาะเรือรบ" จากรูปทรงหอคอยคอนกรีต — ถูกมิตซูบิชิซื้อไปในปี 1890 และขุดถ่านหินใต้ทะเลมาเกือบศตวรรษ ในช่วงสูงสุดปี 1959 ผู้คนกว่า 5,000 คนอาศัยบนพื้นที่เพียงราว 65 ไร่ ซ้อนกันในอาคารชุดคอนกรีตสูงชั้นแห่งแรกของญี่ปุ่น ถ้าวัดจากความหนาแน่น นี่คือพื้นที่ที่แน่นที่สุดเท่าที่มนุษยชาติเคยสร้าง' },
          { type: 'message', variant: 'quote', source: 'อดีตผู้อยู่อาศัย จากสารคดีปี 2011 "Hashima, the desert island"', text: 'ทุกคนรู้จักกันหมด คุณได้ยินวิทยุของเพื่อนบ้านลอดผนัง เสียงทะเลาะ เสียงกระเบื้องมะฮ์จงตอนกลางคืน พอเกาะว่างลง ทั้งหมดนั้นก็แค่… หยุดไป' },
          { type: 'paragraph', text: 'บันทึกไม่ได้มีแต่ความหลังอบอุ่น ระหว่างสงครามโลกครั้งที่สอง แรงงานเกณฑ์ชาวเกาหลีและแรงงานเกณฑ์ชาวจีนถูกส่งลงเหมืองใต้ทะเล และหลายคนเสียชีวิต การขึ้นทะเบียนมรดกโลก UNESCO ปี 2015 มาพร้อมข้อถกเถียงว่าประวัติศาสตร์ส่วนนี้ถูกนำเสนออย่างไร และอนุสรณ์เพื่อแรงงานเหล่านั้นถูกตั้งขึ้นที่จุดชมวิวในปี 2021' },
          { type: 'paragraph', text: 'เหมืองปิดในเดือนมกราคม 1974 ผู้อยู่อาศัยออกจากเกาะภายในไม่กี่สัปดาห์ เครื่องโทรทัศน์ โต๊ะโรงเรียน และห้องที่เฟอร์นิเจอร์ครึ่ง ๆ กลาง ๆ ยังคงอยู่หลังกำแพงกันคลื่นที่พายุไต้ฝุ่นค่อย ๆ รื้อทำลายมาตลอด ตั้งแต่ปี 2009 มีทางเดินจำกัดให้ผู้เยี่ยมชมชมเกาะได้บางส่วน ส่วนตึกที่พังทลายยังห้ามเข้า' },
          { type: 'attachment', atype: 'map', caption: 'เข้าชมได้โดยทัวร์นำเที่ยวจากท่าเรือนะงะซะกิ ผ่านทางเดินยกสูงฝั่งใต้' },
        ],
      },
    },
  },
  {
    slug: 'nakagusuku-hotel-ruins',
    region: 'okinawa',
    year: '1970s–present',
    categories: ['ruins', 'legend'],
    tone: 'bruise',
    featured: false,
    i18n: {
      en: {
        title: 'Nakagusuku Hotel Ruins',
        location: 'Kitanakagusuku, Okinawa',
        excerpt:
          'A luxury resort that never opened, abandoned mid-construction above a royal tomb — Okinawa’s most famous "cursed" building site.',
        sections: [
          { type: 'paragraph', text: 'In the early 1970s, with tourism booming ahead of Okinawa’s reversion to Japan, developers began a sprawling luxury hotel complex on a hill in Kitanakagusuku. Construction halted around 1974; the resort never hosted a single guest. Investors collapsed, and the concrete skeleton was simply left.' },
          { type: 'paragraph', text: 'Local memory adds a layer: the hill overlooks the royal tombs of the Ryukyu kings at Nakagusuku Castle Park, and construction reportedly involved cutting into stone and forest considered sacred ground. Workers reported equipment failures and injuries; the project gained a reputation it has never shaken.' },
          { type: 'message', variant: 'note', text: 'Skeptics point to simpler causes — speculative financing, collapsed lenders, and a remote site that made completion uneconomic. The supernatural explanation and the balance-sheet explanation may both be true, in different registers.' },
          { type: 'paragraph', text: 'For decades the ruin drew urban explorers despite fencing and partial demolition, and several fatal falls were recorded. The site is privately owned and off-limits; it is best experienced from the marked viewpoint, where the empty frames of the towers stand against the Pacific like a mausoleum of the bubble era that never quite reached Okinawa.' },
          { type: 'attachment', atype: 'map', caption: 'View from the designated viewpoint near Nakagusuku Castle Park. Entry into the ruins is prohibited.' },
        ],
      },
      th: {
        title: 'ซากโรงแรมนะกะงุชุกุ',
        location: 'คิตะนะกะงุชุกุ โอะกินะวะ',
        excerpt:
          'รีสอร์ตหรูที่ไม่เคยเปิด ถูกทิ้งกลางการก่อสร้างเหนือสุสานหลวง — พื้นที่ก่อสร้าง "ต้องสาป" ที่โด่งดังที่สุดของโอะกินะวะ',
        sections: [
          { type: 'paragraph', text: 'ต้นทศวรรษ 1970 ท่ามกลางการท่องเที่ยวที่เฟื่องฟูก่อนการคืนโอะกินะวะให้ญี่ปุ่น นักพัฒนาเริ่มก่อสร้างโรงแรมหรูขนาดใหญ่บนเนินเขาในคิตะนะกะงุชุกุ การก่อสร้างหยุดลงราวปี 1974 รีสอร์ตไม่เคยต้อนรับแขกแม้แต่คนเดียว นักลงทุนล้ม และโครงกระดูกคอนกรีตก็ถูกทิ้งไว้เฉย ๆ' },
          { type: 'paragraph', text: 'ความทรงจำของชาวบ้านเติมชั้นใหม่: เนินเขานี้มองลงไปยังสุสานหลวงของกษัตริย์รีวกีวที่อุทยานปราสาทนะกะงุชุกุ และการก่อสร้างมีรายงานว่าตัดหินและป่าไม้ที่ถือว่าเป็นพื้นที่ศักดิ์สิทธิ์ คนงานรายงานอุปกรณ์เสียและบาดเจ็บ โครงการก็ได้ชื่อเสียงที่ไม่เคยจางหาย' },
          { type: 'message', variant: 'note', text: 'ฝ่ายสงสัยชี้เหตุที่ง่ายกว่า — การเงินเก็งกำไร สถาบันการเงินล้ม และทำเลห่างไกลที่ทำให้สร้างจนจบไม่คุ้ม คำอธิบายเหนือธรรมชาติกับตัวเลขงบดุลอาจจริงพร้อมกันทั้งคู่ ในความหมายคนละระดับ' },
          { type: 'paragraph', text: 'หลายทศวรรษที่ผ่านมาซากอาคารดึงนักสำรวจเมืองแม้มีรั้วและการรื้อบางส่วน และมีบันทึกการตกจนเสียชีวิตหลายครั้ง พื้นที่เป็นกรรมสิทธิ์ส่วนบุคคลและห้ามเข้า ชมได้ดีที่สุดจากจุดชมวิวที่กำหนดไว้ ที่ซึ่งโครงอาคารว่างเปล่าตั้งตระหง่านต่อมหาสมุทรแปซิฟิกดั่งสุสานของยุคฟองสบู่ที่ไม่เคยไปถึงโอะกินะวะ' },
          { type: 'attachment', atype: 'map', caption: 'ชมจากจุดชมวิวที่กำหนดใกล้อุทยานปราสาทนะกะงุชุกุ ห้ามเข้าไปในซากอาคาร' },
        ],
      },
    },
  },
]

export const regions = {
  tokyo: { en: 'Tokyo', th: 'โตเกียว' },
  yamanashi: { en: 'Yamanashi', th: 'ยะมะนะชิ' },
  kyoto: { en: 'Kyoto', th: 'เกียวโต' },
  nagasaki: { en: 'Nagasaki', th: 'นะงะซะกิ' },
  okinawa: { en: 'Okinawa', th: 'โอะกินะวะ' },
}

export function getPlace(slug) {
  return places.find((p) => p.slug === slug)
}
