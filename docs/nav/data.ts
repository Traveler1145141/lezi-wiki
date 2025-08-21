import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '乐子',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '大佬6的技术毋容置疑',
        desc: '大佬6的技术毋容置疑',
        link: '/artcile/大佬6的技术毋容置疑',
      },
    ],
  },
]
