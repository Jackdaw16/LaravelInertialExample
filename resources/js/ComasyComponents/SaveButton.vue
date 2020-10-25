<template>
    <button :type="type"
            :class="classed">
        <slot></slot>
    </button>
</template>

<script>
    import Swal from "sweetalert2";

    export default {
        name: "cms-save-button",
        props: {
            type: {
                type: String,
                default: 'submit',
            },

            result: {
                type: Boolean,
                default: false,
            },

            active: {
                type: Boolean,
                default: true,
            }

        },

        computed: {
            classed() {
                return this.active
                    ? "inline-flex items-center px-4 py-2 bg-green-500 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-400"
                    : "inline-flex items-center px-4 py-2 bg-green-300 rounded-md font-semibold text-xs text-white uppercase tracking-widest cursor-not-allowed"
            }
        },

        methods: {
            resultAlert() {
                Swal.fire({
                    position: 'bottom-end',
                    backdrop: false,
                    background: '#252525',
                    toast: true,
                    icon: this.result ?  'success' : 'error',
                    title: this.result ? 'Guardado' : 'Error',
                    timer: 1800,
                    customClass: {
                        title: 'text-white',
                        popup: 'shadow-none rounded-none'
                    },
                    showConfirmButton: false,
                    showClass: {
                        popup: 'animated fadeInRight',
                    },
                    hideClass: {
                        popup: 'animated fadeOutRight',
                    }
                })
            },
        }
    }
</script>

