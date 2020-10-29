<template>
    <div>
        <button type="submit" :class="classes" v-if="as == 'button'">
            <slot></slot>
        </button>

        <inertia-link :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" v-else>
            <slot></slot>
        </inertia-link>
    </div>
</template>

<script>
    export default {
        name: "comasy-dropdown-link",

        props: ['href', 'as'],

        computed : {
            classes() {
                return this.active
                    ? 'inline-flex items-center py-3 border-l-4 border-comasy-pink-500 text-sm md:text-base font-medium leading-5 text-white focus:outline-none focus:border-white transition duration-150 ease-in-out'
                    : 'inline-flex items-center py-3 border-l-4 border-transparent text-sm md:text-base font-medium leading-5 text-white hover:text-white hover:border-yellow-300 focus:outline-none focus:text-white focus:border-yellow-300 transition duration-300 ease-in-out'
            }
        }


    }
</script>

