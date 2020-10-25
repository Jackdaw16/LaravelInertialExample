<template>
    <button :type="type"
            class="inline-flex items-center px-4 py-2 bg-green-500 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-400">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'submit',
            },
        }
    }
</script>
