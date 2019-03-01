export default {
    name: 'email-aside',
    template: `
    <section class="email-aside-wrapper">
     <div class="email-aside-container">
            <div class="comose-btn">
                <button @click="onComposeBtn">+ Compose</button> 
            </div>
            <div class="inbox-btn">
                 <router-link @click="onTypeOfMails('inbox')" to="/email/inbox"> Inbox</router-link>
            </div>
            <div class="sent-btn">
                <router-link @click="onTypeOfMails('sent')" to="/email/sent">sent</router-link>
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