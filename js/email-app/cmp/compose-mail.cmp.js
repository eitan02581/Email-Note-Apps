import emailService from '../service/email-service.js'

export default {
    template: `
    <section class="email-compose-wrapper">
        <div class="email-compose-wrapper">
          <div class="top">
            <h1>New Message</h1>
            <button @click="onExitCompose" >X</button>
        </div>
        <form>
            <input  placeholder="To">
            <input  v-model="emailObj.body" placeholder="Subject">
            <textarea v-model="emailObj.subject" placeholder=""></textarea>
            <button @click="onSendEmail" >Send</button>
        </form>
           
        </div>
    </section>
    `,
    data() {
        return {
            emailObj: {
                subject: null,
                body: null
            }

        }
    },
    methods: {
        onExitCompose() {
            this.$emit('exitCompose')
        },
        onSendEmail() {
            // TODO: MAKE VALIDATION css
            if (this.emailObj.subject && this.emailObj.body) emailService.sendEmail(this.emailObj)

        }
    },
    computed: {

    },
}