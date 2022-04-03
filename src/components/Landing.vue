<template>
    <section id="landing">
        <div class="clouds clouds-left">
            <img src="/src/assets/clouds-left.svg" alt="Clouds">
        </div>

        <div class="hero-text flex">
            <div class="left-section">
                <h2>Je m'appelle Alexis TAN</h2>
                <p>Un développeur web & un étudiant en <span class="is-underline">alternance</span> </p>
                <p>qui aime créer des expériences web soignées et agréables</p>
                <div class="cta-container">
                    <a href="#">Prêt à travailler ensemble ?</a>
                    <a href="#">Consulter mon CV</a>
                </div>
            </div>
            <div class="right-section moon is-flex"></div>
        </div> 

        <div class="clouds clouds-right">
            <img src="/src/assets/clouds-right.svg" alt="Clouds">
        </div>
        <!-- <div class="waves"></div> -->
    </section>
</template>

<style lang="scss" scoped>
@import "/src/scss/globals.scss";
@import "/src/scss/colors.scss";
@import "/src/scss/fonts.scss";

section#landing {
    position: relative;
    height: 95vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(180deg, #B19EFF 0%, #FFBFE0 100%);
    &::after {
        content: "";
        position: absolute;
        bottom: -25px;
        min-height: 150px;
        width: 100%;
        background-image: url('/src/assets/project-waves.svg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }
    .clouds {
        position: absolute;
        top: 0;
        width: 100%;
        &-left { text-align: left; }
        &-right { text-align: right; }
        img { width: 33vw; }
    }
    .hero-text {
        top: -100px;
        margin: 0 150px;
        color: #504980;
        z-index: 1;
        @media screen and (max-width: $tablet) { flex-direction: column; }
        .left-section {
            position: absolute;
            justify-content: flex-start;
            text-align: left;
            z-index: 1;
            @media screen and (max-width: $tablet) { 
                top: 25%;
                margin: 50px 100px;
                text-align: center;
            }
            @media screen and (max-width: $mobile) {
                margin: 0 100px;
                text-align: center;
            }
        
            h2 {
                margin-bottom: 15px;
                &::before {
                    content: 'Bonjour ! 👋 こんにちは。';
                    display: block;
                    font-size: clamp(1.5rem, 15vw, 2vw);
                    font-weight: bold;
                }
            }

            p { 
                font-weight: bold; 
                line-height: 1.7;
                margin: 0;
                + p { margin-bottom: 15px;}
            }

            .cta-container {
                display: flex;
                flex-wrap: wrap;
                @media screen and (max-width: $tablet) {
                    justify-content: center;
                    align-content: center;
                }
                a {
                    font-size: clamp(1rem, 9vw, .8vw);
                    background: #504980;
                    margin: 25px 50px 0 0;
                    color: #fff;
                    padding: 20px;
                    min-width: 250px;
                    font-weight: bold;
                    text-align: center;
                    border-radius: 5px;
                    transition: all .2s ease-in-out;
                    @media screen and (max-width: $tablet) { margin: 10px auto; }
                    &::before {
                        position: absolute;
                        content: '>';
                        transform: translateX(-500%);
                        opacity: 0;
                        transition: all .2s ease-in-out;
                    }
                    &:hover::before {
                        transform: translateX(-200%);
                        opacity: 1;
                    }
                }
            }
        }

        .right-section {
            margin-left: 100px;
            background: #FFE7E7;
            border-radius: 100%;
            &.moon {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50vw;
                width: 50vw;
                position: absolute;
                bottom: -25vw;
                transition: all .2s ease-in-out;
                @media screen and (max-width: 1200px) {
                    bottom: -25%;
                    width: 600px;
                    height: 600px;
                    margin: 0;
                    position: absolute;
                    touch-action: auto;
                }
                @media screen and (max-width: 768px) {
                    width: 300px;
                    height: 300px;
                    position: absolute;
                    bottom: 0%;
                }
                img { width: 125px; }
            }

        }
    }
    .waves {
        position: absolute;
        bottom: -5px;
        height: 100px;
        width: 100%;
        background-image: url('/src/assets/project-waves.svg');
        background-size: cover;
        z-index: 1;
    }

}

</style>
