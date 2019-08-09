<template>
  <div class="home">
    <TodoLists/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoLists from '@/components/TodoLists.vue';

export default {
  name: 'home',
  components: {
    TodoLists,
  },
};
</script>
