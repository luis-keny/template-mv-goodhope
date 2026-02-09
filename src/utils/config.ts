import { sections } from "./components";

export const siteConfig = {
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