<template>
  <the-header></the-header>
  <about-section></about-section>
  <skill-section></skill-section>
  <experience-section></experience-section>
  <project-section></project-section>
  <contact-section></contact-section>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import AboutSection from './components/layout/AboutSection.vue';
import SkillSection from './components/layout/SkillSection.vue';
import ExperienceSection from './components/layout/ExperienceSection.vue';
import ProjectSection from './components/layout/ProjectSection.vue';
import ContactSection from './components/layout/ContactSection.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    AboutSection,
    SkillSection,
    ExperienceSection,
    ProjectSection,
    ContactSection
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: black;
  margin: 0;
}
</style>
