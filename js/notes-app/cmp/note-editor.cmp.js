import noteUpdateToolbar from './note-update-toolbar.cmp.js'

export default {
    props: ['noteFromFather'],
    template: `
        <section ref="modal" class="note-editor-wrapper"
            :style="{ backgroundColor: colorForBackground}">

            <button class="pin" @click.stop="togglePinNote"><i class="fas fa-thumbtack"></i></button>
            <img :src="image" v-if="isImage"/>
            <input placeholder="Title" class="title" name="title" type="text" v-model="inputTitle" @input="updateTitle">
            <input placeholder="Note" class="text" name="text" type="text" v-model="inputText" @input="updateText">
            <div class="details">created at: {{noteCreatedAt}}</div>
            <note-update-toolbar :fatherNote="note"></note-update-toolbar>
            <button @click="emitTocloseModal">close</button>
       
        </section> 
    `,
    components: {
        noteUpdateToolbar,
    },
    data() {
        return {
            note: this.noteFromFather,
            inputText: null,
            inputTitle: null,
        }
    },
    created: function () {
        this.inputText = this.noteContentText
        this.inputTitle = this.noteContentTiltle
    },
    methods: {
        togglePinNote() {
            this.note.pinned = !this.note.pinned
            console.log('pinned:', this.note.pinned)
        },
        emitTocloseModal() {
            console.log('emiting')
            this.$emit('closeModal')
        },
        updateText(){
            console.log('updating text')
this.noteFromFather.content.text = this.inputText
        },
        updateTitle(){
            console.log('updating text')
this.noteFromFather.content.title = this.inputTitle
        },

    },
    computed: {
        noteContentTiltle() {
            return this.note.content.title
        },
        noteContentText() {
            return this.note.content.text
        },
        noteCreatedAt() {
            var date = new Date(this.note.createdAt)
            var hours = date.getHours()
            var minutes = date.getMinutes()
            var seconds = date.getSeconds()
            var clock = `${hours}:${minutes}:${seconds}`
            return clock
        },
        image() {
            return this.note.content.imageUrl
        },
        colorForBackground() {
            return this.note.backgroundColor
        },
        isImage() {
            return this.note.content.imageUrl
        },

    },

}