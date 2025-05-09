export const userMenu = [
  {
    key: 'menu',
    name: 'Menu',
    title: true,
  },
  {
    key: 'home',
    name: 'Home',
    image: 'home',
    link: '/app',
  },
  {
    key: 'faq',
    name: 'Faq/Rules',
    image: 'faq',
    link: '/app/faq',
    redirectUrl: 'https://trading-buddy.io/faqs/',
  },
  {
    key: 'tutorials',
    name: 'Tutorials',
    image: 'tutorial',
    link: '/app/tutorials',
  },
  {
    key: 'support-livechat',
    name: 'Support & Livechat',
    image: 'technicalSupport',
    link: '/app/support-livechat',
  },
  {
    key: 'account',
    name: 'Account',
    title: true,
  },
  {
    key: 'account_overview',
    name: 'Account overview',
    image: 'profile',
    link: '/app/account-overview',
  },
  {
    key: 'my_picks',
    name: 'my picks',
    image: 'calendar',
    link: '/app/my-picks',
  },
  {
    key: 'rewards',
    name: 'Rewards',
    image: 'withdrawal',
    link: '/app/rewards',
  },
  {
    key: 'certificates',
    name: 'certificates',
    image: 'certificate',
    link: '/app/certificates',
  },
  {
    key: 'challenge_reset',
    name: 'challenge reset',
    image: 'reset',
    link: '/app/challenge-reset',
  },
  {
    key: 'add_new_challenge',
    name: 'Add new challenge',
    image: 'addToCart',
    link: '/app/add-new-challenge',
  },
  {
    key: 'top_sports',
    name: 'Top Sports',
    title: true,
  },
];
export const adminMenu = [
  {
    key: 'menu',
    name: 'Menu',
    title: true,
  },
  {
    key: 'overview',
    name: 'Overview',
    image: 'home',
    link: '/admin',
  },
  {
    key: 'Accounts-Menu',
    name: 'Accounts',
    image: 'profile',
    child: [
      {
        key: 'accounts',
        name: 'Accounts',
        link: '/admin/accounts',
        image: 'profile',
      },
      {
        key: 'free_trial_accounts',
        name: 'Trial Accounts',
        link: '/admin/accounts/trial-accounts',
        image: 'profile',
      },
      {
        key: 'stage_1_accounts',
        name: 'Stage 1 Accounts',
        image: 'profile',
        link: '/admin/accounts/stage-1-accounts',
      },
      {
        key: 'stage_2_accounts',
        name: 'Stage 2 Accounts',
        image: 'profile',
        link: '/admin/accounts/stage-2-accounts',
      },
      {
        key: 'big_league_accounts',
        name: 'Big League Accounts',
        image: 'profile',
        link: '/admin/accounts/big-league-accounts',
      },
      {
        key: 'account-tracking',
        name: 'Account Tracking',
        image: 'profile',
        link: '/admin/accounts/tracking',
      },
    ],
  },
  {
    key: 'users',
    name: 'Users',
    image: 'user',
    link: '/admin/users',
  },
  {
    key: 'documents',
    name: 'Documents',
    image: 'document',
    link: '/admin/documents',
  },
  {
    key: 'payments',
    name: 'Payments',
    image: 'withdrawal',
    link: '/admin/payments',
  },
  {
    key: 'picks',
    name: 'Picks',
    image: 'calendar',
    link: '/admin/picks',
  },
];
