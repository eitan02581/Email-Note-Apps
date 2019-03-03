import storageService from '../../service/storage-service.js'
import utilService from '../../service/util.js'
import noteService from '../../notes-app/services/note-service.js'
export default {
    getInboxEmails,
    getSentEmails,
    sendEmail,
    deleteEmail,
    getEmailById,
    emailClicked,
    getStarredEmails,
    storeEmails,
    transformToNote,
    setEmailToSpam,
    getSpamEmails,
    unSpamEmail
}
var gInboxEmails = [{
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: 'subscription',
    body: 'hey eitan ! would you like to have some news about the new surf magazin? ',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: false,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 

    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    
    The winner will be announced tomorrow so keep an eye on your inbox! 
    `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false


}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 

    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    
    The winner will be announced tomorrow so keep an eye on your inbox! 
    `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 

    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    
    The winner will be announced tomorrow so keep an eye on your inbox! 
    `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 

    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    
    The winner will be announced tomorrow so keep an eye on your inbox! 
    `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 
    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    The winner will be announced tomorrow so keep an eye on your inbox! `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 
    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    The winner will be announced tomorrow so keep an eye on your inbox! `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 
    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    The winner will be announced tomorrow so keep an eye on your inbox! `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}]
var gSentEmails = [{
    id: utilService.idGenerator(),
    to: 'evanyou@vue.com',
    subject: 'Eitan, you have a new suggested connection to review',
    body: 'hey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are youhey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: false,
    isSpam: false


}, {
    id: utilService.idGenerator(),
    subject: '2',
    to: 'shpigler@gmail.com',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: false,
    isSpam: false


}, {
    id: utilService.idGenerator(),
    subject: '3',
    to: 'yaronbiton@gmail.com',
    body: 'hey man ! how are you',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}]
var gSpamEmails = [{
    id: utilService.idGenerator(),
    subject: `Prize #2 D'Angelico Premier Brighton Electric Guitar    `,
    body: `Prize #2 D'Angelico Premier Brighton Electric Guitar 

    Introducing the Premier Brighton, a sleek double-cutaway and the newest addition to the D'Angelico solid-body lineup. Featuring deep cutaways that provide easy access to the highest frets and a lightweight body design, the Brighton is the epitome of performance-friendly. Seymour Duncan Designed humbuckers paired with an alder body offer smooth tone and clear resonance, while a satin-finished slim-C neck shape guarantees comfort for players at every level. 
    
    The winner will be announced tomorrow so keep an eye on your inbox! 
    `,
    from: 'minatzemac@gov.co.il',
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}]

loadEmailsFromStroage()

function loadEmailsFromStroage() {
    if (storageService.load('gInboxEmails')) gInboxEmails = storageService.load('gInboxEmails')
    if (storageService.load('gSentEmails')) gSentEmails = storageService.load('gSentEmails')
    if (storageService.load('gSpamEmails')) gSpamEmails = storageService.load('gSpamEmails')

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

function getSpamEmails() {
    return Promise.resolve(gSpamEmails)
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
    if (!email) {
        email = gSpamEmails.find((email) => {
            return email.id === emailId
        })
    }
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

function transformToNote(email) {
    noteService.createTextNote(email.subject, email.body)
}

function setEmailToSpam(email) {
    email.isSpam = true
    var idx = gInboxEmails.findIndex((inboxEmail) => {
        return inboxEmail.id === email.id
    })
    if (idx !== -1) {
        gSpamEmails.push(email)
        gInboxEmails.splice(idx, 1)
    }
    storageService.store('gInboxEmails', gInboxEmails);
    storageService.store('gSpamEmails', gSpamEmails);
}

function unSpamEmail(email) {
    email.isSpam = false
    gInboxEmails.push(email)
    var idx = gSpamEmails.findIndex((spamEmail) => {
        return spamEmail.id === email.id
    })
    gSpamEmails.splice(idx, 1)
}