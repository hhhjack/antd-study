export default{
    singular: true,
    // plugins: [
    //     ['umi-plugin-react', {
    //         //添加配置
    //         antd: true
    //     }],
    // ],
    antd: {},
    dva:{},
    routes:[{
        path: '/',
        component: "../layout",
        routes: [
            {
                path: '/',
                component: './HelloWorld',
            },
            {
                path: '/helloworld',
                component: './HelloWorld',
            },
            {
                path: '/dashboard',
                routes: [
                    {path:'/dashboard/analysis', component:'Dashboard/Analysis'},
                    {path:'/dashboard/monitor', component:'Dashboard/Monitor'},
                    {path:'/dashboard/workplace', component:'Dashboard/Workplace'},
                ]
            },
            {
                path: '/puzzlecards',
                component: './puzzlecards'
            },
            {
                path: '/list',
                component: 'list/index'
            }

        ],
    }],
    // proxy: {
    //     '/dev': {
    //         target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
    //         changeOrigin: true
    //     }
    // }
    proxy: {
        '/dev': {
            target: "http://jsonplaceholder.typicode.com",
            changeOrigin: true,
            pathRewrite: { "^/dev": "" }
        },
    }
}