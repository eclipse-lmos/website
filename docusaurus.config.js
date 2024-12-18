// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eclipse LMOS',
  tagline: 'Open-source, cloud-native platform for building and running Multi-Agent systems',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://eclipse.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lmos',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eclipse-lmos/website/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/eclipse-lmos/website',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/lmos.png',
      navbar: {
        title: 'Eclipse LMOS',
        logo: {
          alt: 'Eclipse LMOS',
          src: 'img/lmos.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'lmosSidebar',
            position: 'left',
            label: 'Platform',
          },
          {
            to: '/arc',
            position: 'left',
            label: 'ARC',
          },
          {
            to: '/about_us',
            label: 'About us',
            position: 'right',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            to: '/contribute',
            label: 'Contribute',
            position: 'right',
          },
          {
            href: 'https://www.youtube.com/@eclipse-lmos',
            label: 'Youtube',
            position: 'right',
          },
          {
            href: 'https://github.com/eclipse-lmos',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      colorMode: {
        defaultMode: 'dark'
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Deutsche Telekom AG`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    
};

export default config;
