import {
    eventBus,
    TOGGLE_HAM
} from '../../service/event-bus.js'
import '../../../lib/aos.js'
export default {
    name: 'email-aside',
    props: ['InboxLeftToRead'],
    template: `
    <section v-if="isAsideOpen" class="email-aside-wrapper">
     <div  class="email-aside-container">
     
            <div class="comose-btn">
                <button @click="onComposeBtn"><img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"> Compose</button> 
            </div>
            <router-link  active-class="activlink"  to="/email/inbox">
                <div @click="linkClicked" class="inbox-btn">
                        <i style="color:#00BCD4;" class="fas fa-inbox "></i><button> Inbox</button>
                       <template v-if="InboxLeftToRead"> {{InboxLeftToRead}}</template>
                </div>
            </router-link>
            <router-link active-class="activlink"   to="/email/sent"> 
                <div @click="linkClicked" class="sent-btn">
                 <i style="color: #4CAF50;" class="far fa-share-square"></i><button>Sent</button>
                </div>
            </router-link>
            <router-link active-class="activlink"  to="/email/starred">
                <div @click="linkClicked" class="starred-btn">
                      <i style="color:gold;" class="fas fa-star"></i><button>Starred</button>
                </div>
            </router-link>
            <router-link active-class="activlink"  to="/email/spam">
            <div @click="linkClicked" class="starred-btn">
                 <i class="fas fa-ban "></i><button>Spam</button>
            </div>
            </router-link>
     </div>
    </section>
    `,
    data() {
        return {
            isAsideOpen: true,
            window: {
                width: 0,
                height: 0
            },
        }
    },
    created() {
        eventBus.$on(' TOGGLE_HAM', () => {
            this.isAsideOpen = !this.isAsideOpen
        })
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    mounted() {
        this.handleResize();
        if (this.window.width < 500) {
            this.isAsideOpen = false;
        }
    },

    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        onComposeBtn() {
            this.isAsideOpen = false
            this.$emit('showCompose')
        },
        linkClicked() {
            console.log('asd');
            if (this.window.width < 500) {

                this.isAsideOpen = false;
            }

        }
    },
}