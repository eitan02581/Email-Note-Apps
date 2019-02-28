import emailsList from '../email-app/cmp/emails-list.cmp.js'
import emailService from '../email-app/service/email-service.js'
import emailAside from '../email-app/cmp/email-aside.cmp.js'
import emailCompose from '../email-app/cmp/compose-mail.cmp.js'
import emailDetails from '../email-app/cmp/email-details.cmp.js'
// import {
//     eventBus,
//     SHOW_EMAIL_DETAILS
// } from '../service/event-bus.js'
//    <div  v-if="!isEmailClicked" class="email-list">
/* <emails-list @emai lClicked="onEmailClicked" :emails="emailsByCategory" ></emails-list>
</div>
<div v-if="isEmailClicked" class="email-details">
    <email-details @deleteEmail="onDeleteEmail" :email="selectedEmail" ></email-details>
</div> */
export default {
    name: 'email-app',
    components: {
        emailsList,
        emailAside,
        emailCompose,
        emailDetails
    },
    template: `
    <section class="email-app-wrapper">
        <div class="aside">
            <email-aside @showCompose="showCompose = true" @emailType="changeTypeOfList "></email-aside>
        </div>
        <router-view @deleteEmail="onDeleteEmail"  :category="category"></router-view>
     
        <div v-if="showCompose" class="compose-new-mail">
            <email-compose @exitCompose="ExitCompose" ></email-compose>
        </div>
    </section>
    `,
    data() {
        return {
            emailsByCategory: null,
            category: 'inbox',
            inboxEmails: null,
            sentEmails: null,
            showCompose: false,
            isEmailClicked: false,
            selectedEmail: null,
        }
    },
    created() {
        emailService.getInboxEmails().then((inbox) => {
            this.inboxEmails = inbox
            this.emailsByCategory = inbox
        })
        emailService.getSentEmails().then((sent) => {
            this.sentEmails = sent
        })
        // eventBus.$on(SHOW_EMAIL_DETAILS, msg => {
        //     console.log('got the msg', msg);
        //     this.isEmailClicked = true
        // })
    },
    methods: {
        changeTypeOfList(type) {
            type === 'inbox' ? this.emailsByCategory = this.inboxEmails : this.emailsByCategory = this.sentEmails
            this.isEmailClicked = false
            // this.category = type
            // console.log(type);

        },
        ExitCompose() {
            this.showCompose = false
        },
        // onEmailClicked(email) {
        //     // this.isEmailClicked = true
        //     this.selectedEmail = email
        //     console.log(this.selectedEmail);
        // },
        onDeleteEmail(emailId) {
            emailService.deleteEmail(emailId, this.category).then((updatedEmails) => {
                this.emailsByCategory = updatedEmails
            })
        }
    },
    computed: {

    },
    watch: {
        '$route.path': function () {
            if (this.$route.path === '/email/inbox') {
                this.category = 'inbox'

                // this.initInbox()

            } else if (this.$route.path === '/email/sent') {
                this.category = 'sent'
                // this.initSent()
            }
        }
    }
}