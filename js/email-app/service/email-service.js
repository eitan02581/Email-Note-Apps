export default {
    getInboxEmails,
    getSentEmails,
    sendEmail
}
var gNextId = 0
var gInboxEmails = [{
    id: 'e' + gNextId++,
    subject: 'subscription',
    body: 'hey eitan ! ,loremloremloremloremloremloremloremloremloremloremlorem',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}, {
    id: 'e' + gNextId++,
    subject: '2',
    body: 'hey 2 ! , if you want...',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}]
var gSentEmails = [{
    id: 'e' + gNextId++,
    subject: 'sent From me',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}]

function getInboxEmails() {
    return Promise.resolve(gInboxEmails)
}

function getSentEmails() {
    return Promise.resolve(gSentEmails)
}

function sendEmail(emailObj) {
    gSentEmails.push({
        id: 'n' + gNextId++,
        subject: emailObj.subject,
        body: emailObj.body,
        isRead: false,
        sentAt: Date.now(),
        isArchive: false
    })
}