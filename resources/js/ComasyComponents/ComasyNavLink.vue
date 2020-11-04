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
                    ? 'inline-flex items-center py-4 bg-accent bg-opacity-25 text-sm md:text-base font-medium leading-5 text-white-100'
                    : 'inline-flex items-center py-4 text-sm md:text-base font-medium leading-5 text-white hover:text-white hover:bg-accent hover:bg-opacity-25'
            }
        }
    }
</script>

