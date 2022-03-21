<script setup>  
    defineProps({ msg: String })
</script>

<template>
    <section id="projects">
        <div class="waves"></div>
    </section>
</template>




<style lang="scss" scoped>

section#projects {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    overflow: hidden;
    background: #8a81cc;
    font-family: 'Quicksand';

    .waves {
        position: absolute;
        bottom: -150px;
        transform: rotate(180deg);
        min-height: 150px;
        width: 100%;
        background-image: url('/src/assets/project-waves.svg');
        background-repeat: no-repeat;
        z-index: 10;
    }
}


</style>
