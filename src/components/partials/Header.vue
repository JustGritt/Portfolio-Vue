<script setup>  
    defineProps({ msg: String })
</script>

<template>
<header>
    <nav>
        <ul>
            <li><a href="#">Mes projets</a></li>
            <li><a href="#">Mon parcours</a></li>
            <li><a href="#">Me contacter</a></li>
        </ul>
    </nav>
</header>
</template>

<style scoped>

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-family: 'Concert One', sans-serif;
    background: rgba(255, 255, 255, .7);
    border-bottom: 10px solid #373780;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}

a {
    color: #373780;
    font-size: clamp(18px, 9vw, 24px);
    margin: 0 50px;
    text-decoration: none;
    position: relative;
    padding: 10px 15px;
    border-radius: 8px;
    transition: all .2s ease-in-out;
}

a:hover {
    background: #373780;
    color: #fff;
}

</style>
