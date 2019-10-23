new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        resultado(){
            setTimeout(() => {
                this.valor = 0
                this.resultado = 'Valor Diferente a 37' 
            }, 5000)
        }
    },
    computed: {
        resultado(){
             return  this.valor == 37 ? 'Valor igual a 37' : 'Valor diferente a 37';
        }
    },
});