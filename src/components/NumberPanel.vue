<template>
    <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div :class="`p-3 rounded-full bg-${iconBgColor}-600 bg-opacity-75`">
                <img :src="iconSrc" alt="icon" class="h-8 w-8 text-white" />
            </div>

            <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">{{ formatVal }}</h4>
                <div class="text-gray-500">{{ label }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// tailwind css color alias
type BackgroundColor = 'indigo' | 'pink' | 'blue' | 'orange';

export default defineComponent({
    name: 'NumberPanel',
    props: {
        label: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        iconSrc: {
            type: String,
            required: true,
        },
        iconBgColor: {
            // type assertion to use static typing
            type: String as () => BackgroundColor,
            required: true,
        },
    },
    setup(props) {
        const formatVal = props.value.toLocaleString();
        return {
            formatVal,
        };
    },
});
</script>
