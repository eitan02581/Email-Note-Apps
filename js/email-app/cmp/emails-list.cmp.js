import emailPreview from './email-preview.cmp.js';
import emailService from '../service/email-service.js';
import {
    eventBus,
    SHOW_EMAIL_DETAILS
} from '../../service/event-bus.js'
export default {
    name: 'emails-list',
    props: ['emails'],
    components: {
        emailPreview
    },
    template: `
    <section class="emails-list-wrapper">
        <h1>emails-list</h1>
        <router-link v-for="email  in emailsByCategory" :key="email.id" :to="'/email/'+category +'/' + email.id">
            <div class="email-n-toolbar-wrapper">
                <email-preview @setUnread="setAsUnread" :class="{clicked: email.isRead}" @click.native="onEmailClicked(email)" :email="email" ></email-preview>
                <div class="rigthToolbar">
                    <button @click="setAsUnread(email.id)" v-if="email.isRead">Mark as unread </button>
                    <button v-else @click="setAsUnread(email.id)" >Mark as read </button>
                </div>
                </div>
        </router-link>
    </section>
    `,
    data() {
        return {
            inboxEmails: null,
            emailsByCategory: null,
            category: 'inbox',
            sentEmails: null
        }
    },

    created() {
        if (this.$route.path === '/email/inbox') {
            this.initInbox()

        } else if (this.$route.path === '/email/sent') {
            this.initSent()
        }
    },
    computed: {},
    methods: {
        onEmailClicked(email) {
            console.log('general click');

            // this.$emit('emailClicked', email)
            // // set diffenet color for clicked email
            emailService.emailClicked(email.id, this.category)
        },
        setAsUnread(emailId) {
            console.log('unread');

            emailService.emailClicked(emailId, this.category, true)
        },
        initInbox() {
            emailService.getInboxEmails().then((inbox) => {
                this.inboxEmails = inbox
                this.emailsByCategory = inbox
                this.category = 'inbox'
            })
        },
        initSent() {
            emailService.getSentEmails().then((sent) => {
                this.sentEmails = sent
                this.emailsByCategory = sent
                this.category = 'sent'
            })
        }
    },
    watch: {
        '$route.path': function () {
            if (this.$route.path === '/email/inbox') {
                this.initInbox()

            } else if (this.$route.path === '/email/sent') {
                this.initSent()
            }
        }
    }
}