new Vue ({
    el: '#desafio',
    data: {
        nome: 'Geraldo Vitor',
        idade: 20,
        img: 'http://escola.joguba.com.br/tia/portifolio/img/perfil.jpg',
        x: ''
    },
    methods: {
        multIdade(mult){
            return this.idade * mult
        }  ,
        rand(){
            return Math.random();
        }
    }

})