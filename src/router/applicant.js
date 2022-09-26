export const appRoutes = [
  {
    path: '/asc/page',
    component: () => import('layouts/ApplicantLayout.vue'),
    children: [
      {
        path: "announcement",
        component: () => import('pages/Applicants/Application/Announcement'),
      },
      {
        path: 'application',
        component: () => import('pages/Applicants/Application'),
        children: [
          {
            path: "s1",
            component: () => import('pages/Applicants/Application/S1Forms'),
            children: [
              {
                path: "lists",
                component: () => import('pages/Applicants/Application/S1Forms/ApplicationList')
              },
              {
                path: "multiple",
                component: () => import('pages/Applicants/Application/S1Forms/MultipleApplications')
              },
              {
                path: "special",
                component: () => import('pages/Applicants/Application/S1Forms/SpecialApplications')
              }
            ]
          },
          {
            path: "s2",
            component: () => import('pages/Applicants/Application/S2Forms'),
            children: [
              {
                path: "lists",
                component: () => import('pages/Applicants/Application/S2Forms/ApplicationList')
              },
              {
                path: "special",
                component: () => import('pages/Applicants/Application/S2Forms/SpecialClearingRequest')
              }
            ]
          },
          {
            path: "single-application",
            component: () => import('pages/Applicants/Application/PaymentForms/Individual')
          },
          {
            path: "multiple-applications",
            component: () => import('pages/Applicants/Application/PaymentForms/Multiple')
          },
          {
            path: "special-applications",
            component: () => import('pages/Applicants/Application/PaymentForms/S2SpecialClearing')
          },
          {
            path: "accounts-payable",
            component: () => import('pages/Applicants/Application/PaymentForms/AccountsPayable')
          }
        ]
      },
      {
        path: "/account",
        // component: () => import(''),
        children: [
          {
            path: "user-profile",
            // component: () => import(''),
          }
        ]
      },
    ]
  },
];
