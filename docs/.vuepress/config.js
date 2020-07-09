module.exports = {
    title: 'ymr个人博客',
    description: '个人博客站点，前端、vue相关知识', // meta 中的描述文字，SEO用
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        // ['link', { rel: 'icon', href: '/img/geass-bg.ico' }], 
    ],
    base: '/zblog/', // 这是部署到github相关的配置
    dest: 'dist',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
      ],
    //   serviceWorker: false,
      themeConfig: {
        repo: 'zzymr/zblog',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '2.x 版本',
            link: '/v2/prepare/'
          },
          {
            text: '3.x 版本',
            link: '/v3/guide/'
          }
        ],
        sidebar: {
          '/v2/': [
            {
              title: '准备工作',
              collapsable: false,
              children: [
                ['prepare/', 'Introduction'],
                // 'prepare/flow',
                // 'prepare/directory',
                // 'prepare/entrance'
              ]
            },
          ],
          '/v3/': [
            {
              title: '先导篇',
              collapsable: false,
              children: [
                ['guide/', 'Introduction']
              ]
            }
          ]
        }
      }
    }