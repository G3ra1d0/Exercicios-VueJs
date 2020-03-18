<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="objt.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="objt.pswd" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input type="number" v-model.number="objt.idade" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea name cols="30" rows="5" v-model="mensagem"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4">
            <input type="checkbox" 
				   value="reproduzivel" 
				   v-model="caracteristica"/> Reproduzível
          </span>
          <span>
            <input type="checkbox" 
				   value="intermitente"
				   v-model="caracteristica" /> Intermitente
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4">
            <input type="radio" 
					v-model="produto" 
					value="web"/> Web
          </span>
          <span class="mr-4">
            <input type="radio"
					v-model="produto"
					value="mobile"/> Mobile
          </span>
          <span>
            <input type="radio" 
					v-model="produto"
					value="outro"/> Outro
          </span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option v-for="prioridade in prioridades" 
					:key="prioridade.codigo">{{prioridade.nome}}</option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="estado"/>
        </Rotulo>
        <hr />
        <button @click.prevent="enviar">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ objt.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ objt.pswd }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ objt.idade }}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre;">{{ mensagem }}</span>
        </Rotulo>
        <Rotulo nome="Marque as Opções">
          <span>
			  <ul>
				  <li v-for="c in caracteristica" :key="c"> {{ c }} </li>
			  </ul>
		  </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{produto}}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span> {{ prioridade }}</span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ estado }} </span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  data() {
    return {
      mensagem: "",
	  caracteristica: [],
	  produto: 'web',
	  prioridades: [
		  {codigo: 1 , nome: 'Baixa'},
		  {codigo: 2 , nome: 'Media'},
		  {codigo: 3 , nome: 'Alta'}
	  ],
	  prioridade: 'Media',
    objt: {
        email: "",
        pswd: "",
        idade: ""
      },
    estado: true,
    enviado: false
    };
  },
  methods: {
    enviar(){
      this.enviado = true;
    }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
