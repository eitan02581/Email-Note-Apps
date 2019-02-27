import emailsList from '../email-app/cmp/emails-list.cmp.js'
import emailService from '../email-app/service/email-service.js'
import emailAside from '../email-app/cmp/email-aside.cmp.js'
import emailCompose from '../email-app/cmp/compose-mail.cmp.js'
import emailDetails from '../email-app/cmp/email-details.cmp.js'
import {
    eventBus,
    SHOW_EMAIL_DETAILS
} from '../service/event-bus.js'
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
            <email-aside @showCompose="showCompose = true" @emailType="changeTypeOfList"></email-aside>
        </div>
        <div v-if="!isEmailClicked" class="email-list">
             <emails-list :emails="emailType" ></emails-list>
        </div>
        <div v-if="isEmailClicked" class="email-details">
            <email-details></email-details>
        </div>
        <div v-if="showCompose" class="compose-new-mail">
            <email-compose @exitCompose="ExitCompose" ></email-compose>
        </div>
    </section>
    `,
    data() {
        return {
            emailType: null,
            inboxEmails: null,
            sentEmails: null,
            showCompose: true,
            isEmailClicked: false
        }
    },
    created() {
        emailService.getInboxEmails().then((inbox) => {
            this.inboxEmails = inbox
            this.emailType = inbox
        })
        emailService.getSentEmails().then((sent) => {
                this.sentEmails = sent
            }),
            eventBus.$on(SHOW_EMAIL_DETAILS, msg => {
                console.log('got the msg', msg);
                this.isEmailClicked = true
            })
    },
    methods: {
        changeTypeOfList(type) {
            type === 'inbox' ? this.emailType = this.inboxEmails : this.emailType = this.sentEmails
            this.isEmailClicked = false
        },
        ExitCompose() {
            this.showCompose = false
        }
    },
    computed: {

    },
}