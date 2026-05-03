import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sino/blog',
    component: ComponentCreator('/sino/blog', '8fa'),
    exact: true
  },
  {
    path: '/sino/markdown-page',
    component: ComponentCreator('/sino/markdown-page', 'c61'),
    exact: true
  },
  {
    path: '/sino/docs',
    component: ComponentCreator('/sino/docs', 'af5'),
    routes: [
      {
        path: '/sino/docs',
        component: ComponentCreator('/sino/docs', '4c7'),
        routes: [
          {
            path: '/sino/docs',
            component: ComponentCreator('/sino/docs', '0c8'),
            routes: [
              {
                path: '/sino/docs/Getting Started/Examples',
                component: ComponentCreator('/sino/docs/Getting Started/Examples', '304'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Getting Started/First Program',
                component: ComponentCreator('/sino/docs/Getting Started/First Program', '540'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Getting Started/Installation',
                component: ComponentCreator('/sino/docs/Getting Started/Installation', '82a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Getting Started/Syntax Basics',
                component: ComponentCreator('/sino/docs/Getting Started/Syntax Basics', 'a58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Sino',
                component: ComponentCreator('/sino/docs/Sino', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/array',
                component: ComponentCreator('/sino/docs/Standard Library/array', '443'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/console',
                component: ComponentCreator('/sino/docs/Standard Library/console', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/file',
                component: ComponentCreator('/sino/docs/Standard Library/file', '7d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/iterable',
                component: ComponentCreator('/sino/docs/Standard Library/iterable', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/maths',
                component: ComponentCreator('/sino/docs/Standard Library/maths', '44c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/raw',
                component: ComponentCreator('/sino/docs/Standard Library/raw', 'c32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/string',
                component: ComponentCreator('/sino/docs/Standard Library/string', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/tson',
                component: ComponentCreator('/sino/docs/Standard Library/tson', 'ca6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sino/docs/Standard Library/types',
                component: ComponentCreator('/sino/docs/Standard Library/types', '01c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/sino/',
    component: ComponentCreator('/sino/', 'dd4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
