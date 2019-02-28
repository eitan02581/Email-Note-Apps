import emailToolbar from './email-toolbar.cmp.js';
import emailService from '../service/email-service.js'
import {
    eventBus,
    SHOW_EMAIL_DETAILS
} from '../../service/event-bus.js'

export default {
    name: 'email-details',
    props: ['category'],
    components: {
        emailToolbar
    },
    template: `
    <section class="email-details-wrapper" v-if="email">
        <button @click="back">Back</button>
        <button @click="deleteEmail"> <i class="far fa-trash-alt"></i></button>
        <h1>email details</h1>
        <div class="email-container">
            <div>{{email.subject}}</div>
            <div>{{email.body}}</div>
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
        }
    },
    created() {
        var emailId = this.$route.params.emailId

        emailService.getEmailById(emailId, this.category).then((email) => {
            this.email = email
            console.log(this.email);

        })
        // this.$routes.path
    },
    watch: {
        '$route.path': function () {
            var emailId = this.$route.params.emailId
            emailService.getEmailById(emailId, this.category).then((email) => {
                this.email = email
            })
        }
    }
}