 <script setup lang="ts">
  import { useGeneralCounter} from '../../composables/useCounter'
  import { useCounterStore} from '../../composables/counterStore'

  const generalCounter = useGeneralCounter();
  const counterStore = useCounterStore();
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
 </template>
 
 <style lang="css" scoped>
 
 </style>useGeneralCounteruseGeneralCounter