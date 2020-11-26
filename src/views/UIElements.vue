<template>
    <div>
        <h3 class="text-gray-400 text-3xl font-medium">UI Elements</h3>

        <!-- Alerts -->
        <div class="mt-4">
            <h4 class="text-gray-600">Alerts</h4>

            <div class="mt-4">
                <div class="rounded-md bg-white py-4 px-4 overflow-x-auto whitespace-no-wrap">
                    <Alert alertType="success" message="Your account was registered!" />

                    <Alert alertType="info" message="Channel archived by the owner." />

                    <Alert alertType="warning" message="Image size is too large." />

                    <Alert alertType="error" message="Your email is already used!" />
                </div>
            </div>
        </div>

        <!-- Radio Buttons -->
        <div class="mt-8">
            <h4 class="text-gray-600">Radio Buttons</h4>

            <div class="mt-4">
                <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
                    <label
                        :class="`inline-flex items-center ${index && 'ml-3'}`"
                        v-for="(c, index) in colors"
                        :key="index"
                    >
                        <input
                            type="radio"
                            :class="`form-radio h-5 w-5 text-${c}-600`"
                            name="radio"
                        /><span class="ml-2 text-gray-700">label</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Checkboxes -->
        <div class="mt-8">
            <h4 class="text-gray-600">Checkboxes</h4>

            <div class="mt-4">
                <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
                    <label
                        :class="`inline-flex items-center ${index && 'ml-3'}`"
                        v-for="(c, index) in colors"
                        :key="index"
                    >
                        <input
                            type="checkbox"
                            :class="`form-checkbox h-5 w-5 text-${c}-600`"
                            checked
                        /><span class="ml-2 text-gray-700">label</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Buttons -->
        <div class="mt-8">
            <h4 class="text-gray-600">Buttons</h4>

            <div class="mt-4">
                <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
                    <button
                        :class="`px-6 py-3 bg-${c}-600 rounded-md text-white font-medium tracking-wide hover:bg-${c}-500 ${
                            index && 'ml-3'
                        }`"
                        v-for="(c, index) in colors"
                        :key="index"
                    >
                        Button
                    </button>
                </div>
            </div>
        </div>

        <!-- Paginations -->
        <div class="mt-8">
            <h4 class="text-gray-600">Paginations</h4>

            <div class="mt-4">
                <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
                    <div class="flex rounded mr-4">
                        <a
                            href="#"
                            class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white"
                            ><span>Previous</span></a
                        >
                        <a
                            href="#"
                            class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-indigo-500 hover:text-white"
                            ><span>1</span></a
                        >
                        <a
                            href="#"
                            class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-indigo-500 hover:text-white"
                            ><span>2</span></a
                        >
                        <a
                            href="#"
                            class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-indigo-500 hover:text-white"
                            ><span>3</span></a
                        >
                        <a
                            href="#"
                            class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-indigo-500 hover:text-white"
                            ><span>Next</span></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Alert from '@/components/Alert.vue';

export default defineComponent({
    setup() {
        const colors = ref<string[]>([
            'gray',
            'red',
            'orange',
            'yellow',
            'green',
            'teal',
            'blue',
            'indigo',
            'purple',
            'pink',
        ]);

        return {
            colors,
        };
    },
    components: {
        Alert,
    },
});
</script>
