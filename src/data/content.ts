export type Fact = { value: string; label: string }
export type Soul = { name: string; line: string }
export type Chapter = {
  id: string
  index: string
  title: string
  souls: [string, string]
  teaser: string
}

export const NAV = [
  { id: 'ferry', label: '渡口' },
  { id: 'chapters', label: '执念' },
  { id: 'souls', label: '六魂' },
  { id: 'entry', label: '入局' },
] as const

export const HERO = {
  category: '沉浸式悬疑剧本',
  hook: ['一条渡船，摆渡执念；', '一段孽缘，谁是归人？'],
  cta: '立即预约',
  scrollCue: '向下入渡',
}

export const FACTS: Fact[] = [
  { value: '6人（3男3女）', label: '角色配置' },
  { value: '4–5小时', label: '游戏时长' },
  { value: '中等难度', label: '新手友好' },
  { value: '情感·沉浸·推理', label: '多重体验' },
]

export const PROLOGUE = {
  verticalLeft: '生者执念不渡',
  verticalRight: '亡者魂归何处',
  passage:
    '河面无风自皱。此处不分生死，只分渡与未渡——记得的人留在此岸，放下的人才上得了船。',
}

export const THESIS = '六个未渡之人，三种执念，三段「鸳鸯」命数。'

export const CHAPTERS: Chapter[] = [
  {
    id: 'chapter-one',
    index: '卷一',
    title: '守护未歇',
    souls: ['野草', '荒棘'],
    teaser: '烽火焚尽来路，仍有人替故人守着归途。',
  },
  {
    id: 'chapter-two',
    index: '卷二',
    title: '此意未言',
    souls: ['残灯', '断腔'],
    teaser: '灯未灭，腔已断；未说出口的，最难渡。',
  },
  {
    id: 'chapter-three',
    index: '卷三',
    title: '奔赴未尽',
    souls: ['薄羽', '灼烬'],
    teaser: '纵使薄羽成灰，也要向余烬深处奔赴。',
  },
]

export const SOULS: Soul[] = [
  { name: '野草', line: '烧不尽的，从来不是草。' },
  { name: '荒棘', line: '护人的刺，也扎自己。' },
  { name: '残灯', line: '灯要有人守着，才算灯。' },
  { name: '断腔', line: '那一出戏，我没唱完。' },
  { name: '薄羽', line: '翅薄，也敢逆风。' },
  { name: '灼烬', line: '烧到最后，只剩一点热。' },
]

export const BOOKING = {
  seal: '渡',
  openLabel: '登船',
  title: '归处',
  platform: '预约通道',
  instruction: '扫码添加，备注「鸳鸯」与到店人数、期望场次。',
  qrSrc: '/qr/booking-qr.png',
  closingLine: '此岸已远，彼岸未明。你，可愿登船？',
}
