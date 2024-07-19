import { ref } from 'vue'

const count = ref(0);

export function useCounterStore() {
    const increment = () => count.value++
  return { count, increment }
}