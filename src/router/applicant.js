import {
  s1FormRoutes,
  accountRoutes,
  applicationRoutes
} from "./admin";

export const appRoutes = [
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
          /**
           * Admin and Applicant use this route
           */
          {
            path: "lists",
            component: () => import('pages/Applicants/Application/S1Forms/ApplicationList')
          },
          /**
           * Admin and Applicant use this route
           */
          {
            path: "multiple",
            component: () => import('pages/Applicants/Application/S1Forms/MultipleApplications')
          },
          /**
           * Admin and Applicant use this route
           */
          {
            path: "special",
            component: () => import('pages/Applicants/Application/S1Forms/SpecialApplications')
          },

          /**
           * Admin only use this route
           */
          ...s1FormRoutes
        ]
      },
      {
        path: "s2",
        component: () => import('pages/Applicants/Application/S2Forms'),
        children: [
          /**
           * Admin and Applicant use this route
           */
          {
            path: "lists",
            component: () => import('pages/Applicants/Application/S2Forms/ApplicationList')
          },
          /**
           * Admin and Applicant use this route
           */
          {
            path: "special",
            component: () => import('pages/Applicants/Application/S2Forms/SpecialClearingRequest')
          }
        ]
      },
      /**
       * Applicant only use this route
       */
      {
        path: "single-application",
        component: () => import('pages/Applicants/Application/PaymentForms/Individual')
      },
      /**
       * Applicant only use this route
       */
      {
        path: "multiple-applications",
        component: () => import('pages/Applicants/Application/PaymentForms/Multiple')
      },
      /**
       * Applicant only use this route
       */
      {
        path: "special-applications",
        component: () => import('pages/Applicants/Application/PaymentForms/S2SpecialClearing')
      },
      /**
       * Applicant only use this route
       */
      {
        path: "accounts-payable",
        component: () => import('pages/Applicants/Application/PaymentForms/AccountsPayable')
      },

      /**
       * Admin only use this route
       */
      ...applicationRoutes
    ]
  },
  {
    path: "account",
    // component: () => import(''),
    children: [
      /**
       * Admin and Applicant use this route
       */
      {
        path: "user-profile",
        // component: () => import(''),
      },

      /**
       * Applicant only use this route
       */
      ...accountRoutes
    ]
  },
];
