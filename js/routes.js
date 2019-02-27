import notesApp from './page/notes-app.cmp.js'
import emailApp from './page/email-app.cmp.js'


const routes = [{
        path: '',
        component: notesApp
    }, {
        path: '/email',
        component: emailApp
    }

]

export default routes;