<script setup lang="ts">
import { useApp1CounterStore} from '../composables/counterStore'
const app1CounterStore = useApp1CounterStore();
    onMounted(() => {
        console.log('app-1 mounted');  
    })

    onUnmounted(() => {
        console.log('app-1 unmounted'); 
        app1CounterStore.reset();
    })
</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>