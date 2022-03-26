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
    &:hover {
        background: rgba(255, 255, 255, .7);
        border-bottom: 10px solid $dark-blue;
    }
    @media screen and (max-width: $mobile) { 
        background: rgba(255, 255, 255, .7); 
        border-bottom: 10px solid $dark-blue;
    }
    nav { 
        position: relative;
        li { 
            display: flex;
            margin: 0 25px;
            text-align: center;
            a {
                font-family: $secondary;
                font-size: clamp(1vw, 9vw, 1.7vw);
                color: $dark-blue;
                padding: 10px 15px;
                border-radius: 8px;
                transition: all .2s ease-in-out;
                &:hover { 
                    background: #373780; 
                    color: #eee; 
                }
                @media screen and (max-width: $mobile) {
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
    
    .waves {
        position: absolute;
        bottom: 0;
    }
}

</style>
