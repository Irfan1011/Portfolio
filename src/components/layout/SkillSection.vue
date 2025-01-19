<template>
    <div id="skills" class="skill-container">
        <h2 class="skill-title" v-scrollanimation>{{tittle}}</h2>
        <p class="skill-desc" v-scrollanimation>Some skills i had learn</p>
        <ul class="skill__list-items" v-scrollanimation>
            <li class="skill__list-item" data-tooltip="HTML"><i class="fa-brands fa-html5"></i></li>
            <li class="skill__list-item" data-tooltip="CSS"><i class="fa-brands fa-css3-alt"></i></li>
            <li class="skill__list-item" data-tooltip="Javascript"><i class="fa-brands fa-js"></i></li>
            <li class="skill__list-item" data-tooltip="NodeJs"><i class="fa-brands fa-node-js"></i></li>
            <li class="skill__list-item" data-tooltip="VueJs"><i class="fa-brands fa-vuejs"></i></li>
        </ul>
        <ul class="skill__list-items" v-scrollanimation>
            <li class="skill__list-item" data-tooltip="SQL/NoSQL"><i class="fa-solid fa-database"></i></li>
            <li class="skill__list-item" data-tooltip="Bootstrap"><i class="fa-brands fa-bootstrap"></i></li>
            <li class="skill__list-item" data-tooltip="PHP"><i class="fa-brands fa-php"></i></li>
            <li class="skill__list-item" data-tooltip="Laravel"><i class="fa-brands fa-laravel"></i></li>
        </ul>
        <p class="skill-desc" v-scrollanimation>Also i have join course to learn new skills on Udemy</p>
        <ul class="skill__list-items" v-scrollanimation>
            <li class="skill__list-item" data-tooltip="ReactJs"><i class="fa-brands fa-react"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tittle: 'Skills'
        }
    }
}
</script>

<style scoped>
.skill-container {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.skill-container .skill-desc {
    margin: .5rem auto;
    width: 85%;
    transition-delay: .2s;
}

.skill-container .skill__list-items {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: .2rem 0;
    transition-delay: .35s;
}

.skill__list-item {
    --scale: 0;
    --tooltip-color: #333;
    --arrow-size: .3rem;
    
    list-style: none;
    background: linear-gradient(130deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    width: 4rem;
    height: 3.5rem;
    margin: .2rem;
    border-radius: 10rem;
    position: relative;
}

.skill__list-item i {
    font-size: 2rem;
    line-height: 3.5rem;
}

.skill__list-item::before,
.skill__list-item::after {
    position: absolute;
    top: -.3rem;
    left: 50%;
    transform: translateX(-50%) translateY(var(--translate-y,0)) scale(var(--scale));
    transform-origin: bottom center;
    transition: transform .2s;
}

.skill__list-item::before {
    --translate-y: calc(-100% - var(--arrow-size));

    content: attr(data-tooltip);
    font-size: .7rem;
    font-weight: bold;
    padding: .5rem;
    width: 100%;
    border-radius: 1rem;
    color: white;
    background: var(--tooltip-color);
}

.skill__list-item:hover::before,
.skill__list-item:hover::after {
    --scale: 1;
}

.skill__list-item:hover::after {
    --translate-y: calc(-1 * var(--arrow-size));

    content: '';
    border: var(--arrow-size) solid transparent;
    border-top-color: var(--tooltip-color);
    transform-origin: top center;
}

.before-enter {
    opacity: 0;
    transform: scale(.9);
    transition: all .7s .2s ease-in-out;
}

.enter {
    opacity: 1;
    transform: scale(1);
}

.fa-html5{
    color: #e14f27;
}

.fa-css3-alt {
    color: #264de4;
}

.fa-js {
    color: #f7df1d;
}

.fa-bootstrap {
    color: #7e12f9;
}

.fa-vuejs {
    color: #41b783;
}

.fa-database {
    color: #211f1f;
}

.fa-laravel {
    color: #ff2d20;
}

.fa-php {
    color: #767bb3;
}

.fa-react {
    color: #62d5fd;
}

.fa-node-js {
    color: #549d42;
}

@media (min-width: 40rem) {
    .skill-desc {
        width: 50%;
    }
}
</style>