<template>
    <div class="novaTarefa">
        <input v-model="nome" @keydown.enter="add" class="form-element"
                type="text" placeholder="Nova tarefa?">
        <button class="form-element" @click="add" >+</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nome: ''
        }
    },
    methods: {
        add(){
            this.$emit('listaAdd' , {nome: this.nome})
            this.nome = ''
        }
    }
}
</script>

<style scope>
    .novaTarefa {
        margin: 10px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;
    }

    input.form-element {
        width: 300px;
        background: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196f3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
    }

</style>
