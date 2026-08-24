// Bilingual case-file data. Each entry's `i18n` map holds per-language content.
// Section types: paragraph | hook | message (variant: note|warning|quote) | attachment (image|video|map)
// No graphic descriptions — place, history, atmosphere, aftermath only.
//
// Places referenced from the "Japan Stigmatized Property" (JSP) game series.

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
    comingSoon: false,
    image: 'https://i.ytimg.com/vi/OO2ww6Le6ZY/maxresdefault.jpg',
    i18n: {
      th: {
        title: 'โรงพยาบาลสัตว์ K ชิโกะกุ',
        location: 'ชิโกะกุ',
        excerpt:
          'โรงพยาบาลสัตว์ร้างบนเกาะชิโกกุ ภายใต้การดูแลของ Annyaobake สถานที่เกิดเหตุคดีฆาตกรรมจริงและปรากฏการณ์เหนือธรรมชาติสุดสะพรึง',
        sections: [
          {
            type: 'paragraph',
            segments: [
              { text: 'โรงพยาบาลสัตว์ K หรือ ' },
              { text: 'k 動物病院 (K Doubutsu Byoin)', verbatim: true },
              { text: ' ที่จะเล่าถึงนี้ ปัจจุบันเป็นโรงพยาบาลสัตว์ร้างที่ปิดทำการไปแล้ว ตั้งอยู่บริเวณเกาะชิโกกุ ประเทศญี่ปุ่น ซึ่งในตอนนี้คาดว่าน่าจะอยู่ภายใต้การดูแลของ ' },
              { text: 'Annyaobake หรือ Annya (暗夜)', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' องค์กรที่เชี่ยวชาญด้านการจัดการอสังหาริมทรัพย์ต้องสาป บ้านผีสิง หรือสถานที่ที่เคยเกิดโศกนาฏกรรมและความตายอันดำมืด' },
            ],
          },
          {
            type: 'hook',
            text: 'สถานที่ร้างที่แปลกและชวนขนหัวลุกที่สุดแห่งหนึ่งในญี่ปุ่น',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ผู้จัดทำบล็อกขอยกให้ที่นี่เป็นหนึ่งในสถานที่ที่ทั้งแปลกและน่ากลัวที่สุดเท่าที่เคยเจอมา จนมียูทูบเบอร์สายล่าท้าผีชื่อดังของญี่ปุ่นหลายต่อหลายทีมต่างพากันเดินทางไปพิสูจน์ความกล้าและสำรวจโรงพยาบาลแห่งนี้ ที่นี่มีข่าวลือเบื้องหลังสุดสะพรึงเล่าต่อกันมาว่า ก่อนที่โรงพยาบาลจะตกมาอยู่ในการดูแลของ ' },
              { text: 'Annyaobake', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' เคยมีพนักงานถูกฆาตกรรมอย่างเป็นปริศนาโดยที่ไม่สามารถตามจับตัวคนร้ายได้เนื่องจากขาดหลักฐานชี้ตัว หรือแม้กระทั่งคดีสะเทือนขวัญของคู่ S&M (ลองไปหาความหมายกันเอาเองนะครับ) ที่ฝ่ายชายเป็น M และฝ่ายหญิงเป็น S ทั้งคู่แอบลักลอบเข้ามาหลังโรงพยาบาลปิดตัวลง โดยฝ่ายหญิง S ได้ปฏิบัติและทารุณกรรมฝ่ายชายราวกับเขาเป็นสุนัขตัวหนึ่ง จนกระทั่งเวลาผ่านไปเป็นสัปดาห์ ฝ่ายชาย M น่าจะเกิดสติแตกและทนไม่ไหว จึงลงมือปลิดชีพฝ่ายหญิง S ดับคาที่เกิดเหตุก่อนจะหลบหนีไปจบชีวิตตัวเองตามในเวลาต่อมา' },
            ],
          },
          {
            type: 'paragraph',
            text: 'เข้าใจไม่ผิดหรอกครับ... ถ้าใครเคยเล่นหรือเคยดูคนเล่นเกม Japan Stigmatized Property ภาค 2 ตรงจุดที่เป็น Accident Scene หรือมุมกล้องที่ส่องให้เห็นห้องที่มีกรงขังคล้ายคุก นั่นแหละครับคือสถานที่จริง! มียูทูบเบอร์บางคนที่เดินลึกเข้าไปในห้องด้านในสุดแล้วส่องกล้องลงไปที่พื้น ยังปรากฏร่องรอยที่คาดว่าเป็นคราบเลือดแผ่กระจายเป็นวงกว้าง เหมือนมีร่างของคนนอนจมกองเลือดอยู่ตรงนั้น และข้าง ๆ รอยเลือดนั้นเอง ก็ยังมีชามข้าวสุนัขวางทิ้งไว้อยู่ด้วย ฉะนั้นทั้งชื่อกล้องและบรรดา Anomaly ที่เป็นคน จึงน่าจะอิงมาจากคดีที่เกิดขึ้นจริง ส่วนพวก Anomaly หลอน ๆ ก็น่าจะใช้เอไอช่วยสร้างขึ้นมา',
          },
          {
            type: 'paragraph',
            text: 'นอกจากนี้ ยังมีปรากฏการณ์ประหลาดชวนขวัญผวาที่เกิดขึ้นระหว่างที่เหล่ายูทูบเบอร์เข้าไปท้าลองดี... ชนิดที่ว่าถ้าเจ้าของบล็อกต้องไปเจอเข้ากับตัวเองจริง ๆ วันรุ่งขึ้นคงต้องนั่งตั้งคำถามกับชีวิตหรือทำ Reality Check ด่วน ๆ ว่านี่ฉันหลอนคิดไปเองหรือเปล่า เดี๋ยวจะเล่าให้ฟังแบบละเอียดยิบเลยครับ เพราะดีเทลมันเยอะและพีคไม่ใช่ย่อย',
          },
          {
            type: 'attachment',
            atype: 'image',
            src: 'https://cdn.goope.jp/203593/230801162558-64c8b38639110.jpg',
            caption: 'สภาพบรรยากาศอันชวนขนลุกภายในโรงพยาบาลสัตว์ K เกาะชิโกกุ',
            link: 'https://r.goope.jp/uraannya/free/66666',
            aspect: 'aspect-[4/3]',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ย้อนกลับไปเดิมที ก่อนที่โรงพยาบาลแห่งนี้จะปิดตัวลง มันเคยเกิดเหตุการณ์สะเทือนขวัญอย่างคดีพนักงานถูกฆาตกรรมปริศนาที่ไม่สามารถจับกุมคนร้ายได้ตามที่เล่าไปตอนต้น และหลังจากปิดตัวลงก็เกิดโศกนาฏกรรมคู่ S&M บุกรุกเข้ามาจนกลายเป็นเหตุฆาตกรรมเลือดเย็น แต่เรื่องหลอนที่ยังไม่ได้เล่าก็คือ หลังจากที่ Annya ได้เข้ามาถือสิทธิ์ดูแลสถานที่ และเริ่มจัดอีเวนต์เปิดให้คนทั่วไปเข้ามานอนพักสังเกตการณ์ว่ามีสิ่งผิดปกติเหนือธรรมชาติหรือไม่... จู่ ๆ ก็มีหญิงสาวปริศนารายหนึ่ง DM ข้อความไปหาคุณคิริกิ ' },
              { text: '(Kiriki-San)', verbatim: true },
              { text: ' เจ้าของ ' },
              { text: 'Annya', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' เพื่อขอเข้าร่วมสังเกตการณ์ที่โรงพยาบาลแห่งนี้ ทั้งที่คุณคิริกิไม่เคยรู้จักหรือติดต่อกับเธอมาก่อนเลย จากคำบอกเล่าของคุณคิริกิ หญิงคนนี้มีพฤติกรรมแปลกประหลาดตั้งแต่การพิมพ์ DM ส่งข้อความเดิมซ้ำ ๆ วนไปมา และเมื่อเธอเดินทางไปถึงสถานที่จริง ปรากฏว่าคุณคิริกิกลับไม่สามารถติดต่อเธอได้เลยตลอดทั้งค่ำคืนอันมืดมิดนั้น' },
            ],
          },
          {
            type: 'hook',
            text: 'จนกระทั่งเช้าวันต่อมา... ทุกอย่างก็กลายเป็นฝันร้าย',
          },
          {
            type: 'paragraph',
            text: 'คุณคิริกิได้รับสายโทรศัพท์ปริศนาโทรเข้ามา แต่ปลายสายกลับไม่ใช่หญิงสาวที่ไปค้างคืนที่โรงพยาบาล ทว่ากลับเป็นคนที่อ้างตัวว่าเป็นเพื่อนของเธอ ซึ่งโทรมาแจ้งข่าวชวนช็อกว่า หญิงสาวคนที่ไปโรงพยาบาลสัตว์ K ได้กลับมาถึงบ้านตอนเช้า แล้วตัดสินใจ Overdose ปลิดชีพตัวเองไปแล้ว...',
          },
          {
            type: 'paragraph',
            text: 'แน่นอนว่าในตอนแรกคุณคิริกิแทบไม่ปักใจเชื่อ เพราะคิดว่าอาจจะเป็นพวกโทรมาก่อกวนหรือแกล้งปั่นประสาท แต่ทว่าไม่กี่วันต่อมา ตำรวจกลับเป็นฝ่ายโทรศัพท์ติดต่อมาหาคุณคิริกิตรง ๆ พร้อมแจ้งว่ามีหญิงสาวเสียชีวิตหลังจากที่เพิ่งเดินทางไปยังสถานที่ในความดูแลของคุณ (ซึ่งก็คือโรงพยาบาลสัตว์แห่งนี้นั่นเอง) และเนื่องจากตำรวจสงสัยว่าการเสียชีวิตอาจมีส่วนเกี่ยวข้องกับคุณคิริกิ จึงได้เรียกตัวเขาเข้าไปสอบสวนและให้ปากคำ จนทำให้เขารู้ความจริงอันน่าสะพรึงว่า... หญิงสาวคนนั้นได้จากโลกนี้ไปแล้วจริง ๆ',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ทางตำรวจและคุณคิริกิจึงได้ร่วมกันเปิดดูฟุตเทจจากกล้องวงจรปิดภายในสถานที่ย้อนหลัง (ซึ่งติดตั้งไว้ทั้งในโรงพยาบาลและบ้านพักของอดีตผู้อำนวยการโรงพยาบาลที่อยู่ติดกัน โดยห้อง Reception จะตั้งอยู่บนชั้นสองของบ้านพัก) ภาพจากกล้องวงจรปิดได้เผยให้เห็นพฤติกรรมชวนขนหัวลุกของหญิงสาวคนดังกล่าว... เธอเดินไปยืนนิ่งอยู่หน้าหิ้งพระภายในบ้านพัก พร้อมกับพึมพำบทสวดหรือพูดอะไรบางอย่างคนเดียว ยืนแช่อยู่อย่างนั้นนานถึง 30 นาทีเต็ม ก่อนจะเดินย้ายเข้าไปยืนนิ่งจ้องโต๊ะผ่าตัดในโรงพยาบาลอีก 30 นาที แล้วเดินวนสลับไปมาแบบนี้ซ้ำแล้วซ้ำเล่าตลอดทั้งคืน เหตุการณ์สุดหลอนครั้งนี้ทำให้ทาง ' },
              { text: 'Annya', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' ต้องสั่งเบรกและระงับการจัดอีเวนต์สังเกตการณ์ไปพักใหญ่เลยทีเดียว' },
            ],
          },
          {
            type: 'paragraph',
            text: '(ใครสนใจ สามารถย้อนคลิปด้านล่างไปดูตั้งแต่ช่วงเวลา 3:30 ได้เลยครับ จะมีบทสัมภาษณ์ว่าหลังจากที่คุณคิริกิเข้ามาดูแลที่นี่ เขาได้พบเจอกับเบื้องหลังอะไรมาบ้าง)',
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/nOhJOJeDxV4?t=521',
            caption: "บทสัมภาษณ์สุดหลอน: คุณคิริกิเผยเรื่องราวน่าสะพรึงของหญิงสาวผู้มาเยือนให้กับช่อง Fischer's",
            link: 'https://youtu.be/nOhJOJeDxV4?t=521',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'แน่นอนว่าเหล่ายูทูบเบอร์ชื่อดังของญี่ปุ่นต่างพากันตบเท้าเข้ามาสัมผัสความเฮี้ยนของที่นี่กันอย่างล้นหลาม แต่ผมจะขอยกตัวอย่างสัก 2-3 ช่องที่ผมได้ดูผ่าน ๆ กรอไปดูท่อนหลอน ๆ หรือนั่งดูแบบเต็ม ๆ โดยจะขอเล่าเปิดจากมุมมองของทีม ' },
              { text: "Fischer's", verbatim: true },
              { text: ' ที่เดินทางไปท้าความกล้า แล้วค่อยเสริมด้วยประสบการณ์สุดสยองของยูทูบเบอร์คนอื่น ๆ' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ทีม ' },
              { text: "Fischer's", verbatim: true },
              { text: ' มีสมาชิกทั้งหมด 6 คน ณ วันที่ไปสำรวจ แต่รอบนี้ส่งตัวแทนเข้าไปท้าลองดีเพียง 2 คน พร้อมทีมสตาฟฟ์อีก 2 คน โดยเมมเบอร์ที่ไป 2 คนนั้น มีคนหนึ่งที่กลัวผีเข้ากระดูกดำ ชนิดที่ขวัญอ่อนสุด ๆ ส่วนอีกคนถือว่าจิตแข็งและมีภูมิต้านทานเรื่องลี้ลับสูงพอตัว แม้จะไม่ใช่คนมีเซนส์แรง แต่เรื่องความนิ่งยกให้อยู่หัวแถวอันดับ 2-3 ของกลุ่มเลย เอาเป็นว่าถ้าต้องไปบุกตะลุยสถานที่ ' },
              { text: 'Shinrei Supotto (心霊スポット; หรือสถานที่หลอน มีวิญญาณ)', verbatim: true },
              { text: ' แล้วมีเขาคนนี้ไปด้วย ก็พอจะทำให้อุ่นใจขึ้นมาได้เปลาะหนึ่ง ซึ่งสิ่งที่ทีมนี้ต้องเผชิญในโรงพยาบาลร้างก็มีตั้งแต่เสียงเคาะปริศนาที่ดังขึ้นข้างห้อง Reception ลากยาวไปจนถึงเสียงหลอนหาที่มาไม่ได้ทั่วโรงพยาบาล' },
            ],
          },
          {
            type: 'hook',
            text: 'ความหลอนระดับขนหัวลุกเริ่มตั้งแต่วินาทีแรกที่ก้าวเท้าผ่านประตูโรงพยาบาล',
          },
          {
            type: 'paragraph',
            text: 'ความพีคมันเริ่มทำงานทันทีที่เปิดประตูเข้าไป พวกเขาโดนรับน้องด้วยเสียงประหลาดที่ฟังดูคล้ายเสียงสุนัขร้องครวญครางหรือหอนขึ้นมา (ถ้าฟังความรู้สึกแรกจริง ๆ เสียงมันโหยหวนจนนึกว่าเป็นเสียงกรีดร้องของผู้หญิงด้วยซ้ำ) ก่อนจะตามมาติด ๆ ด้วยเสียงที่คล้ายเสียงเห่า จนคนในทีมสำรวจถึงกับอุทานออกมาเลยว่า "นี่มันเสียงสุนัขชัด ๆ สุนัขมีชีวิตเป็น ๆ เลย" ทำเอาเมมเบอร์สายกลัวผีเริ่มออกอาการผวาตัวสั่นตั้งแต่ยังก้าวเข้าไปไม่ถึงไหน สภาพด้านในที่บันทึกผ่านวิดีโอนั้นแทบไม่ต่างไปจากฉากในเกมเลย มีขวดยาและอุปกรณ์รักษาสัตว์เกลื่อนกลาด ตั้งแต่วัคซีนไปจนถึงยากำจัดเห็บหมัดตกค้างอยู่เต็มไปหมด',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'และแล้วจังหวะระทึกขวัญก็เกิดขึ้น เมื่อเมมเบอร์คนที่จิตแข็งก้าวเท้าเข้าไปยังห้อง Accident Scene ซึ่งเป็นห้องที่มีลูกกรงขังคล้ายคุก ทันใดนั้น เมมเบอร์ขวัญอ่อนกับตากล้องสตาฟฟ์ที่ยืนรั้งท้ายขบวนอยู่ด้านหลัง ก็โดนเสียงปริศนาพุ่งตรงเข้าไมค์แบบเต็ม ๆ เหนี่ยว! ทั้งสองคนได้ยินเสียงกรีดร้องครวญครางของสุนัขดังแว่วเข้ามาใกล้ตัวมาก ๆ จนยังไม่ทันได้สำรวจห้อง Accident Scene ให้ทั่ว ทั้งหมดก็ต้องรีบถอนทัพพากันวิ่งหนีกลับมายังบ้านพักรับรอง เพราะเสียงนั้นทำให้เมมเบอร์สายขวัญอ่อนสติแตกกระเจิง ถึงขั้นร้องโวยวายออกมาว่า ' },
              { text: '["無理無理, かえろかえろかえろ"]', verbatim: true },
              { text: ' (ไม่ไหว ไม่ไหว กลับ... กลับดีกว่า") และก่อนที่จะก้าวพ้นตัวโรงพยาบาล ก็ยังมีเสียงร้องปริศนาดังส่งท้ายไล่หลังมาอีกระลอกจนขนลุกซู่' },
            ],
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/nOhJOJeDxV4?t=1181',
            caption: "วินาทีสติแตก! เสียงร้องโหยหวนปริศนาที่ Fischer's ต้องเผชิญในโรงพยาบาลสัตว์ K",
            link: 'https://youtu.be/nOhJOJeDxV4?t=1181',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'พอกลุ่ม ' },
              { text: "Fischer's", verbatim: true },
              { text: ' กลับขึ้นมานั่งพักที่ห้อง Reception มีเสียงเคาะและเสียงเหมือนสิ่งของตกกระทบพื้นแว่วมาเป็นระยะ แต่จุดที่พีคและชวนสยองที่สุดคือ ไอ้เสียงร้องโหยหวนที่เพิ่งได้ยินในโรงพยาบาล มันดันตามติดมาหลอกหลอนถึงห้อง Reception! ต้องเข้าใจก่อนนะครับว่า ตัวบ้านพักกับโรงพยาบาลแม้จะอยู่ห่างประมาณ 5 นาที แต่ห้อง Reception นั้นตั้งอยู่บนชั้นสองของตัวบ้านพัก' },
            ],
          },
          {
            type: 'paragraph',
            text: 'หลังจากเสียงหอนปริศนานั้นสงบลง ก็ไม่มีเหตุการณ์รุนแรงอะไรเพิ่มเติม จนกระทั่งฟ้าสาง ทีมงานทุกคนจึงสามารถเอาชีวิตรอดเดินทางกลับบ้านได้อย่างปลอดภัย',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ข้ามมาที่คลิปวิดีโอของ ' },
              { text: 'Hajime Shacho', verbatim: true },
              { text: ' ยูทูบเบอร์ตัวท็อปอีกคน จะมีช่วงหนึ่งขณะเข้าไปสังเกตการณ์ที่จู่ ๆ ทีมงานของเขาก็กู่ร้องกรีดร้องออกมาด้วยความตกใจกลัวอย่างสุดขีด ในจังหวะที่ทุกคนกำลังแตกตื่นนั้น ถ้าใครใส่หูฟังแล้วเร่งเสียงหรือตั้งใจฟังดี ๆ จะได้ยินเสียงหวีดแหลมประหลาดแทรกเข้ามาเบา ๆ ท่ามกลางเสียงกรีดร้องของทีมงาน... เป็นเสียงที่ฟังดูคล้ายเสียงหัวเราะของเด็ก หรือไม่ก็เป็นเสียงหมาส่งเสียงร้องเอ๋ง ๆ ที่น่าขนลุกมาก' },
            ],
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/x5hGsMoLwdU?t=2639',
            caption: 'เสียงลี้ลับแทรกผ่านความมืด: การสำรวจสุดระทึกของ Hajime Shacho ณ โรงพยาบาลสัตว์ K',
            link: 'https://youtu.be/x5hGsMoLwdU?t=2639',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'นอกจากนี้ ในคลิปของ ' },
              { text: 'Hajime Shacho', verbatim: true },
              { text: ' ยังได้พาเดินสำรวจลึกเข้าไปจนถึงจุดเกิดเหตุคดีสะเทือนขวัญของคู่ S&M โดยเขาได้ส่องกล้องเข้าไปดูในกรงขังด้านในสุด และได้พบเข้ากับภาพและร่องรอยบางอย่างที่... รุนแรงเกินกว่าจะเผยแพร่ออกอากาศบน YouTube ได้ ไม่อย่างนั้นคลิปคงโดนแบนติดสถานะแดงแน่นอน' },
            ],
          },
          {
            type: 'attachment',
            atype: 'image',
            src: 'assets/image/Crime_scene_image.png',
            caption: 'สภาพร่องรอยอันน่าสะพรึง ณ จุดเกิดเหตุฆาตกรรมจริงจากคดีสะเทือนขวัญคู่ S&M',
            link: 'https://youtu.be/x5hGsMoLwdU?t=3181',
            aspect: 'aspect-[4/3]',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ส่วนในคลิปของสองคู่หูยูทูบเบอร์ ' },
              { text: 'Skypeace (スカイピース)', verbatim: true },
              { text: " เท่าที่ผมดูผ่าน ๆ ในช่วงที่พวกเขาเดินสำรวจภายในโรงพยาบาล อาจจะยังไม่เจอเสียงอะไรชัดเจนนัก แต่พวกเขาดันมาเจอ 'ของหนัก' เอาตอนที่กลับมาพักผ่อนในห้อง Reception... เริ่มจากเสียงแรกที่ฟังดูคล้ายเสียงลากของหนัก ๆ บนพื้น ผสมกับเสียงคร่ำครวญโหยหวนอันเยือกเย็น และไม่รู้ว่าอะไรดลใจ พอพวกเขาสะดุ้งหันหน้าไปมองยังทิศทางของต้นเสียง..." },
            ],
          },
          {
            type: 'hook',
            segments: [
              { text: 'เสียงที่ดังอยู่เมื่อครู่ กลับแผ่วเบาและเงียบกริบลงไปดื้อ ๆ ซะงั้น! ' },
              { text: '[WTF]', verbatim: true },
            ],
          },
          {
            type: 'paragraph',
            text: 'และยังมีอีกช่วงหนึ่งในขณะที่พวกเขากำลังจะเคลิ้มหลับ ดันมีเสียงร้องโหยหวนลากยาวแผดดังขึ้นมากลางดึก คราวนี้ไม่รู้เป็นเพราะอะไร แต่สัมผัสได้เลยว่าตำแหน่งของเสียงมันดังอยู่ใกล้ตัวพวกเขามากจนน่าตกใจ',
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/pDCHdu4uzqg?si=q2K6qYyhWPZej6Rd&t=2223',
            caption: 'วินาทีเผชิญหน้าเสียงลึกลับในห้อง Reception ของ Skypeace',
            link: 'https://youtu.be/pDCHdu4uzqg?si=q2K6qYyhWPZej6Rd&t=2223',
            aspect: 'aspect-video',
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/pDCHdu4uzqg?t=2869',
            caption: 'เสียงโหยหวนปริศนากลางดึก ขณะที่ Skypeace กำลังจะข่มตานอน',
            link: 'https://youtu.be/pDCHdu4uzqg?t=2869',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            text: 'โดยส่วนตัวแล้ว ถ้าจะให้คะแนนความน่ากลัวของอสังหาริมทรัพย์ต้องสาปแห่งนี้เต็ม 10 ผมให้สูงถึง 8/10 เลยครับ เพราะทั้งบรรยากาศความเสื่อมโทรมของโรงพยาบาลสัตว์ร้าง ข้าวของที่วางระเกะระกะ และบางจุดที่แผ่รังสีความกดดันแปลก ๆ อย่างกรงขังในที่เกิดเหตุ บวกกับประวัติอันดำมืดที่มีคนถูกฆาตกรรมจริง รวมถึงเคสของคนที่ก้าวเข้ามาที่นี่แล้วรุ่งเช้ากลับไปตัดสินใจจบชีวิตตัวเอง... เหตุการณ์หลังนี้ถ้ามองในมุมลี้ลับ มันอาจจะเป็นเรื่องของอาถรรพ์คำสาปแช่ง หรือถ้าจะมองในมุมวิทยาศาสตร์และจิตวิทยา บรรยากาศอันมืดมนและชวนหดหู่ของสถานที่นี้ ก็อาจมีพลังกดดันจิตใจมากพอที่จะเปลี่ยนบุคลิกและความคิดของคนให้กลายเป็นอีกคนไปเลยก็ว่าได้',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'ปล. ถ้าอยากรู้ว่า ' },
              { text: "Fischer's", verbatim: true },
              { text: ' เป็นใคร ทักส่วนตัวมาถามได้' },
            ],
          },
        ],
      },
      en: {
        title: 'Animal Hospital K, Shikoku',
        location: 'Shikoku',
        excerpt:
          'An abandoned animal hospital on Shikoku Island, now under the care of Annyaobake — site of real homicide cases and chilling supernatural encounters.',
        sections: [
          {
            type: 'paragraph',
            segments: [
              { text: 'Animal Hospital K, or ' },
              { text: 'k 動物病院 (K Doubutsu Byoin)', verbatim: true },
              { text: ', which we are discussing here, is currently an abandoned animal hospital that has closed down, located in the Shikoku region of Japan. It is now believed to be under the care of ' },
              { text: 'Annyaobake หรือ Annya (暗夜)', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' — an organization specializing in managing cursed properties, haunted houses, and locations marked by tragedy and dark deaths.' },
            ],
          },
          {
            type: 'hook',
            text: 'One of the strangest and most spine-chilling abandoned places in Japan.',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'The creator of this blog regards this as one of the strangest and most frightening places ever encountered, drawing numerous well-known Japanese ghost-hunting YouTube teams to test their courage and explore this abandoned hospital. Chilling background rumors circulate that before the hospital came under the management of ' },
              { text: 'Annyaobake', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ', an employee was mysteriously murdered with the perpetrator never identified due to lack of forensic evidence. There was even the horrific case of an S&M couple (look up the meaning for yourselves) — where the man was M and the woman was S. The pair broke in after the hospital closed, where woman S treated and abused man M like a dog. After weeks had passed, man M seemingly suffered a mental breakdown, could take it no longer, and killed woman S on the spot before fleeing and later taking his own life.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'You understood that correctly... If anyone has played or watched gameplay of Japan Stigmatized Property 2, the "Accident Scene" spot — the camera angle showing a room with prison-like cages — that is the real location! Some YouTubers who ventured into the innermost room and pointed their camera at the floor still captured traces of what appears to be a wide pool of blood stains, as if a body had lain immersed in blood right there. Right next to those blood stains, a dog food bowl remained left behind. Therefore, both the camera names and the human Anomalies were likely inspired by these real-life incidents, while the eerie supernatural Anomalies were likely crafted with the help of AI.',
          },
          {
            type: 'paragraph',
            text: 'In addition, strange and terrifying phenomena occurred while YouTubers went to test their nerves... to the point that if the blog owner had experienced them firsthand, the next day would require serious life questioning or an urgent reality check: "Am I hallucinating and imagining this?" Let me tell you the story in full detail, because the nuances are extensive and intensely shocking.',
          },
          {
            type: 'attachment',
            atype: 'image',
            src: 'https://cdn.goope.jp/203593/230801162558-64c8b38639110.jpg',
            caption: 'Eerie atmosphere inside Animal Hospital K, Shikoku',
            link: 'https://r.goope.jp/uraannya/free/66666',
            aspect: 'aspect-[4/3]',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Looking back, before this hospital closed, it was already the site of terrifying incidents such as the unsolved staff murder mentioned earlier, followed after closure by the tragic S&M break-in and cold-blooded homicide. But the chilling tale not yet told is that after Annya acquired rights to manage the property and began hosting overnight observation stays for the public to detect supernatural anomalies... a mysterious young woman suddenly DM’d Mr. Kiriki ' },
              { text: '(Kiriki-San)', verbatim: true },
              { text: ', owner of ' },
              { text: 'Annya', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ', requesting to join an overnight observation at this hospital — despite Mr. Kiriki never knowing or interacting with her before. According to Mr. Kiriki, she displayed strange behavior from the start, typing repetitive identical messages in DMs over and over. And once she arrived at the location, Mr. Kiriki was unable to contact her at all throughout that pitch-black night.' },
            ],
          },
          {
            type: 'hook',
            text: 'Until the following morning... when everything turned into a nightmare.',
          },
          {
            type: 'paragraph',
            text: 'Mr. Kiriki received a mysterious phone call, but on the other end was not the young woman who stayed overnight at the hospital. Instead, it was someone claiming to be her friend, calling to deliver shocking news: the young woman who visited Animal Hospital K had returned home that morning and decided to take her own life via overdose...',
          },
          {
            type: 'paragraph',
            text: 'Naturally, Mr. Kiriki initially refused to believe it, suspecting it might be a prank call or harassment. However, a few days later, the police contacted Mr. Kiriki directly, stating that a young woman had passed away shortly after visiting a property under his supervision (namely, this animal hospital). Suspecting her death might be linked to Mr. Kiriki, police summoned him for interrogation and statements, confirming the terrifying truth... that the young woman had indeed departed this world.',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'The police and Mr. Kiriki reviewed security camera footage from the property (installed across both the hospital and the adjoining former director’s residence, where the Reception room was located on the second floor). The CCTV footage revealed eerie behavior from the young woman: she walked over and stood motionless before the Buddhist altar inside the residence, murmuring chants or muttering to herself, remaining frozen there for a full 30 minutes. She then moved into the hospital to stand motionless staring at the operating table for another 30 minutes, pacing back and forth in this loop repeatedly throughout the entire night. This chilling incident prompted ' },
              { text: 'Annya', href: 'https://x.com/ANNYAOBAKE', verbatim: true },
              { text: ' to halt and suspend observation stay events for an extended period.' },
            ],
          },
          {
            type: 'paragraph',
            text: '(For those interested, you can rewind the video below to timestamp 3:30 for an interview detailing what Mr. Kiriki encountered behind the scenes after taking over management of this place.)',
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/nOhJOJeDxV4?t=521',
            caption: "Haunting Interview: Mr. Kiriki reveals the terrifying story of the female visitor to Fischer's",
            link: 'https://youtu.be/nOhJOJeDxV4?t=521',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            segments: [
              { text: "Naturally, top Japanese YouTubers flocked here in droves to experience its haunting presence. I would like to highlight 2–3 channels that I watched through, skipping to eerie parts or watching in full, starting with the perspective of the " },
              { text: "Fischer's", verbatim: true },
              { text: ' team who ventured here on a courage test, followed by the terrifying encounters of other YouTubers.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'The ' },
              { text: "Fischer's", verbatim: true },
              { text: ' team had 6 members on the day of the investigation, but sent only 2 representatives along with 2 staff members. Of the 2 members, one was terrified of ghosts to the bone — exceptionally faint-hearted — while the other possessed great mental fortitude and supernatural resistance. Though not having a sixth sense, his composure ranked top 2–3 in the group; having him on a trip to a ' },
              { text: 'Shinrei Supotto (心霊スポット; หรือสถานที่หลอน มีวิญญาณ)', verbatim: true },
              { text: ' provided reassuring comfort. What this team encountered in the abandoned hospital ranged from mysterious tapping beside the Reception room to inexplicable haunting sounds throughout the building.' },
            ],
          },
          {
            type: 'hook',
            text: 'Spine-chilling dread began from the very first second they stepped through the hospital doors.',
          },
          {
            type: 'paragraph',
            text: 'The intensity peaked the moment they opened the door. They were greeted by an eerie sound resembling a dog whining or howling (initial impressions sounded so anguished that it almost seemed like a woman’s scream), quickly followed by distinct barking noises, prompting a team member to exclaim: "That is definitely a dog, a living breathing dog!" The faint-hearted member began trembling with terror barely steps inside. The interior captured on video mirrors the game setting almost identically — medicine bottles and veterinary equipment scattered everywhere, from leftover vaccines to flea-and-tick treatments.',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Then came the climax of terror: as the resilient member stepped into the "Accident Scene" room with prison-like iron bars, the faint-hearted member and the trailing staff cameraman were hit by a mysterious sound blast straight into their mic! Both heard the wailing whines of a dog right beside them. Before even finishing exploring the Accident Scene room, the whole group had to retreat in panic back to the reception house. The sound shattered the faint-hearted member’s composure entirely, crying out ' },
              { text: '["無理無理, かえろかえろかえろ"]', verbatim: true },
              { text: ' ("No way, no way, let’s go back... let’s go back!"). And just before stepping out of the hospital, another round of mysterious crying trailed behind them, sending shivers down their spines.' },
            ],
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/nOhJOJeDxV4?t=1181',
            caption: "Panic Moment! The mysterious wailing screams faced by Fischer's at Animal Hospital K",
            link: 'https://youtu.be/nOhJOJeDxV4?t=1181',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Once the ' },
              { text: "Fischer's", verbatim: true },
              { text: ' group retreated to rest in the Reception room, knocking sounds and the sound of objects hitting the floor echoed periodically. But the most horrifying part was that the very wailing sound heard in the hospital followed them all the way to the Reception room! Keep in mind that while the residence and hospital are about a 5-minute walk apart, the Reception room itself is situated on the second floor of the residence.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'After the mysterious howling subsided, no further violent incidents occurred. At daybreak, the entire team survived and returned home safely.',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Turning to the video by ' },
              { text: 'Hajime Shacho', verbatim: true },
              { text: ', another top YouTuber: during his overnight observation, his crew suddenly shrieked in extreme terror. Amid the chaos, if you wear headphones and turn up the volume or listen carefully, a faint, shrill whistling sound cuts through the crew’s screams... resembling a child’s laugh or an eerie dog whimpering.' },
            ],
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/x5hGsMoLwdU?t=2639',
            caption: 'Mysterious Sound in the Dark: Thrilling investigation by Hajime Shacho at Animal Hospital K',
            link: 'https://youtu.be/x5hGsMoLwdU?t=2639',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Furthermore, in ' },
              { text: 'Hajime Shacho', verbatim: true },
              { text: '’s video, he explored deep into the crime scene of the tragic S&M case, shining a camera into the innermost cages where he encountered visuals and traces... too graphic to broadcast on YouTube without risking an immediate strike/ban.' },
            ],
          },
          {
            type: 'attachment',
            atype: 'image',
            src: 'assets/image/Crime_scene_image.png',
            caption: 'Chilling traces at the actual crime scene of the tragic S&M murder case',
            link: 'https://youtu.be/x5hGsMoLwdU?t=3181',
            aspect: 'aspect-[4/3]',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'As for the video by the YouTuber duo ' },
              { text: 'Skypeace (スカイピース)', verbatim: true },
              { text: ", while exploring inside the hospital they didn’t catch distinct sounds, but ran into something heavy when resting in the Reception room... beginning with a sound like dragging heavy objects across the floor, mixed with a chilling wail. And as if compelled, when they startled and looked toward the origin of the sound..." },
            ],
          },
          {
            type: 'hook',
            segments: [
              { text: 'The loud sound just heard abruptly faded into dead silence out of nowhere! ' },
              { text: '[WTF]', verbatim: true },
            ],
          },
          {
            type: 'paragraph',
            text: 'And during another moment just as they were drifting to sleep, a long piercing howl echoed in the middle of the night. For unknown reasons, the source felt shockingly close right beside them.',
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/pDCHdu4uzqg?si=q2K6qYyhWPZej6Rd&t=2223',
            caption: 'Encountering mysterious sounds in the Reception room by Skypeace',
            link: 'https://youtu.be/pDCHdu4uzqg?si=q2K6qYyhWPZej6Rd&t=2223',
            aspect: 'aspect-video',
          },
          {
            type: 'attachment',
            atype: 'video',
            src: 'https://youtu.be/pDCHdu4uzqg?t=2869',
            caption: 'Chilling midnight wail while Skypeace was falling asleep',
            link: 'https://youtu.be/pDCHdu4uzqg?t=2869',
            aspect: 'aspect-video',
          },
          {
            type: 'paragraph',
            text: 'Personally, if I were to rate the fear factor of this cursed property out of 10, I would give it an 8/10. Between the decay of the abandoned hospital, scattered debris, oppressive pressure in spots like the crime scene cages, dark history of actual homicides, and the case of someone visiting only to end their life the following morning... Seen through the lens of the supernatural, it might be a curse; seen scientifically and psychologically, the gloomy and oppressive atmosphere could well possess enough psychological weight to alter a person’s mindset and personality entirely.',
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'P.S. If you want to know who ' },
              { text: "Fischer's", verbatim: true },
              { text: ' are, feel free to ask privately.' },
            ],
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
