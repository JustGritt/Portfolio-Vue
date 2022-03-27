<script setup>  
    defineProps({ msg: String })
</script>

<template>
    <section id="timeline">
        <div class="waves"></div>
    </section>
</template>




<style lang="scss" scoped>
@import "/src/scss/globals.scss";
@import "/src/scss/colors.scss";
@import "/src/scss/fonts.scss";

section#timeline {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    font-family: 'Quicksand';
    background: linear-gradient(180deg, #B19EFF 0%, #FFBFE0 100%);
    h3 {
        position: absolute;
        top: 0;
        padding-top: 125px;
        width: 100%;
        color: #fff;
        margin-bottom: 50px;
        text-align: center;
        font-family: $secondary;

    }

    .waves {
        position: absolute;
        top: 0;
        transform: rotate(180deg);
        min-height: 150px;
        width: 100%;
        background-image: url('/src/assets/project-waves.svg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }

}


</style>
