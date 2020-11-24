<template>
    <div class="flex h-screen bg-black-alt font-roboto">
        <Sidebar />

        <div class="flex-1 flex flex-col overflow-hidden">
            <Navbar />

            <main class="flex-1 overflow-x-hidden overflow-y-auto">
                <div class="container mx-auto px-6 py-8">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
    components: {
        Navbar,
        Sidebar,
    },
});
</script>
