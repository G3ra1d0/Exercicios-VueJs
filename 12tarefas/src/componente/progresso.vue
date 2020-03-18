<template>
    <div class="progresso">
        <div class="barra" :style=" {width: procentagem+'%'}"></div>
        <span class="procentagem"> {{ procentagem + '%'}}</span>
    </div>
</template>

<script>
export default {
    props: {
        procentagem: {type: Number, default: 0 }
    }

}
</script>

<style>
    .progresso{
        position: relative;
        width: 80%;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 8px;
        height: 50px;
        margin: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .barra {
        position: absolute;
        border-radius: 8px;
        height: 100%;
        background-color: #4caf50;
        align-self: flex-start;
    }

    .procentagem {
        z-index: 1;
        font-size: 1.5rem;
        text-align: center;
        margin-right: 50%;
    }
</style>
