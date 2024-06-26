import { TNavItems } from '@/types/tConstant';
import x from '@/assets/icons/social/x.png';
import linked_in from '@/assets/icons/social/linked_in.png';
import facebook from '@/assets/icons/social/facebook.png';
import github from '@/assets/icons/social/github.png';
import angelList from '@/assets/icons/social/angel_list.png';
import dribble from '@/assets/icons/social/dribble.png';
import { TIndicatorsItem } from '@/types/indicator';

// export const baseUrl =
//   'https://reason-caroline-triple-boutique.trycloudflare.com/v1';

export const baseUrl =
  'http://localhost:3002/v1';

export const navItems: TNavItems[] = [
  {
    title: 'Launch pad',
  },
  {
    title: 'Trading',
  },
  {
    title: 'Earn',
  },
  {
    title: 'More',
  },
];

// item list for footer
export const fItems = [
  {
    title: 'Product',
    items: [
      {
        item: 'Overview',
        link: '',
      },
      {
        item: 'Features',
        link: '',
      },
      {
        item: 'Solutions',
        link: '',
      },
      {
        item: 'Tutorials',
        link: '',
      },
      {
        item: 'Pricing',
        link: '',
      },
      {
        item: 'Releases',
        link: '',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        item: 'About Us',
        link: '',
      },
      {
        item: 'Careers',
        link: '',
      },
      {
        item: 'Press',
        link: '',
      },
      {
        item: 'News',
        link: '',
      },
      {
        item: 'Media Kit',
        link: '',
      },
      {
        item: 'Contact',
        link: '',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        item: 'Blog',
        link: '',
      },
      {
        item: 'Newsletter',
        link: '',
      },
      {
        item: 'Events',
        link: '',
      },
      {
        item: 'Help Centre',
        link: '',
      },
      {
        item: 'Tutorials',
        link: '',
      },
      {
        item: 'Support',
        link: '',
      },
    ],
  },
  {
    title: 'Social',
    items: [
      {
        item: 'Twitter',
        link: '',
      },
      {
        item: 'LinkedIn',
        link: '',
      },
      {
        item: 'Facebook',
        link: '',
      },
      {
        item: 'GitHub',
        link: '',
      },
      {
        item: 'AngelList',
        link: '',
      },
      {
        item: 'Dribble',
        link: '',
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      {
        item: 'Terms',
        link: '',
      },
      {
        item: 'Privacy',
        link: '',
      },
      {
        item: 'Cookies',
        link: '',
      },
      {
        item: 'Licenses',
        link: '',
      },
      {
        item: 'Settings',
        link: '',
      },
      {
        item: 'Contact',
        link: '',
      },
    ],
  },
];

export const socials = [
  {
    icon: x,
    url: '',
  },
  {
    icon: linked_in,
    url: '',
  },
  {
    icon: github,
    url: '',
  },
  {
    icon: facebook,
    url: '',
  },
  {
    icon: angelList,
    url: '',
  },
  {
    icon: dribble,
    url: '',
  },
];

export const defaultAvatar =
  'https://kwunsplash.s3.us-east-2.amazonaws.com/avatar.jpg';

export const indicators: TIndicatorsItem[] = [
  {
    title: 'Waiting for pool start',
    subtitle: 'No one can purchase',
    lastChild: false,
    active: true,
  },
  {
    title: 'Pool start',
    subtitle: 'Pool start at 2024',
    lastChild: false,
    active: true,
  },
  {
    title: 'Pool ended',
    subtitle: 'Pool ended at 2024',
    lastChild: false,
    active: true,
  },
  {
    title: 'Claim coins',
    subtitle: 'Claim coins at 2024',
    lastChild: true,
    active: false,
  },
];
