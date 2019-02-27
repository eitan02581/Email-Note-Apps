import emailPreview from './email-preview.cmp.js';
import emailService from '../service/email-service.js'
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
        <email-preview  @click.native="onEmailClicked(email.id)"  v-for="email in emails" :email="email" :key="email.id"></email-preview>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        onEmailClicked(emailId) {
            // render email details
            eventBus.$emit(SHOW_EMAIL_DETAILS, 'email was')

            // add clicked Class

        }
    },
    computed: {

    }
}