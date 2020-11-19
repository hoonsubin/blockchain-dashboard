<template>
    <div class="flex justify-center items-center h-screen px-6">
        <!--Login card-->
        <div class="p-6 max-w-sm w-full bg-gray-900 shadow-md rounded-md">
            <div class="flex justify-center items-center">
                <img class="h-10 w-10 mr-4" src="../assets/img/logo-small.png" />
                <span class="text-gray-400 font-semibold text-2xl">Blockchain Dashboard</span>
            </div>

            <form class="mt-4" @submit.prevent="login">
                <label class="block">
                    <span class="text-gray-700 text-sm">Email</span>
                    <input
                        type="email"
                        class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
                        v-model="email"
                    />
                </label>

                <label class="block mt-3">
                    <span class="text-gray-700 text-sm">Password</span>
                    <input
                        type="password"
                        class="form-input mt-1 block w-full rounded-md focus:border-indigo-600"
                        v-model="password"
                    />
                </label>

                <div class="flex justify-between items-center mt-4">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-indigo-600" />
                            <span class="mx-2 text-gray-600 text-sm">Remember me</span>
                        </label>
                    </div>

                    <div>
                        <a class="block text-sm fontme text-indigo-700 hover:underline" href="#"
                            >Forgot your password?</a
                        >
                    </div>
                </div>

                <div class="mt-6">
                    <button
                        type="submit"
                        class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
        <!--Login card-->
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const email = ref('johndoe@mail.com');
        const password = ref('@#!@#asdf1231!_!@#');

        function login() {
            router.push('/dashboard');
        }

        return {
            login,
            email,
            password,
        };
    },
});
</script>
