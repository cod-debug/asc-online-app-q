export const s1FormRoutes = [
  {
    path: 'for-release',
    // component: () => import('layouts/MainLayout.vue'),
  },
  {
    path: 'released',
    // component: () => import('layouts/DashboardLayout.vue'),
  },
];

export const reportRoutes = [
  {
    path: 'accounting',
    // component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'reports',
        // component: () => import('pages/Index.vue')
      }
    ]
  },
];

export const maintenanceRoutes = [
  {
    path: 'maintenance',
    // component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'announcement-content',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'affiliation',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'login-image',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'type-of-application',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'dialects',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'type-of-document',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'type-of-main-documents',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'document-size',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'email-notification',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'payment-type',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'weekly-user-schedule',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'type-of-reason',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'number-of-multiple-application-allowed',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'type-of-rational',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'screener-reviewer-pairs',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'qr-and-bar-code-checker',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'accounts',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'category',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'brands',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'product',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'type-of-medium',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'type-of-executions',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'medium-executions-controller',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'holidays',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 's1-s2-expiration-periods',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 's1-fees-settlement-period',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 's1-incomplete-decision-expiration-period',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'promissory-note-periods',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'brand-penalties',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'company-penalties',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'asc-rates',
        // component: () => import('pages/Index.vue')
      },
      {
        path: 'asc-rates-special',
        // component: () => import('pages/Index.vue')
      },
    ]
  },
]

export const accountRoutes = [
  {
    path: 'user-role',
    component: () => import('layouts/MainLayout.vue'),
  },
];

export const applicationRoutes = [
  {
    path: 'reassignment',
    // component: () => import('layouts/MainLayout.vue'),
  },
];

export const companyRoutes = [
  {
    path: 'company',
    // component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'lists',
        // component: () => import('pages/Index.vue')
      }
    ]
  },
];

