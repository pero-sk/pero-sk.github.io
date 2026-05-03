import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'Sino',

    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'Getting Started/Installation',
        'Getting Started/First Program',
        'Getting Started/Syntax Basics',
        'Getting Started/Examples',
      ],
    },

    {
      type: 'category',
      label: 'Standard Library',
      items: [
        'Standard Library/array',
        'Standard Library/console',
        'Standard Library/maths',
        'Standard Library/string',
        'Standard Library/iterable',
        'Standard Library/raw',
        'Standard Library/tson',
        'Standard Library/types',
        'Standard Library/file'
      ]
    }
  ]
};

export default sidebars;
