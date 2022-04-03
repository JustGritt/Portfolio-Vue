<script setup>  
    defineProps({ msg: String })
</script>

<template>
    <section id="projects">
        <div class="waves"></div>
        <h3 class="title">Quelques projets</h3>
        <div class="collection">
            <CollectionItem 
                v-for="project in projects" 
                :key="project.id" 
                :title="project.title"
                :project="project" 
            />
        </div>
    </section>
</template>

<script>
import CollectionItem from './partials/CollectionItem.vue'

export default {
    components: {
        CollectionItem
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' },
                { id: 4, title: 'Why Vue is so fun' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "/src/scss/globals.scss";
@import "/src/scss/colors.scss";
@import "/src/scss/fonts.scss";

section#projects {
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    overflow: hidden;
    background: #8a81cc;
    border-bottom: 5px solid #8a81cc;
    font-family: 'Quicksand';
    
    h3 {
        position: absolute;
        top: 0;
        padding-top: 75px;
        width: 100%;
        color: #fff;
        margin-bottom: 50px;
        text-align: center;
        font-family: $secondary;
    }
    .collection {

        display: flex;
        justify-content: space-around;
        align-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: 8px;
        margin: 0 auto;
        margin-top: 175px;
        padding: 0;
        width: 75%;
        @media screen and (max-width: $tablet) { 
            width: 90%;
        }
    }
    // .waves {
    //     position: absolute;
    //     bottom: -150px;
    //     transform: rotate(180deg);
    //     min-height: 150px;
    //     width: 100%;
    //     background-image: url('/src/assets/project-waves.svg');
    //     background-repeat: no-repeat;
    //     z-index: 10;
    // }


}


</style>
