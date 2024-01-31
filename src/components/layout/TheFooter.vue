<template>
    <div class="footer">
        <ul class="icons">
            <li class="icon"><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=irfan10112001@gmail.com" target="blank"><i class="far fa-envelope"></i></a></li>
            <li class="icon"><a href="https://www.linkedin.com/in/irfan-irfan-6a664b281" target="blank"><i class="fab fa-linkedin"></i></a></li>
            <li class="icon"><a href="https://wa.me/6287898131821" target="blank"><i class="fab fa-whatsapp"></i></a></li>
            <li class="icon"><a href="https://instagram.com/irfan_101101" target="blank"><i class="fab fa-instagram"></i></a></li>
        </ul>
        <p class="text">Design & build by Irfan</p>
    </div>
</template>

<style scoped>
.footer {
    position: relative;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.icons {
    color: white;
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.icon {
    padding: 0 1rem;
}

.icon i:hover,
.icon i:active {
    transform: translateY(-15%);
    transition: transform .2s;
}

.icon i {
    color: white;
    font-size: 1.5rem;
}

.text {
    color: white;
    text-align: center;
}
</style>