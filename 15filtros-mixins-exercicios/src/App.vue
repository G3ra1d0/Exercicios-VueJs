<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ cpf | cpf }}</p>
    <p>{{ cpf | cpf | inverter }}</p>
    <!--- Inveter esta de forma global -->
    <input type="text" :value="cpf | cpf" />
    <hr />
    <Frutas />
    <hr />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import Frutas from "@/frutas.vue";
import frutasMixin from './frutasmixins'

export default {
  mixins: [frutasMixin],
  components: {
    Frutas
  },
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },
  data() {
    return {
      cpf: "14699501621",
      
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
input {
  font-size: 2.5rem;
}
</style>
