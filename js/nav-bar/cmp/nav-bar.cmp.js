import appsBox from './nav-bar-apps-box.cmp.js'
export default {
    components: {
        appsBox
    },
    template: `
    <section class="nav-wrapper">
        <nav>
           
            <div class="logo-ham-container">
                <div class="hamburger-wrapper">
                    <button>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/768px-VisualEditor_-_Icon_-_Menu.svg.png">
                    </button>
                </div>
                <div class="logo-wrapper">
                    <img src="https://www.google.com/images/icons/product/keep-512.png"  >
                </div>
            </div>
            
            <div class="search-wrapper">
                <input placeholder="Search">
            </div>
            <div class="apps-box-wrapper">
                <button @click="showAppBox = !showAppBox">
                    <i class="fas fa-th fa-2x"></i>
                </button>
            </div>
        </nav>   
        <appsBox v-if="showAppBox" />
    </section>
    `,
    data() {
        return {
            showAppBox: false
        }
    },
    methods: {

    },
}