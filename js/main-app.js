import navBar from './nav-bar/cmp/nav-bar.cmp.js'

window.vueApp = new Vue({
    name: 'main app',
    el: '#app',
    components: {
        navBar,
    },
    created() {},
})