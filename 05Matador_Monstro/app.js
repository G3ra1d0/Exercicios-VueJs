new Vue({
    el: '#app',
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        inicio: false,
        logs: []
    },
    computed: {
        resultado() {
            return this.vidaJogador == 0 || this.vidaMonstro == 0
        }
    },
    methods: {
        jogar() {
            this.inicio = true
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.logs = []
        },
        ataque(especial) {
            this.machucar('vidaMonstro', 5, 10, especial, 'Jogador', 'Monstro', 'Player')

            if (this.vidaMonstro > 0) {
                this.machucar('vidaJogador', 7, 12, false, 'Monstro', 'Jogador', 'maquinica')
            }
        },
        curaAndAtaque() {
            this.cura(10, 15)
            this.machucar('vidaJogador', 7, 12, false, 'Monstro', 'Jogador', 'maquinica')
        },
        cura(min, max) {
            const curar = this.getRandom(min, max)
            this.vidaJogador = Math.min(this.vidaJogador + curar, 100) /* Não passar de 100*/
            this.registerLog(`O jogador ganhou força de ${curar}`, 'Player')
        },
        machucar(prop, min, max, especial, origem, alvo, cls) {
            const plus = especial ? 5 : 0;
            const machucar = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - machucar, 0) /* Não deixa ser Negativo */
            this.registerLog(`${origem} atingiu ${alvo} com ${machucar}.`, cls)
        },
        getRandom(min, max) {
            const valor = Math.random() * (max - min) + min
            return Math.round(valor)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        resultado(value) {
            if (value) this.inicio = false
        }
    },
})