import notesList from '../notes-app/cmp/notes-list.cmp.js'
import notesCreator from '../notes-app/cmp/notes-creator.js'

export default {
    template: `
        <section :class="{'notes-app-wrapper':true ,  }">
        <transition name="fade">
        <div v-if="isKeepGifLoad" class="keep-loading-bgc"></div>
        </transition>
        <transition name="fade">
        <img class="keep-loading-gif" v-if="isKeepGifLoad" src="../../css/images/keep-icon-3.jpg">
        </transition>
        

              <notes-creator></notes-creator>
                <notes-list/>

        </section> 
    `,
    components: {
        notesList,
        notesCreator,
    },
    data() {
        return {
            isKeepGifLoad: true
        }
    },

    created() {
        setTimeout(() => {
            this.isKeepGifLoad = false
        }, 900);
    }
}