import { appRoutes } from "./applicant";
import {
  reportRoutes,
  maintenanceRoutes,
  companyRoutes,
} from "./admin";

const routes = [
  {
    path: '/asc/page',
    component: () => import('layouts/ApplicantLayout.vue'),
    children: [
      /**
       * From Applicant routes
       */
      ...appRoutes,
      /**
       * From Admin routes
       */
      ...maintenanceRoutes,
      ...reportRoutes,
      ...maintenanceRoutes,
      ...companyRoutes,
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: 'announcements', component: () => import('pages/Admin/Announcements.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
