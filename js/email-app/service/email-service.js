import storageService from '../../service/storage-service.js'
import utilService from '../../service/util.js'
export default {
    getInboxEmails,
    getSentEmails,
    sendEmail,
    deleteEmail,
    getEmailById,
    emailClicked
}
var gInboxEmails = [{
    id: utilService.idGenerator(),
    subject: 'subscription',
    body: 'hey eitan ! ,loremloremloremloremloremloremloremloremloremloremlorem',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}, {
    id: utilService.idGenerator(),
    subject: '2',
    body: 'hey 2 ! , if you want...',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}]
var gSentEmails = [{
    id: utilService.idGenerator(),
    subject: 'Eitan, you have a new suggested connection to review',
    body: 'hey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}, {
    id: utilService.idGenerator(),
    subject: '2',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false
}, {
    id: utilService.idGenerator(),
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
        id: utilService.idGenerator(),
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
        storageService.store('gSentEmails', gSentEmails);

        // TODO: add more email options like archive.. 
    }
    return Promise.resolve(updatedEmails)
}

function getEmailById(emailId, category) {
    var email
    console.log(emailId, category);

    if (category === 'inbox') {
        email = gInboxEmails.find((email) => {
            return email.id === emailId
        })

    } else if (category === 'sent') {
        email = gSentEmails.find((email) => {
            console.log(email);
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
    console.log('clicked!!');

    storageService.store('gInboxEmails', gInboxEmails);
    storageService.store('gSentEmails', gSentEmails);
}