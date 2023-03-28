const { createApp } = Vue;

createApp({
    data(){
        return{
            title: 'Il mio amore!',
            image: 'https://www.sicilia.info/wp-content/uploads/sites/91/messina.jpg',
            myClasses: 'd-flex justify-content-center align-items-center text-center flex-column'
        }
    }
}).mount('#app')