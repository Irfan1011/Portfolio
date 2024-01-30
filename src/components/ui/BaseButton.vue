<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    background: transparent;
    border: .01rem solid white;
    border-radius: .5rem;
    padding: .5rem;
    color: white;
    font-size: .9rem;
    cursor: pointer;
}

button:hover,
button:active {
    background: white;
    color: black;
    font-weight: bold;
}

button:focus-visible {
    outline: none;
}
</style>