<template>
    <div class="inline-flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden ml-3">
        <div :class="`flex justify-center items-center w-12 bg-${alert.color}-500`">
            <div v-html="alert.iconElement"></div>
        </div>

        <div class="-mx-3 py-2 px-4">
            <div class="mx-3">
                <span :class="`text-${alert.color}-500 font-semibold`">{{ alert.name }}</span>
                <p class="text-gray-600 text-sm">{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

interface AlertData {
    name: string;
    iconElement: string;
    color: string;
}

type AlertType = 'success' | 'info' | 'warning' | 'error';

// hard-coded alert data
const alertMap = {
    success: {
        name: 'Success',
        iconElement: `<svg
                    class="h-6 w-6 fill-current text-white"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                    />
                </svg>`,
        color: 'green',
    } as AlertData,
    info: {
        name: 'Info',
        iconElement: `<svg
                        class="h-6 w-6 fill-current text-white"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                        />
                    </svg>`,
        color: 'blue',
    } as AlertData,
    warning: {
        name: 'Warning',
        iconElement: `<svg
                        class="h-6 w-6 fill-current text-white"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                        />
                    </svg>`,
        color: 'yellow',
    } as AlertData,
    error: {
        name: 'Error',
        iconElement: `<svg
                        class="h-6 w-6 fill-current text-white"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                        />
                    </svg>`,
        color: 'red',
    } as AlertData,
};

export default defineComponent({
    name: 'Alert',
    props: {
        alertType: {
            type: String as () => AlertType,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const alert = computed(() => alertMap[props.alertType]);
        return {
            alert,
        };
    },
});
</script>
