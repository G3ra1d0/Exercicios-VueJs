<template>
    <div @click="tarefa.feito = !tarefa.feito" :class="tipoClass" class="Tarefa">
        <span @click.stop="$emit('deleteTarefa', tarefa )">x</span>
        <p> {{ tarefa.nome }} </p>
    </div>
</template>

<script>
export default {
    props: {
        tarefa: { type: Object , required: true }
    },
    computed: {
        tipoClass() {
            return {
                feito: this.tarefa.feito,
                falta: !this.tarefa.feito
            }
        }
    }
}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
    .Tarefa {
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 300;
        margin: 10px;
    }

    .falta {
        border-left: 12px solid #B73229;
        background-color: #F44336;
        padding: 10px;
        border-radius: 8px;

    } 

    .feito {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
        padding: 10px;
        border-radius: 8px;
    }

    .falta span {
        background-color: #B73229;
    }

    .feito span {
        background-color: #0A8F08; 
         text-decoration: none;
    }

    span {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>
