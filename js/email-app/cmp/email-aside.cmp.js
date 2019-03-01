export default {
    name: 'email-aside',
    props: ['InboxLeftToRead'],
    template: `
    <section class="email-aside-wrapper">
     <div class="email-aside-container">
            <div class="comose-btn">
                <button @click="onComposeBtn">+ Compose</button> 
            </div>
            <div class="inbox-btn">
                 <router-link  to="/email/inbox"><i class="fas fa-inbox "></i> Inbox</router-link>
                 {{InboxLeftToRead}}
            </div>
            <div class="sent-btn">
                <router-link  to="/email/sent"> <i class="far fa-share-square"></i>sent</router-link>
            </div>
            <div class="starred-btn">
                <router-link  to="/email/starred"> <i class="fas fa-star"></i> starred</router-link>
            </div>
            <div class="starred-btn">
                <router-link  to="/email/spam"> <i class="fas fa-ban "></i> spam</router-link>
            </div>
     </div>
    </section>
    `,
    methods: {

        onComposeBtn() {
            this.$emit('showCompose')
        }
    },
}