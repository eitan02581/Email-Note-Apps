import navBar from './nav-bar/cmp/nav-bar.cmp.js'
import notesApp from './page/notes-app.cmp.js'


window.vueApp = new Vue({
    name: 'main app',
    el: '#app',
    components: {
        navBar,
        notesApp,
    },
    created() {},
})