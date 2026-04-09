import type { NavSection } from '@/utils/components'
import { sections } from '@/utils/components'

interface SiteConfig {
  name: string
  url: string
  ogImage: string
  description: string
  navItems: Array<{
    label: NavSection['title']
    href: NavSection['url']
  }>
}

export const siteConfig: SiteConfig = {
  name: 'shadcn/vue',
  url: 'https://shadcn-vue.com',
  ogImage: 'https://shadcn-vue.com/og.jpg',
  description:
    'A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.',
  navItems: sections.map((section) => ({
    label: section.title,
    href: section.url,
  })),
}
