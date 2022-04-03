<script setup>  
    defineProps({ 
        title: String,
    })
</script>

<template>
    <div class="collection-item">
        <h3 class="collection-title"> {{ title }}</h3>
    </div>
</template>

export default {
    data() {
        return {
            count: 0
        }
    }
}

<style lang="scss" scoped>
@import "/src/scss/globals.scss";
@import "/src/scss/colors.scss";
@import "/src/scss/fonts.scss";

div.collection-item {
    display: inline-block;
    height: 20vw;
    width: 100%;
    min-height: 400px;
    min-width: 700px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 8px;
    margin: 15px;
    padding: 0;
    font-family: 'Quicksand';

    &:nth-child(even) {
        background: url('https://images.unsplash.com/photo-1643999440226-7290747ef45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1038&q=80');
        background-size: cover;
        background-position: center;
    }
    &:nth-child(odd) {
        background: url('https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80');
        background-size: cover;
        background-position: center;
    }

    &:hover {
        transform: scale(1.05);
        transition: all .2s ease-in-out;
        filter: grayscale(1);
        .collection-title {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    .collection-title {
        width: 100%;
        color: #fff;
        text-align: center;
        font-family: $primary;
        transform: translateY(-100%);
        transition: all .2s ease-in-out;
        opacity: 0;
    }

    @media screen and (max-width: $tablet) { 
        background: brown;
        height: 100%;
        width: 100%;
        min-width: auto;
        margin: 10px;
        padding: 0;
    }

}

</style>
