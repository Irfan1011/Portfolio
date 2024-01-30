<template>
    <div id="projects" class="project-container">
        <h2 v-scrollanimation>Projects</h2>
        <div class="projects" v-scrollanimation>
            <ul v-for="row in displayedProjects" :key="row">
                <li v-for="project in row" :key="project" :class="{animated: isAnimated}">
                    <a :href="project.link" target="blank">
                        <div class="project-overlay">
                            <div class="image-container">
                                <img :src="project.img" alt="Project Image" class="project-image">
                            </div>
                            <div class="project-overlay__content">
                                <h2>{{project.title}}</h2>
                                <p>{{ project.desc }}</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <base-button class="button" @click="showHide" v-scrollanimation>Show {{isOpen ? 'Less' : 'More'}}</base-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            isAnimated: true,
            projects: [
                {
                    title: 'Find A Coach Project Course',
                    img: require("../../assets/VueJsFindACoach.png"),
                    link: "https://vuemaincourseproject.web.app/coaches",
                    desc: "Web programming project developed independently use VueJs and Firebase through the course. Consists of various features such as authentication, authorization, coach filter, and more."
                },
                {
                    title: 'Atma Jogja Rental Project Course',
                    img: require("../../assets/AJR.png"),
                    link: "https://www.portfolioirfan.com/",
                    desc: "Web programming project developed independently use Laravel and Bootstrap. Consists of various features such as authentication, authorization, print PDF, car rental, and more."
                },
                {
                    title: 'Online Reader Project Course',
                    img: require("../../assets/UTS PAW.png"),
                    link: "https://www.youtube.com/watch?v=S5w3Cyoj7Cg",
                    desc: "Web programming project developed in group with Agus Putra Hendrawan and Antonius Romi Andika Pradipta use PHP and CSS."
                },
                {
                    title: 'Metaverse Gamelan Demung Virtual Reality',
                    img: require("../../assets/Gamelan Demung VR.png"),
                    desc: "6 month internship at PT Arutala Digital Inovasi. Worked as a team. My position as 3D Generalist and Unity Engineer."
                },
                {
                    title: 'First Portfolio',
                    img: require("../../assets/First Portfolio.png"),
                    link: "https://irfan1011.github.io/FirstPortfolio",
                    desc: "Web Portfolio created used Bootstrap Framework in September 2023. This portfolio is used only to show how I have improved my skills as Frontend Developer."
                },
            ]
        }
    },
    computed: {
        displayedProjects() {
            const projectsToShow = this.isOpen ? this.projects : this.projects.slice(0, 3);
            const rows = [];
            for (let i = 0; i < projectsToShow.length; i += 3) {
                rows.push(projectsToShow.slice(i, i + 3));
            }
            return rows;
        },
    },
    methods: {
        showHide() {
            this.isOpen =! this.isOpen;
        }
    }
}
</script>

<style scoped>
.project-container {
    color: white;
    text-align: center;
    height: max-content;
}

.projects ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    transition-delay: .5s;
}

.projects li {
    list-style: none;
    cursor: pointer;
}

.project-container .project-overlay {
    position: relative;
    overflow: hidden;
}

.project-overlay .image-container {
    overflow: hidden;
    width: 50vw;
    height: 40vh;
    border-radius: 10%;
    margin: 0.5rem;
}

.project-overlay .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.project-container .project-overlay__content {
    position: absolute;
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.project-overlay__content h2,
.project-overlay__content p {
    margin: .5rem 1rem;
}

.project-container .project-overlay:hover img {
    transform: scale(1.1);
}

.project-container .project-overlay:hover .project-overlay__content {
    opacity: 1;
}

.project-container .button {
    transition-delay: .7s;
}

.animated {
    animation: slide-in .3s ease-in;
}

.before-enter {
    opacity: 0;
    transition: opacity .5s .3s ease-in-out;
}

.enter {
    opacity: 1;
}

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateY(-10%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (min-width: 40rem) {
    .project-container .image-container {
        width: 15vw;
    }

    .project-container .projects ul {
        flex-direction: row;
        justify-content: center;
    }
}
</style>