<template>
    <div class="bg-black-800 rounded-lg text-white w-auto m-2 p-2 shadow-2xl">
        <h1 class="p-2 font-semibold text-lg tracking-wider">Foto personal</h1>
        <p class="p-2 font-light text-sm">Cambia las foto personal que aparece en la sección "Sobre mí"</p>
        <div class="flex flex-row-reverse">
            <inertia-link :href="route('dashboard')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="block h-6 w-auto pr-2">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </inertia-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "cms-card"
    }
</script>
