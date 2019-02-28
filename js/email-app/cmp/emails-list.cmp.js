import emailPreview from './email-preview.cmp.js';
import emailService from '../service/email-service.js'
// import {
//     eventBus,
//     SHOW_EMAIL_DETAILS
// } from '../../service/event-bus.js'
export default {
    name: 'emails-list',
    props: ['emails'],
    components: {
        emailPreview
    },
    template: `
    <section class="emails-list-wrapper">
        <h1>emails-list</h1>
        
        <router-link v-for="email  in emails" :key="email.id" :to="'/email/' + email.id">
            <email-preview  @click.native="onEmailClicked(email)" :email="email" ></email-preview>
        </router-link>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        onEmailClicked(email) {
            // render email details
            // eventBus.$emit(SHOW_EMAIL_DETAILS, 'email was')

            this.$emit('emailClicked', email)


            // add clicked Class

        }
    },
    created() {},
    computed: {

    }
}