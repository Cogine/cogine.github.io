// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reality World',
  tagline: '一种自我进化的、面向未来数字世界的软件架构方法',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cogine.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cogine', // Usually your GitHub org/user name.
  projectName: 'cogine.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/reality_world_logo.jpg',
      navbar: {
        title: 'Reality World',
        logo: {
          alt: 'Reality World Logo',
          src: 'img/reality_world_logo.jpg',
        },
        items: [
          {to: '/reality-world-paper', label: '白皮书', position: 'left'},
          {to: '/whitepaper', label: '技术架构', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '思考过程',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/cogine/realityworld',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/community/about-open-source',
            label: '社区',
            position: 'left',
            activeBaseRegex: `/community/`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'RealityIS',
            items: [
              {
                label: '定义',
                to: '/docs/intro',
              },
              {
                label: '架构哲学',
                to: '/docs/intro',
              },
              {
                label: '常见问题',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/thegibook',
              },
              {
                label: 'B站',
                href: 'https://space.bilibili.com/343962235',
              },
            ],
          },
          {
            title: '联系',
            items: [
              {
                label: 'qinchunlin@realityworld.com',
                to: '/blog',
              },
              {
                label: '微信：ARealityWorld',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Powered by Reality World.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
