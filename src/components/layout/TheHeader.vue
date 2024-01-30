<template>
    <header>
        <div class="backdrop" @click="openCloseSidebar" :style="showHideBackdrop"></div>
        <nav class="nav" :class="showHideNav">
            <div class="nav-header" :style="hideSidebar">
                <button class="toggle-button" @click="openCloseSidebar">
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                </button>
                <h2 class="nav-tittle">Portfolio</h2>
            </div>
            <ul class="nav__list-items" v-if="!isSidebarOpen">
                <li><a href="#about" class="nav__list-item">About</a></li>
                <li><a href="#skills" class="nav__list-item">Skills</a></li>
                <li><a href="#experience" class="nav__list-item">Experience</a></li>
                <li><a href="#projects" class="nav__list-item">Porjects</a></li>
                <li><a href="#contact" class="nav__list-item">Contact</a></li>
                <li><base-button class="button"><a href="https://drive.google.com/file/d/1WxphflC3CGk4nuPHdwR-ZmFMzMgmOiuF/view" target="blank" class="nav__list-item">CV</a></base-button></li>
            </ul>
            <ul class="mobile-nav__list-items" v-if="isSidebarOpen">
                <li><a href="#about" class="mobile-nav__list-item">About</a></li>
                <li><a href="#skills" class="mobile-nav__list-item">Skills</a></li>
                <li><a href="#experience" class="mobile-nav__list-item">Experience</a></li>
                <li><a href="#projects" class="mobile-nav__list-item">Porjects</a></li>
                <li><a href="#contact" class="mobile-nav__list-item">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1WxphflC3CGk4nuPHdwR-ZmFMzMgmOiuF/view" target="blank" class="mobile-nav__list-item">CV</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
            isNavbarHidden: false,
            prevScrollPos: window.pageYOffset
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        showHideBackdrop() {
            return {
                display: this.isSidebarOpen ? 'block' : 'none',
            }
        },
        hideSidebar() {
            return {
                display: this.isSidebarOpen ? 'none' : 'flex',
            }
        },
        showHideNav() {
            return this.isNavbarHidden ? 'navbar-hidden' : 'navbar-show';
        }
    },
    methods: {
        openCloseSidebar() {
            this.isSidebarOpen =! this.isSidebarOpen;
        },
        handleScroll() {
            const currentScrollPos = window.pageYOffset;
            this.isNavbarHidden = currentScrollPos > this.prevScrollPos;
            this.prevScrollPos = currentScrollPos;
        },
    }
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
}

.backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
}

.nav {
    display: flex;
    justify-content: space-between;
    backdrop-filter: blur(0.3rem);
}

.navbar-hidden {
    transform: translateY(-100%);
    transition: transform 0.3s ease-out;
}

.navbar-show {
    transform: translateY(0);
    transition: transform 0.3s ease-in;
}

.nav-header {
    display: flex;
}

.toggle-button {
    width: 2.5rem;
    background: transparent;
    border: none;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0 1rem;
}

.toggle-button:focus {
    outline: none;
}

.toggle-button__bar {
    width: 100%;
    height: 0.2rem;
    background: white;
    display: block;
    margin: 0.6rem 0;
}

.nav-tittle {
    color: white;
}

.nav__list-items {
    display: none;
    margin: auto 0;
    list-style: none;
}

.nav__list-item{
    text-decoration: none;
    padding: 1rem;
    color: white;
}

.nav__list-item:hover,
.nav__list-item:active {
    color: blue;
    border-bottom: 0.1rem solid blue;
}

.button .nav__list-item:hover,
.button .nav__list-item:active {
    color: inherit;
    border: none;
}

.mobile-nav__list-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: white;
    width: 80%;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.mobile-nav__list-item {
    display: block;
    margin: 25% auto;
    text-align: center;
    color: black;
    text-decoration: none;
}

.mobile-nav__list-items li {
    list-style: none;
    font-size: 1.5rem;
}

.mobile-nav__list-item a {
    color: white;
    text-decoration: none;
}

.mobile-nav__list-items a:hover,
.mobile-nav__list-items a:active {
    color: white;
    background: black;
    padding: 0 1rem;
    border-radius: 1rem;
}

@media (min-width: 40rem) {
    .nav {
        margin: 0 3rem;
    }

    .toggle-button {
        display: none;
    }

    .nav__list-items {
        display: flex;
        align-items: center;
    }
}
</style>