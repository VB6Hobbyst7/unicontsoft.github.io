module.exports = {
  base: '/',  
  title: "Dreem Business Software",
  themeConfig: {
    nav: [
      { text: 'Начало', link: '/' },
      { text: 'Dreem', link: '/dreem/' },
      { text: 'Test', link: '/test/' },
    ],
    sidebar: [
      {
        title: 'Начало',
        path: '/',
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Dreem',
        path: '/dreem/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/dreem/',
        ],
      },
      {
        title: 'Test',
        path: '/test/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/test/',
          '/test/opisanie',
        ],
      },
    ],
  },
};
