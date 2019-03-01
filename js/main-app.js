import navBar from './nav-bar/cmp/nav-bar.cmp.js'
import notesApp from './page/notes-app.cmp.js'
import emailApp from './page/email-app.cmp.js'
import myRoutes from './routes.js'

const myRouter = new VueRouter({
    routes: myRoutes
})

window.vueApp = new Vue({
    name: 'main app',
    el: '#app',
    router: myRouter,
    components: {
        navBar,
        notesApp,
        emailApp
    },
    created() {},
})