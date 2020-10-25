<template>
    <div class="mt-6 flex flex-wrap">

        <!--En el caso de no tener ningun enlace-->
        <template v-for="(link, key) in links">
            <div v-if="!link.url" :key="key" class="mr-1 mb-1 px-4 py-3 text-sm rounded text-white">
                {{link.label}}
            </div>

            <inertia-link v-else :key="key" class="mr-1 mb-1 px-4 py-3 text-sm rounded shadow-2xl bg-black-700 hover:bg-black-600 text-white"
                          :class="{ 'bg-black-600 ': link.active }" :href="link.url">
                {{link.label}}

            </inertia-link>
        </template>
    </div>

</template>

<script>
    export default {
        name: "Pagination",
        props: {
            links: Array
        }
    }

</script>
