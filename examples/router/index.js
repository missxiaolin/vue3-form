import { createRouter, createWebHashHistory } from 'vue-router'

import DocsIndex from '../docs/docsIndex';
import Demo from '../docs/demo';
import DocsString from '../docs/string';
import DocsNumber from '../docs/number';
import DocsBoolean from '../docs/boolean';
import DocsArray from '../docs/array';
import DocsList from '../docs/list';
import DocsObject from '../docs/object';

import DemoIndex from '../demos/demoIndex';
import Simple from '../demos/simple';
import All from '../demos/all';
import Links from '../demos/links'
import Object from '../demos/object';
import String from '../demos/string';
import Multi from '../demos/multi';

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
      {
        path: 'number',
        component: DocsNumber
      },
      {
        path: 'boolean',
        component: DocsBoolean
      },
      {
        path: 'array',
        component: DocsArray
      },
      {
        path: 'list',
        component: DocsList
      },
      {
        path: 'object',
        component: DocsObject
      }
    ]
  },
  {
    name: 'demos',
    path: '/',
    component: DemoIndex,
    children: [
      {
        path: '/simple',
        name: 'simple',
        component: Simple
      },
      {
        path: '/all',
        name: 'all',
        component: All
      },
      {
        path: '/links',
        name: 'links',
        component: Links
      },
      {
        path: '/object',
        name: 'object',
        component: Object
      },
      {
        path: '/string',
        name: 'string',
        component: String
      },
      {
        path: '/multi',
        name: 'multi',
        component: Multi
      },
      {
        path: '/:pathMatch(.*)*',
        component: Simple
      },
    ]
  }
]

const router = createRouter({
  routes, // short for `routes: routes`
  history: createWebHashHistory(),
});

export default router;