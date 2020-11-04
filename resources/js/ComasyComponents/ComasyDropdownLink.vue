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
                    ? 'inline-flex w-auto items-center py-4 bg-accent bg-opacity-25 text-sm md:text-base font-medium leading-5 text-white-100'
                    : 'inline-flex w-full items-center py-4 text-sm md:text-base font-medium leading-5 text-white hover:text-white hover:bg-accent hover:bg-opacity-25'
            }
        }


    }
</script>

