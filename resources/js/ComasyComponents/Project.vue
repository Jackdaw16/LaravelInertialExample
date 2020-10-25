<template>
    <tr class="bg-black-700 text-white">
        <td class="border-t">
            <inertia-link class="px-6 py-4 flex items-center focus:text-indigo-500" :href="route('projects.edit', project.id)">
                {{project.name}}

            </inertia-link>
        </td>

        <td class="border-t">
            <inertia-link class="px-6 py-4 flex items-center" :href="route('projects.edit', project.id)">
                {{project.excerpt}}

            </inertia-link>
        </td>

        <td class="border-t">
            <inertia-link class="px-6 py-4 flex items-center" :href="route('projects.edit', project.id)">
                {{project.user.name}}

            </inertia-link>
        </td>
    </tr>

</template>
<script>
    export default {
        name: "Project",
        props: {
            project: Object,
        }
    }
</script>
