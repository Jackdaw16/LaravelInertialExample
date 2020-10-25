<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-white leading-tight">
                Listado de proyectos
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-black-800 overflow-hidden shadow-xl sm:rounded-lg my-8">
                    <div class="p-5 mb-6 flex justify-between items-center">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Estados
                            </label>

                            <div class="relative">

                                <select v-model="form.trashed" class="block appearance-none w-full bg-black-900 border border-black-600 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black-900 focus:border-indigo-600">
                                    <option value="with">Con borrados</option>
                                    <option value="only">Solo borrados</option>
                                </select>

                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>

                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Busca por nombre de proyecto
                            </label>
                            <input
                                class="appearance-none block w-full bg-black-900 placeholder-black-600 text-white border border-black-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-black-900 focus:border-indigo-600"
                                v-model="form.search"
                                type="text"
                                placeholder="Mi proyecto"
                            />
                        </div>

                        <button
                            class="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 mt-5 px-4 rounded"
                            type="button"
                            @click="reset">

                            Restablecer filtros
                        </button>

                        <inertia-link
                            class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 mt-5 px-4 rounded"
                            :href="route('projects.create')"
                        >
                            <span>Crear</span>
                            <span class="hidden md:inline">Proyecto</span>
                        </inertia-link>
                    </div>

                </div>

                <div class="overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="shadow overflow-x-auto">
                        <table class="w-full border-collapse">
                            <tr class="text-left font-bold bg-black-800 text-white">
                                <th class="px-6 pt-6 pb-4">Nombre</th>
                                <th class="px-6 pt-6 pb-4">Extracto</th>
                                <th class="px-6 pt-6 pb-4">Autor</th>
                            </tr>

                            <project v-for="project in projects.data" :key="project.id" :project="project">

                            </project>

                        </table>

                    </div>
                </div>

                <div class="p-5 mb-6 flex justify-center">
                    <pagination :links="projects.links"></pagination>
                </div>

            </div>

        </div>

    </app-layout>
</template>

<script>
    import AppLayout from "../../Layouts/AppLayout";
    import Pagination from "../../ComasyComponents/Pagination";
    import {debounce, mapValues, pickBy} from "lodash";
    import Project from "../../ComasyComponents/Project";
    export default {
        components: {Project, AppLayout, Pagination},
        props: {
            projects: Object,
            filters: Object,
        },

        data() {
            return {
                form: {
                    search: this.filters.search,
                    trashed: this.filters.trashed,
                }
            }
        },

        watch: {
            form: {
                handler: debounce( function () {
                    let query = pickBy(this.form)
                    this.$inertia.replace(this.route('projects.index', query))
                }, 500),
                deep: true,
            }
        },

        methods: {
            reset () {
                this.form = mapValues(this.form, () => null);
            }
        }
    }
</script>
