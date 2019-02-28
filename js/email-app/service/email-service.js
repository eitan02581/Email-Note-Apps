import storageService from '../../service/storage-service.js'
export default {
    getInboxEmails,
    getSentEmails,
    sendEmail,
    deleteEmail,
    getEmailById,
    emailClicked
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
}, {
    id: 'e' + gNextId++,
    subject: '2',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}, {
    id: 'e' + gNextId++,
    subject: '3',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}]


loadEmailsFromStroage()

function loadEmailsFromStroage() {
    if (storageService.load('gInboxEmails')) gInboxEmails = storageService.load('gInboxEmails')
    if (storageService.load('gSentEmails')) gSentEmails = storageService.load('gSentEmails')

}

function getInboxEmails() {
    return Promise.resolve(gInboxEmails)
}

function getSentEmails() {
    return Promise.resolve(gSentEmails)
}

function sendEmail(emailObj) {
    gSentEmails.push({
        id: 'e' + gNextId++,
        subject: emailObj.subject,
        body: emailObj.body,
        isRead: false,
        sentAt: Date.now(),
        isArchive: false
    })
    storageService.store('gSentEmails', gSentEmails);
}

function deleteEmail(emailId, category) {
    var updatedEmails
    var idx
    if (category === 'inbox') {
        idx = gInboxEmails.findIndex((email) => {
            return email.id === emailId
        })
        // TODO: CONTINUE DELTEING FROM ARRAY
        gInboxEmails.splice(idx, 1)
        updatedEmails = {
            ...gInboxEmails
        }
        storageService.store('gInboxEmails', gInboxEmails);

    } else if (category === 'sent') {
        idx = gSentEmails.findIndex((email) => {
            return email.id === emailId
        })
        gSentEmails.splice(idx, 1)
        updatedEmails = {
            ...gSentEmails
        }
        storageService.store('gSentEmails', updatedEmails);

        // TODO: add more email options like archive.. 
    }
    return Promise.resolve(updatedEmails)
}

function getEmailById(emailId, category) {
    var email
    if (category === 'inbox') {
        email = gInboxEmails.find((email) => {
            return email.id === emailId
        })
    } else if (category === 'sent') {
        email = gSentEmails.find((email) => {
            return email.id === emailId
        })
    }
    return Promise.resolve(email)

}

function emailClicked(emailId, category, setUnRead) {
    var email
    getEmailById(emailId, category).then((email) => {
        email = email
        if (setUnRead) {
            email.isRead = !email.isRead
        } else email.isRead = true
    })


    category === 'inbox' ? storageService.store('gInboxEmails', gInboxEmails) : storageService.store('gInboxEmails', gInboxEmails)
}