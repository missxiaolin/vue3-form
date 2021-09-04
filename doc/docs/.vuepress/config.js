module.exports = {
    title: '小林',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '教程', link: '/guide/' },
            { text: '示例', link: '' },
        ],
        sidebar: [
            {
                title: '教程',   // 必要的
                path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '开始使用',
                path: '/start/',
            },
            {
                title: '相关组件',
                children: [
                    {
                        title: 'string',
                        path: '/component/string'
                    },
                ]
            },
        ], // 侧边栏配置
        // sidebarDepth: 2, // 侧边栏显示2级
    }
};