const routes = [
  {
    path: '/',
    name: 'Home',
    component: 'Home'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'Dashboard'
  },
  {
    path: '/referral/:username',
    name: 'Referral',
    component: 'Referral'
  },
  {
    path: '/signup/',
    name: 'Signup',
    component: 'Signup'
  },
  {
    path: '/confirm/:uid',
    name: 'Confirm',
    component: 'Confirm'
  },
  {
    path: '/login',
    name: 'Login',
    component: 'Login'
  },
  {
    path: '/whats-fittoc',
    name: 'WhatsFittoc',
    component: 'WhatsFittoc'
  },
  {
    path: '/ideology',
    name: 'Ideology',
    component: 'Ideology'
  },
  {
    path: '/faq',
    name: 'Faq',
    component: 'Faq'
  },
  {
    path: '/universal',
    name: 'Universal',
    component: 'Universal'
  },
  {
    path: '/charity',
    name: 'Charity',
    component: 'Charity'
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: 'Testimonials'
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: 'Accounts'
  },
  {
    path: '/reset-password/:uid',
    name: 'ResetPassword',
    component: 'ResetPassword'
  },
  {
    path: '/my-fittoc',
    name: 'MyFittoc',
    component: 'MyFittoc'
  },
  {
    path: '/referrals',
    name: 'Referrals',
    component: 'Referrals'
  }
]

export default routes
