/**
 * 模拟异步获取菜单
 */
export const Menus = [
    {key: 'home', name: '首页', href: '/'},
    {key: 'about', name: '关于', href: '/about'},
    {key: 'async-simple', name: '简单异步执行', href: '/async/simple'},
    {key: 'async-state', name: 'state异步加载', href: '/async/controlState'},
    {key: 'async-demo', name: 'query异步加载', href: '/async/urlQuery?q=batman'},
    {key: 'async-local-demo', name: 'query本地加载', href: '/async/urlQueryLocal?q=batman'},
    {key: 'show-error', name: '源生错误页', href: '/showError'},
];

export const getMenus = () => {
    //可以将这个promise修改为一个net方法实现异步动态装菜菜单
    return new Promise((resolve, reject) => {
        resolve(Menus)
    })
};