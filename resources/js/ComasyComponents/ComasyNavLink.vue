<template>
    <inertia-link :href="href" :class="classes">
        <slot></slot>
    </inertia-link>
</template>

<script>
    export default {
        name: "comasy-nav-link",

        props: ['href', 'active'],

        computed: {
            classes() {
                return this.active
                    ? 'inline-flex items-center py-3 border-l-4 border-comasy-pink-500 text-sm md:text-base font-medium leading-5 text-white focus:outline-none focus:border-white transition duration-150 ease-in-out'
                    : 'inline-flex items-center py-3 border-l-4 border-transparent text-sm md:text-base font-medium leading-5 text-white hover:text-white hover:border-yellow-300 focus:outline-none focus:text-white focus:border-yellow-300 transition duration-300 ease-in-out'
            }
        }
    }
</script>

