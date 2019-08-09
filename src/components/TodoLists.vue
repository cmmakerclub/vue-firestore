<template>
  <div>
    <h1>Todo Lists</h1>
    <ul v-for="todoList in this.$root.$data.todoLists" :key="todoList.id">
      <li>{{ todoList.todo }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoLists',
  mounted() {
    console.log('TodoLists mounted.');
  },
};
</script>
