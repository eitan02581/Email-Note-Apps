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
    subject: `ניצחון בקרב, המערכה עוד ארוכה`,
    body: `שלום לכולם,
    היום בדיון הרביעי בעניין כיכר אתרים קיבלה הוולחוף החלטה המבטלת הלכה למעשה את ההחרגה שנעשתה על ידי עיריית תל אביב-יפו מתכנית המתאר העירונית תא 5000, החרגה שהתירה כמות נוספת של 15 קומות כמו גם בנייה למגורים על קו החוף.
    הישג עצום, הרבה בזכות הציבור הרחב שמתנגד בתוקף לתוכנית ול-700 איש שהצטרפו לעצומה.
    ההחלטה במלואה אינה זמינה עדיין אבל ברור שההישג הזה אינו סוף פסוק, תכנית המגדלים לא שבקה חיים והיזמים ועיריית תל אביב-יפו לא ויתרו על סכומי העתק שהיו אמורים לקבל כתוצאה מהתכנית.
    המאבק עוד ארוך, צריכים כל אחת ואחד מכם!
    תודה `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `איך להקים עסק משגשג ב eBay ב 2019? האם זה אפשרי? `,
    body: `    שלום חברים
    לפני שנים eBay היה ברירת המחדל למסחר דיגיטלי.
    גם היום מעל 80% מהישראלים שעוסקים במסחר דיגיטלי עדיין פועלים ב eBay.
    בשנים האחרונות שחקניות חדשות התווספו למשחק
    שופיפיי, אמזון , עליאקספרס , WISH ועוד.....
    ועדיין eBay חי ובועט
    ובחודשים האחרונים זיהינו הזדמנות חדשה ב eBay
    ואני ממש מרגיש
    כמו בימים שגיליתי את eBay `,
    isRead: false,
    sentAt: Date.now(),
    isArchive: false,
    isStarred: true,
    isSpam: false
}, {
    id: utilService.idGenerator(),
    from: 'eitan02581@gmail.com',
    subject: `האם זה מה שנשאיר לילדינו? צריכים אותכם/ן!!  `,
    body: `השבוע הגיעו רגלי אסדת לוויתן לחופי ישראל ושוקעו במקום המתוכנן להצבת האסדה בקרבת החוף. הרגליים ואוניית המנוף, נראות קרובות ומאיימות הרבה יותר ממה שסיפרו לנו.
    המציאות שהכרנו כל חיינו עלולה להשתנות - מפעלים פטרוכימיים בים וביבשה, זיהום אוויר תמידי, זיהום הים ומי השתייה, סכנות בריאותיות, ביטחוניות ובטיחותיות שלא ידענו כמותן. 
    מטרות נייחות לטילי אירן וחיזבאללה, בקרבת ריכוזי אוכלוסייה!
    זאת כבר לא תיאוריה,  זה קורה כאן ממש ברגעים אלו מול עינינו!  
    וזאת רק ההתחלה, כי התוכנית בהיקפה המלא תיושם בשלבים וככל שיתגלו שדות גז נוספים! המשמעות היא כסף עצום לתאגידי הגז, ומחלות ואסונות לאזרחים לדורות. 
    לקמפיין מימון ההמונים שלנו
    אנחנו בשלבי ההכרעה
    תמיכתכם הנוספת עשוייה להכריע את הכף.
    עם יד על הלב, מה הייתן מוכנות לתת כדי שלא תוקמנה אסדות מזהמות בקרבת החוף ומפעלים פטרוכימיים ביבשה, על כל השלכותיהם השליליות?
    על מה הייתם  מוכנים לוותר לטובת מטרה זו באופן זמני? 
    כמה ארוחות במסעדה- בתי קפה? חודש-חודשיים של ביטוח רפואי פרטי? טיול קטן אחד בחו״ל?
    להמשך והרחבת פעילויותינו בכל המישורים, כולל וגם במישור המשפטי, ושחלקן לא ניתן לפרוט מסיבות שקל להבינן, אנחנו מבקשים ליידע כי אנו זקוקים למשאבים נכבדים בתקופה הקרובה, שהנה קריטית לתוצאות המאבק, כדי לממן את הצעדים והתוכניות שבקנה, שחלקם לא מבוצעים בשל מגבלות התקציב.
    אנחנו זקוקים לתרומה שלכם
    אשר על כן, אנחנו פונים אליכן  ומבקשים את עזרתכם הדחופה בתמיכה כספית משמעותית בסכומים בסדרי גודל של 500, 1000 ש"ח ומעלה, למשך תקופה של ארבעת החודשים הקרובים, חודש בחודשו, בהתאם ליכולת.
    כמובן שכל סכום אחר, נמוך, או גבוה יותר, יתקבל בהוקרה, באהבה ובתודה גדולה. 
    במכפלות של תומכים רבים, סכומים אלה יאפשרו לנו לבצע צעדים משמעותיים מאוד(!) במאבק.
    לְמַעֲנֵינוּ, לְמַעַן יְלָדֵינוּ וּנְכָדֵינוּ, לְמַעַן מְדִינַת יִשְׂרָאֵל. אֲנַחְנוּ נְנַצֵּחַ! יִשְׂרָאֵל תְּנַצֵּחַ!
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
    subject: 'בחירות 2019',
    from: 'minatzemac@gov.co.il',
    body: 'אזרח יקר שלום ! ברצוננו לדעת למי מביו המפלגות אתה עתיד להצביע',
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