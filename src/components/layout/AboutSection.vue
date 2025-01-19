<template>
    <div id="about" class="about-section">
        <img src="../../assets/Profile.jpg" alt="Profile" v-scrollanimation>
        <div class="desc" v-scrollanimation>
            <h2>{{name}} - <span :class="{'typing': isTyping}">{{job}}</span></h2>
            <p>Graduated as bachelor's degree in informatics. I have 1 year hands-on experience building and 
                deploying web application. Have an ability to design and create web application from scratch. I 
                have completed several projects related to website development. Currently I am interest to learn 
                more about web application and looking for an opportunity to become web developer.</p>
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
        },

        // async typing() {
        //     await new Promise(resolve => setTimeout(resolve, 2000));

        //     this.isTyping = true;

        //     await new Promise(resolve => setTimeout(resolve, 2000));

        //     this.isTyping = false;
        //     this.currentJobIndex = (this.currentJobIndex + 1) % this.jobs.length;
        //     this.typing();
        // }
    }
}
</script>

<style scoped>
.about-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 115vh;
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