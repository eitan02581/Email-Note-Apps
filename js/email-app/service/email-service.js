import storageService from '../../service/storage-service.js'
import utilService from '../../service/util.js'
export default {
    getInboxEmails,
    getSentEmails,
    sendEmail,
    deleteEmail,
    getEmailById,
    emailClicked,
    getStarredEmails,
    storeEmails,
    transformToNote
}
var gInboxEmails = [{
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: 'subscription',
    body: 'hey eitan ! ,loremloremloremlore  mloremloremloremlor emloremloremlorem',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: '2',
    body: 'hey 2 ! , if you want...',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true

}]
var gSentEmails = [{
    id: utilService.idGenerator(),
    to: 'evanyou@vue.com',
    subject: 'Eitan, you have a new suggested connection to review',
    body: 'hey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: false

}, {
    id: utilService.idGenerator(),
    subject: '2',
    to: 'shpigler@gmail.com',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: false

}, {
    id: utilService.idGenerator(),
    subject: '3',
    to: 'yaronbiton@gmail.com',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true

}]


loadEmailsFromStroage()

function loadEmailsFromStroage() {
    if (storageService.load('gInboxEmails')) gInboxEmails = storageService.load('gInboxEmails')
    if (storageService.load('gSentEmails')) gSentEmails = storageService.load('gSentEmails')

}

function storeEmails() {
    storageService.store('gInboxEmails', gInboxEmails);
    storageService.store('gSentEmails', gSentEmails);
}

function getInboxEmails() {
    return Promise.resolve(gInboxEmails)
}

function getSentEmails() {
    return Promise.resolve(gSentEmails)
}

function getStarredEmails() {
    var starredEmails = []
    return getInboxEmails().then(inboxEmails => {
        inboxEmails.forEach(email => {
            if (email.isStarred) {
                starredEmails.push(email)
            }
        })
    }).then(() => {
        getSentEmails().then(sentEmails => {
            sentEmails.forEach(email => {
                if (email.isStarred) {
                    starredEmails.push(email)
                }
            })
        })
    }).then(() => starredEmails)
}

function sendEmail(emailObj) {
    gSentEmails.push({
        id: utilService.idGenerator(),
        to: emailObj.to,
        subject: emailObj.subject,
        body: emailObj.body,
        isRead: false,
        sentAt: Date.now(),
        isStarred: false,
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

    email = gInboxEmails.find((email) => {
        return email.id === emailId
    })
    if (!email) {
        email = gSentEmails.find((email) => {
            return email.id === emailId
        })
    }

    // if (category === 'inbox') {
    //     email = gInboxEmails.find((email) => {
    //         return email.id === emailId
    //     })
    // } else if (category === 'sent') {
    //     email = gSentEmails.find((email) => {
    //         return email.id === emailId
    //     })
    // }
    return Promise.resolve(email)

}

function emailClicked(emailId, category, setUnRead) {
    getEmailById(emailId, category).then((email) => {
        if (setUnRead) {
            email.isRead = !email.isRead
        } else email.isRead = true
        storageService.store('gInboxEmails', gInboxEmails);
        storageService.store('gSentEmails', gSentEmails);
    })
    return Promise.resolve()
}
function transformToNote(email){
    
}