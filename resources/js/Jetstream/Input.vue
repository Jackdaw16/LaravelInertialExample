<template>
    <input class="form-input rounded-md shadow-sm bg-black-900 text-white border border-black-600 focus:border focus:border-indigo-600" :value="value" @input="$emit('input', $event.target.value)" ref="input">
</template>

<script>
    export default {
        props: ['value'],

        methods: {
            focus() {
                this.$refs.input.focus()
            }
        }
    }
</script>

