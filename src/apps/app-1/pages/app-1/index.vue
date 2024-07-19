 <script setup lang="ts">
    import { useGeneralCounter} from '../../../../global/composables/useCounter'
    import { useCounterStore} from '../../../../global/composables/counterStore'
    import { useApp1CounterStore} from '../../composables/counterStore'

  const generalCounter = useGeneralCounter();
  const counterStore = useCounterStore();
  const app1CounterStore = useApp1CounterStore();
 </script>
 
 <template>
    <div>
        <h1>App 1 - Index</h1>
    </div>

    <div>
        <h2>Global State</h2>
        Global Count: {{ counterStore.count }}
        <button @click="counterStore.increment">increment</button>
    </div>
    <div>
        <h2>Re-Usable State</h2>
        General Count: {{ generalCounter.count }}
        <button @click="generalCounter.increment">increment</button>
    </div>

    <div>
        <h2>App State</h2>
        App1 Count: {{ app1CounterStore.count }}
        <button @click="app1CounterStore.increment">increment</button>
    </div>
 </template>
 
 <style lang="css" scoped>
 
 </style>useGeneralCounteruseGeneralCounter../../global/composables/useCounter../../global/composables/counterStore