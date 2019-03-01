export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <section class="email-preview-wrapper">
        <div class="email-container">
            <div class="email-subject">
                 {{email.subject}}
            </div>
            <div class="email-body">
                 {{email.body}}
            </div>
            <div class="email-date">
                {{sentAt}}
                
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            sentAt: null
        }
    },
    created() {
        this.setCreatedTime()
    },
    methods: {
        setCreatedTime() {
            console.log(this.email.sentAt);

            var date = new Date(this.email.sentAt)
            var hours = date.getHours()
            var minutes = date.getMinutes()
            var clock = `${hours}:${minutes}`
            this.sentAt = clock
        }
    },

}