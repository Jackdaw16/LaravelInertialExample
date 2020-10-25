<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-white-grey tracking-wider">
                Inicio
            </h2>
        </template>
        <div class="py-8 sm:py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <cms-card></cms-card>
                    <cms-card></cms-card>
                    <cms-card></cms-card>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from './../Layouts/AppLayout'
    import Welcome from './../Jetstream/Welcome'
    import Card from "../ComasyComponents/Card";
    import CmsCard from "../ComasyComponents/Card";

    export default {
        components: {
            CmsCard,
            AppLayout,
            Welcome,
        },
    }
</script>
