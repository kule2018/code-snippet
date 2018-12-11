module.exports = {
    base: '/code-snippet/',
    title: '常用代码片段收集',
    description: '常用代码片段收集',
    themeConfig: {
        lastUpdated: '上次更新', // string | boolean
        nav: [{
            text: '更多',
            items: [
                { text: '个人博客', link: 'https://chen4342024.github.io/new-blog/' },
                { text: 'GitHub', link: 'https://github.com/chen4342024' },
            ]
        }],
        sidebar: [{
                title: 'JS 相关',
                collapsable: false,
                children: [
                    'js/dom',
                    'js/env',
                    'js/is',
                    'js/reg',
                    'js/util',
                    'js/date',
                    'js/throttled',
                    'js/url',
                    'js/calcu',
                    'js/event'
                ]
            },
            {
                title: 'CSS 相关',
                collapsable: false,
                children: ['css/style']
            },
            {
                title: '其他',
                collapsable: false,
                children: ['other/git']
            },
            ['todo', '待办事项']
        ]
    }
};
