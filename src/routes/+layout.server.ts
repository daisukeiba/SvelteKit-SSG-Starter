import type { NavItem } from '../lib/scripts/types';

export function load(): { navItems: NavItem[] } {
  return {
    navItems: [
      { href: '/', id: 'home', label: 'HOME' },
      { href: '/about/', id: 'about', label: 'ABOUT' }
    ]
  };
}