import { ref } from 'vue'

const count = ref(0);

export function useApp1CounterStore() {
    const increment = () => count.value++
  return { count, increment }
}