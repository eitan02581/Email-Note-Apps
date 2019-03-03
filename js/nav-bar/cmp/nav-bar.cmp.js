import appsBox from './nav-bar-apps-box.cmp.js';
import emailService from '../../email-app/service/email-service.js'
import {
    eventBus,
    TOGGLE_HAM,
    SHOW_EMAIL_TO_READ

} from '../../service/event-bus.js'
export default {
    components: {
        appsBox
    },
    template: `
    <section @click="isSearchActive=false" class="nav-wrapper">
        <nav>
            <div class="logo-ham-container">
                <div v-if="isEmail" class="hamburger-wrapper">
                    <button @click="onHam">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/768px-VisualEditor_-_Icon_-_Menu.svg.png">
                    </button>
                </div>
                <div class="logo-wrapper">
                
                    <img v-if="isKeep" :class="{'keep-logo': isKeep }" :src="logObj"> 
                    <router-link v-if="isEmail"  active-class="activlink"  to="/email/inbox">
                    <img :class="{'email-logo': isEmail}" :src="logObj"> 
                </router-link>
                </div>
            </div>
            <div  class="search-wrapper">
                <input @blur="closeSearchList" v-model="searchValue"  placeholder="Search">
                <div v-if="isSearchActive" class="filted-list">
                    <ul>    
                        <router-link @click.native="linkWasClicked" v-for="email in matched" :key="email.id" :to="'/email/' + category + '/' + email.id" >
                            <li><div class="option">{{email.subject}} - {{email.body}}</div></li>
                        </router-link>
                        <li style="backgroundColor: #F44336 ; color:white" v-if="matched.length === 0">No records found</li>
                    </ul>
                </div>
            </div>
            <div  class="apps-box-wrapper">
                <button @click="showAppBox = !showAppBox">
                    <i style="color:#607d8b" class="fas fa-th fa-2x"></i>
                </button>
            </div>
        </nav>   
        <transition name="apps" >
            <keep-alive>
                <apps-Box :emailsLeftToRead="emailsLeftToRead" @closeBoxApp="closeBoxApp"  v-if="showAppBox"></apps-Box>
            </keep-alive>
        </transition>
    </section>
    `,
    data() {
        return {
            logo: {
                keep: 'https://www.google.com/images/icons/product/keep-512.png',
                email: 'http://pngimg.com/uploads/gmail_logo/gmail_logo_PNG1.png'
            },
            isKeep: true,
            isEmail: false,
            showAppBox: false,
            inboxEmails: null,
            sentEmails: null,
            spamEmails: null,
            category: null,
            searchValue: null,
            matched: null,
            isSearchActive: false,
            emailsLeftToRead: null
        }
    },
    computed: {
        logObj() {
            if (this.$route.path === '/') {
                this.isKeep = true
                this.isEmail = false
                return this.logo.keep
            } else {
                this.isKeep = false
                this.isEmail = true
                return this.logo.email
            }
        }
    },
    created() {

        eventBus.$on('SHOW_EMAIL_TO_READ', msg => {
            this.emailsLeftToRead = msg
        })
        emailService.getInboxEmails().then((inboxEmails) => {
            this.inboxEmails = inboxEmails
        })
        emailService.getSentEmails().then((sentEmails) => {
            this.sentEmails = sentEmails

        })
        emailService.getSpamEmails().then((spamEmails) => {
            this.spamEmails = spamEmails
        })
        // var str = this.$route.path;
        // // console.log(str);    
        // // TODO: maybe a more specific condition is nedded (in case of more email filters)
        // var res = /\/email\/inbox/.test(str);
        // if (res) {
        //     this.category = 'inbox'
        // } else {
        //     this.category = 'sent'
        //     // this.category = this.$route.path
        // }
        var path = this.$route.path;

        var res;
        (/\/email\/inbox/.test(path)) ? res = 'inbox': res = false

        if (res === 'inbox') {
            this.category = 'inbox'
        } else {
            (/\/email\/sent/.test(path)) ? res = 'sent': res = false
            if (res === 'sent') this.category = 'sent'
            else {
                (/\/email\/starred/.test(path)) ? res = 'starred': res = false
                if (res === 'starred') this.category = 'starred'
                else this.category = 'spam'
            }
        }

    },
    methods: {
        closeSearchList() {
            setTimeout(() => {
                this.isSearchActive = false;
            }, 200);
        },
        linkWasClicked() {
            setTimeout(() => {
                this.isSearchActive = false
            }, 100);
        },
        setSearchOptions() {
            var matchedEmails
            this.isSearchActive = true
            console.log(this.category);

            if (this.category === 'inbox') {
                matchedEmails = this.inboxEmails.filter(email => email.subject.includes(this.searchValue) || email.body.includes(this.searchValue))
                this.matched = matchedEmails
            } else if (this.category === 'sent') {
                console.log(this.sentEmails);
                matchedEmails = this.sentEmails.filter(email => email.subject.includes(this.searchValue) || email.body.includes(this.searchValue))
                this.matched = matchedEmails
            } else if (this.category === 'starred') {
                console.log(this.sentEmails);
                matchedEmails = this.sentEmails.filter(email => ((email.subject.includes(this.searchValue) || email.body.includes(this.searchValue)) && email.isStarred))
                this.matched = matchedEmails
            } else if (this.category === 'spam') {
                console.log(this.sentEmails);
                matchedEmails = this.spamEmails.filter(email => ((email.subject.includes(this.searchValue) || email.body.includes(this.searchValue))))
                this.matched = matchedEmails
            }
        },
        closeBoxApp() {
            this.showAppBox = false
        },
        onHam() {
            eventBus.$emit(' TOGGLE_HAM')
        }
    },
    watch: {
        '$route.path': function () {
            this.isSearchActive = false
            this.matched = null;
            var path = this.$route.path;
            var res;
            (/\/email\/inbox/.test(path)) ? res = 'inbox': res = false

            if (res === 'inbox') {
                this.category = 'inbox'
            } else {
                (/\/email\/sent/.test(path)) ? res = 'sent': res = false
                if (res === 'sent') this.category = 'sent'
                else {
                    (/\/email\/starred/.test(path)) ? res = 'starred': res = false
                    if (res === 'starred') this.category = 'starred'
                    else this.category = 'spam'
                }
            }
        },
        searchValue() {
            this.setSearchOptions()
        }
    }
}