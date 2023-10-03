const copyright = '2023 © Reality World.';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Creating an intelligent reality with AI',
  tagline:
    "Reality World is a multi-agent platform built with interoperability as its core, in which a dynamic agent or program can be added and interoperated with all other agents. It's like a complex system and emerges digital intelligence.",
  url: 'https://realityworld.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/logo/reality-world.svg',
  organizationName: 'cogine', // Usually your GitHub org/user name.
  projectName: 'cogine.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    
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
          ],
        },
        {
          label: 'Developers',
          type: 'dropdown',
          items: [
            { to: '/whitepaper', label: 'Whitepaper' },
            { to: '/docs', label: 'Documentation' },
            { to: '/thinking', label: 'Thinking' },
          ],
        },
        {
          to: '/blog',
          label: 'Blog',
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
              href: '/questions',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Wechat',
              href: '/wechat',
            },
            {
              label: 'Zhihu',
              href: 'https://realityworld.com',
            },
            {
              label: 'Bilibili',
              href: 'https://realityworld.com',
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
              target: '_blank',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Reality World',
              href: '/careers',
            },
            {
              label: 'Team',
              href: '/team',
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
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'careers',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'careers',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './careers',
        blogTitle: 'Careers',
        blogDescription:
          'Join us on our mission to help startups simplify the development of compliance and data security-related features in their products. Check out our open roles.',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'success-stories',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'success-stories',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './success-stories',
        blogTitle: 'Success Stories',
        blogDescription: '',
      },
    ],
    ['@cmfcmf/docusaurus-search-local', {}],
  ],
};
