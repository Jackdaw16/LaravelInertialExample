<template>
    <div class="mb-0 sm:mb-16">
        <jet-form-section @submitted="updatePassword">
            <template #title>
                Update Password
            </template>

            <template #description>
                Ensure your account is using a long, random password to stay secure.
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-4">
                    <jet-label for="current_password" value="Current Password" />
                    <jet-input id="current_password" type="password" class="mt-1 block w-full" v-model="form.current_password" ref="current_password" autocomplete="current-password" />

                </div>

                <div class="col-span-6 sm:col-span-4">
                    <jet-label for="password" value="New Password" />
                    <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" autocomplete="new-password" />

                </div>

                <div class="col-span-6 sm:col-span-4">
                    <comasy-label for="password_confirmation" value="Confirm Password"/>
                    <comasy-input id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" autocomplete="new-password" />

                </div>

                <comasy-toast-list>
                    <comasy-toast :message="form.error('current_password')" :is-notification="true"></comasy-toast>
                    <ComasyToast :message="form.error('password')" :is-notification="true"></ComasyToast>
                    <comasy-toast :message="form.error('password_confirmation')" :is-notification="true"></comasy-toast>
                </comasy-toast-list>
            </template>

            <template #actions>
                <cms-save-button :class="{ 'opacity-25': form.processing}"
                                 :disabled="form.processing"
                                 :result="form.recentlySuccessful">
                    Guardar
                </cms-save-button>

            </template>
        </jet-form-section>
    </div>

</template>

<script>
    import JetActionMessage from './../../Jetstream/ActionMessage'
    import JetButton from './../../Jetstream/Button'
    import JetFormSection from './../../Jetstream/FormSection'
    import JetInput from './../../Jetstream/Input'
    import JetInputError from './../../Jetstream/InputError'
    import JetLabel from './../../Jetstream/Label'
    import CmsSaveButton from "../../ComasyComponents/SaveButton";
    import ComasyLabel from "../../ComasyComponents/ComasyLabel";
    import ComasyInput from "../../ComasyComponents/ComasyTextInput";
    import ComasyToast from "../../ComasyComponents/ComasyToast";
    import ComasyToastList from "../../ComasyComponents/ComasyToastList";

    export default {
        components: {
            ComasyToastList,
            ComasyToast,
            ComasyInput,
            ComasyLabel,
            CmsSaveButton,
            JetActionMessage,
            JetButton,
            JetFormSection,
            JetInput,
            JetInputError,
            JetLabel,
        },

        props: {
            errors: Object,
        },

        data() {
            return {
                form: this.$inertia.form({
                    current_password: '',
                    password: '',
                    password_confirmation: '',
                }, {
                    bag: 'updatePassword',
                }),
            }
        },

        methods: {
            updatePassword() {
                this.form.put(route('user-password.update'), {
                    preserveScroll: true
                }).then(() => {
                    this.$refs.current_password.focus()
                })
            },
        },
    }
</script>
