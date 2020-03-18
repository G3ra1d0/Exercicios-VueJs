<template>
	<div id="app">
		<h1>Tarefas</h1>
		<progresso :procentagem="procentagem"/>
		<novaTarefa @listaAdd="listaAdd" />
		<conjTarefas @deleteTarefa="excluir" :lista="lista" />
	</div>
</template>

<script>
import progresso from './componente/progresso.vue'
import conjTarefas from "./componente/conjTarefa.vue"
import novaTarefa from "./componente/novaTarefa.vue"

export default {
	components: {conjTarefas, novaTarefa , progresso },
	data(){
		return {
			lista: []
		}
	},
	methods: {
		listaAdd($event) {
			const jatemNome = t => t.nome == $event.nome
			const filtro = this.lista.filter(jatemNome).length == 0

			if(filtro){
				this.lista.push({
					nome: $event.nome,
					feito: false
				})
			}
		},
		excluir(index){
			this.lista.splice(index , 1)
		}
	},
	computed: {
		procentagem(){
			const total = this.lista.length
			const concluido = this.lista.filter(t => t.feito).length
			return Math.round(concluido / total * 100 ) || 0
		}
	},
	watch: {
		lista: {
			deep: true,
			handler(){
				localStorage.setItem('lista' , JSON.stringify(this.lista))
			}
		}
	},
	created() {
		const json = localStorage.getItem('lista')
		this.lista = JSON.parse(json) || []
	}

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
