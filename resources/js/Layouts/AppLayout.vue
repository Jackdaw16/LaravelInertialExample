<template>
    <div class="min-h-screen grid grid-cols-3 bg-black-800">
        <div class="flex h-full min-h-screen grid-span-1 p-6">
            <nav class="flex flex-col shadow-md rounded-lg bg-black-900 ">
                <div class="flex flex-1 flex-col">
                    <!--Logo-->
                    <div class="p-6">
                        <inertia-link :href="route('dashboard')">
                            <jet-application-mark class="block w-64 py-3 pr-3" />
                        </inertia-link>
                    </div>
                    <!--Navigation Links-->
                    <div class="flex flex-col">
                        <comasy-nav-link class="text-white" href="/dashboard" :active="$page.currentRouteName == 'dashboard'">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="block h-6 w-auto mx-4">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>Inicio</span>
                        </comasy-nav-link>
                        <comasy-nav-link href="/projects" :active="$page.currentRouteName.includes('projects')">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="block h-6 w-auto mx-4">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>
                            <span>Proyectos</span>
                        </comasy-nav-link>
                    </div>
                </div>

                <nav class="flex flex-col content-end">
                    <div class="block px-4 py-6 text-base text-comasy-pink-500">
                        Manage Account
                    </div>
                    <comasy-nav-link class="text-white" href="/user/profile" :active="$page.currentRouteName == 'profile.show'">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="block h-6 w-auto mx-4">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <span>Perfil</span>
                    </comasy-nav-link>
                    <form @submit.prevent="logout">
                        <comasy-dropdown-link as="button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" class="block h-6 w-auto mx-4">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" fill="white"/>
                            </svg>
                            <span>Logout</span>
                        </comasy-dropdown-link>
                    </form>
                    <div class="my-4"></div>
                </nav>
            </nav>

        </div>
        <!--<nav class="bg-black-700 shadow">

                    &lt;!&ndash; Settings Dropdown &ndash;&gt;
                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <div class="ml-3 relative">
                            <jet-dropdown align="right" width="48">
                                <template #trigger>
                                    <button v-if="$page.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                        <img class="h-8 w-8 rounded-full object-cover" :src="$page.user.profile_photo_url" :alt="$page.user.name" />
                                    </button>

                                    <button v-else class="flex items-center text-sm font-medium text-white hover:border-gray-300 focus:outline-none focus:text-white focus:border-gray-300 transition duration-150 ease-in-out">
                                        <div>{{ $page.user.name }}</div>

                                        <div class="ml-1">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </button>
                                </template>

                                <template #content>
                                    &lt;!&ndash; Account Management &ndash;&gt;
                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                        Manage Account
                                    </div>

                                    <jet-dropdown-link :href="route('profile.show')">
                                        Profile
                                    </jet-dropdown-link>

                                    <jet-dropdown-link :href="route('api-tokens.index')" v-if="$page.jetstream.hasApiFeatures">
                                        API Tokens
                                    </jet-dropdown-link>

                                    <div class="border-t border-gray-100"></div>

                                    &lt;!&ndash; Team Management &ndash;&gt;
                                    <template v-if="$page.jetstream.hasTeamFeatures">
                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Team
                                        </div>

                                        &lt;!&ndash; Team Settings &ndash;&gt;
                                        <jet-dropdown-link :href="route('teams.show', $page.user.current_team)">
                                            Team Settings
                                        </jet-dropdown-link>

                                        <jet-dropdown-link :href="route('teams.create')" v-if="$page.jetstream.canCreateTeams">
                                            Create New Team
                                        </jet-dropdown-link>

                                        <div class="border-t border-gray-100"></div>

                                        &lt;!&ndash; Team Switcher &ndash;&gt;
                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Switch Teams
                                        </div>

                                        <template v-for="team in $page.user.all_teams">
                                            <form @submit.prevent="switchToTeam(team)">
                                                <jet-dropdown-link as="button">
                                                    <div class="flex items-center">
                                                        <svg v-if="team.id == $page.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                        <div>{{ team.name }}</div>
                                                    </div>
                                                </jet-dropdown-link>
                                            </form>
                                        </template>

                                        <div class="border-t border-gray-100"></div>
                                    </template>

                                    &lt;!&ndash; Authentication &ndash;&gt;
                                    <form @submit.prevent="logout">
                                        <jet-dropdown-link as="button">
                                            Logout
                                        </jet-dropdown-link>
                                    </form>
                                </template>
                            </jet-dropdown>
                        </div>
                    </div>

                    &lt;!&ndash; Hamburger &ndash;&gt;
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            &lt;!&ndash; Responsive Navigation Menu &ndash;&gt;
            <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                <div class="pt-2 pb-3 space-y-1">
                    <jet-responsive-nav-link :href="route('dashboard')" :active="$page.currentRouteName == 'dashboard'">
                        Inicio
                    </jet-responsive-nav-link>
                    <jet-responsive-nav-link href="/projects" :active="$page.currentRouteName.includes('projects')">
                        Proyectos
                    </jet-responsive-nav-link>
                </div>

                &lt;!&ndash; Responsive Settings Options &ndash;&gt;
                <div class="pt-4 pb-1 border-t border-gray-200">
                    <div class="flex items-center px-4">
                        <div class="flex-shrink-0">
                            <img class="h-10 w-10 rounded-full" :src="$page.user.profile_photo_url" :alt="$page.user.name" />
                        </div>

                        <div class="ml-3">
                            <div class="font-semibold text-base text-white">{{ $page.user.name }}</div>
                            <div class="font-medium text-sm text-white">{{ $page.user.email }}</div>
                        </div>
                    </div>

                    <div class="mt-3 space-y-1">
                        <jet-responsive-nav-link :href="route('profile.show')" :active="$page.currentRouteName == 'profile.show'">
                            Profile
                        </jet-responsive-nav-link>

                        <jet-responsive-nav-link :href="route('api-tokens.index')" :active="$page.currentRouteName == 'api-tokens.index'" v-if="$page.jetstream.hasApiFeatures">
                            API Tokens
                        </jet-responsive-nav-link>

                        &lt;!&ndash; Authentication &ndash;&gt;
                        <form method="POST" @submit.prevent="logout">
                            <jet-responsive-nav-link as="button">
                                Logout
                            </jet-responsive-nav-link>
                        </form>

                        &lt;!&ndash; Team Management &ndash;&gt;
                        <template v-if="$page.jetstream.hasTeamFeatures">
                            <div class="border-t border-gray-200"></div>

                            <div class="block px-4 py-2 text-xs text-gray-400">
                                Manage Team
                            </div>

                            &lt;!&ndash; Team Settings &ndash;&gt;
                            <jet-responsive-nav-link :href="route('teams.show', $page.user.current_team)" :active="$page.currentRouteName == 'teams.show'">
                                Team Settings
                            </jet-responsive-nav-link>

                            <jet-responsive-nav-link :href="route('teams.create')" :active="$page.currentRouteName == 'teams.create'">
                                Create New Team
                            </jet-responsive-nav-link>

                            <div class="border-t border-gray-200"></div>

                            &lt;!&ndash; Team Switcher &ndash;&gt;
                            <div class="block px-4 py-2 text-xs text-gray-400">
                                Switch Teams
                            </div>

                            <template v-for="team in $page.user.all_teams">
                                <form @submit.prevent="switchToTeam(team)" :key="team.id">
                                    <jet-responsive-nav-link as="button">
                                        <div class="flex items-center">
                                            <svg v-if="team.id == $page.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <div>{{ team.name }}</div>
                                        </div>
                                    </jet-responsive-nav-link>
                                </form>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </nav>-->

        <!-- Page Heading -->
        <!--<header class="bg-black-800 shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">
                <slot name="header"></slot>
            </div>
        </header>-->

        <!-- Page Content -->
        <main class="grid-span-2">
            <slot></slot>
        </main>

        <!-- Modal Portal -->
        <portal-target name="modal" multiple>
        </portal-target>
    </div>
</template>

<script>
    import JetApplicationLogo from './../Jetstream/ApplicationLogo'
    import JetApplicationMark from './../Jetstream/ApplicationMark'
    import JetDropdown from './../Jetstream/Dropdown'
    import JetDropdownLink from './../Jetstream/DropdownLink'
    import JetNavLink from './../Jetstream/NavLink'
    import JetResponsiveNavLink from './../Jetstream/ResponsiveNavLink'
    import ComasyNavLink from "../ComasyComponents/ComasyNavLink";
    import ComasyDropdownLink from "../ComasyComponents/ComasyDropdownLink";

    export default {
        components: {
            ComasyDropdownLink,
            ComasyNavLink,
            JetApplicationLogo,
            JetApplicationMark,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
        },

        data() {
            return {
                showingNavigationDropdown: false,
            }
        },

        methods: {
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            logout() {
                axios.post(route('logout').url()).then(response => {
                    window.location = '/';
                })
            },
        },

        computed: {
            path() {
                return window.location.pathname
            }
        }
    }
</script>
