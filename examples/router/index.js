import { createRouter, createWebHashHistory } from 'vue-router'

import DocsIndex from '../docs/docsIndex';
import Demo from '../docs/demo';


const routes = [
  {
    name: 'docs',
    path: '/docs',
    component: DocsIndex,
    children: [
      {
        path: 'demo',
        component: Demo
      },
    ]
  }
]

const router = createRouter({
  routes, // short for `routes: routes`
  history: createWebHashHistory(),
});

export default router;