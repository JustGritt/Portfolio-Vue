<script setup>  
    defineProps({ msg: String })
</script>

<template>
<header>
    <nav>
        <ul class="flex">
            <li><a href="#">Mes projets</a></li>
            <li><a href="#">Mon parcours</a></li>
            <li><a href="#">Me contacter</a></li>
        </ul>
        <div class="dark-mode">
            <img src="/src/assets/moon.svg" alt="moon">
        </div>
    </nav>
</header>
</template>



<style lang="scss" scoped>
@import "/src/scss/globals.scss";
@import "/src/scss/colors.scss";
@import "/src/scss/fonts.scss";

header {
    position: fixed;
    width: 100%;
    z-index: 10;
    transition: all .2s ease-in-out;
    // border-bottom: 5px solid $dark-blue;
    // background: rgba(255, 255, 255, 1);
    @media screen and (max-width: $mobile) { 
        background: rgba(255, 255, 255, 1);
        border-bottom: 5px solid $dark-blue;
    }
    nav { 
        position: relative;
        ul {
            background: white;
            width: fit-content;
            margin: 15px auto;
            border-radius: 100px;
        }
        li { 
            display: flex;
            margin: 0 25px;
            text-align: center;
            a {
                font-family: $secondary;
                font-size: clamp(1vw, 9vw, 1.5rem);
                color: $dark-blue;
                padding: 10px 15px;
                transition: all .2s ease-in-out;
                &:hover { 
                    color: #3d3d8b;
                }
                @media screen and (max-width: $tablet) {
                    font-size: clamp(12px, 9vw, 18px);
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    
                    &:hover { 
                        color: #373780; 
                        background: transparent;
                    }
                }
            }
        }
        
        .dark-mode {
            position: absolute;
            top:  -5px;
            right: 25px;
            cursor: pointer;
            border-radius: 8px;
            padding: 5px;
            @media screen and (max-width: $tablet) { 
                display: none;
            }
        }
    }
    
}

</style>
