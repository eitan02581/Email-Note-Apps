import {
    eventBus,
    SHOW_EMAIL_TO_READ
} from '../../service/event-bus.js'
export default {
    template: `
    <section class="apps-wrapper">
        <div class="apps-container">
        {{emailsLeftToRead}}
            <div class="btn-wrapper">
                <button  @click="onKeep" class="keep-app-btn"> 
                    <router-link to="/" exact ><img style="width:64px; height:64px" src="https://www.google.com/images/icons/product/keep-512.png">  </router-link> </button>
                <button  @click="onEmail" class="email-app-btn">
                    <router-link to="/email/inbox" exact > <img style="width:64px; height:49px" src="http://pngimg.com/uploads/gmail_logo/gmail_logo_PNG1.png"> </router-link> 
                </button>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            emailsLeftToRead: null
        }
    },

    created() {
        // TODO: CHECK WHY EVENT BUS DONT WORK
        eventBus.$on(SHOW_EMAIL_TO_READ, msg => {
            console.log('got the msg', msg);
            this.emailsLeftToRead = msg
        })
    },
    methods: {
        onKeep() {
            this.closeBoxApp()
        },
        onEmail() {
            this.closeBoxApp()
        },
        closeBoxApp() {
            this.$emit('closeBoxApp', false)
        }
    },
}