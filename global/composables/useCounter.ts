import { ref } from 'vue'

export function useGeneralCounter() {
  const count = ref(0);

  const increment = () => count.value++

  return { count, increment }
}