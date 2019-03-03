import emailService from '../service/email-service.js'

export default {
    template: `
    <section class="email-compose-wrapper">
        <div class="email-compose-wrapper">
          <div class="top">
            <h1>New Message</h1>
            <button @click="onExitCompose" ><i class="far fa-trash-alt fa-2x"></i></button>
        </div>
        <form >
            <div class="main-form">
                <input autofocus  v-model="emailObj.to" placeholder="To">
                <input  v-model="emailObj.body" placeholder="Subject">
                <textarea v-model="emailObj.subject" placeholder=""></textarea>
            </div>
            <button  @click.prevent.stop="onSendEmail" >Send</button>
        </form>
        </div>
    </section>
    `,
    data() {
        return {
            emailObj: {
                to: '',
                subject: '',
                body: ''
            }

        }
    },
    methods: {
        onExitCompose() {
            this.$emit('exitCompose')
        },
        onSendEmail() {
            // TODO: MAKE VALIDATION css
            if (this.emailObj.to && this.emailObj.subject) {
                emailService.sendEmail(this.emailObj);
                this.onExitCompose()
                this.$emit('actionMade')
            }

        }
    },
    computed: {

    },
}