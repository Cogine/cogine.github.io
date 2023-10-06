const copyright = '2023 © Reality World.';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Creating an intelligent reality with AI',
  tagline:
    "Reality World is a multi-agent platform built with interoperability as its core, in which a dynamic agent or program can be added and interoperated with all other agents. It's like a complex system and emerges digital intelligence.",
  url: 'https://realityworld.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/logo/reality-world.svg',
  organizationName: 'cogine', // Usually your GitHub org/user name.
  projectName: 'cogine.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  scripts: [],
  // stylesheets: ['styles/dark-mode.css'],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['php'],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/Cogine/RealityWorld">⭐ We are going open source on GitHub</a>',
      isCloseable: false,
    },
    image: 'img/website-preview-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Reality World',
      logo: {
        alt: 'Reality World',
        width: '32px',
        height: '32px',
        src: 'img/logo/reality-world.svg',
        srcDark: 'img/logo/reality-world.svg',
      },
      items: [
        {
          label: 'Products',
          type: 'dropdown',
          items: [
            {
              to: '/cogine',
              label: 'Cogine',
            },
            {
              to: '/reality-create',
              label: 'Reality Create',
            },
            {
              to: '/app',
              label: 'Reality World',
            },
            {
              to: '/self-deploying',
              label: 'Self-deploying',
            },
          ],
        },
        {
          label: 'Developers',
          type: 'dropdown',
          items: [
            { to: '/whitepaper', label: 'Whitepaper' },
            { to: '/docs/intro', label: 'Documentation' },
            { to: '/thinking', label: 'Thinking' },
          ],
        },
        {
          to: '/blog',
          label: 'Blog',
        },
        {
          to: '/features',
          label: 'Features & Comparison',
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          label: 'Community',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              to: '/community/about-open-source',
              label: 'About open source',
            },
            {
              to: '/community/about-reality-world',
              label: 'About Reality World',
            },
            {
              to: '/community/roadmap',
              label: 'Roadmap',
            },
            {
              to: '/community/contact',
              label: 'Contact',
            },
            {
              to: '/community/questions',
              label: 'Questions',
            },
          ],
        },
        {
          href: 'https://github.com/Cogine/RealityWorld',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Cogine',
          items: [
            {
              label: 'Introduction',
              href: '/docs/introduction',
            },
            {
              label: 'Architecture philosophy',
              href: '/philosophy',
            },
            {
              label: 'Questions',
              href: '/community/questions',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              html: `
              <span>Wechat 开源社区群:</span><br/>
              <img src="/img/home/wechat.jpg" alt="Reality World开源社区群" width="150" height="150" />
              <br/><span>过期请加：ARealityWorld</span>
          `,
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Cogine/RealityWorld',
            },
            {
              label: 'License',
              href: '/',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Reality World',
              href: '/commnuity/about-reality-world',
            },
            {
              label: 'Contact',
              href: '/community/contact',
            },
          ],
        },
      ],
      copyright,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription:
            'The Reality World blog is where our team shares our thoughts and ideas about everything from our products to industry news and insights. We also welcome guest posts so please do get in touch if you have any thoughts you would like to share on our blog.',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright,
          },

          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 5,
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
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
    ['@cmfcmf/docusaurus-search-local', {}],
  ],
};
