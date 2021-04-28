/**
 * @description 路由文件  exact -- 严格匹配，location 是否和 path 完全对应上
 */

export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/Index', title: '首页' },
      { component: '@/pages/404' },
      // 重定向
      { path: '/*', redirect: '/' },
    ],
  },
];
