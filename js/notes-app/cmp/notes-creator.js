import noteService from '../services/note-service.js'
import noteEditor from '../cmp/note-editor.cmp.js'


export default {
    components: {
        noteService,
        noteEditor,
    },
    template: `
        <section 
        class="notes-creator-wrapper">


        <div v-if="showEditor">
                <div @click="closeModal" class="modal-container"></div>
                <note-editor 
                :noteFromFather="noteInEditor" 
                @closeModal="closeModal"
                @createNewTodo = "pushNewTodo"
                ></note-editor>
               
        </div>
        
            
        <div 
         class="notes-creator-place-saver" 
        >
            <span 
            @click="createText"
            >
                Take a note...
            </span>

            <div class="options-wrapper">
                <button
                @click="createTodo">
                    <i class="far fa-check-square"></i>
                </button>

                <button>
                    <i class="far fa-image"></i>
                </button>

                <button>
                    <i class="fab fa-youtube"></i>
                </button>

                <button>
                    <i class="fas fa-volume-down"></i>
                </button>
            </div>
        </div>
        </section> 
    `,
    data() {
        return {
            title: '',
            text: '',
            todos: '',
            currentCreatComponent: null,
            showEditor:null,
            noteInEditor:null,
        }
    },
    methods: {
        closeModal(){
            this.showEditor = false
        },
        pushNewTodo(todo,id){
            console.log(todo,id)
            noteService.pushNewComment(id,todo)
        },
        newTodoNote(){
            console.log('todos:',this.todos)
           return noteService.createTodoNote(this.title, this.todos)
        },
        createText(){
          var note =  this.newTextNote()
          this.noteInEditor = note
          this.showEditor = true
        },
        createTodo(){
            var note =  this.newTodoNote()
            console.log('note',note)
            this.noteInEditor = note
            this.showEditor = true
          },
        newTextNote() {
           return noteService.createTextNote(this.title, this.text)
        },
    },
}