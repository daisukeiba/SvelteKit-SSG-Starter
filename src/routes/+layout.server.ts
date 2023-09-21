export const prerender = true;
export const trailingSlash = 'always'; // urlの最後にスラッシュを付与

import type { NavItem } from '../lib/scripts/types';

export function load(): { navItems: NavItem[] } {
  return {
    navItems: [
      { href: '/', id: 'home', label: 'HOME' },
      { href: '/about', id: 'about', label: 'ABOUT' },
      { href: '/blog', id: 'blog', label: 'BLOG' }
    ]
  };
}