<script setup lang="ts">
import { useApp2CounterStore} from '../composables/counterStore'
const app2CounterStore = useApp2CounterStore();
    onMounted(() => {
        console.log('app-2 mounted');  
    })

    onUnmounted(() => {
        console.log('app-2 unmounted'); 
        app2CounterStore.reset();
    })
</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>