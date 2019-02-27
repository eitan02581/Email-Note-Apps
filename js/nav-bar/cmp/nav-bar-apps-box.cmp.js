export default {
    template: `
    <section class="apps-wrapper">
        <div class="apps-container">
            <button class="keep-app-btn"> 
                <router-link to="/" exact > Keep  </router-link> </button>
            <button class="email-app-btn">
                <router-link to="/email" exact > Email </router-link> 
            </button>
        </div>
    </section>
    `

}