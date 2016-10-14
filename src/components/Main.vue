<template>
    <div id="app">
        <h1 class="test">This is our main app</h1>
        <transition name="ease" mode="out-in">
            <component :is="page"></component>
        </transition>

        <button @click="first">First page</button>
        <button @click="second">Second page</button>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                page: false
            }
        },
        components: {
            first (resolve) {
                require(['./First'], resolve);
            },
            second (resolve) {
                require(['./Second'], resolve);
            }
        },
        methods: {
            first () {
                this.page = 'first';
            },
            second () {
                this.page = 'second';
            }
        }
    }
</script>

<style lang="sass">
    h2 {
        &.ease-enter-active, &.ease-leave-active {
            transition: opacity 1s ease;
        }

        &.ease-enter, &.ease-leave-active {
            opacity: 0;
        }
    }
</style>