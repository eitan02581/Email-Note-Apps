import notesApp from './page/notes-app.cmp.js'
import emailApp from './page/email-app.cmp.js'
import emailDetail from './email-app/cmp/email-details.cmp.js'


const routes = [{
        path: '',
        component: notesApp
    }, {
        path: '/email',
        component: emailApp,
        children: [{
            path: '/email/:emailId',
            component: emailDetail
        }]
    },

]

export default routes;