export default {
    name: 'email-aside',
    props: ['InboxLeftToRead'],
    template: `
    <section class="email-aside-wrapper">
     <div class="email-aside-container">
            <div class="comose-btn">
                <button @click="onComposeBtn"><img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"> Compose</button> 
            </div>
            <router-link  to="/email/inbox">
                <div class="inbox-btn">
                        <i style="color:#00BCD4;" class="fas fa-inbox "></i><button> Inbox</button>
                        {{InboxLeftToRead}}
                </div>
            </router-link>
            <router-link   to="/email/sent"> 
                <div class="sent-btn">
                 <i style="color: #4CAF50;" class="far fa-share-square"></i><button>Sent</button>
                </div>
            </router-link>
            <router-link  to="/email/starred">
                <div class="starred-btn">
                      <i style="color:gold;" class="fas fa-star"></i><button>Starred</button>
                </div>
            </router-link>
            <router-link  to="/email/spam">
            <div class="starred-btn">
                 <i class="fas fa-ban "></i><button>Spam</button>
            </div>
            </router-link>
     </div>
    </section>
    `,
    methods: {

        onComposeBtn() {
            this.$emit('showCompose')
        }
    },
}