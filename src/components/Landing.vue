<script setup>  
    defineProps({ msg: String })
</script>

<template>
    <section id="landing">
        <div class="clouds clouds-left">
            <img src="/src/assets/clouds-left.svg" alt="Clouds">
        </div>
        <div class="clouds clouds-right">
            <img src="/src/assets/clouds-right.svg" alt="Clouds">
        </div>
    </section>
</template>




<style lang="scss" scoped>

#landing {
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, #B19EFF 0%, #FFBFE0 100%);
}
.clouds {
    position: absolute;
    &-left {
        left: 0;
        right: auto;
    }
    &-right {
        left: auto;
        right: 0;
    }
}

</style>
