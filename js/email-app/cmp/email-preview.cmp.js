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
                {{email.sentAt}}
            </div>
        </div>
    </section>
    `,
    methods: {
        // TODO: method for email body and subject for longs one
    },
}