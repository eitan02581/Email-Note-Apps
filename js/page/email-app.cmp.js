import emailsList from '../email-app/cmp/emails-list.cmp.js'
import emailService from '../email-app/service/email-service.js'
import emailAside from '../email-app/cmp/email-aside.cmp.js'
import emailCompose from '../email-app/cmp/compose-mail.cmp.js'
import emailDetails from '../email-app/cmp/email-details.cmp.js'

export default {
    name: 'email-app',
    components: {
        emailsList,
        emailAside,
        emailCompose,
        emailDetails
    },
    template: `
    <section  class="email-app-wrapper">

    <transition name="apps">
        <div v-if="actionMade" class=" compose-active action-indcation">
            <h1>{{actionTxt}}</h1>
        </div>
    </transition>

     <div class="email-loading-gif" v-if="isEmailGifLoad"><div :class="{'hide-load-email':hideTheBegginingOfGif }"></div><img  src="../../css/gifs/gmaildribbble.gif"></div>
    <template v-else>
        <transition name="fade">
                <email-aside class="aside-mobile" :InboxLeftToRead="emailsLeftToRead" @showCompose="showCompose = true"></email-aside>
        </transition >    
        <router-view @leftToRead="InboxLeftToRead"  @deleteEmail="onDeleteEmail"  ></router-view>
        <transition name="fade">
            <div v-if="showCompose" class="compose-new-mail">
            <email-compose @actionMade="onActionMade" @exitCompose="ExitCompose" ></email-compose>
            </div>
        </transition>
    </template>
    </section>
    `,
    data() {
        return {
            showCompose: false,
            selectedEmail: null,
            emailsLeftToRead: null,
            isEmailGifLoad: true,
            actionTxt: '',
            actionMade: false,
            hideTheBegginingOfGif: true
        }
    },
    created() {
        setTimeout(() => {
            this.hideTheBegginingOfGif = false
        }, 700);
        setTimeout(() => {
            this.isEmailGifLoad = false
        }, 3400);
    },
    methods: {

        ExitCompose() {
            this.showCompose = false
        },
        onDeleteEmail(emailId) {
            emailService.deleteEmail(emailId, this.category).then((updatedEmails) => {
                this.emailsByCategory = updatedEmails
            })
        },
        InboxLeftToRead(num) {
            this.emailsLeftToRead = num
        },
        onActionMade() {
            this.actionMade = true
            this.actionTxt = "Email was sent!"
            setTimeout(() => {
                this.actionMade = false
            }, 1500);
        }
    },
    watch: {
        '$route.path': function () {
            if (this.$route.path === '/email/inbox') {
                this.category = 'inbox'
            } else if (this.$route.path === '/email/sent') {
                this.category = 'sent'
            }
        }
    }
}