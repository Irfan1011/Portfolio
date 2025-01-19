<template>
    <div id="contact" class="contact-container">
        <h2 v-scrollanimation>Get in touch</h2>
        <p v-scrollanimation>I'm eager to learn more about web development. <br>Currently looking for an opportunity to become web developer.</p>
        <base-button class="button" v-scrollanimation><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=irfan10112001@gmail.com" target="blank">Say Hello</a></base-button>
    </div>
</template>

<style scoped>
.contact-container {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
}

.contact-container p {
    width: 80%;
    text-align: center;
}

.contact-container a {
    text-decoration: none;
    color: inherit
}

.contact-container .button {
    transition-delay: 1s;
}

.before-enter {
    opacity: 0;
    transition: opacity .7s .8s ease-in-out;
}

.enter {
    opacity: 1;
}
</style>