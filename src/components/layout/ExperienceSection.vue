<template>
    <div id="experience" class="experience-container">
        <h2 v-scrollanimation>Experience</h2>
        <div class="experiences">
            <div class="navigation" v-scrollanimation>
                <button @click="setId(1)" :class="{ active: isActive(1) }"></button>
                <button @click="setId(2)" :class="{ active: isActive(2) }"></button>
                <button @click="setId(3)" :class="{ active: isActive(3) }"></button>
                <button @click="setId(4)" :class="{ active: isActive(4) }"></button>
                <button @click="setId(5)" :class="{ active: isActive(5) }"></button>
                <button @click="setId(6)" :class="{ active: isActive(6) }"></button>
                <button @click="setId(7)" :class="{ active: isActive(7) }"></button>
            </div>
            <div class="experience__item" v-if="getSelectedId" :class="{animated: isAnimated}" v-scrollanimation>
                <div>
                    <p class="experience__item-title">{{ getSelectedId.companyName }} - {{ getSelectedId.position[0] }}</p>
                    <p class="experience__item-date">{{ getSelectedId.startedMonth }} {{ getSelectedId.startedYear }} - {{ getSelectedId.endedMonth }} {{ getSelectedId.endedYear }}</p>
                    <ul v-for="desc in getSelectedId.desc" :key="desc">
                        <li>{{ desc }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedId: 1,
            isAnimated: false,
            experience: [
                {
                    id: 1,
                    companyName: 'Udemy Online Course',
                    position: ['Node Js The Complete Guide incl. MVC, REST API, GraphQL, Deno'],
                    startedMonth: 'December',
                    startedYear: 2024,
                    endedMonth: 'January',
                    endedYear: 2025,
                    desc: [
                        'Create MVC web application using node js and ejs',
                        'Create and testing REST API using Postman',
                        'Learn about 3rd party packages',
                        'Learn about node js including SQL, No SQL, Sessions Cookies, Error Handling, and more',
                        'Adjust code structure following 3rd party package update'
                    ]
                },
                {
                    id: 2,
                    companyName: 'Udemy Online Course',
                    position: ['CSS The Complete Guide incl. Flexbox, Grid, and Sass'],
                    startedMonth: 'October',
                    startedYear: 2024,
                    endedMonth: 'November',
                    endedYear: 2024,
                    desc: [
                        'Create responsive web design for any device',
                        'Adding some animation into website',
                        'Learn about CSS including flexbox, grid, and Sass'
                    ]
                },
                {
                    id: 3,
                    companyName: 'Udemy Online Course',
                    position: ['Vue Js The Complete Guide incl Router & Composition API'],
                    startedMonth: 'October',
                    startedYear: 2023,
                    endedMonth: 'January',
                    endedYear: 2024,
                    desc: [
                        'Relearn VueJs including Vuex, Routing, and Compotion API',
                        'Relearn CSS including Flexbox, Grid, and Sass',
                        'Successfully created main Vuejs course project and deploy on firebase as a backend',
                        'Successfully implemented Vuejs and CSS through the course to Portfolio project website'
                    ]
                },
                {
                    id: 4,
                    companyName: 'PT Arutala Digital Inovasi',
                    position: ['Immersive Engineer, 3D Generalist'],
                    startedMonth: 'July',
                    startedYear: 2022,
                    endedMonth: 'January',
                    endedYear: 2023,
                    desc: [
                        'Successfully created a virtual reality gamelan demung application using Unity',
                        'Create, update, and monitor the Product Requirement Document (PRD) for the project development process',
                        'Completing the creation of textbooks to obtain copyright',
                        'Complete up to 90% of work on assets used using Blender',
                        'Create and publish a research journal entitled "Analisis Cybersickness Pada Permainan Metaverse Gamelan Demung Virtual Reality"'
                    ]
                },
                {
                    id: 5,
                    companyName: 'Universitas Atma Jaya Yogyakarta',
                    position: ['Software Development Project Course'],
                    startedMonth: 'February',
                    startedYear: 2022,
                    endedMonth: 'June',
                    endedYear: 2022,
                    desc: [
                        'Create project management from story discussion to design system',
                        'Create UML and ERD model for project analysis and design',
                        'Create responsive website for User Experience (UX) while running on mobile',
                        'Succeeded creating Atma Jogja Rental website according to the problems using Laravel and Bootstrap'
                    ]
                },
                {
                    id: 6,
                    companyName: 'Universitas Atma Jaya Yogyakarta',
                    position: ['Web Application Development Course'],
                    startedMonth: 'September',
                    startedYear: 2021,
                    endedMonth: 'December',
                    endedYear: 2021,
                    desc: [
                        'Create and test restful APIs using Postman software',
                        'Successfully created and hosted a RESTFUL API on Heroku',
                        'Worked on 50% of the mockup as user interface for the Online Reader website assignment',
                        'Successfully created a responsive website display using Bootstrap'
                    ]
                },
                {
                    id: 7,
                    companyName: 'Universitas Atma Jaya Yogyakarta',
                    position: ['C Programming Tentor'],
                    startedMonth: 'August',
                    startedYear: 2020,
                    endedMonth: 'August',
                    endedYear: 2021,
                    desc: [
                        'Teaching the C programming language to programming study groups',
                        'Extra teaching C programming language for Programming In Contest competition',
                        'Create teaching modules and challenge questions along with the answer to be explained in the next session'
                    ]
                },
            ]
        }
    },
    computed: {
        getSelectedId() {
            return this.experience.find(({id}) => id === this.selectedId);
        }
    },
    methods: {
        setId(id) {
            this.selectedId = id;
            this.isAnimated = true;
            setTimeout(() => {
                this.isAnimated = false
            },500)
        },
        isActive(id) {
            return this.selectedId === id;
        }
    }
}
</script>

<style scoped>
.experience-container {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 50rem;
}

.experiences {
    display: flex;
    justify-content: center;
    position: relative;
    height: 28rem;
}

.navigation {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 5%;
    top: 5%;
    transition-delay: .3s !important;
}

.navigation button {
    border: .1rem solid white;
    border-radius: 1rem;
    margin: .3rem 0;
    padding: .6rem;
    background: white;
    cursor: pointer;
}

.navigation button:hover,
.navigation button:active {
    background: rgba(255, 255, 255, 0.5);
    border: .1rem solid white;
}

.navigation .active {
    background: transparent;
    border: .1rem solid white;
}

.experience__item {
    width: 80%;
    text-align: justify;
    position: relative;
    left: 5%;
    transition-delay: .5s !important;
}

.experience__item-title {
    text-align: start;
    font-weight: bold;
    font-size: 1.2rem;
    color: aqua;
}

.experience__item-date {
    color: #798777;
}

.experience__item ul {
    list-style: none;
    padding: 0;
}

.animated {
    animation: slide-in .5s ease-in;
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

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateX(-10%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (min-width: 40rem) {
    .experience-container {
        height: 40rem;
    }

    .navigation {
        left: 20%;
        top: 3%;
    }

    .experience__item {
        width: 55%;
        left: 3%;
    }
}
</style>