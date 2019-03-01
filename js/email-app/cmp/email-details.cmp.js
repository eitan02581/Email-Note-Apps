import emailToolbar from './email-toolbar.cmp.js';
import emailService from '../service/email-service.js'
import {
    eventBus,
    SHOW_EMAIL_DETAILS
} from '../../service/event-bus.js'

export default {
    name: 'email-details',
    // props: ['category'],
    components: {
        emailToolbar
    },
    template: `
    <section class="email-details-wrapper" v-if="email">
        <div class="email-container">
            <div class="top">
                <button @click="back">Back</button>
                <button @click="deleteEmail"> <i class="far fa-trash-alt"></i></button>
            </div>
            <div class="main">
                <h1>{{email.subject}}</h1>
                <p>{{email.body}}</p>
            </div>
            <div class="bottom">
                <button>Reply</button>
                <button>Forward</button>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        //TODO: allow deleteing email
        deleteEmail() {
            this.$emit('deleteEmail', this.email.id)
            setTimeout(() => {
                this.$router.go(-1);
            }, 200);
        },
        back() {
            this.$router.go(-1);
        },
        setCategory() {
            var path = this.$route.path;
            var res = /\/email\/inbox/.test(path);
            console.log(res);
            if (res) {
                this.category = 'inbox'
            } else {
                this.category = 'sent'
            }
        }
    },
    created() {
        var emailId = this.$route.params.emailId
        this.setCategory()
        emailService.getEmailById(emailId, this.category).then((email) => {
            this.email = email
            console.log(this.email);

        })
        // this.$routes.path
    },
    watch: {
        '$route.path': function () {
            this.setCategory()
            var emailId = this.$route.params.emailId

            emailService.getEmailById(emailId, this.category).then((email) => {
                this.email = email
            })
        }
    }
}