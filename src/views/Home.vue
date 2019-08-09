<template>
  <div class="home">
    <TodoLists/>
    <AddTodo/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoLists from '@/components/TodoLists.vue';
import AddTodo from '@/components/AddTodo.vue';

export default {
  name: 'home',
  components: {
    TodoLists,
    AddTodo,
  },
};
</script>
