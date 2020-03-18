<template>
    <div class="conjTarefas">
        <template v-if="lista.length">
            <Tarefa :tarefa="item" v-for="(item, index) in lista"
                    :key="item.nome" @deleteTarefa="$emit('deleteTarefa', index)" > 
            </Tarefa>
        </template>
        <p v-else class="nenhumaLista">Sua vida Esta em dia :)</p>
    </div>
</template>

<script>

import Tarefa from './Tarefa'

export default {
    props: { 
        lista: { type: Array, required: true}
    },
    components: {
        Tarefa
    }
}
</script>

<style>
  .conjTarefas {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .nenhumaLista {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
