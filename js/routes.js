import notesApp from './page/notes-app.cmp.js'
import emailApp from './page/email-app.cmp.js'
import emailDetail from './email-app/cmp/email-details.cmp.js'
import emailList from './email-app/cmp/emails-list.cmp.js'

const routes = [{
        path: '',
        component: notesApp
    }, {
        // path: '/email',
        path: '/email/',
        component: emailApp,
        children: [{
                path: 'inbox',
                component: emailList
            },
            {
                path: 'inbox/:emailId',
                component: emailDetail
            }, {
                path: 'sent',
                component: emailList
            },
            {
                path: 'sent/:emailId',
                component: emailDetail
            },
            {
                path: 'starred',
                component: emailList
            },
            {
                path: 'starred/:emailId',
                component: emailDetail
            }
        ]
    },

]

export default routes;