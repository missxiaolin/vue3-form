import { createRouter, createWebHashHistory } from 'vue-router'

import DocsIndex from '../docs/docsIndex';
import Demo from '../docs/demo';
import DocsString from '../docs/string';


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
      {
        path: 'string',
        component: DocsString
      },
    ]
  }
]

const router = createRouter({
  routes, // short for `routes: routes`
  history: createWebHashHistory(),
});

export default router;