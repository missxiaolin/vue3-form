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
                    {
                        title: 'number',
                        path: '/component/number'
                    },
                    {
                        title: 'boolean',
                        path: '/component/boolean'
                    },
                    {
                        title: 'array',
                        path: '/component/array'
                    },
                    {
                        title: 'object',
                        path: '/component/object'
                    }
                ]
            },
        ],
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/missxiaolin/vue3-form',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
};