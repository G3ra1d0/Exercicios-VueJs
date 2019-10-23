new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
           alert("Alerta exibido");
        },
        ente(event){
            this.valor = event.target.value
        }
    }
})