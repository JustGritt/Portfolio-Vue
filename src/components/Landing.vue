<script setup>  
    defineProps({ msg: String })
</script>

<template>
    <section id="landing">
        <div class="clouds clouds-left">
            <img src="/src/assets/clouds-left.svg" alt="Clouds">
        </div>

        <div class="hero-text">
            <div class="left-section">
                <h2>Je m'appelle Alexis TAN</h2>
                <p>Un développeur web & un étudiant en <span class="is-underline">alternance !</span></p>
                <p> qui aime créer des expériences web soignées et agréables</p>
                <div class="cta-container">
                    <a href="#">Prêt à travailler ensemble ?</a>
                    <a href="#">Consulter mon CV</a>
                </div>
            </div>
            
            <div class="right-section moon is-flex">
                <img src="/src/assets/turtle.png" alt="Mon icone" class="rotating-icon"/>
            </div>
        </div> 

        <div class="clouds clouds-right">
            <img src="/src/assets/clouds-right.svg" alt="Clouds">
        </div>
        <div class="waves"></div>
    </section>
</template>




<style lang="scss" scoped>

section#landing {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(180deg, #B19EFF 0%, #FFBFE0 100%);
    font-family: 'Quicksand';
    .clouds {
        position: absolute;
        top: 0;
        width: 100%;
        &-left { text-align: left; }
        &-right { text-align: right; }
        img {
            width: 33vw;
        }
    }
    .hero-text {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -100px;
        margin: 0 150px;
        color: #504980;
        font-family: 'Quicksand', sans-serif;
        z-index: 1;
        @media screen and (max-width: 768px) { flex-direction: column; }
        .left-section {
            justify-content: flex-start;
            text-align: left;
            @media screen and (max-width: 768px) { margin-top: 200px; }
        
            h2 {
                font-size: clamp(2rem, 5vw, 3.5rem);
                font-weight: bold;
                margin: 0;
                font-family: 'Staatliches', sans-serif;

                &::before {
                    content: 'Bonjour ! 👋 こんにちは。';
                    display: block;
                    margin: 0;
                    font-size: clamp(1rem, 5vw, 1.5rem);
                    font-weight: 700;
                }
            }

            p {
                font-size: clamp(1rem, 9vw, 24px);
                font-weight: bold;
                margin: 0;
            }

            .cta-container {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: wrap;
                a {
                    background: #504980;
                    margin: 25px 50px 0 0;
                    color: #fff;
                    padding: 20px;
                    display: block;
                    width: 250px;
                    font-size: clamp(1rem, 9vw, 18px);
                    text-decoration: none;
                    text-align: center;
                    border-radius: 5px;
                    &:nth-child(2) {
                        background: #ffe7e7;
                        color: #000;
                        font-weight: bold;
                    }
                }
            }

        }

        .right-section {
            margin-left: 100px;
            background: #FFE7E7;
            border-radius: 100%;
            &.moon {
                width: 15vw;
                height: 15vw;

                @media screen and (min-width: 768px) and (max-width: 1200px) {
                    width: 300px;
                    height: 200px;
                }

                @media screen and (max-width: 768px) {
                    margin: 15px;
                    width: 125px;
                    height: 125px;
                }
            }

            img {
                width: 125px;
                position: relative;
                top: -25px;
                animation: rotate-bounce 10s infinite;

                @media screen and (max-width: 768px) {
                    width: 75px;
                }
            }
        }
    }

    .waves {
        position: absolute;
        bottom: 0;
        height: 100px;
        width: 100%;
        background-image: url('/src/assets/project-waves.svg');
        background-size: cover;
    }

}

</style>
