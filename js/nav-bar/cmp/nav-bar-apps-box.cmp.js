export default {
    props: ['emailsLeftToRead'],
    template: `
    <section class="apps-wrapper">
        <div class="apps-container">
            <div class="btn-wrapper">
                <button  @click="onKeep" class="keep-app-btn"> 
                    <router-link to="/" exact ><img style="width:64px; height:64px" src="https://www.google.com/images/icons/product/keep-512.png">  </router-link> </button>
                <button  @click="onEmail" class="email-app-btn">
                    <router-link to="/email/inbox" exact > <img style="width:64px; height:49px" src="http://pngimg.com/uploads/gmail_logo/gmail_logo_PNG1.png"> </router-link> 
                </button>
                <div class="emails-indc"  v-if="emailsLeftToRead" >{{emailsLeftToRead}}</div>

            </div>
        </div>
    </section>
    `,
    created() {

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