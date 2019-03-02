import emailPreview from './email-preview.cmp.js';
import emailService from '../service/email-service.js';
import {
    eventBus,
    SHOW_EMAIL_TO_READ
} from '../../service/event-bus.js'
export default {
    name: 'emails-list',
    props: ['emails'],
    components: {
        emailPreview
    },
    template: `
    <section class="emails-list-wrapper">
        <div class="filter-wrapper">
            <div class="email-list-filter">
                <select @change="onFilter" v-model="filterMode">
                    <option value="All">All</option>
                    <option value="Unread">Unread</option>
                    <option value="Read">Read</option>
                </select>
            </div>
            <div class="email-sort-list">
                <select @change="onSort" v-model="sortMode">
                    <option value="Date">Date</option>
                    <option value="Title">Title</option>
                </select>
            </div>
        </div>
        <div v-for="email  in emailToShow" :key="email.id" class="email-n-toolbar-wrapper">
            <div class="rigth-toolbar">
                <button  @click="setAsUnread(email)" v-if="email.isRead"><i class="fas fa-check-square " ></i> </button>
                <button  v-else @click="setAsUnread(email)" ><i class="far fa-check-square"></i></button>
                <button  @click="toggleStarred(email)" v-if="!email.isStarred" ><i class="far fa-star"></i></button>
                <button @click="toggleStarred(email)" v-else><i class="fas fa-star"></i></button>
            </div>    
            <email-preview :class="{clicked: email.isRead}" @click.native="onEmailClicked(email)" :email="email" ></email-preview>
        </div>
    </section>
    `,
    data() {
        return {
            inboxEmails: null,
            inboxLeftToRead: 0,
            emailsByCategory: null,
            emailToShow: null,
            category: 'inbox',
            filterMode: 'All',
            filterdEmails: [],
            sortMode: 'Date'
        }
    },

    created() {
        if (this.$route.path === '/email/inbox') {
            this.initInbox()
        } else if (this.$route.path === '/email/sent') {
            this.initSent()
        } else if (this.$route.path === '/email/starred') {
            this.initStarred()
        }


    },
    computed: {},
    methods: {
        onEmailClicked(email) {
            this.$router.push('/email/' + this.category + '/' + email.id)
            // set diffenet color for clicked email
            // emailService.emailClicked(email.id, this.category)
            email.isRead = true

            // emailService.emailClicked(email.id, this.category).then(() => {
            if (this.$route.path === '/email/inbox') this.countInboxLeft()
            // })
            emailService.storeEmails()

        },
        setAsUnread(email) {
            // emailService.emailClicked(emailId, this.category, true).then(() => {
            email.isRead = !email.isRead
            if (this.$route.path === '/email/inbox') this.countInboxLeft()
            // })
            emailService.storeEmails()

        },
        initInbox() {
            emailService.getInboxEmails().then((inbox) => {
                this.inboxEmails = inbox
                this.emailsByCategory = inbox
                this.category = 'inbox'
                this.emailToShow = inbox
                this.filterdEmails = inbox
                this.countInboxLeft()
            })
        },
        initSent() {
            emailService.getSentEmails().then((sent) => {
                // this.sentEmails = sent
                this.emailsByCategory = sent
                this.category = 'sent'
                this.emailToShow = sent
                this.filterdEmails = sent
            })
        },
        initStarred() {
            emailService.getStarredEmails().then((starred) => {
                this.emailsByCategory = starred
                this.category = 'starred'
                this.emailToShow = starred
                this.filterdEmails = starred
            })
        },
        onFilter() {
            this.filterdEmails = []
            if (this.filterMode === 'Unread') {
                this.emailsByCategory.forEach((email) => {
                    if (!email.isRead) this.filterdEmails.push(email)
                })
            } else if (this.filterMode === 'Read') {
                this.emailsByCategory.forEach((email) => {
                    if (email.isRead) this.filterdEmails.push(email)
                })
            } else if (this.filterMode === 'All') {
                this.filterdEmails = this.emailsByCategory
            }
            this.emailToShow = this.filterdEmails
        },
        onSort() {
            if (this.sortMode === 'Date') {
                this.filterdEmails.sort((first, second) => (first.sentAt > second.sentAt) ? 1 : ((second.sentAt > first.sentAt) ? -1 : 0))
            } else if (this.sortMode === 'Title') {
                this.filterdEmails.sort((first, second) => (first.subject > second.subject) ? 1 : ((second.subject > first.subject) ? -1 : 0))
            }
            this.emailToShow = this.filterdEmails

        },
        countInboxLeft() {
            var counter = 0
            this.inboxEmails.forEach((email) => {
                if (!email.isRead) counter++
            })
            this.inboxLeftToRead = counter;
            this.$emit('leftToRead', counter)
            eventBus.$emit('SHOW_EMAIL_TO_READ', counter)
        },
        toggleStarred(email) {
            console.log(email);
            email.isStarred = !email.isStarred
            emailService.storeEmails()
        }
    },
    watch: {
        '$route.path': function () {
            if (this.$route.path === '/email/inbox') {
                this.initInbox()

            } else if (this.$route.path === '/email/sent') {
                this.initSent()
            } else if (this.$route.path === '/email/starred') {
                this.initStarred()
            }
        }
    }
}