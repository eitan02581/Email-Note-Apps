import emailToolbar from './email-toolbar.cmp.js';
import emailService from '../service/email-service.js'
// import {
//     eventBus,
//     SHOW_EMAIL_DETAILS
// } from '../../service/event-bus.js'

export default {
    name: 'email-details',
    components: {
        emailToolbar
    },
    template: `
    <section class="email-details-wrapper" v-if="email">
            <transition name="apps">
            <div v-if="actionMade" class="action-indcation">
                <h1>{{actionTxt}}</h1>
            </div>
            </transition>

        <div class="email-container">
            <div class="top">
                <button @click="back">Back</button>
                <button @click="deleteEmail"> <i class="far fa-trash-alt fa-2x" ></i></button>
                <button v-if="!email.isStarred" @click="toggleStarred"><i class="far fa-star fa-2x"></i></button>
                <button v-else @click="toggleStarred" ><i class="fas fa-star fa-2x"></i></button>
                <button v-if="category === 'inbox'" @click="toogleSpam(email)"><i class="fas fa-ban fa-2x"></i></button>
                <button v-if="category === 'spam'" @click="toogleSpam(email)">Unspam</button>
            </div>
            <div class="main">
                <h1>{{email.subject}}</h1>
                <h6 v-if="email.from"> From: <{{email.from}}></h6>
                <h6 v-if="email.to"> To: <{{email.to}}></h6>
                <p>{{email.body}}</p>
            </div>
            <div class="form-n-btn-wrapper">
                <div class="form-n-btn-container">
                    <div v-if="state" class="reply-form">
                        <form >
                        <div class="exit">
                        <button @click="state = false" v-if="state"><i class="far fa-times-circle"></i></button>
                        </div>
                            <h3 v-if="state === 'reply' && email.from ">To:  <{{ email.from}}> </h3>
                            <h3 v-else-if="state === 'reply'">To:  <{{email.to}}> </h3>
                            <h3 v-if="state === 'forward'">To:  <{{emailObj.to}}> </h3>
                            <input autofocus v-model="emailObj.to" placeholder="To">
                            <input  v-model="emailObj.body" placeholder="Subject">
                            <textarea v-model="emailObj.subject" placeholder=""></textarea>
                            <button  @click.prenvent.stop="onSendEmail" >Send</button>
                    </form>
                    </div>
                    <div class="bottom">
                        <button @click="onReply" > <i class="fas fa-reply"></i>Reply</button>
                        <button  @click="onForward">Forward <i class="fas fa-arrow-right"></i></button>
                        <button @click="onMakeNote(email)">Make A Note</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            email: null,
            category: null,
            emailObj: {
                to: '',
                subject: '',
                body: ''
            },
            state: false,
            actionMade: false,
            actionTxt: null
        }
    },
    methods: {
        //TODO: allow deleteing email
        deleteEmail() {
            this.$emit('deleteEmail', this.email.id)
            setTimeout(() => {
                this.$router.go(-1);
            }, 200);
        },
        back() {
            this.$router.go(-1);
        },
        setCategory() {
            // TODO: use a btetter regex method
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
        onSendEmail() {
            // TODO: MAKE VALIDATION css
            if (this.emailObj.to) {
                emailService.sendEmail(this.emailObj);
                this.state = false
                this.actionMade = true
                this.actionTxt = "Email was sent!"
                setTimeout(() => {
                    this.actionMade = false
                }, 1500);
            }

        },
        onReply() {
            this.state = 'reply'
            this.category === 'inbox' ? this.emailObj.to = this.email.from : this.emailObj.to = this.email.to
        },
        onForward() {
            this.state = 'forward'
            this.emailObj.to = null
        },
        toggleStarred() {
            this.email.isStarred = !this.email.isStarred
        },
        onMakeNote(email) {
            emailService.transformToNote(email)
            this.actionMade = true
            this.actionTxt = "A new note made"
            setTimeout(() => {
                this.actionMade = false
            }, 1500);
        },
        toogleSpam(email) {
            if (!email.isSpam) {
                emailService.setEmailToSpam(email)
                this.$router.go(-1)
            } else {
                emailService.unSpamEmail(email)
                this.$router.go(-1)
                console.log('asd');

            }
        }

    },
    created() {
        var emailId = this.$route.params.emailId
        this.setCategory()
        emailService.getEmailById(emailId, this.category).then((email) => {
            this.email = email
        })
    },
    watch: {
        '$route.path': function () {
            this.setCategory()
            var emailId = this.$route.params.emailId

            emailService.getEmailById(emailId, this.category).then((email) => {
                this.email = email
            })
        }
    }
}