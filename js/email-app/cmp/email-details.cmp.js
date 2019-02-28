import emailToolbar from './email-toolbar.cmp.js'
export default {
    name: 'email-details',
    props: ['email'],
    components: {
        emailToolbar
    },
    template: `
    <section class="email-details-wrapper">
    <button @click="deleteEmail"> <i class="far fa-trash-alt"></i></button>
    <h1>email details</h1>
        <div>{{email.subject}}</div>
        <div>{{email.body}}</div>
    </section>
    `,
    methods: {
        //TODO: allow deleteing email
        deleteEmail() {
            this.$emit('deleteEmail', this.email.id)
        }
    },
    created() {
        console.log(this.email)
    }
}