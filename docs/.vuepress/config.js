module.exports = {
  base: '/',  
  title: "Dreem Business Software",
  themeConfig: {
    nav: [
      { text: 'Начало', link: '/' },
      { text: 'Dreem', link: '/dreem/' },
      { text: 'POS', link: '/pos/' },
    ],
    sidebarDepth: 0,
    sidebar: [
      '/',
      {
        title: 'Dreem',
        path: '/dreem/',
        initialOpenGroupIndex: 1,
        children: [
          {
            title: 'Номенклатури',
            path: '/dreem/nom/',
            collapsable: false,
            children: [
              {
                title: 'Референтни номенклатури',
                path: '/dreem/nom/refnom/',
                collapsable: false,
                children: [
                  ['/dreem/nom/refnom/currencies', 'Валути'],
                  ['/dreem/nom/refnom/measures', 'Мерки'],
                ],
              },
            ],
          },
          {
            title: 'Търговска система',
            path: '/dreem/trade/',
            collapsable: false,
            children: [
                
            ],
          },
          {
            title: 'Справки',
            path: '/dreem/reports/',
            collapsable: false,
            children: [
                
            ],
          },
          {
            title: 'Счетоводство',
            path: '/dreem/acc/',
            collapsable: false,
            children: [
                
            ],
          },
        ],
      },
      {
        title: 'POS',
        path: '/pos/',
        initialOpenGroupIndex: 1,
        children: [
          '/pos/opisanie',
        ],
      },
    ],
  },
};
