import appsBox from './nav-bar-apps-box.cmp.js';
import emailService from '../../email-app/service/email-service.js'
export default {
    components: {
        appsBox
    },
    template: `
    <section @click="isSearchActive=false" class="nav-wrapper">
        <nav>
            <div class="logo-ham-container">
                <div class="hamburger-wrapper">
                    <button>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/768px-VisualEditor_-_Icon_-_Menu.svg.png">
                    </button>
                </div>
                <div class="logo-wrapper">
                    <img :src="logObj"> 
                </div>
            </div>
            <div  class="search-wrapper">
                <input     v-model="searchValue"  placeholder="Search">
                {{isSearchActive}}
                <div v-if="isSearchActive" class="filted-list">
                    <ul>    
                        <router-link @click.native="linkWasClicked" v-for="item in matched" :to="'/email/' + category + '/' + item.id" >
                            <li>{{item.subject}} - {{item.body}}</li>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div  class="apps-box-wrapper">
                <button @click="showAppBox = !showAppBox">
                    <i class="fas fa-th fa-2x"></i>
                </button>
            </div>
        </nav>   
        <apps-Box  v-if="showAppBox"></apps-Box>
    </section>
    `,
    data() {
        return {
            logo: {
                keep: 'https://www.google.com/images/icons/product/keep-512.png',
                email: 'http://pngimg.com/uploads/gmail_logo/gmail_logo_PNG1.png'
            },
            showAppBox: false,
            inboxEmails: null,
            sentEmails: null,
            category: null,
            searchValue: null,
            matched: null,
            isSearchActive: false
        }
    },
    methods: {

    },
    computed: {
        logObj() {
            return this.$route.path === '/' ? this.logo.keep : this.logo.email
        }
    },
    created() {
        emailService.getInboxEmails().then((inboxEmails) => {
            this.inboxEmails = inboxEmails
        })
        emailService.getSentEmails().then((sentEmails) => {
            this.sentEmails = sentEmails
            // console.log(sentEmails);

        })

        console.log(this.$route.path);
        var str = this.$route.path;
        // console.log(str);    
        // TODO: maybe a more specific condition is nedded (in case of more email filters)
        var res = /\/email\/inbox/.test(str);
        if (res) {
            this.category = 'inbox'
        } else {
            this.category = 'sent'
            // this.category = this.$route.path
        }
    },
    methods: {
        linkWasClicked() {
            setTimeout(() => {
                this.isSearchActive = false
            }, 100);
        },
        setSearchOptions() {
            var matchedEmails
            this.isSearchActive = true

            if (this.category === 'inbox') {
                matchedEmails = this.inboxEmails.filter(email => email.subject.includes(this.searchValue) || email.body.includes(this.searchValue))
                console.log(this.inboxEmails);
                this.matched = matchedEmails
                console.log(this.matched);

            } else if (this.category === 'sent') {
                console.log(this.sentEmails);
                matchedEmails = this.sentEmails.filter(email => email.subject.includes(this.searchValue) || email.body.includes(this.searchValue))
                console.log(this.matched);
                this.matched = matchedEmails
            }
            // if(this.matched.length === 0)  this.matched = 
        },
        blured() {
            console.log('asd');

        }

    },
    watch: {
        '$route.path': function () {
            var str = this.$route.path;

            this.isSearchActive = false
            this.matched = null;
            var res = /\/email\/inbox/.test(str);
            console.log(this.matched);

            // TODO: maybe a more specific condition is nedded (in case of more email filters)
            // if (this.$route.path === '/email/inbox') {
            //     this.category = 'inbox'

            // } else if (this.$route.path === '/email/sent') {
            //     this.category = 'sent'
            // }
            if (res) {
                this.category = 'inbox'
            } else {
                this.category = 'sent'
            }
        },
        searchValue() {
            this.setSearchOptions()
        }
    }
}