<template>
    <div>
        <h3 class="text-gray-400 text-3xl font-medium">Dashboard</h3>

        <div class="mt-4">
            <div class="flex flex-wrap -mx-6">
                <NumberPanel
                    label="New Users"
                    :value="users.length"
                    :icon-src="require('@/assets/img/people-icon.svg')"
                    icon-bg-color="indigo"
                />

                <NumberPanel
                    label="Total Orders"
                    :value="200521"
                    :icon-src="require('@/assets/img/shopping-cart-icon.svg')"
                    icon-bg-color="orange"
                />

                <NumberPanel
                    label="Available Products"
                    :value="215542"
                    :icon-src="require('@/assets/img/shopping-bag-icon.svg')"
                    icon-bg-color="pink"
                />
            </div>
        </div>

        <div class="mt-8"></div>

        <div class="flex flex-col mt-8">
            <UserTable :data="users" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NumberPanel from '@/components/NumberPanel.vue';
import UserTable from '@/components/UserTable.vue';
import { User } from '@/models';

export default defineComponent({
    setup() {
        const testUser: User = {
            name: 'John Doe',
            email: 'john@example.com',
            title: 'Software Engineer',
            title2: 'Web dev',
            status: 'Active',
            role: 'Owner',
            profileImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        };

        // mocking user data
        const users = ref<User[]>([...Array(35).keys()].map(() => testUser));

        return {
            users,
        };
    },
    components: {
        NumberPanel,
        UserTable,
    },
});
</script>
