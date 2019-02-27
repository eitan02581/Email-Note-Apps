export default {
    name: 'email-aside',
    template: `
    <section class="email-aside-wrapper">
     <div class="email-aside-container">
            <div class="comose-btn">
            <button @click="onComposeBtn">+ Compose</button> 
            </div>
            <div class="inbox-btn">
            <button @click="onTypeOfMails('inbox')">Inbox</button> 
            </div>
            <div class="sent-btn">
                <button  @click="onTypeOfMails('sent')">Sent</button> 
            </div>
     </div>
    </section>
    `,
    methods: {
        onTypeOfMails(typeOfMail) {
            this.$emit('emailType', typeOfMail)
        },
        onComposeBtn() {
            this.$emit('showCompose')
        }
    },
}