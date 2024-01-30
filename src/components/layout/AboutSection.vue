<template>
    <div id="about" class="about-section">
        <img src="../../assets/Profile.jpg" alt="Profile" v-scrollanimation>
        <div class="desc" v-scrollanimation>
            <h2>{{name}} - <span :class="{'typing': isTyping}">{{job}}</span></h2>
            <p>Graduated as bachelor's degree in Informatics.
                Have 1 year experience in developing website application.
                I am able to create website application from scratches to ready-to-use application.
                Currently I am only taking training courses to practice.
                I am interested in any opportunity to work as a web developer as well to improve my skills and learn new things.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Irfan',
            jobs: ['Web Developer', 'Fullstack Developer', 'Frontend Developer', 'Backend Developer'],
            currentJobIndex: 0,
            isTyping: false,
        };
    },
    computed: {
        job() {
            return this.jobs[this.currentJobIndex];
        }
    },
    mounted() {
        this.typing();
    },
    methods: {
        typing() {
            setTimeout(() => {
                this.isTyping = true;
                setTimeout(() => {
                    this.isTyping = false;
                    this.currentJobIndex = (this.currentJobIndex + 1) % this.jobs.length;
                    this.typing();
                }, 2000);
            }, 2000);
        }
    }
}
</script>

<style scoped>
.about-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.about-section img{
    width: 35%;
    border-radius: 20%;
}

.desc {
    color: white;
    width: 90%;
    text-align: justify;
    overflow: hidden;
    transition-delay: .3s !important;
}

.desc h2 {
    text-align: center;
}

.desc span {
    position: relative;
    overflow: hidden;
}

.desc span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: black;
    border-left: .2rem solid white;
    animation: typing 4s steps(18)  infinite;
}

.before-enter {
    opacity: 0;
    transform: scale(.9);
    transition: all .5s ease-in;
}

.enter {
    opacity: 1;
    transform: scale(1);
}

@keyframes typing {
    40%, 60% {
        left: 100%;
    }

    100% {
        left: 0%;
    }
}

@media (min-width: 40rem) {
    .about-section {
        flex-direction: row;
    }

    .about-section img{
        width: 15%;
    }

    .desc {
        margin-left: 1rem;
        width: 50%;
    }

    .desc h2 {
        text-align: justify;
    }
}
</style>