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
        <div class="email-list-filter">
        {{filterMode}}
            <select @change="onFilter" v-model="filterMode">
                <option value="All">All</option>
                <option value="Unread">Unread</option>
                <option value="Read">Read</option>
            </select>
        </div>
        <div class="email-sort-list">
            <select @click="onSort" v-model="sortMode">
                <option value="Date">Date</option>
                <option value="Title">Title</option>
            </select>
        </div>
        <!--<router-link v-for="email  in emailsByCategory" :key="email.id" :to="'/email/'+category +'/' + email.id"> -->
        <div v-for="email  in emailToShow" :key="email.id" class="email-n-toolbar-wrapper">
                <email-preview @setUnread="setAsUnread" :class="{clicked: email.isRead}" @click.native="onEmailClicked(email)" :email="email" ></email-preview>
                <div class="rigthToolbar">
                    <button @click="setAsUnread(email.id)" v-if="email.isRead">Mark as unread </button>
                    <button v-else @click="setAsUnread(email.id)" >Mark as read </button>
                </div>
                </div>
        <!-- </router-link> -->
    </section>
    `,
    data() {
        return {
            inboxEmails: null,
            sentEmails: null,
            emailsByCategory: null,
            emailToShow: null,
            category: 'inbox',
            filterMode: 'All',
            sortMode: 'Date'
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
            this.$router.push('/email/' + this.category + '/' + email.id)
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
                this.emailToShow = inbox
            })
        },
        initSent() {
            emailService.getSentEmails().then((sent) => {
                this.sentEmails = sent
                this.emailsByCategory = sent
                this.category = 'sent'
                this.emailToShow = sent

            })
        },
        // TODO: ON READ OR UNREAD CLICKED , PUT THEM IN THE RIGHT PLACE
        onFilter() {
            var filterdEmails = []
            if (this.filterMode === 'Unread') {
                console.log('unread');

                this.emailsByCategory.forEach((email) => {
                    if (!email.isRead) return filterdEmails.push(email)
                })
            } else if (this.filterMode === 'Read') {
                this.emailsByCategory.forEach((email) => {
                    if (email.isRead) return filterdEmails.push(email)
                })
            } else if (this.filterMode === 'All') {
                filterdEmails = this.emailsByCategory
            }
            this.emailToShow = filterdEmails
        },
        onSort() {
            // objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0)); 

            console.log('asd');
            if (this.sortMode === 'Date') {

                this.emailsByCategory.sort((first, second) => (first.sentAt > second.sentAt) ? 1 : ((second.sentAt > first.sentAt) ? -1 : 0))
            } else if (this.sortMode === 'Title') {
                this.emailsByCategory.sort((first, second) => (first.subject > second.subject) ? 1 : ((second.subject > first.subject) ? -1 : 0))
            }
            this.emailToShow = this.emailsByCategory

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